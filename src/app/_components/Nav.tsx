"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <nav className="flex items-center justify-between rounded-2xl border bg-white/60 px-4 py-2 shadow-sm backdrop-blur">
          <Link href="#" className="font-extrabold tracking-tight">
            <span className="text-slate-900">Kukuttor</span>
          </Link>

          <button className="sm:hidden p-2" onClick={() => setOpen(!open)} aria-label="menu">
            <Menu className="h-5 w-5" />
          </button>

          <ul className="hidden sm:flex items-center gap-6 text-sm">
            <li><a href="#features" className="hover:text-blue-600">特長</a></li>
            <li><a href="#how" className="hover:text-blue-600">使い方</a></li>
            <li><a href="#contact" className="rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">お問い合わせ</a></li>
          </ul>
        </nav>

        {/* SP ドロワー */}
        {open && (
          <div className="sm:hidden mt-2 rounded-2xl border bg-white/90 p-3 shadow-sm backdrop-blur">
            <a href="#features" className="block px-2 py-2 rounded-lg hover:bg-slate-50">特長</a>
            <a href="#how" className="block px-2 py-2 rounded-lg hover:bg-slate-50">使い方</a>
            <a href="#contact" className="mt-2 block rounded-xl bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-700">お問い合わせ</a>
          </div>
        )}
      </div>
    </header>
  );
}
