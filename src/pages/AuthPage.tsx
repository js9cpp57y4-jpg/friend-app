import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { brand, onboardingInterestGroups } from '../mock/data';

export function AuthPage(){
  const nav=useNavigate();
  const [selected,setSelected]=useState<string[]>(['图书馆自习','羽毛球','摄影']);
  const [activeGroup,setActiveGroup]=useState(onboardingInterestGroups[0].title);
  const toggle=(tag:string)=>setSelected((prev)=>prev.includes(tag)?prev.filter((item)=>item!==tag):[...prev,tag]);
  const currentGroup=onboardingInterestGroups.find((group)=>group.title===activeGroup) ?? onboardingInterestGroups[0];

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
            <p className='hint-text'>粗分类 + 细分类会参与同频推荐，后续可用于学习、活动、聊天和照片授权匹配。</p>

            <div className='interest-tabs'>
              {onboardingInterestGroups.map((group)=>(
                <button key={group.title} className={activeGroup===group.title?'interest-tab active':'interest-tab'} onClick={()=>setActiveGroup(group.title)}>{group.title}</button>
              ))}
            </div>

            <div className='interest-panel'>
              <h3>{currentGroup.title}</h3>
              <p>{currentGroup.desc}</p>
              {currentGroup.sections.map((section)=>(
                <div className='interest-group' key={section.name}>
                  <b>{section.name}</b>
                  <div className='interest-grid'>
                    {section.tags.map((tag)=>(
                      <button key={tag} className={selected.includes(tag)?'interest-chip active':'interest-chip'} onClick={()=>toggle(tag)}>{tag}</button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className='selected-summary'>
              <b>已选标签</b>
              <div className='interest-grid'>{selected.map((tag)=><button key={tag} className='interest-chip active' onClick={()=>toggle(tag)}>{tag}</button>)}</div>
            </div>
            <button className='cta' onClick={()=>nav('/home')}>进入 NCEPU Link</button>
          </article>
        </main>
      </div>
    </div>
  );
}
