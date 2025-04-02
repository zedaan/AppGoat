This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# My websitie Link
https://app-goat-p51g.vercel.app/

# Collecting workspace information# Tech Stack in Goat Notes

Based on the code and configuration files in your workspace, here's the comprehensive tech stack:

## Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React version
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS
- **Sonner** - Toast notifications library
- **next-themes** - Theme management (dark/light mode)

## UI Components
- **shadcn/ui** - Component collection built on Radix UI
- **Radix UI** - Unstyled, accessible components
- **Lucide React** - Icon library
- **class-variance-authority** - For component variants
- **tailwind-merge** - For conditional class merging

## Backend & Data
- **Supabase** - Backend-as-a-Service
  - Authentication
  - PostgreSQL database
- **Prisma v6** - ORM for database access
- **OpenAI** - AI integration for the "Ask AI" feature

## Development Tools
- **PNPM** - Package manager
- **Biome** - Linter/formatter
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Turbopack** - Fast dev server (used with `next dev --turbopack`)

## Deployment
- **Vercel** - Hosting platform (mentioned in README)

The application is a modern note-taking app with AI features, using a React/Next.js frontend with a Supabase backend, and has toast notifications powered by Sonner.