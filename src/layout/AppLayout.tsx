import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  ['首页', '/home'], ['匹配', '/match'], ['聊天', '/chat'], ['活动', '/events'], ['我的', '/profile'], ['安全中心', '/safety']
];

export function AppLayout() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <h2>华电交友</h2>
        <p>真实 · 同频 · 安全</p>
        {navItems.map(([name, path]) => (
          <NavLink key={path} to={path} className={({ isActive }) => (isActive ? 'nav active' : 'nav')}>
            {name}
          </NavLink>
        ))}
      </aside>
      <main className="content"><Outlet /></main>
    </div>
  );
}
