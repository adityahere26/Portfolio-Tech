import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section className="section section-dark" id="experience">
      <div className="section-head">
        <h2 className="section-title">Experience</h2>
      </div>
      <ol className="timeline">
        {experience.map((c) => (
          <li className="tl-item reveal" key={c.role + c.date}>
            <div className="tl-date">{c.date}</div>
            <div>
              <div className="tl-role">{c.role}</div>
              <div className="tl-org">{c.org}</div>
              {c.notes.length > 0 && <ul className="tl-notes">{c.notes.map((n) => <li key={n}>{n}</li>)}</ul>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
