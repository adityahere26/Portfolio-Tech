import { toolkit } from "@/data/portfolio";

export default function Toolkit() {
  return (
    <section className="section section-grey" id="toolkit">
      <div className="section-head">
        <h2 className="section-title">Toolkit</h2>
        <span className="mono muted">PM craft, backed by data</span>
      </div>
      <div className="toolkit">
        {toolkit.map((g) => (
          <div className="reveal" key={g.group}>
            <h3>{g.group}</h3>
            <div className="chips">{g.items.map((i) => <span key={i}>{i}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
