import { recommendations } from '../mock/data';
export function MatchPage(){return <section><h1>同频匹配</h1>{recommendations.map(r=><div className="card" key={r.id}><strong>{r.name}</strong><p>总分 {r.score} = 意图35% + 兴趣25% + 时间20% + 其他20%</p><button>发起聊天</button></div>)}</section>}
