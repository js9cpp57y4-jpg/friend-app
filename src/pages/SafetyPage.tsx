import { safetyItems } from '../mock/data';

export function SafetyPage(){
  return <section><header className='feed-header'><h1>安全中心</h1><small>可信 · 专业</small></header>{safetyItems.map(item=><button key={item.title} className='setting-row'><span className='setting-icon'>{item.key}</span><span><b>{item.title}</b><p>{item.desc}</p></span><span>›</span></button>)}</section>
}
