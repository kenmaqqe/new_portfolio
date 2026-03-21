# Portfolio

Personal portfolio website built with Next.js, TypeScript, and GSAP animations.

## Tech Stack

- **Next.js 16.2.0** — React framework
- **React 19** — UI library
- **TypeScript** — type safety
- **Tailwind CSS v4** — styling
- **GSAP** — animations & scroll triggers

## Sections

- **Hero** — intro with interactive canvas particles
- **About** — bio with animated code avatar
- **Skills** — tech stack categories
- **Projects** — featured projects with links
- **Contact** — social links & email

## Animations

- Custom cursor with hover scaling
- Text reveal by characters
- Magnetic hover on buttons
- Parallax scroll effects
- Scroll-triggered section animations
- Canvas particle system responding to mouse

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev      # start dev server
npm run build    # production build
npm run start    # start production server
npm run lint     # run eslint
```

## Project Structure

```
src/
├── types/              # TypeScript interfaces
├── data/               # Content data (projects, skills, contacts)
├── lib/                # Utilities (gsap setup)
├── components/
│   ├── ui/             # Reusable UI components
│   │   ├── Button, Card, Tag, IconButton
│   │   ├── CustomCursor, Magnetic, Parallax
│   │   ├── TextReveal, CodeAvatar, SectionHeading
│   └── sections/       # Page sections
│       ├── Navbar, Hero, About, Skills, Projects, Contact
├── app/
│   ├── globals.css     # Theme & Tailwind config
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Main page
```

## License

MIT
