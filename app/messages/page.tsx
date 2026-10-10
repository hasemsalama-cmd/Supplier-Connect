import Link from "next/link";
import { Nav } from "@/components/Nav";

const messages = [
  {
    id: "1",
    subject: "Dining table order for hotel project",
    counterpart: "Cairo Furniture Crafts",
    lastMessage:
      "Yes we can do custom dimensions. What sizes do you need and what is your target delivery date?",
    time: "2d ago",
    unread: true,
  },
];

const thread = [
  {
    id: "m1",
    from: "Sarah Chen",
    role: "Buyer",
    body: "Hi, we are furnishing a 50-room boutique hotel in Singapore. Interested in 60 solid oak dining tables. Do you do custom dimensions?",
    time: "Oct 8, 10:14",
    mine: true,
  },
  {
    id: "m2",
    from: "Ahmed Hassan",
    role: "Supplier",
    body: "Hello Sarah, yes we can do custom dimensions. What sizes do you need and what is your target delivery date?",
    time: "Oct 8, 14:32",
    mine: false,
  },
];

export default function MessagesPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">Messages</h1>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Conversation list */}
          <div className="card divide-y divide-slate-100 lg:col-span-1">
            {messages.map((m) => (
              <div
                key={m.id}
                className="p-4 hover:bg-slate-50 cursor-pointer border-l-4 border-brand-600"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="font-medium text-slate-900 truncate">{m.subject}</p>
                  {m.unread && (
                    <span className="h-2 w-2 rounded-full bg-brand-600 shrink-0" />
                  )}
                </div>
                <p className="text-sm text-slate-500">{m.counterpart}</p>
                <p className="mt-1 text-sm text-slate-600 line-clamp-2">{m.lastMessage}</p>
                <p className="mt-1 text-xs text-slate-400">{m.time}</p>
              </div>
            ))}
          </div>

          {/* Thread */}
          <div className="card flex flex-col lg:col-span-2 min-h-[420px]">
            <div className="border-b border-slate-100 px-5 py-4">
              <h2 className="font-semibold text-slate-900">
                Dining table order for hotel project
              </h2>
              <p className="text-sm text-slate-500">
                with Cairo Furniture Crafts · Cairo, Egypt
              </p>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto p-5">
              {thread.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.mine ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                      msg.mine
                        ? "bg-brand-600 text-white"
                        : "bg-slate-100 text-slate-900"
                    }`}
                  >
                    <p className="text-xs opacity-80 mb-1">
                      {msg.from} · {msg.role}
                    </p>
                    <p className="text-sm">{msg.body}</p>
                    <p className="mt-1 text-xs opacity-70">{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-100 p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Write a reply..."
                  className="flex-1 rounded-full border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                />
                <button className="btn btn-primary rounded-full px-5">Send</button>
              </div>
              <p className="mt-2 text-xs text-slate-400">
                Demo mode — connect a database to enable real messaging.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
