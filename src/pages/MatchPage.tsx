import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { matchCards } from '../mock/data';

export function MatchPage() {
  const [idx, setIdx] = useState(0);
  const [anim, setAnim] = useState('');
  const [show, setShow] = useState(false);
  const nav = useNavigate();
  const card = matchCards[idx];

  const swipe = (dir: 'left' | 'right') => {
    setAnim(dir);
    if (dir === 'right' && Math.random() > 0.5) setShow(true);
    setTimeout(() => { setIdx((i) => (i + 1) % matchCards.length); setAnim(''); }, 260);
  };

  return <section><header className='feed-header'><h1>匹配</h1><small>{idx+1}/{matchCards.length}</small></header>
    <article className={`swipe-card ${anim}`}><div className='hero' style={{ background: card.coverGradient }}><div className='mask'><small>{card.coverSubtitle}</small><h2>{card.coverTitle}</h2><h3>{card.name}</h3><p>{card.ageGrade} · {card.college}</p><p>{card.intent} · MatchScore {card.score}</p><p>{card.reasons.join(' · ')}</p></div></div></article>
    <div className='round-actions'><button className='round light' onClick={()=>swipe('left')}>跳过</button><button className='round mid'>打招呼</button><button className='round primary' onClick={()=>swipe('right')}>感兴趣</button></div>
    {show && <div className='match-toast'><h3>匹配成功</h3><p>你们可以开始聊天了</p><button className='pill' onClick={()=>nav('/chat')}>去聊天</button></div>}
  </section>;
}
