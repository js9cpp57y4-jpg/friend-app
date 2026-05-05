import { useMemo, useState } from 'react';
import { chats, icebreakers, matchedUsers } from '../mock/data';

export function ChatPage() {
  const [activeId, setActiveId] = useState(matchedUsers[0].id);
  const activeUser = useMemo(() => matchedUsers.find((u) => u.id === activeId) ?? matchedUsers[0], [activeId]);
  const messages = chats[activeUser.id] ?? [];

  return (
    <section>
      <header className="feed-header"><h1>消息</h1><small>匹配后开启聊天</small></header>
      <div className="locked-tip">互相感兴趣后即可解锁私信，未匹配用户不能直接聊天。</div>
      <div className="chat-list">
        {matchedUsers.map((user) => (
          <button key={user.id} className={`chat-item ${activeId === user.id ? 'active' : ''}`} onClick={() => setActiveId(user.id)}>
            <div className="avatar">{user.initials}</div>
            <div><b>{user.name}</b><p>{user.last}</p></div>
            <div><small>{user.time}</small>{user.unread > 0 && <span className="dot">{user.unread}</span>}</div>
          </button>
        ))}
      </div>
      <article className="chat-window">
        {messages.map((m, i) => <p className={`bubble ${m.from === 'me' ? 'me' : ''}`} key={`${m.time}-${i}`}>{m.text}</p>)}
        <div className="icebreakers">{icebreakers.map((i) => <button key={i}>{i}</button>)}</div>
        <div className="composer"><input placeholder="输入消息..." /><button className="cta">发送</button></div>
      </article>
    </section>
  );
}
