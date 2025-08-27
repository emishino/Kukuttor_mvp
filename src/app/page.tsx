import Nav from "./_components/Nav";
import Footer from "./_components/Footer";

import Nav from "./_components/Nav";
import Footer from "./_components/Footer";
import ContactForm from "./_components/ContactForm"; // ← 追加

export default function Home() {
  return (
    <>
      <Nav />
      {/* ...中略... */}
      <section id="contact" className="bg-white border-t">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <h2 className="text-2xl font-bold">お問い合わせ</h2>
          <p className="mt-2 text-slate-600">MVPのテスト参加・ご相談は以下から（送信はダミーです）。</p>
          <ContactForm />   {/* ← これに差し替え */}
        </div>
      </section>
      <Footer />
    </>
  );
}
