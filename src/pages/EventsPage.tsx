import { events } from '../mock/data';
export function EventsPage(){return <section><h1>活动广场</h1><div className='grid'>{events.map(e=><article key={e.id} className='card'><h3>{e.title}</h3><p>{e.category} · {e.location}</p><p>{e.joined}/{e.cap}</p><button className='primary'>报名（Mock）</button></article>)}</div></section>}
