import { caseStudy } from "@/data/portfolio";

export default function Feature() {
  return (
    <section className="feature">
      <div className="feature-copy reveal">
        <p className="eyebrow">Featured case study</p>
        <h2 className="feature-title">Trust,<br />by design.</h2>
        <p className="feature-text">{caseStudy.teaser}</p>
        <a href="#case-study" className="btn btn-dark">Read the case study</a>
      </div>
      <div className="feature-visual" aria-hidden="true">
        <div className="phone reveal">
          <div className="phone-notch" />
          <div className="phone-screen">
            {caseStudy.phone.map((t, i) => (
              <div key={i} className={`bubble ${i % 2 ? "me" : "bot"}`}>{t}</div>
            ))}
          </div>
        </div>
        <span className="feature-num">01</span>
      </div>
    </section>
  );
}
