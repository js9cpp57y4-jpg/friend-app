import { chats } from '../mock/data';
export function ChatPage(){return <section><h1>聊天</h1><div className='chat-layout'><div>{chats.map(c=><div className='card' key={c.id}><strong>{c.peer}</strong><p>{c.last}</p></div>)}</div><div className='card'><p>选择会话查看消息（Mock）</p><button>破冰话题</button><button>举报</button><button>拉黑</button></div></div></section>}
