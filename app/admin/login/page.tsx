"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setError("");

    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-[#FFF9F0] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="spiritual-card p-8">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">ॐ</div>

            <h1 className="text-2xl font-bold text-[#451A03]">
              गुरुजी Admin Login
            </h1>

            <div className="gold-line" />

            <p className="text-sm text-[#7F1D1D]">
              सुरक्षित प्रशासन पॅनेलमध्ये प्रवेश करा
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-[#D6C4A8] bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#D97706]"
                placeholder="admin@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold mb-2"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-[#D6C4A8] bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#D97706]"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div
                role="alert"
                className="rounded-xl bg-red-50 border border-red-200 p-3 text-sm text-red-700"
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-[#7F1D1D] px-5 py-3 font-semibold text-white transition hover:bg-[#5F1515] disabled:opacity-60"
            >
              {loading ? "Login होत आहे..." : "Admin Login"}
            </button>
          </form>

          <p className="text-center text-xs text-gray-500 mt-6">
            गुरुजी धार्मिक सेवा
          </p>
        </div>
      </div>
    </main>
  );
}
