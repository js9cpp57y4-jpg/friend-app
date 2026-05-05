import { useState } from 'react';
import { matchCards } from '../mock/data';

export function MatchPage() {
  const [index, setIndex] = useState(0);
  const [anim, setAnim] = useState('');
  const [matchToast, setMatchToast] = useState(false);
  const [photoRequest, setPhotoRequest] = useState(false);
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
      setPhotoRequest(false);
    }, 280);
  };

  return (
    <section>
      <header className="feed-header"><h1>为你推荐</h1><small>{index + 1}/{matchCards.length}</small></header>
      <div className="card-stack profile-stack">
        <div className="swipe-card shadow" />
        <article className={`match-profile-card live ${anim}`}>
          <div className="hero-photo">
            <span className="swipe-hint">左滑跳过 · 右滑感兴趣</span>
            <div className="overlay hero-overlay">
              <div className="privacy-badge">{card.photoMode}</div>
              <h3>{card.nickname}</h3>
              <p>{card.displayMeta}</p>
              <p>{card.intent} · MatchScore {card.score}</p>
            </div>
          </div>

          <div className="profile-detail">
            <section className="detail-block">
              <h3>关于我</h3>
              <blockquote>{card.quote}</blockquote>
              <div className="tags">{card.tags.map((t) => <span key={t}>{t}</span>)}</div>
            </section>

            <section className="detail-block privacy-card">
              <h3>照片权限</h3>
              <p>{card.unlockHint}</p>
              <button className="outline-btn" onClick={() => setPhotoRequest(true)}>{photoRequest ? '已发送查看请求' : '请求查看照片'}</button>
            </section>

            <section className="detail-block">
              <h3>生活片段</h3>
              <div className="album-grid">
                {card.album.map((photo) => (
                  <article className="album-card" key={photo.title}>
                    <div className={card.photoMode === '公开照片' || photoRequest ? 'album-cover' : 'album-cover locked'}>
                      <span>{photo.title}</span>
                    </div>
                    <b>{photo.type}</b>
                    <p>{photo.caption}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="detail-block">
              <h3>同频信息</h3>
              <p>{card.distance} · {card.activeTime}</p>
              {card.profileBlocks.map((block) => (
                <div className="mini-block" key={block.title}>
                  <b>{block.title}</b>
                  <div className="tags">{block.items.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
              ))}
            </section>

            <section className="detail-block locked-info">
              <h3>隐藏身份信息</h3>
              <p>{card.hiddenMeta} 将在双方互相感兴趣后逐步解锁。</p>
            </section>
          </div>
        </article>
      </div>
      <div className="actions sticky-actions">
        <button className="round-action" onClick={() => onSwipe('left')}>×</button>
        <button className="round-action blue">✉</button>
        <button className="round-action primary" onClick={() => onSwipe('right')}>♡</button>
      </div>
      {matchToast && <div className="match-toast"><strong>匹配成功</strong><span>你们可以开始聊天了</span></div>}
    </section>
  );
}
