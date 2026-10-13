"use client";

import { useState } from "react";

export default function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard blocked — the value is still visible next to the button */
    }
  };

  return (
    <button className={`copy-btn${copied ? " done" : ""}`} onClick={copy} aria-live="polite">
      {copied ? "Copied ✓" : "Copy"}
    </button>
  );
}
