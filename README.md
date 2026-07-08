# SoftwareSphere

A Next.js 14 marketing site + client dashboard, backed by Supabase (auth, database) and Resend (transactional email). Hosted on a self-managed GoDaddy VPS.

## Stack

- **Framework:** Next.js 14 (App Router), TypeScript
- **Styling:** Tailwind CSS
- **Auth & DB:** Supabase (`@supabase/ssr` for cookie-based auth in middleware/server components)
- **Email notifications:** Resend (optional — the contact/proposal forms still save to the database without it)
- **Process manager:** PM2
- **Reverse proxy / SSL:** nginx + Let's Encrypt (certbot)

## Project structure

```
app/
  api/contact/        # public contact form -> Supabase + optional email
  api/proposals/       # public project-proposal form -> Supabase + optional email
  auth/signup/          # signup page
  dashboard/            # logged-in area, gated by middleware.ts
components/
lib/
  rate-limit.ts        # in-memory rate limiter used by the public API routes
utils/supabase/         # Supabase client helpers (browser, server, middleware)
supabase/               # SQL to run in the Supabase SQL editor (schema + RLS)
deploy/
  GODADDY_DEPLOY.md     # full step-by-step VPS + SSL deployment guide
  setup.sh              # one-time VPS setup (Node, nginx, certbot, firewall, PM2)
  deploy.sh              # run on every future deploy
  nginx.conf              # reverse proxy config template
  ecosystem.config.js      # PM2 process config
```

## Environment variables

Copy `.env.example` to `.env.local` for local dev. In production these are set as real environment variables on the server (see the deploy guide) — never commit `.env.local`, it's already git-ignored.

| Variable | Required | Notes |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | yes | public |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | yes | public (anon key) |
| `SUPABASE_SERVICE_ROLE_KEY` (or `SUPABASE_SECRET_KEY`) | yes | server-only, bypasses RLS — never expose to the client |
| `RESEND_API_KEY` | optional | server-only, enables email notifications on form submit |
| `CONTACT_NOTIFY_EMAIL` | optional | address that receives notification emails |

## Database setup (once, in Supabase)

Run these in the Supabase SQL editor, in order:

1. `supabase/schema.sql` — creates `inquiries` (dashboard data, RLS scoped to the logged-in user)
2. `supabase/contact_schema.sql` — creates `contact_submissions` (no public policies; only the service-role key can write to it)

## Local development

```bash
npm ci
cp .env.example .env.local   # fill in real values
npm run dev
```

## Production build

```bash
npm ci
npm run build
```

`next.config.js` sets `output: 'standalone'`, producing a minimal `.next/standalone/server.js` with its own bundled dependencies — that's what actually runs on the VPS via PM2 (`deploy/ecosystem.config.js`).

## Security notes

- Row Level Security is enabled on every Supabase table; the public API routes use the service-role key deliberately (server-side only) to write to tables with no public insert policy.
- `middleware.ts` gates `/dashboard` behind an authenticated Supabase session.
- Contact/proposal API routes are rate-limited (5 requests / 10 minutes / IP) and validate input length + email format (`lib/rate-limit.ts`).
- `next.config.js` sets security headers (CSP, HSTS, X-Frame-Options, etc.) since these aren't added automatically outside Vercel.
- nginx strips any client-supplied `x-middleware-subrequest` header as extra defense-in-depth against Next.js middleware bypass issues.
- Full VPS hardening (firewall, SSL, non-root process) is covered in `deploy/GODADDY_DEPLOY.md`.

## Deployment

See **[`deploy/GODADDY_DEPLOY.md`](deploy/GODADDY_DEPLOY.md)** for the full step-by-step guide: DNS, VPS access, SSL, and going live.
