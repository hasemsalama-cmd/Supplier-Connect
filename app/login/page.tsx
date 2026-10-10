import Link from "next/link";
import { Nav } from "@/components/Nav";

export default function LoginPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-md px-4 py-16">
        <div className="card p-8">
          <h1 className="text-2xl font-bold text-slate-900 text-center">Log in</h1>
          <p className="mt-2 text-center text-sm text-slate-600">
            Demo: use buyer@demo.com or supplier@demo.com
          </p>
          <form className="mt-8 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              />
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Log in
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-slate-600">
            No account?{" "}
            <Link href="/signup" className="font-semibold text-brand-600 hover:underline">
              Sign up
            </Link>
          </p>
          <p className="mt-4 text-xs text-center text-slate-400">
            Auth is UI-only for now. Wire NextAuth or Clerk for production.
          </p>
        </div>
      </main>
    </>
  );
}
