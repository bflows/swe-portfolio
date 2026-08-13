## Software Engineer Portfolio

Personal portfolio website built with **Next.js**, **TypeScript**, and **Tailwind CSS**. It’s designed to be fast, responsive, and easy to update. Most content lives in `data/` to easily ship changes without touching UI components.

- **Live site**: [billyf-portfolio.vercel.app/](https://billyf-portfolio.vercel.app/)
- **Resume**: `public/files/billy-flowers-resume.pdf`
- **Contact**: [LinkedIn](https://www.linkedin.com/in/billyflowers) · [GitHub](https://github.com/flows0) · `billylflowers@gmail.com` 

## Tech stack

- **Framework**: Next.js
- **Language**: TypeScript
- **UI**: React, Tailwind CSS
- **Icons**: React Icons (Lucide Icons)
- **Tooling**: ESLint

## Site sections

The homepage is composed in `app/page.tsx`:

- **Navbar**
- **Hero**
- **Projects**
- **Skills**
- **About**
- **Experience**
- **Footer**

## Updating content

Most edits are simple data changes:

- **Nav Links**: `components/layout/Navbar.tsx`
- **Projects**: `data/projects.ts`
- **Skills**: `data/skills.ts`
- **Experience**: `data/experiences.ts`
- **Footer links**: `data/footer.ts`

To update resume replace:

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

## License

Copyright © 2026 Billy Flowers. All rights reserved.

This repository is provided for portfolio purposes only. No license is granted to copy, modify, distribute, or reuse any part of this project including code, design, content, or assets without prior written permission.