import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function AuthPage() {
  const [tab, setTab] = useState<'login' | 'register'>('login');
  const nav = useNavigate();
  return <div className="card auth"><h1>华电交友</h1><p>校园实名交友原型</p>
    <div><button onClick={() => setTab('login')}>登录</button><button onClick={() => setTab('register')}>注册</button></div>
    <input placeholder="校园邮箱/手机号" /><input placeholder="密码" type="password" />
    {tab === 'register' && <input placeholder="验证码（Mock）" />}
    <button className="primary" onClick={() => nav('/home')}>{tab === 'login' ? '登录' : '注册并进入'}</button>
  </div>;
}
