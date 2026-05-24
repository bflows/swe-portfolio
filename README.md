## Billy Flowers — Software Engineer Portfolio

Personal portfolio website built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. It’s designed to be fast, responsive, and easy to update—most content lives in `data/` so you can ship changes without touching UI components.

- **Live site**: [billyf-portfolio.vercel.app/](https://billyf-portfolio.vercel.app/)
- **Resume**: `public/files/billy-flowers-resume.pdf`
- **Contact**: [LinkedIn](https://www.linkedin.com/in/billyflowers) · [GitHub](https://github.com/flowz0) · `billylflowers@gmail.com` 

## Highlights

- **Data-driven content**: update projects/experience/skills via `data/*.ts`
- **Component-based sections**: `Hero`, `Projects`, `Skills`, `About`, `Experience`
- **Modern UI stack**: Tailwind v4, icon system via `react-icons`
- **Production-ready scripts**: `dev`, `build`, `start`, `lint`

## Tech stack

- **Framework**: Next.js
- **Language**: TypeScript
- **UI**: React, Tailwind CSS
- **Icons**: React Icons (Lucide Icons)
- **Tooling**: ESLint

## Site sections

The homepage is composed in `app/page.tsx`:

- **Hero**: name, role, quick links (projects + resume)
- **Featured Projects**
- **Skills**
- **About**
- **Experience**

## Updating content

Most edits are simple data changes:

- **Projects**: `data/projects.ts`
- **Skills**: `data/skills.ts`
- **About cards**: `data/about.ts`
- **Experience**: `data/experiences.ts`
- **Footer links**: `data/footer.ts`

To update your resume, replace:

- `public/files/billy-flowers-resume.pdf`

## Getting started

### Prerequisites

- Node.js (LTS recommended)

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open `http://localhost:3000`.

## Scripts

```bash
npm run dev     # start dev server
npm run build   # create production build
npm run start   # run production server
npm run lint    # run eslint
```

## Deployment (Vercel)

- Import the repo into Vercel
- Use the defaults:
  - **Build Command**: `next build`
  - **Output**: Next.js default

## Repository notes

- This is a personal portfolio codebase, so I’m not currently accepting contributions.

## License

No license is provided. If you want others to reuse parts of this repo, add an appropriate license (MIT, Apache-2.0, etc.).