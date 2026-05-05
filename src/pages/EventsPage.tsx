import { events } from '../mock/data';

export function EventsPage(){
  return <section><header className='feed-header'><h1>活动</h1><small>轻线下破冰</small></header><div className='event-grid'>{events.map(e=><article key={e.id} className='card'><div className='cover' style={{ background:e.coverGradient }}><strong>{e.subtitle}</strong></div><h3>{e.title}</h3><p>{e.time} · {e.place}</p><div className='tags'><span>{e.tag}</span><span>{e.people}</span></div><button className='pill'>报名</button></article>)}</div></section>
}
