"use client";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="/" className="font-extrabold text-xl tracking-tight">Kukuttor</a>
        <nav className="hidden sm:flex gap-6 text-sm">
          <a href="#features" className="hover:underline">特長</a>
          <a href="#how" className="hover:underline">使い方</a>
          <a href="#contact" className="hover:underline">お問い合わせ</a>
          <a href="#" className="rounded-xl px-3 py-1.5 border hover:bg-slate-50">ログイン（予定）</a>
        </nav>
      </div>
    </header>
  );
}
