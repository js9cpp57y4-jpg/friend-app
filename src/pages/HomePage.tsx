import { feed, stories } from '../mock/data';

export function HomePage() {
  return (
    <section>
      <header className="feed-header"><h1>华电交友</h1><div>💌 🔔</div></header>
      <h3>Stories</h3>
      <div className="stories-row">{stories.map((s) => <div key={s} className="story-ring">{s}</div>)}</div>
      <h3>Feed</h3>
      {feed.map((post) => (
        <article className="feed-card" key={post.id}>
          <p><b>{post.name}</b> · {post.college}</p>
          <div className="feed-visual">{post.visual}</div>
          <p>{post.text}</p>
          <div className="tags">{post.tags.map((t) => <span key={t}>{t}</span>)}</div>
          <div><button>🤍 {post.likes}</button><button>💬 {post.comments}</button></div>
        </article>
      ))}
    </section>
  );
}
