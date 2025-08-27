"use client";

export default function ContactForm() {
  return (
    <form
      className="mt-6 grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        alert("送信ありがとうございました！（ダミー）");
      }}
    >
      <input required name="name" placeholder="お名前" className="rounded-xl border px-4 py-3" />
      <input required type="email" name="email" placeholder="メールアドレス" className="rounded-xl border px-4 py-3" />
      <textarea required name="message" placeholder="ご用件" rows={4} className="rounded-xl border px-4 py-3" />
      <button className="rounded-xl bg-blue-600 text-white px-5 py-3 font-medium hover:bg-blue-700">
        送信する（ダミー）
      </button>
    </form>
  );
}
