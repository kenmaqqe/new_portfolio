export interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live: string;
  image?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ContactItem {
  label: string;
  value: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface HeroData {
  greeting: string;
  name: string;
  role: string;
  cta: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
}

export interface AboutData {
  title: string;
  paragraphs: string[];
  stats: { value: string; label: string }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  points: string[];
  skills?: string[];
}
