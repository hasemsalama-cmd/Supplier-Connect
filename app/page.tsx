import Link from "next/link";
import { Nav } from "@/components/Nav";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-brand-50 to-white">
          <div className="mx-auto max-w-6xl px-4 py-20 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Connect buyers & suppliers
              <br />
              <span className="text-brand-600">for real projects</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Create RFQs for hotels, construction, and procurement. Message
              verified suppliers, negotiate, and close deals — all in one place.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/signup" className="btn btn-primary px-8 py-3 text-base">
                Get started free
              </Link>
              <Link href="/marketplace" className="btn btn-outline px-8 py-3 text-base">
                Browse marketplace
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="card p-6">
              <div className="mb-3 text-2xl">📋</div>
              <h3 className="font-semibold text-slate-900">Create RFQs</h3>
              <p className="mt-2 text-sm text-slate-600">
                Post detailed requests with quantity, location, budget, and
                specs. Reach relevant suppliers fast.
              </p>
            </div>
            <div className="card p-6">
              <div className="mb-3 text-2xl">💬</div>
              <h3 className="font-semibold text-slate-900">Direct messaging</h3>
              <p className="mt-2 text-sm text-slate-600">
                Threaded conversations between buyers and suppliers. Keep all
                project communication in one place.
              </p>
            </div>
            <div className="card p-6">
              <div className="mb-3 text-2xl">🏪</div>
              <h3 className="font-semibold text-slate-900">Marketplace</h3>
              <p className="mt-2 text-sm text-slate-600">
                Suppliers discover open RFQs by category and location. Buyers
                manage all their projects from one dashboard.
              </p>
            </div>
          </div>
        </section>

        {/* Demo callout */}
        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-12 text-center">
            <p className="text-sm text-slate-600">
              Demo seed includes a hotel furniture RFQ (60 solid oak dining
              tables, Singapore) and a live conversation between buyer &amp;
              supplier.
            </p>
            <Link
              href="/messages"
              className="mt-4 inline-block text-sm font-semibold text-brand-600 hover:underline"
            >
              View sample conversation →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
