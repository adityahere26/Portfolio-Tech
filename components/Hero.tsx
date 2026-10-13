import fs from "node:fs";
import path from "node:path";
import HeroPhoto from "./HeroPhoto";
import { profile } from "@/data/portfolio";

// Show the real photo only if the file exists in /public, otherwise a silhouette.
const hasPhoto = !!profile.photo && fs.existsSync(path.join(process.cwd(), "public", profile.photo));

export default function Hero() {
  return (
    <section className="hero">
      <p className="hero-kicker reveal">Products<br />that move<br />with users.</p>

      <h1 className="hero-word" aria-label={`${profile.name}, ${profile.role}`}>
        <span className="hero-word-text" aria-hidden="true">{profile.heroWord}</span>
      </h1>

      {hasPhoto ? (
        <HeroPhoto src={profile.photo} alt={`Portrait of ${profile.name}`} width={748} height={1400} />
      ) : (
        <figure className="hero-photo">
          <svg className="silhouette" viewBox="0 0 300 520" aria-hidden="true">
            <defs>
              <linearGradient id="sil" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#3a3a3a" /><stop offset="1" stopColor="#151515" />
              </linearGradient>
            </defs>
            <ellipse cx="150" cy="505" rx="120" ry="10" fill="#000" opacity=".12" />
            <circle cx="150" cy="78" r="46" fill="url(#sil)" />
            <path d="M150 134c-58 0-96 28-104 86l-18 170c-2 16 10 24 22 24h34l6 86h120l6-86h34c12 0 24-8 22-24l-18-170c-8-58-46-86-104-86z" fill="url(#sil)" />
          </svg>
        </figure>
      )}

      <p className="hero-sub reveal">
        Product-minded builder who ships AI products end to end —{" "}
        <strong>user research, sharp prioritisation, and the code to prove it.</strong>
      </p>

      <div className="hero-ctas reveal">
        <a href="#work" className="btn btn-dark">See the work</a>
        <a href={profile.resume} className="link-underline" target="_blank" rel="noopener">Download resume</a>
      </div>
    </section>
  );
}
