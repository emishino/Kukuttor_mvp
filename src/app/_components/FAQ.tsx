"use client";

import { useState } from "react";

const QA = [
  { q: "本当に単発だけ？", a: "はい。MVPでは2〜8時間などの短時間案件に特化します（将来は連続案件も検討）。" },
  { q: "応募はどこまで本物？", a: "いまはLPのリード獲得段階です。応募はお問い合わせ（ダミー送信）で受け付け、順次ご案内します。" },
  { q: "手数料は？", a: "MVPでは無料。今後の正式版で手数料モデルを告知します。" },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-3xl px-4 py-14">
      <h2 className="text-2xl font-bold">よくある質問</h2>
      <div className="mt-6 divide-y rounded-2xl border bg-white">
        {QA.map((item, i) => (
          <details
            key={i}
            open={open === i}
            onClick={(e) => {
              e.preventDefault();
              setOpen(open === i ? null : i);
            }}
            className="group p-5 cursor-pointer"
          >
            <summary className="flex items-center justify-between list-none">
              <span className="font-medium">{item.q}</span>
              <span className="rounded-full border w-6 h-6 grid place-items-center text-sm">
                {open === i ? "−" : "+"}
              </span>
            </summary>
            <p className="mt-3 text-slate-600">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
