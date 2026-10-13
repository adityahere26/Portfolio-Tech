import { testimonials } from "@/data/portfolio";

export default function Testimonials() {
  if (!testimonials.length) return null;
  return (
    <section className="section" id="testimonials">
      <div className="section-head">
        <h2 className="section-title">Kind words</h2>
      </div>
      <div className="quotes">
        {testimonials.map((q, i) => (
          <figure className="quote reveal" key={i}>
            <blockquote>{q.quote}</blockquote>
            <figcaption><strong>{q.name}</strong><span>{q.role}</span></figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
