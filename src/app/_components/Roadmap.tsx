export default function Roadmap() {
  const items = [
    { title: "v0.1（今）", desc: "LP・問い合わせ・案件カード（モック）" },
    { title: "v0.2", desc: "応募フロー（フォーム→Notion/Slack連携）" },
    { title: "v0.3", desc: "認証＆プロフィール（スキルタグ・希望時間）" },
    { title: "v0.4", desc: "簡易マッチング（タグ一致・直近時間）」" },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="text-2xl font-bold">ロードマップ</h2>
      <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <li key={it.title} className="rounded-2xl border p-5 bg-white">
            <p className="text-sm text-slate-500">{it.title}</p>
            <p className="mt-2 font-medium">{it.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
