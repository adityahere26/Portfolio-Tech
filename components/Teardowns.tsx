import Image from "next/image";
import { teardownMethod, teardowns, type Teardown } from "@/data/portfolio";

const pad = (n: number) => String(n).padStart(2, "0");

function Details({ t }: { t: Teardown }) {
  return (
    <dl className="td-details">
      <div><dt>Test first</dt><dd>{t.testFirst}</dd></div>
      <div><dt>A win looks like</dt><dd>{t.win}</dd></div>
    </dl>
  );
}

export default function Teardowns() {
  if (!teardowns.length) return null;
  const [featured, ...rest] = teardowns;

  return (
    <section className="section" id="teardowns">
      <div className="section-head">
        <h2 className="section-title">Product teardowns</h2>
        <span className="mono muted">{teardowns.length} decks · real companies, public data</span>
      </div>

      <ol className="td-method reveal" aria-label="Every teardown follows these steps">
        {teardownMethod.map((step, i) => (
          <li key={step}><span>{pad(i + 1)}</span>{step}</li>
        ))}
      </ol>

      <a className="td-featured reveal" href={featured.link} target="_blank" rel="noopener">
        <div className="td-cover">
          <Image src={featured.cover} alt={`${featured.company} teardown cover slide`} width={1200} height={675} sizes="(max-width: 860px) 100vw, 55vw" />
        </div>
        <div className="td-body">
          <p className="td-meta"><span>01 · Featured</span><span>{featured.lens}</span></p>
          <h3>{featured.company}</h3>
          <p className="td-question">{featured.question}</p>
          <p className="td-stat"><strong>{featured.stat[0]}</strong><span>{featured.stat[1]}</span></p>
          <Details t={featured} />
          <span className="btn btn-dark td-btn">Read the deck ↗</span>
        </div>
      </a>

      <div className="td-grid">
        {rest.map((t, i) => (
          <a key={t.company} className="td-card reveal" href={t.link} target="_blank" rel="noopener">
            <div className="td-cover">
              <Image src={t.cover} alt={`${t.company} teardown cover slide`} width={1200} height={675} sizes="(max-width: 860px) 100vw, 33vw" />
            </div>
            <p className="td-meta"><span>{pad(i + 2)}</span><span>{t.lens}</span></p>
            <h3>{t.company}</h3>
            <p className="td-question">{t.question}</p>
            <p className="td-stat"><strong>{t.stat[0]}</strong><span>{t.stat[1]}</span></p>
            <Details t={t} />
            <span className="td-link">Read the deck ↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
