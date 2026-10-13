"use client";

import { useEffect, useState } from "react";
import { profile, teardowns } from "@/data/portfolio";
import { openPalette } from "./CommandPalette";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#case-study", label: "Case Study" },
  { href: "#changelog", label: "Experience" },
  teardowns.length ? { href: "#teardowns", label: "Teardowns" } : { href: "#toolkit", label: "Toolkit" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* Announcement bar (GAZU: "Free delivery…") */}
      <div className="topbar">
        <span>{profile.availability}</span>
        <nav aria-label="Quick links">
          <a href={profile.resume} target="_blank" rel="noopener">Resume</a>
          <span className="sep">|</span>
          <a href={profile.links.linkedin} target="_blank" rel="noopener">LinkedIn</a>
          <span className="sep">|</span>
          <a href="#contact">Hire me</a>
        </nav>
      </div>

      <header className="header" id="top">
        <nav className="nav-left" aria-label="Primary">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>{n.label}</a>
          ))}
        </nav>
        <a href="#top" className="logo">{profile.name.toUpperCase()}</a>
        <div className="nav-right">
          <button className="icon-btn" onClick={openPalette} aria-label="Open command menu">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
            <span>Search</span><kbd>⌘K</kbd>
          </button>
          <a className="icon-btn" href="#contact">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m3 7 9 6 9-6" /></svg>
            <span>Contact</span>
          </a>
          <button className="menu-btn" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            <span /><span />
          </button>
        </div>
      </header>

      <div className="mobile-menu" hidden={!open}>
        {[...nav, { href: "#contact", label: "Contact" }].map((n) => (
          <a key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>
        ))}
      </div>
    </>
  );
}
