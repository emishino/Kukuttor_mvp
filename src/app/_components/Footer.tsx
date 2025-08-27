export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-500 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Kukuttor</p>
        <div className="flex gap-4">
          <a href="#contact" className="hover:underline">お問い合わせ</a>
          <a href="https://github.com/emishino/Kukuttor_mvp" className="hover:underline" target="_blank">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
