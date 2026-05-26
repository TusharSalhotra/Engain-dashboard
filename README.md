# Engain Homepage

A responsive Next.js landing page for Engain, a Reddit marketing software product. The page presents the product positioning, social proof, booking CTA, growth platform features, workflow steps, results, testimonials, supported business models, and footer content.

## Tech Stack

- Next.js 15
- React 19
- JavaScript / JSX
- CSS modules via global stylesheet
- `next/image` for optimized image rendering
- Lucide React icons
- Radix UI primitives for reusable UI controls

## Project Structure

```text
.
├── app/
│   ├── components/          # Landing page sections and shared components
│   ├── components/ui/       # Reusable UI primitives
│   ├── globals.css          # Main global styling
│   ├── layout.jsx           # Root layout and metadata
│   └── page.jsx             # Homepage composition
├── lib/
│   └── utils.js             # Shared utility helpers
├── public/
│   └── assets/              # Images and visual assets
├── next.config.mjs          # Next.js configuration
├── package.json             # Scripts and dependencies
└── package-lock.json        # Locked dependency versions
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the app in your browser:

```text
http://localhost:3000
```

The dev script enables `WATCHPACK_POLLING=true` and binds Next.js to `0.0.0.0`, which is useful for containerized or remote development environments.

## Available Scripts

```bash
npm run dev
```

Starts the Next.js development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Starts the production server after a successful build.

## Main Sections

- Hero section with navigation, CTAs, trust badge, feature bullets, and product preview
- Companies marquee
- Booking / demo CTA
- Growth platform overview
- How it works steps
- Results section
- Business model use cases
- Testimonials
- Feature highlights
- Final scaling CTA
- Footer

## Styling Notes

The project uses a custom global CSS file at `app/globals.css`. Brand colors, shadows, radii, and reusable CSS variables are defined in `:root`. Most layout and section styling is implemented through semantic class names used by the components in `app/components`.

## Assets

All static images are stored in `public/assets` and referenced with root-relative paths such as:

```jsx
<Image src="/assets/hero-background.png" alt="" />
```

When adding new images, place them in `public/assets` and reference them with `/assets/file-name.ext`.

## Deployment

This app can be deployed to any platform that supports Next.js, such as Vercel, Netlify, or a Node.js server.

For production:

```bash
npm run build
npm run start
```

## Notes for Contributors

- Keep new sections inside `app/components` and compose them from `app/page.jsx`.
- Reuse the existing `Button`, `Logo`, and UI primitives where possible.
- Keep static assets in `public/assets`.
- Update this README when scripts, setup steps, or project structure changes.
