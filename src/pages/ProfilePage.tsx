import { currentUser } from '../mock/data';
export function ProfilePage(){return <section><h1>个人资料</h1><div className="card"><p>{currentUser.nickname}｜{currentUser.college}｜{currentUser.grade}</p><p>关系意图：{currentUser.intent}</p><p>兴趣：{currentUser.interests.join('、')}</p><p>信用分：{currentUser.credit}</p><button className='primary'>保存资料（Mock）</button></div></section>}
