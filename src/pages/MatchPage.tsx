import { useState } from 'react';
import { matchCards } from '../mock/data';

export function MatchPage() {
  const [index, setIndex] = useState(0);
  const [anim, setAnim] = useState('');
  const [matchToast, setMatchToast] = useState(false);
  const card = matchCards[index];

  const onSwipe = (dir: 'left' | 'right') => {
    setAnim(dir);
    if (dir === 'right' && Math.random() > 0.52) {
      setMatchToast(true);
      setTimeout(() => setMatchToast(false), 1300);
    }
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % matchCards.length);
      setAnim('');
    }, 260);
  };

  return (
    <section>
      <header className="feed-header"><h1>同频匹配</h1><small>{index + 1}/{matchCards.length}</small></header>
      <div className="card-stack"><div className="swipe-card shadow" /><article className={`swipe-card live ${anim}`}>
        <div className="swipe-photo">{card.visual}<span className="swipe-hint">← 跳过 / 感兴趣 →</span></div>
        <div className="overlay">
          <h3>{card.name}</h3>
          <p>{card.ageGrade} · {card.college}</p>
          <p>关系意图：{card.intent} · MatchScore {card.score}</p>
          <div className="tags">{card.tags.map((t) => <span key={t}>{t}</span>)}</div>
          <ul>{card.reasons.map((r) => <li key={r}>{r}</li>)}</ul>
        </div>
      </article></div>
      <div className="actions">
        <button onClick={() => onSwipe('left')}>跳过</button>
        <button>打招呼</button>
        <button className="cta" onClick={() => onSwipe('right')}>感兴趣</button>
      </div>
      {matchToast && <div className="match-toast">匹配成功</div>}
    </section>
  );
}
