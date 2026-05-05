import { safetyItems } from '../mock/data';

export function SafetyPage() {
  return (
    <section>
      <header className="feed-header"><h1>安全中心</h1><small>真实 · 同频 · 安全</small></header>
      {safetyItems.map((item) => (
        <article className="feed-card" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </article>
      ))}
    </section>
  );
}
