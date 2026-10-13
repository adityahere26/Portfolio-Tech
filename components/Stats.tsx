import { stats } from "@/data/portfolio";

export default function Stats() {
  return (
    <section className="stats" aria-label="At a glance">
      <div className="stats-inner">
        {stats.map((s) => (
          <div className="stat reveal" key={s.label}>
            <div className="stat-value">{s.value}</div>
            <div>
              <div className="stat-label">{s.label}</div>
              <div className="stat-sub">{s.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
