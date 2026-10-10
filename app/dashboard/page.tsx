import Link from "next/link";
import { Nav } from "@/components/Nav";

const stats = [
  { label: "Open RFQs", value: "3", href: "/rfqs" },
  { label: "Unread messages", value: "2", href: "/messages" },
  { label: "Active conversations", value: "1", href: "/messages" },
  { label: "Suppliers contacted", value: "4", href: "/marketplace" },
];

const recent = [
  {
    id: "1",
    title: "Dining table order for hotel project",
    party: "Cairo Furniture Crafts",
    preview: "Yes we can do custom dimensions. What sizes do you need...",
    time: "2d ago",
  },
];

export default function DashboardPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
            <p className="text-slate-600">Overview of your RFQs and conversations</p>
          </div>
          <Link href="/rfqs/new" className="btn btn-primary">
            + New RFQ
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <Link key={s.label} href={s.href} className="card p-5 hover:border-brand-300 transition">
              <p className="text-sm text-slate-500">{s.label}</p>
              <p className="mt-1 text-3xl font-bold text-slate-900">{s.value}</p>
            </Link>
          ))}
        </div>

        <section className="mt-10">
          <h2 className="mb-4 text-lg font-semibold">Recent activity</h2>
          <div className="card divide-y divide-slate-100">
            {recent.map((r) => (
              <Link
                key={r.id}
                href="/messages"
                className="flex items-start gap-4 p-4 hover:bg-slate-50"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700 font-semibold">
                  CF
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-medium text-slate-900 truncate">{r.title}</p>
                    <span className="text-xs text-slate-400 shrink-0">{r.time}</span>
                  </div>
                  <p className="text-sm text-slate-500">{r.party}</p>
                  <p className="mt-0.5 text-sm text-slate-600 truncate">{r.preview}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
