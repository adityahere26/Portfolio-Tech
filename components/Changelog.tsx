import { changelog } from "@/data/portfolio";

export default function Changelog() {
  return (
    <section className="section section-dark" id="changelog">
      <div className="section-head">
        <h2 className="section-title">Changelog</h2>
        <span className="mono">Release notes for a career</span>
      </div>
      <ol className="timeline">
        {changelog.map((c) => (
          <li className="tl-item reveal" key={c.version}>
            <div className="tl-version">{c.version}</div>
            <div className="tl-date">{c.date}</div>
            <div>
              <div className="tl-role">{c.role}</div>
              <div className="tl-org">{c.org}</div>
              <ul className="tl-notes">{c.notes.map((n) => <li key={n}>{n}</li>)}</ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
