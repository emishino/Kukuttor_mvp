export type Job = {
  id: string;
  title: string;
  company: string;
  pay: string;            // 例: "¥4,000/時"
  duration: string;       // 例: "4時間"
  skills: string[];       // 例: ["Next.js", "Tailwind"]
  description: string;
};

const jobs: Job[] = [
  {
    id: "1",
    title: "LP改修（レスポンシブ）",
    company: "スタートアップA",
    pay: "¥4,000/時",
    duration: "4〜6時間",
    skills: ["HTML/CSS", "Tailwind", "GitHub"],
    description: "既存LPのレスポンシブ最適化と微修正。Figmaあり。",
  },
  {
    id: "2",
    title: "ToDoアプリ機能追加",
    company: "SaaS B",
    pay: "¥5,000/時",
    duration: "6時間",
    skills: ["React", "Firebase"],
    description: "締切・優先度などのCRUD拡張。簡単なUI改善も。",
  },
  {
    id: "3",
    title: "スクレイピング自動化",
    company: "代理店C",
    pay: "¥4,500/時",
    duration: "3〜5時間",
    skills: ["Python", "BeautifulSoup"],
    description: "ECの価格情報収集→CSV出力のワークフロー構築。",
  },
];

export default function JobList() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="text-2xl font-bold">募集中の単発案件（サンプル）</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((j) => (
          <article key={j.id} className="rounded-2xl border bg-white p-5 shadow-sm">
            <h3 className="font-bold text-lg">{j.title}</h3>
            <p className="mt-1 text-slate-500">{j.company}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              <span className="rounded-full border px-2 py-0.5">{j.pay}</span>
              <span className="rounded-full border px-2 py-0.5">{j.duration}</span>
            </div>
            <p className="mt-3 text-slate-600 text-sm">{j.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {j.skills.map((s) => (
                <span key={s} className="rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-700 border border-blue-100">
                  {s}
                </span>
              ))}
            </div>
            <a href="#contact" className="mt-4 inline-flex rounded-xl border px-3 py-2 text-sm hover:bg-slate-50">
              この案件に興味あり
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
