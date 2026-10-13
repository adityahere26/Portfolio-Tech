import { teardowns } from "@/data/portfolio";

export default function Teardowns() {
  if (!teardowns.length) return null;
  return (
    <section className="section" id="teardowns">
      <div className="section-head">
        <h2 className="section-title">Teardowns &amp; PRDs</h2>
      </div>
      <div className="teardown-grid">
        {teardowns.map((t, i) => {
          const external = t.link.startsWith("http");
          return (
            <a
              key={t.company + t.topic}
              className="teardown reveal"
              href={t.link}
              {...(external ? { target: "_blank", rel: "noopener" } : {})}
            >
              <div className="teardown-top">
                <span>{String(i + 1).padStart(2, "0")} · {t.type}</span><span>↗</span>
              </div>
              <h3>{t.company}</h3>
              <p>{t.topic}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
