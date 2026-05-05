import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { brand, onboardingInterestGroups } from '../mock/data';

export function AuthPage(){
  const nav=useNavigate();
  const [selected,setSelected]=useState<string[]>(['图书馆自习','羽毛球','摄影']);
  const toggle=(tag:string)=>setSelected((prev)=>prev.includes(tag)?prev.filter((item)=>item!==tag):[...prev,tag]);

  return (
    <div className='mobile-stage'>
      <div className='phone-shell'>
        <main className='phone-content'>
          <article className='auth-card'>
            <h1 className='wordmark'>{brand.name}</h1>
            <p>{brand.cnTagline}</p>
            <input placeholder='校园邮箱 / 学号认证入口'/>
            <input placeholder='设置昵称，不展示真名'/>
            <input placeholder='密码' type='password'/>
            <div className='section-title'><h3>选择兴趣标签</h3><span>{selected.length} 已选</span></div>
            <p className='hint-text'>系统会根据兴趣、关系意图、作息和活动偏好进行推荐。</p>
            {onboardingInterestGroups.map((group)=>(
              <div className='interest-group' key={group.title}>
                <b>{group.title}</b>
                <div className='interest-grid'>
                  {group.tags.map((tag)=>(
                    <button key={tag} className={selected.includes(tag)?'interest-chip active':'interest-chip'} onClick={()=>toggle(tag)}>{tag}</button>
                  ))}
                </div>
              </div>
            ))}
            <button className='cta' onClick={()=>nav('/home')}>进入 NCEPU Link</button>
          </article>
        </main>
      </div>
    </div>
  );
}
