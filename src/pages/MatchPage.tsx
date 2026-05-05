import { useState } from 'react';
import { matchCards } from '../mock/data';

export function MatchPage() {
  const [idx, setIdx] = useState(0);
  const [state, setState] = useState('');
  const [matched, setMatched] = useState(false);
  const card = matchCards[idx];

  const switchCard = (dir: 'left' | 'right') => {
    setState(dir === 'left' ? 'left' : 'right');
    if (dir === 'right' && Math.random() > 0.5) {
      setMatched(true);
      setTimeout(() => setMatched(false), 1200);
    }
    setTimeout(() => {
      setIdx((prev) => (prev + 1) % matchCards.length);
      setState('');
    }, 220);
  };

  return (
    <section>
      <h1>同频匹配</h1>
      <article className={`swipe-card ${state}`}>
        <div className="swipe-photo">{card.visual}</div>
        <h3>{card.name}</h3><p>{card.info}</p>
        <p>关系意图：{card.intent} · MatchScore {card.score}</p>
        <div className="tags">{card.tags.map((t) => <span key={t}>{t}</span>)}</div>
        <small>推荐理由：{card.reason}</small>
      </article>
      <div className="actions">
        <button onClick={() => switchCard('left')}>跳过</button>
        <button>打招呼</button>
        <button onClick={() => switchCard('right')}>感兴趣</button>
      </div>
      {matched && <div className="match-toast">匹配成功</div>}
    </section>
  );
}
