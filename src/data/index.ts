import { HeroData, AboutData, SkillCategory, Project, ContactItem, NavLink, ExperienceItem } from "@/types";

export const heroData: HeroData = {
  greeting: "Hello, I'm",
  name: "Tymoshenko Dmytro",
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
    title: "Дмитро Тютюн — Official Website",
    description:
      "Офіційний сайт українського стендап-коміка та блогера (200K+ підписників на YouTube). Сайт включає тур-розклад із квитками, відео-секцію, мерч-магазин та посилання на соцмережі. Виконаний у брендованому стилі з анімаціями, film grain ефектом та кастомним скетчевим оформленням.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive Design", "Ukrainian i18n"],
    live: "https://www.dmytrotyutyun.com",
    image: "/projects/tyutyun.png",
  },
  {
    title: "BullyChat",
    description:
      "AI-powered chat application supporting Groq LLM provider with markdown rendering and math expressions.",
    tags: ["Next.js", "TypeScript", "AI SDK", "Zustand", "Tailwind CSS"],
    github: "https://github.com/kenmaqqe/BullyChat",
    live: "https://bully-chat.vercel.app",
    image: "/projects/bullychat.png",
  },
  {
    title: "Frontend Error Observatory",
    description:
      "Error monitoring dashboard for frontend applications with real-time data, JSON viewer, dark mode, and responsive UI.",
    tags: ["Next.js", "TypeScript", "Radix UI", "TanStack Query", "Zustand"],
    github: "https://github.com/kenmaqqe/frontend-error-observatory",
    live: "https://frontend-error-observatory.vercel.app",
    image: "/projects/observatory.png",
  },
  {
    title: "СТО на Дорожній",
    description:
      "Business website for a car service station with service catalog, pricing, FAQ, and contact form. Ukrainian localization.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://www.stonadorozhnyy.com.ua",
    image: "/projects/sto.png",
  },
  {
    title: "Contrlve Game",
    description:
      "A fan web game based on a popular Ukrainian show. Features turn-based logic, complex state transitions, and frame-accurate animations.",
    tags: ["Next.js", "TypeScript", "React", "State Management", "CSS Animations"],
    live: "https://contrlve-game.vercel.app",
    github: "https://github.com/kenmaqqe/contrlve-game",
    image: "/projects/contrlve.png",
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
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const experiences: ExperienceItem[] = [
  {
    company: "T+ Market (E-Commerce Platform)",
    role: "Frontend Developer",
    period: "Dec 2024 – Present",
    points: [
      "Designed and implemented a multi-level product filtering system with nested sub-filters using URL params for state persistence (SSR-compatible).",
      "Built and maintained a Next.js component library integrating 5+ REST APIs using Axios and custom hooks.",
      "Refactored 15+ legacy components reducing code duplication by ~25% and implemented Jest/RTL unit tests.",
    ],
    skills: ["Next.js", "TypeScript", "SSR", "URL State", "Jest/RTL"],
  },
  {
    company: "AI SaaS Product (NDA, Freelance)",
    role: "Frontend Developer",
    period: "Feb 2024 – Nov 2024",
    points: [
      "Took AI-powered internal interfaces from zero to production using Next.js App Router, TypeScript, and Zustand.",
      "Improved Lighthouse score from 65 → 88 and reduced LCP by 40% through lazy loading and code splitting.",
      "Built a production integration with a GrammyJS Telegram bot for automated lead delivery.",
    ],
    skills: ["React", "Zustand", "App Router", "Performance Optimization", "Telegram API"],
  },
  {
    company: "Baza",
    role: "Frontend Developer",
    period: "Aug 2023 – Feb 2024",
    points: [
      "Delivered 20+ pixel-perfect components from Figma with complex UI interactions and cross-browser compatibility.",
      "Ran regular code reviews for a 3-developer team, enforcing semantic HTML5 and a11y standards.",
    ],
    skills: ["TypeScript", "Figma", "UI/UX", "Code Review", "a11y"],
  },
];
