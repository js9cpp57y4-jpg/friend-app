import { useNavigate } from 'react-router-dom';
import { feed, recommendedUsers, stories } from '../mock/data';

export function HomePage() {
  const nav = useNavigate();
  return (
    <section>
      <header className="feed-header">
        <h1><span className="brand-mark"><span className="brand-dot" />华电交友</span></h1>
        <div className="header-icons"><button className="icon-btn">✉</button><button className="icon-btn">⌕</button></div>
      </header>

      <div className="section-title"><h3>校园圈子</h3><span>发现同频</span></div>
      <div className="stories-row">
        {stories.map((s) => (
          <div key={s.id} className="story-ring"><div className="story-avatar"><span>{s.initials}</span></div><span>{s.label}</span></div>
        ))}
      </div>

      <article className="feed-card recommend">
        <div className="section-title"><h3>今日高匹配</h3><span>精选 2 位</span></div>
        {recommendedUsers.map((u) => (
          <div className="recommend-row" key={u.id}>
            <div className="avatar">{u.initials}</div>
            <div><b>{u.name}</b><p>{u.meta}</p><p>{u.reason}</p></div>
            <span className="score-pill">{u.score}</span>
          </div>
        ))}
        <button className="cta" onClick={() => nav('/match')}>查看推荐</button>
      </article>

      <div className="section-title"><h3>校园动态</h3><span>Feed</span></div>
      {feed.map((post) => (
        <article className="feed-card" key={post.id}>
          <div className="feed-user"><div className="avatar">{post.initials}</div><div><b>{post.name}</b><p>{post.dept} · {post.time}</p></div></div>
          <div className="feed-visual"><div className="cover-title">{post.coverTitle}</div><div className="cover-subtitle">{post.coverSubtitle}</div></div>
          <p className="feed-caption">{post.text}</p>
          <div className="tags">{post.tags.map((t) => <span key={t}>{t}</span>)}</div>
          <div className="feed-actions"><button>♡ {post.likes}</button><button>💬 {post.comments}</button><button>⌑ {post.saves}</button></div>
        </article>
      ))}
    </section>
  );
}
