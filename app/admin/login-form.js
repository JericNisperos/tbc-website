"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        startTransition(() => router.refresh());
      } else {
        const body = await res.json().catch(() => ({}));
        setError(body.error || "Login failed");
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="menu-card hard-shadow-sm w-full max-w-sm"
      >
        <h1 className="font-display text-headline-md uppercase mb-6 border-b-2 border-primary pb-2 font-bold">
          Admin Login
        </h1>
        <label className="block mb-2 font-mono text-[12px] uppercase tracking-widest text-on-surface-variant">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
          required
          className="w-full border-2 border-primary rounded p-2 font-mono text-base mb-4 focus:outline-none focus:border-tertiary"
        />
        {error && (
          <p className="font-mono text-[12px] text-tertiary mb-4">{error}</p>
        )}
        <button
          type="submit"
          disabled={submitting || pending}
          className="w-full bg-primary text-on-primary font-mono text-label-caps uppercase py-3 rounded hover:opacity-90 disabled:opacity-50"
        >
          {submitting || pending ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
