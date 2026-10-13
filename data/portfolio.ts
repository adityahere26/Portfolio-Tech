/* =====================================================================
   PORTFOLIO CONTENT — edit this file to update the site.
   Content below is taken from Aditya_Sai_Resume.pdf.
   ===================================================================== */

export const profile = {
  name: "Aditya Sai",
  heroWord: "ADITYA",                       // the giant word in the hero
  role: "Product Manager",
  availability: "Open to PM / APM roles · Delhi NCR · 2026",
  email: "royaditya2019@gmail.com",
  phone: "+91 92055 86101",
  resume: "/assets/Aditya_Sai_Resume.pdf",
  photo: "/images/profile.png",            // transparent-background PNG in public/images/ (silhouette shows until it exists)
  links: {
    linkedin: "https://www.linkedin.com/in/adityasai26",
    github: "",                            // add your GitHub URL to show it
    writing: "",                           // add Medium / Substack / Notion URL to show it
  },
};

export type Focus = { title: string; text: string; filter: string; glyph: string };
export type Stat = { value: string; label: string; sub: string };
export type Project = {
  title: string;
  tag: string;
  category: string[];
  year: string;
  desc: string;
  call: string;
  metrics: [string, string][];
  link: string;
  image?: string; // banner screenshot in public/images/work/
  imageNote?: string; // small label on the banner, e.g. when it is a mockup
};
export type CaseSection = {
  heading: string;
  body: string;
  cards?: [string, string][];
  pairs?: [string, string][];
  list?: string[];
  funnel?: [string, number][];
};
export type Release = { version: string; date: string; role: string; org: string; notes: string[] };
export type Teardown = { company: string; topic: string; type: string; link: string };
export type ToolGroup = { group: string; items: string[] };
export type Testimonial = { quote: string; name: string; role: string };

/* Black band under the hero (like GAZU's Men / Women / Kids). "filter" picks a Work category. */
export const focus: Focus[] = [
  { title: "AI Products", text: "Voice agents & LLM\nworkflows, end to end.", filter: "AI",        glyph: "◎" },
  { title: "Client Builds", text: "Real businesses,\nreal users, shipped.",   filter: "Freelance", glyph: "↗" },
  { title: "Fintech",     text: "Payments that\nrecover themselves.",       filter: "Fintech",   glyph: "◆" },
];

/* Strip of 4 numbers (like GAZU's delivery / returns row) */
export const stats: Stat[] = [
  { value: "20+", label: "AI film projects", sub: "PhysicsWallah app" },
  { value: "30+", label: "AI tools tested",  sub: "For content workflows" },
  { value: "5",   label: "Products built",   sub: "AI, web & Web3" },
  { value: "1st", label: "Hackathon win",    sub: "HackQuest · MSIT" },
];

/* Product cards. "call" = the key product decision. */
export const projects: Project[] = [
  {
    title: "PayRevive",
    tag: "Live · Razorpay Buildathon",
    category: ["AI", "Fintech"],
    year: "2025",
    desc: "AI Hinglish voice agent for Razorpay merchants that detects failed payments, diagnoses the cause and calls customers to recover them.",
    call: "Let the AI act on its own only inside a deterministic policy engine — a ₹50K ceiling plus a full audit trail — so merchants can trust it.",
    metrics: [["₹50K", "action ceiling"], ["Hinglish", "voice calls"], ["100%", "audit-logged"]],
    link: "https://payrevive.xyz",
    image: "/images/work/payrevive.jpg",
  },
  {
    title: "PrepSense",
    tag: "Live · AI",
    category: ["AI"],
    year: "2025",
    desc: "AI resume analyzer and voice interview coach: ATS checks, bullet rewrites and voice mock interviews with progress tracking.",
    call: "Made it role-agnostic instead of tech-only, so any job seeker gets field-specific feedback and questions.",
    metrics: [["ATS", "resume check"], ["5–7", "tailored Qs"], ["Voice", "mock interviews"]],
    link: "https://prep-sense-kappa.vercel.app",
    image: "/images/work/prepsense.jpg",
  },
  {
    title: "Real Estate Platform",
    tag: "Live · Freelance",
    category: ["Freelance"],
    year: "",
    desc: "Property listing and lead-management web app for a real estate business, with searchable browsing and lead capture.",
    call: "Built v1 around the two things that drive the business: finding a property fast and capturing the lead.",
    metrics: [["Search", "listings"], ["Leads", "captured"], ["React", "+ Node.js"]],
    link: "https://www.sorrelbuildcon.com",
    image: "/images/work/sorrel.jpg",
  },
  {
    title: "Uniform Shop Inventory",
    tag: "Freelance · Private",
    category: ["Freelance"],
    year: "",
    desc: "Inventory management system for a school uniform shop, with barcode scanning to track stock by item and size in real time.",
    call: "Tracked stock per item and size, with barcode scans at the counter — so the owner knows which sizes to reorder before the back-to-school rush.",
    metrics: [["Barcode", "scanning"], ["Item × size", "stock"], ["React", "+ Node.js"]],
    link: "#",
    image: "/images/work/uniform-shop.jpg",
    imageNote: "Illustrative mockup · client under NDA",
  },
];

/* Featured case study (the long-form section) */
export const caseStudy: {
  title: string;
  meta: string;
  teaser: string;
  phone: string[];
  sections: CaseSection[];
} = {
  title: "PayRevive",
  meta: "Razorpay AI Buildathon · Track 3: AI Revenue Recovery",
  teaser:
    "How I designed an autonomous AI voice agent that merchants can actually trust with their money — by deciding exactly where the AI is not allowed to decide.",
  phone: ["Namaste! Aapka payment fail ho gaya tha — kya hua?", "Card decline ho gaya", "Koi baat nahi, UPI link bhej doon? →"],
  sections: [
    {
      heading: "The problem",
      body: "Failed payments are silent revenue loss for merchants. Recovering them means noticing the failure, understanding why it happened, and reaching the customer quickly — work most small merchants don't have time to do.",
      cards: [["Detect", "spot failed payments automatically"], ["Diagnose", "find the root cause"], ["Recover", "call the customer and fix it"]],
    },
    {
      heading: "Key decisions",
      body: "Every design choice came back to one question: would a merchant let this agent call their customers?",
      pairs: [
        ["Customers in India switch between Hindi and English", "Hinglish voice calls, not English-only scripts."],
        ["An AI with money powers is a risk", "Deterministic policy engine with a ₹50K autonomous action ceiling."],
        ["Merchants need to know why the agent acted", "Full audit-trail logging of every decision."],
      ],
    },
    {
      heading: "How it works",
      body: "Payment events come in from Razorpay, get verified, classified and routed through the policy engine before any call is made.",
      list: [
        "HMAC-SHA256 signed webhook verification — only genuine events trigger action",
        "Gemini-based intent classification of the customer's response",
        "Policy engine decides what the agent may do autonomously",
        "Every step written to an audit log for explainability and compliance",
      ],
    },
    {
      heading: "What I'd measure next",
      body: "To take it from buildathon to production, these are the metrics I'd track first.",
      list: [
        "Recovery rate — % of failed payments recovered after a call",
        "Call completion & drop-off point in the conversation",
        "Escalations — how often the agent hands off to a human",
        "Merchant trust — share of merchants who keep autonomy switched on",
      ],
    },
  ],
};

/* Experience, newest first. "version" is just for fun (major = new role). */
export const changelog: Release[] = [
  {
    version: "v2.0",
    date: "Feb 2026 — Now",
    role: "AI Filmmaker Project Associate",
    org: "PW (PhysicsWallah) · Apprenticeship · Noida, Hybrid",
    notes: [
      "Worked on 20+ AI filmmaking projects for the PW App / PI section",
      "Researched and tested 30+ AI tools to improve content production workflows",
      "Coordinated with 8+ team members across creative and production teams",
      "Tracked content metrics and contributed to improving content performance",
      "Managed timelines, meetings, deliverables and stakeholder communication",
    ],
  },
  {
    version: "v1.1",
    date: "Apr 2025",
    role: "Winner, HackQuest Hackathon",
    org: "MSIT",
    notes: ["Built BlockEd — gamified learning with NFT on-chain certificates (React, TypeScript, Solidity)"],
  },
  {
    version: "v1.0",
    date: "Jan 2025 — Jul 2025",
    role: "Tech & Product Intern",
    org: "HighFurries · Dwarka",
    notes: [
      "Researched user needs and competitors to scope and prioritise features for a 2–3 person product team",
      "Built and shipped full-stack features (React, Node.js, REST APIs) from development to deployment",
      "Integrated third-party APIs, improved frontend performance, kept quality high through peer review",
      "Supported planning and execution of “Paint with Pets”, a live customer engagement event",
    ],
  },
  {
    version: "v0.1",
    date: "B.Tech",
    role: "Computer Science",
    org: "Netaji Subhas University of Technology, Delhi",
    notes: ["Where the engineering foundation came from"],
  },
];

/* Product teardowns / PRDs. The section stays hidden until you add one, e.g.
   { company: "Zepto", topic: "10-minute delivery: retention loops", type: "Teardown", link: "https://..." } */
export const teardowns: Teardown[] = [];

/* Skills grouped by area */
export const toolkit: ToolGroup[] = [
  { group: "Product", items: ["Product strategy", "Roadmapping", "PRD & spec writing", "RICE / MoSCoW", "User research", "Competitive analysis", "Go-to-market"] },
  { group: "Execution", items: ["Agile / Scrum", "Sprint planning", "A/B testing", "Stakeholder management", "Cross-functional collaboration"] },
  { group: "Technical", items: ["TypeScript", "JavaScript", "Python", "React / Next.js", "Node.js / Express", "REST APIs", "SQL / PostgreSQL", "Prisma", "MongoDB", "Redis"] },
  { group: "Tools", items: ["Figma", "Jira", "Notion", "Git", "Docker", "CI basics"] },
];

/* The section stays hidden until you add one, e.g.
   { quote: "…", name: "Name Surname", role: "Manager, Company" } */
export const testimonials: Testimonial[] = [];
