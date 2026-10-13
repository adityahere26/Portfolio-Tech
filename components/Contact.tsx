import { profile } from "@/data/portfolio";
import CopyButton from "./CopyButton";

export default function Contact() {
  const { email, phone, links, resume } = profile;
  return (
    <section className="contact" id="contact">
      <p className="eyebrow light">Roadmap slot open · v1.0 unreleased</p>
      <h2 className="contact-title">Need a PM who<br />puts users first<br />and ships?</h2>

      <div className="contact-rows">
        <div className="contact-row">
          <span className="mono">Email</span>
          <a href={`mailto:${email}`} className="contact-value">{email}</a>
          <CopyButton value={email} />
        </div>
        <div className="contact-row">
          <span className="mono">Phone</span>
          <a href={`tel:${phone.replace(/\s/g, "")}`} className="contact-value">{phone}</a>
          <CopyButton value={phone} />
        </div>
      </div>

      <div className="contact-links">
        {[
          ["LinkedIn", links.linkedin],
          ["Resume (PDF)", resume],
          ["GitHub", links.github],
          ["Writing", links.writing],
        ]
          .filter(([, href]) => href)
          .map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noopener">{label} ↗</a>
          ))}
      </div>
    </section>
  );
}
