import Link from "next/link";
import { Nav } from "@/components/Nav";

export default function NewRfqPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-2xl px-4 py-8">
        <Link href="/rfqs" className="text-sm text-brand-600 hover:underline">
          ← Back to My RFQs
        </Link>
        <h1 className="mt-4 text-2xl font-bold text-slate-900">Create new RFQ</h1>
        <p className="text-slate-600 mb-8">
          Describe what you need. Suppliers will be able to respond.
        </p>

        <form className="card space-y-5 p-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Title
            </label>
            <input
              type="text"
              placeholder="e.g. Dining table order for hotel project"
              className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Category
            </label>
            <select className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500">
              <option>Furniture</option>
              <option>Lighting</option>
              <option>Textiles</option>
              <option>Flooring</option>
              <option>Other</option>
            </select>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Quantity
              </label>
              <input
                type="text"
                placeholder="e.g. 60 tables"
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Location
              </label>
              <input
                type="text"
                placeholder="e.g. Singapore"
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Budget range
            </label>
            <input
              type="text"
              placeholder="e.g. $40,000 – $55,000"
              className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Description
            </label>
            <textarea
              rows={4}
              placeholder="Specs, materials, delivery timeline, custom requirements..."
              className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button type="submit" className="btn btn-primary">
              Publish RFQ
            </button>
            <Link href="/rfqs" className="btn btn-outline">
              Cancel
            </Link>
          </div>
          <p className="text-xs text-slate-400">
            Demo form — wire to Prisma + API route for production saves.
          </p>
        </form>
      </main>
    </>
  );
}
