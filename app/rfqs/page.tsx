import Link from "next/link";
import { Nav } from "@/components/Nav";

const myRfqs = [
  {
    id: "demo-rfq-1",
    title: "Dining table order for hotel project",
    category: "Furniture",
    location: "Singapore",
    status: "OPEN",
    responses: 1,
    created: "2 days ago",
  },
];

export default function RfqsPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">My RFQs</h1>
            <p className="text-slate-600">Projects and requests you have created</p>
          </div>
          <Link href="/rfqs/new" className="btn btn-primary">
            + New RFQ
          </Link>
        </div>

        <div className="card divide-y divide-slate-100">
          {myRfqs.map((r) => (
            <div key={r.id} className="flex flex-col sm:flex-row sm:items-center gap-4 p-5">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                    {r.status}
                  </span>
                  <span className="text-xs text-slate-400">{r.category}</span>
                </div>
                <h3 className="font-semibold text-slate-900">{r.title}</h3>
                <p className="text-sm text-slate-500 mt-0.5">
                  📍 {r.location} · {r.responses} response · {r.created}
                </p>
              </div>
              <div className="flex gap-2">
                <Link href="/messages" className="btn btn-outline text-sm">
                  Messages
                </Link>
                <Link href={`/rfqs/${r.id}`} className="btn btn-primary text-sm">
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
