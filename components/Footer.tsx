import { profile } from "@/data/portfolio";
import Clock from "./Clock";

export default function Footer() {
  return (
    <footer className="footer">
      <span className="logo small">{profile.name.toUpperCase()}</span>
      <Clock />
      <span className="mono muted">Built with Next.js · Press ⌘K</span>
    </footer>
  );
}
