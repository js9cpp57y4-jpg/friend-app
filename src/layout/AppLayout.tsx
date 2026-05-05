import { NavLink, Outlet } from 'react-router-dom';

const tabs = [
  { path: '/home', label: '首页', icon: '🏠' },
  { path: '/match', label: '匹配', icon: '💜' },
  { path: '/chat', label: '聊天', icon: '💬' },
  { path: '/events', label: '活动', icon: '📅' },
  { path: '/profile', label: '我的', icon: '👤' }
];

export function AppLayout() {
  return (
    <div className="mobile-stage">
      <div className="phone-shell">
        <main className="phone-content"><Outlet /></main>
        <nav className="bottom-tab">
          {tabs.map((tab) => (
            <NavLink key={tab.path} to={tab.path} className={({ isActive }) => `tab-item ${isActive ? 'active' : ''}`}>
              <span className="tab-icon">{tab.icon}</span>
              <span>{tab.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}
