import { useMemo, useState } from 'react';
import { chats, icebreakers, matchedUsers } from '../mock/data';

type Message = { from: 'me' | 'them'; text: string; time: string };

const likedMe = [
  { id: 'l1', nickname: '小满', initials: 'XM', meta: '校园认证 · 共同兴趣 5 项', score: 92, locked: true },
  { id: 'l2', nickname: '南风', initials: 'NF', meta: '校园认证 · 主校区附近', score: 88, locked: true }
];

const myLikes = [
  { id: 'ml1', nickname: '晚星', initials: 'WX', meta: '互相喜欢后可解锁照片', status: '等待回应' },
  { id: 'ml2', nickname: '青柠', initials: 'QN', meta: '已发送照片查看请求', status: '请求中' }
];

const sparkLevel = (days: number, count: number) => {
  if (days >= 14 && count >= 80) return { label: '炽热火花', icon: '🔥🔥🔥', desc: '连续聊天 14 天以上' };
  if (days >= 7 && count >= 35) return { label: '高能火花', icon: '🔥🔥', desc: '连续聊天 7 天以上' };
  if (days >= 3 && count >= 12) return { label: '聊天火花', icon: '🔥', desc: '连续聊天 3 天以上' };
  return { label: '继续聊天点亮火花', icon: '◇', desc: '连续聊满 3 天解锁' };
};

export function ChatPage() {
  const [mode, setMode] = useState<'messages' | 'likes'>('messages');
  const [activeId, setActiveId] = useState(matchedUsers[0].id);
  const [draft, setDraft] = useState('');
  const [localChats, setLocalChats] = useState<Record<string, Message[]>>(chats);
  const activeUser = useMemo(() => matchedUsers.find((u) => u.id === activeId) ?? matchedUsers[0], [activeId]);
  const messages = localChats[activeUser.id] ?? [];
  const spark = sparkLevel(activeUser.id === 'u1' ? 5 : 2, messages.length + (activeUser.id === 'u1' ? 18 : 4));

  const send = (text = draft) => {
    const value = text.trim();
    if (!value) return;
    setLocalChats((prev) => ({ ...prev, [activeUser.id]: [...(prev[activeUser.id] ?? []), { from: 'me', text: value, time: '刚刚' }] }));
    setDraft('');
  };

  return (
    <section>
      <header className="feed-header"><h1>消息</h1><small>匹配后开启聊天</small></header>
      <div className="chat-switch"><button className={mode==='messages'?'active':''} onClick={()=>setMode('messages')}>聊天</button><button className={mode==='likes'?'active':''} onClick={()=>setMode('likes')}>喜欢</button></div>
      <div className="locked-tip">NCEPU Link 只展示昵称。互相感兴趣后即可解锁私信，未匹配用户不能直接聊天。</div>

      {mode === 'likes' ? <div className="likes-center">
        <article className="like-panel">
          <h3>谁喜欢了我</h3>
          <p>参考牵手类产品逻辑：这里展示对你感兴趣的人，可在匹配页确认后解锁聊天。</p>
          {likedMe.map((user)=><div className="like-card" key={user.id}><div className="avatar blurred">{user.initials}</div><div><b>{user.nickname}</b><p>{user.meta}</p></div><span className="score-pill">{user.score}</span></div>)}
        </article>
        <article className="like-panel">
          <h3>我喜欢过谁</h3>
          {myLikes.map((user)=><div className="like-card" key={user.id}><div className="avatar">{user.initials}</div><div><b>{user.nickname}</b><p>{user.meta}</p></div><span className="status-pill">{user.status}</span></div>)}
        </article>
      </div> : <>
        <div className="chat-list douyin-list">
          {matchedUsers.map((user) => (
            <button key={user.id} className={`chat-item ${activeId === user.id ? 'active' : ''}`} onClick={() => setActiveId(user.id)}>
              <div className="avatar">{user.initials}</div>
              <div><b>{user.nickname}</b><p>{user.last}</p></div>
              <div><small>{user.time}</small>{user.unread > 0 && <span className="dot">{user.unread}</span>}</div>
            </button>
          ))}
        </div>
        <article className="chat-window douyin-chat">
          <div className="chat-peer"><div className="avatar">{activeUser.initials}</div><div><b>{activeUser.nickname}</b><p>已匹配 · 校园认证</p></div></div>
          <div className="spark-card"><span>{spark.icon}</span><div><b>{spark.label}</b><p>{spark.desc} · 聊得越多火花越高级</p></div></div>
          <div className="message-stream">
            {messages.map((m, i) => <p className={`bubble ${m.from === 'me' ? 'me' : ''}`} key={`${m.time}-${i}`}>{m.text}</p>)}
          </div>
          <div className="icebreakers">{icebreakers.map((i) => <button key={i} onClick={()=>send(i)}>{i}</button>)}</div>
          <div className="composer"><input value={draft} onChange={(e)=>setDraft(e.target.value)} placeholder="输入消息..." onKeyDown={(e)=>{ if(e.key==='Enter') send(); }} /><button className="cta" onClick={()=>send()}>发送</button></div>
        </article>
      </>}
    </section>
  );
}
