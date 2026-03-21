import { HeroData, AboutData, SkillCategory, Project, ContactItem, NavLink } from "@/types";

export const heroData: HeroData = {
  greeting: "Hello, I'm",
  name: "Tymoshenk Dmytro",
  role: "Frontend Developer (React.js, Next.js, TypeScript)",
  cta: {
    primary: { label: "View Projects", href: "#projects" },
    secondary: { label: "Contact Me", href: "#contact" },
  },
};

export const aboutData: AboutData = {
  title: "About Me",
  paragraphs: [
    "I'm a frontend developer focused on building clean, performant web applications with React and Next.js.",
    "With experience in TypeScript, Tailwind CSS, and modern tooling, I create interfaces that are both functional and visually refined.",
  ],
  stats: [{ value: "2+", label: "Years" }],
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Styling",
    skills: ["Tailwind CSS", "SASS", "CSS Modules", "Styled Components"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Postman"],
  },
  {
    title: "Other",
    skills: ["REST API", "Node.js", "npm/pnpm", "Webpack/Vite"],
  },
];

export const projects: Project[] = [
  {
    title: "BullyChat",
    description:
      "AI-powered chat application supporting Groq LLM provider with markdown rendering and math expressions.",
    tags: ["Next.js", "TypeScript", "AI SDK", "Zustand", "Tailwind CSS"],
    github: "https://github.com/kenmaqqe/BullyChat",
    live: "https://bully-chat.vercel.app",
  },
  {
    title: "Frontend Error Observatory",
    description:
      "Error monitoring dashboard for frontend applications with real-time data, JSON viewer, dark mode, and responsive UI.",
    tags: ["Next.js", "TypeScript", "Radix UI", "TanStack Query", "Zustand"],
    github: "https://github.com/kenmaqqe/frontend-error-observatory",
    live: "https://frontend-error-observatory.vercel.app",
  },
  {
    title: "СТО на Дорожній",
    description:
      "Business website for a car service station with service catalog, pricing, FAQ, and contact form. Ukrainian localization.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://www.stonadorozhnyy.com.ua",
  },
];

export const contacts: ContactItem[] = [
  {
    label: "Email",
    value: "tymoshenko.d.o@tuta.io",
    href: "mailto:tymoshenko.d.o@tuta.io",
  },
  {
    label: "GitHub",
    value: "kenmaqqe",
    href: "https://github.com/kenmaqqe",
  },
  {
    label: "LinkedIn",
    value: "Dmytro Tymoshenko",
    href: "https://linkedin.com/in/kenmaqqe",
  },
  {
    label: "Telegram",
    value: "@kenmaqqe",
    href: "https://t.me/kenmaqqe",
  },
];

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
