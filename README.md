# Prashanth S N — Portfolio

An ultra-premium, multi-page personal portfolio built with React, Three.js, Framer Motion, and a futuristic dark theme.

## Pages

| Route | Page |
|-------|------|
| `/` | Home — Hero, Featured Projects, Quick About, Latest Experience, CTA |
| `/about` | About — Story, Journey, Education, Mission, Vision, Interests |
| `/experience` | Experience — Interactive timeline, responsibilities, tech, achievements |
| `/projects` | Projects — Gallery of project cards |
| `/projects/:slug` | Project Detail — Full case study with architecture, workflow, challenges, solutions, gallery |
| `/skills` | Skills — Categorized skill bars with animated progress |
| `/tech-stack` | Tech Stack — Animated logo grid with glow effects |
| `/certifications` | Certifications — Cards with modal preview and verification links |
| `/achievements` | Achievements — GitHub stats, contribution graph, animated counters |
| `/resume` | Resume — Full resume with download |
| `/gallery` | Gallery — Visual project gallery |
| `/contact` | Contact — Animated form with EmailJS, map, socials |
| `*` | Custom 404 |

## Features

- **Multi-page** — dedicated routes for every major section via React Router
- **3D Hero** — animated distorted icosahedron with particle field
- **Smooth Scroll** — Lenis-powered buttery scrolling
- **Custom Cursor** — magnetic ring + dot with hover states
- **Preloader** — animated loading screen
- **Aurora Background** — animated gradient blobs with noise texture
- **Glassmorphism** — frosted glass cards throughout
- **Page Transitions** — animated route transitions with Framer Motion
- **GitHub Integration** — live profile, repos, stars, and followers via GitHub API
- **Project Case Studies** — routed detail pages with architecture, challenges, and solutions
- **Resume Page** — full resume with download
- **Contact Form** — EmailJS-powered with validation and status animations
- **Command Palette** — ⌘K / Ctrl+K to navigate anywhere
- **Floating Dock** — quick navigation that appears on scroll
- **Theme Switcher** — dark / light mode
- **Responsive** — mobile to desktop
- **SEO** — meta tags, sitemap.xml, robots.txt, favicon

## Tech Stack

- React 18 (JSX)
- Vite
- Tailwind CSS
- Framer Motion
- Three.js + React Three Fiber + Drei
- Lenis (smooth scroll)
- React Router
- React Icons
- EmailJS

## Getting Started

```bash
npm install
npm run dev
```

## Building

```bash
npm run build
npm run preview
```

## EmailJS Setup

The contact form uses [EmailJS](https://www.emailjs.com/) to send emails without a backend.

1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. Set up an Email Service (Gmail, Outlook, etc.).
3. Create an Email Template with variables `from_name`, `from_email`, and `message`.
4. Copy your **Service ID**, **Template ID**, and **Public Key**.
5. Add them to a `.env` file in the project root:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

6. Restart the dev server. The contact form will now send real emails.

Until these keys are added, the form will show a configuration warning and will not send.

## GitHub Integration

The portfolio fetches live data from the GitHub API (no token required for public data). To change the username, update `githubUser` in `src/constants/data.js`.

## Customization

All content lives in `src/constants/data.js`:
- Personal info, bio, socials
- Skills categorized by domain
- Experience with responsibilities and achievements
- Projects with full case study details
- Certifications
- Tech stack

## Deployment (Vercel)

1. Push this repo to GitHub.
2. Import the repo at [vercel.com](https://vercel.com).
3. Add the EmailJS environment variables in Vercel project settings.
4. Deploy. The included `vercel.json` handles SPA routing.

## Project Structure

```
src/
├── components/
│   ├── background/   # Aurora, particles
│   ├── layout/       # Navbar, Footer, Dock, Command Palette
│   ├── sections/     # Hero
│   ├── three/        # 3D objects
│   └── ui/           # GlassCard, MagneticButton, PageHero, etc.
├── constants/        # Data
├── hooks/            # useTheme, useLenis, useMousePosition, useInView
├── pages/            # Home, About, Experience, Projects, ProjectDetail,
│                     # Skills, TechStack, Resume, Certifications,
│                     # Achievements, Gallery, Contact, NotFound
└── services/        # GitHub API, EmailJS
```
