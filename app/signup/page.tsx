import Link from "next/link";
import { Nav } from "@/components/Nav";

export default function SignupPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-md px-4 py-16">
        <div className="card p-8">
          <h1 className="text-2xl font-bold text-slate-900 text-center">Create account</h1>
          <p className="mt-2 text-center text-sm text-slate-600">
            Join as a buyer or supplier
          </p>
          <form className="mt-8 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Full name</label>
              <input
                type="text"
                placeholder="Sarah Chen"
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">I am a...</label>
              <select className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500">
                <option value="BUYER">Buyer (hotel / project owner)</option>
                <option value="SUPPLIER">Supplier</option>
              </select>
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
              Create account
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-slate-600">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-brand-600 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
