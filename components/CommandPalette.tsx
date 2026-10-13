"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { profile, projects, teardowns } from "@/data/portfolio";

const OPEN_EVENT = "portfolio:palette";

/** Call from anywhere (e.g. the header search button) to open the palette. */
export function openPalette() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

type Command = { label: string; hint: string; go?: string; run?: () => void };

const commands: Command[] = [
  { label: "Work", hint: "section", go: "#work" },
  { label: "Case study", hint: "section", go: "#case-study" },
  { label: "Experience", hint: "section", go: "#experience" },
  ...(teardowns.length ? [{ label: "Product teardowns", hint: "section", go: "#teardowns" }] : []),
  { label: "Toolkit", hint: "section", go: "#toolkit" },
  { label: "Contact", hint: "section", go: "#contact" },
  ...projects.map((p) => ({ label: p.title, hint: "project", go: p.link.startsWith("http") ? p.link : "#work" })),
  ...teardowns.map((t) => ({ label: `${t.company} teardown — ${t.lens}`, hint: "teardown", go: t.link })),
  { label: "Open resume", hint: "link", go: profile.resume },
  { label: "Copy email", hint: "action", run: () => navigator.clipboard?.writeText(profile.email) },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [sel, setSel] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return commands.filter((c) => c.label.toLowerCase().includes(q) || c.hint.includes(q));
  }, [query]);

  const show = () => { setQuery(""); setSel(0); setOpen(true); };

  const run = (c?: Command) => {
    if (!c) return;
    setOpen(false);
    if (c.run) return c.run();
    if (!c.go) return;
    if (c.go.startsWith("#")) document.querySelector(c.go)?.scrollIntoView({ behavior: "smooth" });
    else window.open(c.go, "_blank", "noopener");
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => { if (!o) { setQuery(""); setSel(0); } return !o; });
      } else if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_EVENT, show);
    return () => { window.removeEventListener("keydown", onKey); window.removeEventListener(OPEN_EVENT, show); };
  }, []);

  useEffect(() => { if (open) inputRef.current?.focus(); }, [open]);
  useEffect(() => { listRef.current?.children[sel]?.scrollIntoView({ block: "nearest" }); }, [sel]);

  if (!open) return null;

  return (
    <div className="palette">
      <div className="palette-backdrop" onClick={() => setOpen(false)} />
      <div className="palette-box" role="dialog" aria-modal="true" aria-label="Command menu">
        <input
          ref={inputRef}
          type="text"
          placeholder="Jump to…"
          autoComplete="off"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setSel(0); }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") { e.preventDefault(); setSel((s) => Math.min(s + 1, filtered.length - 1)); }
            else if (e.key === "ArrowUp") { e.preventDefault(); setSel((s) => Math.max(s - 1, 0)); }
            else if (e.key === "Enter") run(filtered[sel]);
          }}
        />
        <ul role="listbox" ref={listRef}>
          {filtered.length === 0 && <li aria-disabled="true">No results<span>try “work”</span></li>}
          {filtered.map((c, i) => (
            <li key={c.label} role="option" aria-selected={i === sel} onMouseEnter={() => setSel(i)} onClick={() => run(c)}>
              {c.label}<span>{c.hint}</span>
            </li>
          ))}
        </ul>
        <div className="palette-hint mono">↑↓ navigate · ↵ open · esc close</div>
      </div>
    </div>
  );
}
