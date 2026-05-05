import { useNavigate } from 'react-router-dom';
import { feed, recommendedUsers, stories } from '../mock/data';

export function HomePage() {
  const nav = useNavigate();
  return (
    <section>
      <header className="feed-header"><h1>华电交友</h1><div className="header-actions"><button>讯</button><button>通</button><button>筛</button></div></header>
      <div className="stories-row">{stories.map((s) => <div key={s.id} className="story-item"><div className="story-ring" style={{ background: s.coverGradient }}>{s.initials}</div><small>{s.label}</small></div>)}</div>
      <article className="card recommend-card"><h3>今日高匹配用户</h3>{recommendedUsers.map((u)=><div key={u.id} className="mini-user"><div className="avatar">{u.initials}</div><p><b>{u.name}</b> · {u.ageGrade} · {u.college}<br/>匹配度 {u.score} · {u.reason}</p></div>)}<button className="pill" onClick={()=>nav('/match')}>查看推荐</button></article>
      <h3>Feed</h3>
      {feed.map((p)=><article key={p.id} className="card"><div className="feed-top"><div className="avatar">{p.initials}</div><div><b>{p.name}</b><p>{p.dept}</p></div></div><div className="cover" style={{ background: p.coverGradient }}><strong>{p.coverTitle}</strong><small>{p.coverSubtitle}</small></div><p>{p.text}</p><div className="tags">{p.tags.map((t)=><span key={t}>{t}</span>)}</div><div className="feed-actions"><button>赞 {p.likes}</button><button>评 {p.comments}</button><button>藏 {p.saves}</button></div></article>)}
    </section>
  );
}
