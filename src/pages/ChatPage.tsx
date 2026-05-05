import { useState } from 'react';
import { chats } from '../mock/data';

export function ChatPage() {
  const [active, setActive] = useState(chats[0]);
  return <section><h1>聊天</h1>{chats.map(c=><button key={c.id} onClick={()=>setActive(c)}>{c.peer} {c.unread>0?`(${c.unread})`:''}</button>)}<div className='feed-card'>{active.messages.map(m=><p key={m}>{m}</p>)}<input placeholder='输入消息...' /></div></section>;
}
