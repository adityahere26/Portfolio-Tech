"use client";

import { focus } from "@/data/portfolio";
import { filterWork } from "./Work";

export default function FocusBand() {
  return (
    <section className="band" aria-label="What I do">
      <div className="band-inner">
        {focus.map((f) => (
          <article className="focus reveal" key={f.title}>
            <div className="focus-tile" aria-hidden="true">{f.glyph}</div>
            <div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
              <a href="#work" onClick={() => filterWork(f.filter)}>View work →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
