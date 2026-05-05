import { useNavigate } from 'react-router-dom';
import { feed, recommendedUsers, stories } from '../mock/data';

export function HomePage() {
  const nav = useNavigate();
  return (
    <section>
      <header className="feed-header">
        <h1>华电交友</h1>
        <div className="header-icons">💌 🔔 🔍</div>
      </header>

      <h3>Stories</h3>
      <div className="stories-row">{stories.map((s) => <div key={s} className="story-ring">{s}</div>)}</div>

      <article className="feed-card recommend">
        <h3>今日高匹配用户</h3>
        {recommendedUsers.map((u) => <p key={u.id}><b>{u.name}</b> · {u.score}分 · {u.reason}</p>)}
        <button className="cta" onClick={() => nav('/match')}>去匹配页看看</button>
      </article>

      <h3>Feed</h3>
      {feed.map((post) => (
        <article className="feed-card" key={post.id}>
          <div className="feed-user"><div className="avatar">{post.name[0]}</div><div><b>{post.name}</b><p>{post.dept}</p></div></div>
          <div className="feed-visual">{post.visual}</div>
          <p>{post.text}</p>
          <div className="tags">{post.tags.map((t) => <span key={t}>{t}</span>)}</div>
          <div className="feed-actions"><button>🤍 {post.likes}</button><button>💬 {post.comments}</button><button>🔖 {post.saves}</button></div>
        </article>
      ))}
    </section>
  );
}
