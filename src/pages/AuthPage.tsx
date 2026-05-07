import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { brand, interestSubtags, onboardingInterestGroups, photoVisibilityOptions } from '../mock/data';
import '../styles/onboarding.css';

const steps = ['学校认证', '账号资料', '兴趣偏好', '照片隐私', '个性问答'];
const intents = ['认真了解', '长期朋友', '学习搭子', '活动玩伴'];
const verificationMethods = [
  { id: 'email', title: '校园邮箱认证', desc: '适合有学校邮箱的同学，后续可自动化验证。', field: '校园邮箱' },
  { id: 'studentId', title: '学号信息认证', desc: '提交学号后由管理员人工审核，前台不展示学号。', field: '学号' },
  { id: 'card', title: '学生证 / 校园卡认证', desc: '上传学生证或校园卡照片，初期全部人工审核。', field: '证件照片' }
];
const promptOptions = [
  '我的理想周末是',
  '最能代表我的三个关键词',
  '最近最想完成的一件事',
  '我希望认识这样的人',
  '一句话说明我的相处方式'
];

export function AuthPage(){
  const nav=useNavigate();
  const [step,setStep]=useState(0);
  const [verifyMethod,setVerifyMethod]=useState('email');
  const [email,setEmail]=useState('2026xxxx@ncepu.edu.cn');
  const [studentId,setStudentId]=useState('');
  const [cardUploaded,setCardUploaded]=useState(false);
  const [nickname,setNickname]=useState('林间风');
  const [password,setPassword]=useState('');
  const [intent,setIntent]=useState('长期朋友');
  const [selected,setSelected]=useState<string[]>(['图书馆自习','羽毛球','音乐:R&B','电影:悬疑','周末咖啡']);
  const [activeGroup,setActiveGroup]=useState(onboardingInterestGroups[0].title);
  const [expanded,setExpanded]=useState<string>('音乐');
  const [photoMode,setPhotoMode]=useState(photoVisibilityOptions[1].title);
  const [photos,setPhotos]=useState(['主照片']);
  const [prompts,setPrompts]=useState([
    { q:'我的理想周末是', a:'上午图书馆，下午运动或咖啡，晚上轻松散步。' },
    { q:'我希望认识这样的人', a:'真诚、有边界感、愿意稳定沟通的人。' }
  ]);

  const currentGroup=onboardingInterestGroups.find((group)=>group.title===activeGroup) ?? onboardingInterestGroups[0];
  const detailCount=selected.filter((tag)=>tag.includes(':')).length;
  const toggle=(tag:string)=>setSelected((prev)=>prev.includes(tag)?prev.filter((item)=>item!==tag):[...prev,tag]);
  const toggleBaseTag=(tag:string)=>{ toggle(tag); if(interestSubtags[tag]) setExpanded(expanded===tag?'':tag); };
  const progress=((step+1)/steps.length)*100;
  const selectedMethod=verificationMethods.find((m)=>m.id===verifyMethod) ?? verificationMethods[0];

  const canNext =
    step===0 ? (verifyMethod==='email' ? email.includes('@') : verifyMethod==='studentId' ? studentId.trim().length>=6 : cardUploaded) :
    step===1 ? nickname.trim().length>=2 && password.length>=0 :
    step===2 ? selected.length>=5 && detailCount>=2 :
    step===3 ? Boolean(photoMode) && photos.length>=1 :
    prompts.filter((p)=>p.a.trim()).length>=2;

  const next=()=>{
    if(!canNext) return;
    if(step<steps.length-1) setStep(step+1);
    else nav('/home');
  };

  return (
    <div className='mobile-stage'>
      <div className='phone-shell'>
        <main className='phone-content onboarding-screen'>
          <header className='onboarding-top'>
            <h1 className='wordmark'>{brand.name}</h1>
            <p>{brand.cnTagline}</p>
            <div className='step-progress'><span style={{width:`${progress}%`}} /></div>
            <div className='step-dots'>{steps.map((s,i)=><button key={s} className={i===step?'dot-step active':'dot-step'} onClick={()=>setStep(i)}>{i+1}</button>)}</div>
          </header>

          {step===0 && <section className='onboarding-card hero-step'>
            <span className='step-kicker'>Step 1 / 5</span>
            <h2>学校认证</h2>
            <p>初期用户少，建议全部进入人工审核队列。认证信息只给平台审核，不会在推荐、动态和匹配页展示。</p>
            <div className='verification-list'>
              {verificationMethods.map((method)=><button key={method.id} className={verifyMethod===method.id?'verification-card active':'verification-card'} onClick={()=>setVerifyMethod(method.id)}>
                <b>{method.title}</b><span>{method.desc}</span>
              </button>)}
            </div>
            <label>{selectedMethod.field}</label>
            {verifyMethod==='email' && <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='例如 2026xxxx@ncepu.edu.cn'/>}
            {verifyMethod==='studentId' && <input value={studentId} onChange={(e)=>setStudentId(e.target.value)} placeholder='请输入学号，仅用于人工审核'/>}
            {verifyMethod==='card' && <button className={cardUploaded?'upload-box done':'upload-box'} onClick={()=>setCardUploaded(true)}>
              <b>{cardUploaded?'学生证 / 校园卡已添加':'上传学生证 / 校园卡'}</b>
              <span>正面清晰可见即可，关键信息仅审核人员可见</span>
            </button>}
            <div className='privacy-note'>前台匿名展示，后台人工认证；互相感兴趣后再逐步交换私密信息。</div>
          </section>}

          {step===1 && <section className='onboarding-card'>
            <span className='step-kicker'>Step 2 / 5</span>
            <h2>账号资料</h2>
            <p>参考成熟交友平台的建档方式，先用轻量资料表达关系期待，避免一开始暴露过多隐私。</p>
            <label>昵称</label>
            <input value={nickname} onChange={(e)=>setNickname(e.target.value)} placeholder='设置昵称，不展示真名'/>
            <label>密码</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='设置密码' type='password'/>
            <label>关系意图</label>
            <div className='option-grid'>{intents.map((item)=><button key={item} className={intent===item?'option-card active':'option-card'} onClick={()=>setIntent(item)}>{item}</button>)}</div>
          </section>}

          {step===2 && <section className='onboarding-card interest-step'>
            <span className='step-kicker'>Step 3 / 5</span>
            <div className='section-title'><h2>兴趣偏好</h2><span>{selected.length} 已选</span></div>
            <p>至少选择 5 个兴趣，其中至少 2 个细分偏好。比如“音乐 → R&B / 嘻哈 / 摇滚”，比只选“音乐”更能提高同频推荐质量。</p>

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
              <b>已选标签 · {detailCount} 个细分偏好</b>
              <div className='interest-grid'>{selected.map((tag)=><button key={tag} className='interest-chip active' onClick={()=>toggle(tag)}>{tag.replace(':',' · ')}</button>)}</div>
            </div>
          </section>}

          {step===3 && <section className='onboarding-card'>
            <span className='step-kicker'>Step 4 / 5</span>
            <h2>照片隐私</h2>
            <p>先上传照片，再设置谁能看。参考成熟社交平台的做法，照片用于资料完整度、匹配展示和人工审核，但可选择不公开给陌生人。</p>
            <div className='photo-uploader'>
              {[0,1,2,3,4,5].map((slot)=><button key={slot} className={photos[slot]?'photo-slot filled':'photo-slot'} onClick={()=>setPhotos((prev)=>prev[slot]?prev: [...prev, slot===0?'主照片':`生活照 ${slot+1}`])}>
                {photos[slot] ? <><b>{photos[slot]}</b><span>点击可替换</span></> : <><b>＋</b><span>{slot===0?'添加主照片':'添加照片'}</span></>}
              </button>)}
            </div>
            <div className='privacy-option-list'>
              {photoVisibilityOptions.map((option)=><button key={option.id} className={photoMode===option.title?'privacy-option active':'privacy-option'} onClick={()=>setPhotoMode(option.title)}><b>{option.title}</b><span>{option.desc}</span></button>)}
            </div>
          </section>}

          {step===4 && <section className='onboarding-card'>
            <span className='step-kicker'>Step 5 / 5</span>
            <h2>个性问答</h2>
            <p>用 2-3 个回答替代尴尬的空白资料，让别人更容易发起有效聊天。</p>
            {prompts.map((item,idx)=><div className='prompt-card' key={idx}>
              <select value={item.q} onChange={(e)=>setPrompts((prev)=>prev.map((p,i)=>i===idx?{...p,q:e.target.value}:p))}>{promptOptions.map((q)=><option key={q}>{q}</option>)}</select>
              <textarea value={item.a} onChange={(e)=>setPrompts((prev)=>prev.map((p,i)=>i===idx?{...p,a:e.target.value}:p))} placeholder='写一句真实、有辨识度的回答'/>
            </div>)}
            <button className='outline-btn' onClick={()=>setPrompts((prev)=>prev.length>=3?prev:[...prev,{q:promptOptions[prev.length],a:''}])}>添加一个问答</button>
          </section>}

          <footer className='onboarding-actions'>
            <button className='outline-btn' disabled={step===0} onClick={()=>setStep((s)=>Math.max(0,s-1))}>上一步</button>
            <button className='cta' disabled={!canNext} onClick={next}>{step===steps.length-1?'开始使用':'下一步'}</button>
          </footer>
        </main>
      </div>
    </div>
  );
}
