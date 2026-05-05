import { Link } from 'react-router-dom';

export function ProfilePage() {
  return (
    <section>
      <h1>我的</h1>
      <article className='feed-card'>
        <p>林夏 · 电气工程学院 · 研一</p>
        <p>校园认证 ✅</p>
        <p>关系意图：长期朋友</p>
        <p>信用分：94</p>
        <Link to='/safety'>进入安全中心</Link>
      </article>
    </section>
  );
}
