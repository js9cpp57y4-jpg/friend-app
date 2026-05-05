import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { name: '首页', path: '/home', icon: '🏠' },
  { name: '匹配', path: '/match', icon: '💜' },
  { name: '聊天', path: '/chat', icon: '💬' },
  { name: '活动', path: '/events', icon: '📅' },
  { name: '我的', path: '/profile', icon: '👤' }
];

export function AppLayout() {
  return (
    <div className="mobile-stage">
      <div className="phone-shell">
        <main className="phone-content"><Outlet /></main>
        <nav className="bottom-tab">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={({ isActive }) => `tab-item ${isActive ? 'active' : ''}`}>
              <span>{item.icon}</span><span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}
