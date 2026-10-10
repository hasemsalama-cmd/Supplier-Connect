import Link from "next/link";
import { Nav } from "@/components/Nav";

const rfqs = [
  {
    id: "demo-rfq-1",
    title: "Dining table order for hotel project",
    category: "Furniture",
    location: "Singapore",
    quantity: "60 tables",
    budget: "$40k – $55k",
    company: "Pacific Imports & Boutique Hotels",
    status: "OPEN",
  },
  {
    id: "2",
    title: "Lobby lighting package – 80 fixtures",
    category: "Lighting",
    location: "Dubai, UAE",
    quantity: "80 units",
    budget: "$25k – $35k",
    company: "Desert Pearl Hotels",
    status: "OPEN",
  },
  {
    id: "3",
    title: "Outdoor lounge furniture set",
    category: "Furniture",
    location: "Bali, Indonesia",
    quantity: "12 sets",
    budget: "$15k – $22k",
    company: "Island Retreat Group",
    status: "OPEN",
  },
];

export default function MarketplacePage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">Marketplace</h1>
          <p className="text-slate-600">
            Open RFQs from buyers. Suppliers can respond and start conversations.
          </p>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {["All", "Furniture", "Lighting", "Textiles", "Flooring"].map((cat) => (
            <button
              key={cat}
              className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                cat === "All"
                  ? "bg-brand-600 text-white"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-brand-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-4">
          {rfqs.map((r) => (
            <div key={r.id} className="card p-5 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                    {r.status}
                  </span>
                  <span className="text-xs text-slate-400">{r.category}</span>
                </div>
                <h3 className="font-semibold text-slate-900">{r.title}</h3>
                <p className="text-sm text-slate-500 mt-0.5">{r.company}</p>
                <div className="mt-2 flex flex-wrap gap-3 text-sm text-slate-600">
                  <span>📍 {r.location}</span>
                  <span>📦 {r.quantity}</span>
                  <span>💰 {r.budget}</span>
                </div>
              </div>
              <Link
                href={`/messages?rfq=${r.id}`}
                className="btn btn-primary shrink-0"
              >
                Respond
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
