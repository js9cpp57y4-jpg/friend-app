import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { brand, interestSubtags, onboardingInterestGroups } from '../mock/data';

export function AuthPage(){
  const nav=useNavigate();
  const [selected,setSelected]=useState<string[]>(['图书馆自习','羽毛球','音乐:R&B']);
  const [activeGroup,setActiveGroup]=useState(onboardingInterestGroups[0].title);
  const [expanded,setExpanded]=useState<string>('音乐');
  const toggle=(tag:string)=>setSelected((prev)=>prev.includes(tag)?prev.filter((item)=>item!==tag):[...prev,tag]);
  const currentGroup=onboardingInterestGroups.find((group)=>group.title===activeGroup) ?? onboardingInterestGroups[0];

  const toggleBaseTag=(tag:string)=>{
    toggle(tag);
    if(interestSubtags[tag]) setExpanded(expanded===tag?'':tag);
  };

  const selectedCount=selected.length;

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
            <div className='section-title'><h3>选择兴趣标签</h3><span>{selectedCount} 已选</span></div>
            <p className='hint-text'>先选大类，再点开具体兴趣继续细分。比如“音乐”可继续选择 R&B、嘻哈、摇滚、民谣等，用于更精准的同频匹配。</p>

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
                      <button key={tag} className={selected.includes(tag)?'interest-chip active':'interest-chip'} onClick={()=>toggleBaseTag(tag)}>
                        {tag}{interestSubtags[tag]?' +':''}
                      </button>
                    ))}
                  </div>
                  {section.tags.some((tag)=>tag===expanded && interestSubtags[tag]) && (
                    <div className='subtag-panel'>
                      <div className='subtag-head'><b>{expanded}偏好</b><span>选择越具体，推荐越准</span></div>
                      <div className='interest-grid'>
                        {interestSubtags[expanded].map((subtag)=>{
                          const value=`${expanded}:${subtag}`;
                          return <button key={value} className={selected.includes(value)?'subtag-chip active':'subtag-chip'} onClick={()=>toggle(value)}>{subtag}</button>;
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className='selected-summary'>
              <b>已选标签</b>
              <div className='interest-grid'>
                {selected.map((tag)=><button key={tag} className='interest-chip active' onClick={()=>toggle(tag)}>{tag.replace(':',' · ')}</button>)}
              </div>
            </div>
            <button className='cta' onClick={()=>nav('/home')}>进入 NCEPU Link</button>
          </article>
        </main>
      </div>
    </div>
  );
}
