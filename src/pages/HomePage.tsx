import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { brand, feed, recommendedUsers, stories } from '../mock/data';

type FeedAction = 'like' | 'comment' | 'save';

type FeedStats = Record<string, { likes: number; comments: number; saves: number; clicks: number; liked: boolean; saved: boolean }>;

const scoreOf = (item: { likes: number; comments: number; saves: number; clicks: number }) =>
  item.clicks * 0.2 + item.likes * 1 + item.comments * 2.4 + item.saves * 3;

export function HomePage() {
  const nav = useNavigate();
  const [sortMode, setSortMode] = useState<'recommend' | 'latest'>('recommend');
  const [stats, setStats] = useState<FeedStats>(() => Object.fromEntries(feed.map((post) => [post.id, { likes: post.likes, comments: post.comments, saves: post.saves, clicks: 0, liked: false, saved: false }])));

  const rankedFeed = useMemo(() => {
    return [...feed].sort((a, b) => {
      if (sortMode === 'latest') return 0;
      const scoreB = scoreOf(stats[b.id] ?? { likes: b.likes, comments: b.comments, saves: b.saves, clicks: 0 });
      const scoreA = scoreOf(stats[a.id] ?? { likes: a.likes, comments: a.comments, saves: a.saves, clicks: 0 });
      return scoreB - scoreA;
    });
  }, [sortMode, stats]);

  const updateAction = (id: string, action: FeedAction) => {
    setStats((prev) => {
      const current = prev[id];
      if (!current) return prev;
      if (action === 'like') {
        const liked = !current.liked;
        return { ...prev, [id]: { ...current, liked, likes: current.likes + (liked ? 1 : -1), clicks: current.clicks + 1 } };
      }
      if (action === 'save') {
        const saved = !current.saved;
        return { ...prev, [id]: { ...current, saved, saves: current.saves + (saved ? 1 : -1), clicks: current.clicks + 1 } };
      }
      return { ...prev, [id]: { ...current, comments: current.comments + 1, clicks: current.clicks + 1 } };
    });
  };

  return (
    <section>
      <header className="feed-header">
        <h1><span className="wordmark">{brand.name}</span></h1>
        <div className="header-icons"><button className="icon-btn">✉</button><button className="icon-btn">⌕</button></div>
      </header>
      <p className="page-subtitle">{brand.cnTagline}</p>

      <div className="section-title"><h3>校园圈子</h3><span>发现同频</span></div>
      <div className="stories-row">
        {stories.map((s) => (
          <div key={s.id} className="story-ring"><div className="story-avatar"><span>{s.initials}</span></div><span>{s.label}</span></div>
        ))}
      </div>

      <article className="feed-card recommend">
        <div className="section-title"><h3>今日高匹配</h3><span>精选 2 位</span></div>
        {recommendedUsers.map((u) => (
          <div className="recommend-row" key={u.id}>
            <div className="avatar">{u.initials}</div>
            <div><b>{u.nickname}</b><p>{u.meta}</p><p>{u.reason}</p></div>
            <span className="score-pill">{u.score}</span>
          </div>
        ))}
        <button className="cta" onClick={() => nav('/match')}>查看推荐</button>
      </article>

      <div className="privacy-note">动态页默认隐藏学院、年级等敏感信息；互相感兴趣后可逐步交换。</div>
      <div className="section-title feed-title-row">
        <div><h3>校园动态</h3><span>基于点击、点赞、评论、收藏进行推荐排序</span></div>
        <div className="feed-filter">
          <button className={sortMode === 'recommend' ? 'active' : ''} onClick={() => setSortMode('recommend')}>推荐</button>
          <button className={sortMode === 'latest' ? 'active' : ''} onClick={() => setSortMode('latest')}>最新</button>
        </div>
      </div>
      {rankedFeed.map((post, index) => {
        const item = stats[post.id];
        const score = Math.round(scoreOf(item));
        return (
          <article className="feed-card" key={post.id} onClick={() => setStats((prev) => ({ ...prev, [post.id]: { ...prev[post.id], clicks: prev[post.id].clicks + 1 } }))}>
            <div className="feed-user"><div className="avatar">{post.initials}</div><div><b>{post.nickname}</b><p>{post.meta}</p></div><span className="rank-badge">#{index + 1} · {score}</span></div>
            <div className="feed-visual"><div className="cover-title">{post.coverTitle}</div><div className="cover-subtitle">{post.coverSubtitle}</div></div>
            <p className="feed-caption">{post.text}</p>
            <div className="tags">{post.tags.map((t) => <span key={t}>{t}</span>)}</div>
            <div className="feed-actions">
              <button className={item.liked ? 'active' : ''} onClick={(e) => { e.stopPropagation(); updateAction(post.id, 'like'); }}>♡ {item.likes}</button>
              <button onClick={(e) => { e.stopPropagation(); updateAction(post.id, 'comment'); }}>💬 {item.comments}</button>
              <button className={item.saved ? 'active' : ''} onClick={(e) => { e.stopPropagation(); updateAction(post.id, 'save'); }}>⌑ {item.saves}</button>
            </div>
          </article>
        );
      })}
    </section>
  );
}
