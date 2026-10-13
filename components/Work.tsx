"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { projects, type Project } from "@/data/portfolio";

const FILTER_EVENT = "portfolio:filter";
const shades = ["#4a4844", "#6f6e6a", "#232323", "#8e8c87", "#3a3a38", "#5c5b57"];
const categories = ["All", ...new Set(projects.flatMap((p) => p.category))];
const pad = (n: number) => String(n).padStart(2, "0");

/** Lets other components (e.g. the focus band) set the work filter. */
export function filterWork(category: string) {
  window.dispatchEvent(new CustomEvent(FILTER_EVENT, { detail: category }));
}

function CardCover({ project: p, index: i }: { project: Project; index: number }) {
  const style = { "--c": shades[i % shades.length] } as React.CSSProperties;
  const inner = p.image ? (
    <>
      <span className="card-tag">{p.tag}</span>
      <Image className="card-shot" src={p.image} alt={`${p.title} website`} width={1440} height={900} sizes="(max-width: 860px) 100vw, 50vw" />
      {p.link.startsWith("http") && <span className="card-visit">Visit live site ↗</span>}
      {p.imageNote && <span className="card-note">{p.imageNote}</span>}
    </>
  ) : (
    <>
      <span className="card-tag">{p.tag}</span>
      <div className="card-cover-inner">
        <span className="card-year">{p.year || "\u00a0"}</span>
        <span className="card-cover-title">{p.title}</span>
        <span className="card-index" aria-hidden="true">{pad(i + 1)}</span>
      </div>
    </>
  );
  if (!p.link || p.link === "#") return <div className="card-cover" style={style}>{inner}</div>;
  const external = p.link.startsWith("http");
  return (
    <a href={p.link} className="card-cover" style={style} aria-label={`${p.title}${external ? " (opens live site)" : ""}`}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}>
      {inner}
    </a>
  );
}

export default function Work() {
  const [active, setActive] = useState("All");

  useEffect(() => {
    const onFilter = (e: Event) => setActive((e as CustomEvent<string>).detail);
    window.addEventListener(FILTER_EVENT, onFilter);
    return () => window.removeEventListener(FILTER_EVENT, onFilter);
  }, []);

  return (
    <section className="section" id="work">
      <div className="section-head">
        <h2 className="section-title">Selected work</h2>
        <div className="filters" role="tablist" aria-label="Filter work">
          {categories.map((c) => (
            <button key={c} role="tab" aria-selected={active === c} onClick={() => setActive(c)}>{c}</button>
          ))}
        </div>
      </div>

      <div className="work-grid">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className="card reveal"
            hidden={active !== "All" && !p.category.includes(active)}
          >
            <CardCover project={p} index={i} />
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <p className="call"><b>The call</b>{p.call}</p>
            <div className="card-metrics">
              {p.metrics.map(([v, l]) => (
                <div key={l}><strong>{v}</strong><span>{l}</span></div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
