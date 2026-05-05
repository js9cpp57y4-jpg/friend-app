import { useNavigate } from 'react-router-dom';
export function AuthPage(){const nav=useNavigate();return <div className='mobile-stage'><div className='phone-shell'><main className='phone-content'><article className='feed-card'><h1>华电交友</h1><input placeholder='校园邮箱'/><input placeholder='密码' type='password'/><button onClick={()=>nav('/home')}>进入</button></article></main></div></div>}
