import Nav from "./_components/Nav";
import Footer from "./_components/Footer";
import ContactForm from "./_components/ContactForm";
import JobList from "./_components/JobList";
import FAQ from "./_components/FAQ";
import CTA from "./_components/CTA";
import { Timer, Sparkles, Tags } from "lucide-react"; 
import Roadmap from "./_components/Roadmap";
export default function Home() {
  return (
    <>
      <Nav />

      {/* Hero */}
<section className="relative overflow-hidden">
  {/* 背景デコレーション（ふわっと光るブロブ） */}
  <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
    <div className="absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-blue-100 blur-3xl opacity-60" />
    <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-indigo-100 blur-3xl opacity-60" />
    <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-200/60 to-indigo-200/60 blur-2xl" />
  </div>

  <div className="mx-auto max-w-6xl px-4 pt-28 pb-20">
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
      {/* Copy */}
      <div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1]">
          エンジニアの
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            スキマ時間
          </span>
          に、サクッと仕事。
        </h1>
        <p className="mt-5 text-lg text-slate-600">
          Kukuttorは、短時間・単発のエンジニア案件を見つけて
          すぐ応募できるサービスのMVPです。
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-white font-medium shadow hover:shadow-md hover:bg-blue-700 transition"
          >
            まずはお問い合わせ
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-xl border px-5 py-3 font-medium hover:bg-white/70 backdrop-blur"
          >
            特長を見る
          </a>
        </div>

        {/* 信頼バッジ */}
        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-500">
          <span className="rounded-full border px-3 py-1 bg-white/70 backdrop-blur">即日～短時間OK</span>
          <span className="rounded-full border px-3 py-1 bg-white/70 backdrop-blur">リモート中心</span>
          <span className="rounded-full border px-3 py-1 bg-white/70 backdrop-blur">スキルタグで楽マッチ</span>
        </div>
      </div>

      {/* モック枠を派手に */}
      <div className="relative">
        <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-tr from-blue-200 to-indigo-200 blur-2xl opacity-60" />
        <div className="rounded-2xl border bg-white/70 p-6 shadow-lg backdrop-blur">
          <div className="aspect-video rounded-xl grid place-items-center border bg-gradient-to-br from-slate-50 to-slate-100">
            <span className="text-slate-500">案件カード UI モック</span>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="h-3 rounded bg-slate-200" />
            <div className="h-3 rounded bg-slate-200" />
            <div className="h-3 rounded bg-slate-200" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Features */}
<section id="features" className="bg-slate-50 border-y">
  <div className="mx-auto max-w-6xl px-4 py-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {[
      { Icon: Timer, title: "単発・短時間", desc: "2〜8時間など、隙間時間で受けやすい案件。" },
      { Icon: Sparkles, title: "即応募", desc: "気になった案件にワンクリックで応募（予定）。" },
      { Icon: Tags, title: "スキルタグ", desc: "React / Python など保有スキルで簡単マッチ。" },
    ].map(({ Icon, title, desc }) => (
      <div key={title} className="rounded-2xl bg-white p-6 shadow-sm border">
        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="mt-2 text-slate-600">{desc}</p>
      </div>
    ))}
  </div>
</section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold">使い方（MVP）</h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-3">
          {["アカウント作成（予定）", "案件を検索", "気に入った案件に応募（予定）"].map(
            (s, i) => (
              <li key={i} className="rounded-2xl border p-5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                  {i + 1}
                </span>
                <p className="mt-3">{s}</p>
              </li>
            )
          )}
        </ol>
      </section>
<JobList />
<Roadmap />
<FAQ />
<CTA />
      {/* Contact */}
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
