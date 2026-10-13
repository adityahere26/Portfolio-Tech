"use client";

import { useEffect } from "react";

/** Reveal-on-scroll, sticky header state and active nav / case-study TOC links. */
export default function ScrollEffects() {
  useEffect(() => {
    const reveal = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("in");
        reveal.unobserve(e.target);
      }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => {
      // Anything already on screen shows immediately; the rest waits for scroll.
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("in");
      else reveal.observe(el);
    });

    const header = document.querySelector(".header");
    const onScroll = () => header?.classList.toggle("scrolled", window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const links = [...document.querySelectorAll<HTMLAnchorElement>(".nav-left a, .case-toc a")];
    const spy = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const id = `#${e.target.id}`;
        const group = e.target.classList.contains("case-step") ? ".case-toc a" : ".nav-left a";
        links.filter((a) => a.matches(group)).forEach((a) => a.classList.toggle("active", a.getAttribute("href") === id));
      }),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    document.querySelectorAll("main section[id], .case-step").forEach((s) => spy.observe(s));

    return () => {
      reveal.disconnect();
      spy.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
