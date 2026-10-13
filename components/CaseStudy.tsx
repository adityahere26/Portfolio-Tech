import { caseStudy } from "@/data/portfolio";

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const pad = (n: number) => String(n).padStart(2, "0");

export default function CaseStudy() {
  const { sections } = caseStudy;
  return (
    <section className="section case" id="case-study">
      <div className="section-head">
        <h2 className="section-title">Case study</h2>
        <span className="mono muted">{caseStudy.title} · {caseStudy.meta}</span>
      </div>

      <div className="case-layout">
        <aside className="case-toc" aria-label="Case study sections">
          <ol>
            {sections.map((s, i) => (
              <li key={s.heading}>
                <a href={`#cs-${slug(s.heading)}`}><span>{pad(i + 1)}</span>{s.heading}</a>
              </li>
            ))}
          </ol>
        </aside>

        <div className="case-body">
          {sections.map((s, i) => (
            <article className="case-step reveal" id={`cs-${slug(s.heading)}`} key={s.heading}>
              <p className="num">{pad(i + 1)} / {pad(sections.length)}</p>
              <h3>{s.heading}</h3>
              <p>{s.body}</p>

              {s.cards && (
                <div className="case-cards">
                  {s.cards.map(([v, l]) => <div key={l}><strong>{v}</strong><span>{l}</span></div>)}
                </div>
              )}

              {s.pairs && (
                <div className="pairs">
                  {s.pairs.map(([q, a]) => (
                    <div className="pair" key={q}>
                      <span className="q">{q}</span><span className="arrow">→</span><span className="a">{a}</span>
                    </div>
                  ))}
                </div>
              )}

              {s.list && (
                <ul className="case-list">{s.list.map((l) => <li key={l}>{l}</li>)}</ul>
              )}

              {s.funnel && (
                <div className="funnel">
                  {s.funnel.map(([label, v]) => (
                    <div className="funnel-row" key={label}>
                      <span>{label}</span>
                      <div className="funnel-bar"><i style={{ "--w": `${v}%` } as React.CSSProperties} /></div>
                      <b>{v}%</b>
                    </div>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
