# Michael Mei — Portfolio

Personal portfolio and landing page.

## Stack

- **React 19** + **TypeScript**
- **Vite** — dev server and build tool
- **Tailwind CSS v4** — utility-first styling via `@tailwindcss/vite`

## Project Structure

```
portfolio/
└── personal-landing-page/
    ├── public/               # Static assets (resume, profile photo, video, favicon)
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.tsx
    │   │   ├── Hero.tsx
    │   │   ├── About.tsx
    │   │   ├── Skills.tsx
    │   │   ├── Experience.tsx
    │   │   ├── Life.tsx
    │   │   ├── Footer.tsx
    │   │   └── icons/        (DownloadIcon, GitHubIcon, EmailIcon)
    │   ├── App.tsx
    │   ├── main.tsx
    │   └── index.css         # Tailwind import + CSS variables (theme)
    └── index.html
```

## Getting Started

```bash
cd personal-landing-page
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `personal-landing-page/dist/`.
