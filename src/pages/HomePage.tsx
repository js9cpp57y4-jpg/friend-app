import { recommendations } from '../mock/data';
export function HomePage() {return <section><h1>今日推荐</h1><div className="grid">{recommendations.map(r=><article className="card" key={r.id}><h3>{r.name}</h3><p>{r.college} · {r.intent}</p><p>匹配度 {r.score}</p><p>{r.tags.join(' / ')}</p><div><button>感兴趣</button><button>跳过</button></div></article>)}</div></section>}
