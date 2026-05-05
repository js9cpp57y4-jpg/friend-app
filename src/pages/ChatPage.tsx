import { useState } from 'react';
import { chats, icebreakers, matchedUsers } from '../mock/data';

export function ChatPage(){
  const [id,setId]=useState(matchedUsers[0].id);
  const user=matchedUsers.find(u=>u.id===id)??matchedUsers[0];
  const msgs=chats[user.id]??[];
  return <section><header className='feed-header'><h1>聊天</h1><small>互相感兴趣后即可开启聊天</small></header><div className='chat-list'>{matchedUsers.map(u=><button key={u.id} className={`chat-item ${u.id===id?'active':''}`} onClick={()=>setId(u.id)}><div className='avatar'>{u.initials}</div><div><b>{u.name}</b><p>{u.last}</p></div><div><small>{u.time}</small>{u.unread>0&&<span className='dot'>{u.unread}</span>}</div></button>)}</div><article className='chat-window'>{msgs.map(m=><p key={m} className='bubble'>{m}</p>)}<div className='icebreakers'>{icebreakers.map(i=><button key={i}>{i}</button>)}</div><div className='composer'><input placeholder='输入消息...' /><button className='pill'>发送</button></div></article></section>
}
