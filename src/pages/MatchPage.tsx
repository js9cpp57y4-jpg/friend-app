import { useState } from 'react';
import { matchCards } from '../mock/data';

export function MatchPage() {
  const [index, setIndex] = useState(0);
  const [anim, setAnim] = useState('');
  const [matchToast, setMatchToast] = useState(false);
  const card = matchCards[index];

  const onSwipe = (dir: 'left' | 'right') => {
    setAnim(dir);
    if (dir === 'right' && Math.random() > 0.45) {
      setMatchToast(true);
      setTimeout(() => setMatchToast(false), 1700);
    }
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % matchCards.length);
      setAnim('');
    }, 280);
  };

  return (
    <section>
      <header className="feed-header"><h1>为你推荐</h1><small>{index + 1}/{matchCards.length}</small></header>
      <div className="card-stack">
        <div className="swipe-card shadow" />
        <article className={`swipe-card live ${anim}`}>
          <div className="swipe-photo">
            <span className="swipe-hint">左滑跳过 · 右滑感兴趣</span>
            <div className="overlay">
              <div className="cover-subtitle">{card.coverSubtitle}</div>
              <h3>{card.name}</h3>
              <p>{card.ageGrade} · {card.college}</p>
              <p>{card.intent} · MatchScore {card.score}</p>
              <div className="tags">{card.tags.map((t) => <span key={t}>{t}</span>)}</div>
              <ul>{card.reasons.map((r) => <li key={r}>{r}</li>)}</ul>
            </div>
          </div>
        </article>
      </div>
      <div className="actions">
        <button className="round-action" onClick={() => onSwipe('left')}>×</button>
        <button className="round-action blue">✉</button>
        <button className="round-action primary" onClick={() => onSwipe('right')}>♡</button>
      </div>
      {matchToast && <div className="match-toast"><strong>匹配成功</strong><span>你们可以开始聊天了</span></div>}
    </section>
  );
}
