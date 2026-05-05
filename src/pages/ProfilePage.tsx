import { Link } from 'react-router-dom';
import { profile } from '../mock/data';

export function ProfilePage(){
  return <section><div className='profile-head'><div className='avatar xl'>{profile.initials}</div><h2>{profile.name}</h2><p>{profile.college} · {profile.grade}</p><span className='verify'>{profile.verify}</span></div><article className='card'><p><b>关系意图：</b>{profile.intent}</p><p><b>信用分：</b>{profile.credit}</p><p><b>资料完整度：</b>{profile.completion}%</p><div className='progress'><span style={{width:`${profile.completion}%`}}/></div><p>{profile.bio}</p><div className='tags'>{profile.interests.map(i=><span key={i}>{i}</span>)}</div></article><article className='card'><h3>我的动态</h3><p>本周发布 3 条，累计互动 126 次。</p></article><article className='card'><h3>我的活动</h3><p>已报名 4 场，进行中 2 场。</p></article><Link className='setting-row' to='/safety'><span>进入安全中心</span><span>›</span></Link></section>
}
