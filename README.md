# Supplier Connect

B2B supplier marketplace & messaging platform for project RFQs (hotels, construction, procurement).

## Features

- **Roles**: Buyer (hotels / project owners) and Supplier
- **RFQs / Projects**: Create requests with category, quantity, location, budget
- **Messaging**: Threaded conversations between buyers and suppliers
- **Marketplace**: Browse open RFQs (suppliers) or manage your projects (buyers)
- **Dashboard**: Overview of active RFQs, messages, and activity

## Stack

- Next.js 15 (App Router) + TypeScript
- Prisma + PostgreSQL (Neon recommended)
- Tailwind CSS
- Ready for Vercel deploy

## Quick start

```bash
npm install
cp .env.example .env   # set DATABASE_URL
npx prisma db push
npm run db:seed
npm run dev
```

Open http://localhost:3000

## Deploy on Vercel

1. Import this repo on Vercel
2. Add `DATABASE_URL` (Neon free tier works great)
3. Deploy

## Demo accounts (after seed)

- Buyer: `buyer@demo.com` / `demo123`
- Supplier: `supplier@demo.com` / `demo123`
