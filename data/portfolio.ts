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
export type Teardown = {
  company: string;
  lens: string;          // the angle the teardown takes
  question: string;      // the hook from the cover slide
  stat: [string, string]; // [headline number, what it means]
  testFirst: string;     // the MVP the RICE ranking picked
  win: string;           // what success looks like in the A/B test
  link: string;          // PDF in public/teardowns/
  cover: string;         // first slide in public/images/teardowns/
};
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

/* Product teardowns (from the "Product Teardown" folder). The first one is shown as the featured card. */
export const teardowns: Teardown[] = [
  {
    company: "PhysicsWallah",
    lens: "Free-to-paid conversion",
    question: "Why are daily users up 26% while paid users are up only 2.4%?",
    stat: ["+26% vs +2.4%", "daily vs paid users, Q1 FY27"],
    testFirst: "Batch Finder — a short quiz and diagnostic that recommends one batch on one card",
    win: "+10% payment conversion, refunds and retention flat",
    link: "/teardowns/physicswallah-teardown.pdf",
    cover: "/images/teardowns/physicswallah.jpg",
  },
  {
    company: "Zepto",
    lens: "Average order value",
    question: "Why does India's second-largest quick-commerce app have the smallest basket?",
    stat: ["₹387", "average order, vs ₹665–700 for rivals"],
    testFirst: "Smart cart rail of cheap, relevant add-ons, plus an all-in price",
    win: "+₹20 AOV with delivery time and margin flat",
    link: "/teardowns/zepto-teardown.pdf",
    cover: "/images/teardowns/zepto.jpg",
  },
  {
    company: "Zomato",
    lens: "Order frequency under rising fees",
    question: "Fees keep rising. How do you keep people ordering as often?",
    stat: ["₹2 → ₹14.90", "platform fee in three years"],
    testFirst: "All-in price shown from the menu, not only at checkout",
    win: "+2 pts checkout conversion",
    link: "/teardowns/zomato-teardown.pdf",
    cover: "/images/teardowns/zomato.jpg",
  },
  {
    company: "Uber",
    lens: "Ride reliability in India",
    question: "When a driver cancels, how do you keep the rider from switching apps?",
    stat: ["₹1,511 cr", "Uber India FY25 loss"],
    testFirst: "Fare lock on re-match after a driver cancels",
    win: "+2 pts 7-day rebooking, driver earnings flat",
    link: "/teardowns/uber-teardown.pdf",
    cover: "/images/teardowns/uber.jpg",
  },
  {
    company: "Airbnb",
    lens: "Stay to whole trip",
    question: "Airbnb booked the stay. Who books the rest of the trip?",
    stat: ["~35%", "of first-time hotel guests later book a home"],
    testFirst: "A “Plan your trip” card with three nearby services after booking",
    win: "More extras per 100 stays, cancellations flat",
    link: "/teardowns/airbnb-teardown.pdf",
    cover: "/images/teardowns/airbnb.jpg",
  },
  {
    company: "PlayStation",
    lens: "PS Plus retention",
    question: "When prices rise and playtime dips, how do you keep PS Plus members renewing?",
    stat: ["−36%", "PS5 shipments in the quarter"],
    testFirst: "A value recap shown before renewal",
    win: "+2 pts renewal rate, revenue per member flat",
    link: "/teardowns/playstation-teardown.pdf",
    cover: "/images/teardowns/playstation.jpg",
  },
  {
    company: "GitHub",
    lens: "Maintainer review load",
    question: "When AI makes pull requests free to write, who pays the cost of reviewing them?",
    stat: ["518.7M", "pull requests merged in a year, up 29%"],
    testFirst: "Opt-in PR readiness gate with a what's-missing checklist",
    win: "Fewer review hours per merged PR, first-timer merges down ≤5%",
    link: "/teardowns/github-teardown.pdf",
    cover: "/images/teardowns/github.jpg",
  },
];

/* The steps every teardown follows (shown above the cards) */
export const teardownMethod = ["Problem", "Users", "Journey", "Pain points", "RICE", "MVP", "A/B test", "Go-to-market", "Risks"];

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
