// src/app/page.tsx
import Nav from "./_components/Nav";
import Footer from "./_components/Footer";
import ContactForm from "./_components/ContactForm";

export default function Home() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-14">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              エンジニアの<span className="text-blue-600">スキマ時間</span>に、サクッと仕事。
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              Kukuttorは、短時間・単発のエンジニア案件を見つけて
              すぐ応募できるサービスのMVPです。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-white font-medium shadow hover:bg-blue-700"
              >
                まずはお問い合わせ
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-xl border px-5 py-3 font-medium hover:bg-slate-50"
              >
                特長を見る
              </a>
            </div>
          </div>
          <div className="border rounded-2xl p-6 shadow-sm">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 grid place-items-center">
              <span className="text-slate-500">案件カード UI モック</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-slate-50 border-y">
        <div className="mx-auto max-w-6xl px-4 py-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "単発・短時間", desc: "2〜8時間など、隙間時間で受けやすい案件。" },
            { title: "即応募", desc: "気になった案件にワンクリックで応募（予定）。" },
            { title: "スキルタグ", desc: "React / Python など保有スキルで簡単マッチ。" },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl bg-white p-6 shadow-sm border">
              <h3 className="font-bold text-lg">{f.title}</h3>
              <p className="mt-2 text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold">使い方（MVP）</h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-3">
          {["アカウント作成（予定）", "案件を検索", "気に入った案件に応募（予定）"].map((s, i) => (
            <li key={i} className="rounded-2xl border p-5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                {i + 1}
              </span>
              <p className="mt-3">{s}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Contact (dummy) */}
      <section id="contact" className="bg-white border-t">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <h2 className="text-2xl font-bold">お問い合わせ</h2>
          <p className="mt-2 text-slate-600">
            MVPのテスト参加・ご相談は以下から（送信はダミーです）。
          </p>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </>
  );
}
