import { events } from '../mock/data';

export function EventsPage() {
  return (
    <section>
      <header className="feed-header"><h1>活动广场</h1><small>轻线下破冰</small></header>
      <div className="event-grid">
        {events.map((event) => (
          <article className="feed-card" key={event.id}>
            <div className="feed-visual">{event.visual}</div>
            <h3>{event.title}</h3>
            <p>{event.time} · {event.place}</p>
            <div className="tags"><span>{event.tag}</span><span>{event.people}</span></div>
            <button className="cta">报名</button>
          </article>
        ))}
      </div>
    </section>
  );
}
