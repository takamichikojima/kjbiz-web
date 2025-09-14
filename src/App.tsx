import { useRef, useEffect, useState } from "react";
import type { SVGProps, ReactNode } from "react";

/** App */
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-white to-white text-slate-800 overflow-x-hidden">
      {/* NAV (高さ固定: 56px) */}
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo />
            <div>
              <div className="font-semibold tracking-tight">KOJIMA DIGITAL WORKS</div>
              <div className="text-xs text-slate-500">Manufacturing × IT</div>
            </div>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#profile" className="hover:underline">プロフィール</a>
            <a href="#cases" className="hover:underline">PLM領域事例</a>
            <a href="#contact" className="hover:underline">問い合わせ</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 size-80 bg-[var(--primary)]/15 blur-3xl rounded-full" />
        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
          <div>
            <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-wide leading-tight">
              経営と現場をブリッジする高解像度DX支援
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              IT技術力×マネジメント力で成果まで最短距離。抽象課題の合意形成→仕組み化→定着まで伴走します。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:takamichi.kojima@kjbiz.jp" className="soft-btn-primary">
                無料相談 <ArrowRight className="size-4" />
              </a>
            </div>

            <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-sm text-slate-600">
              {[
                "Product Lifecycle Management (PLM)",
                "Configure Price Quote (CPQ)",
                "Infrastructure-as-Code & Self-Service Platform",
                "No/Low-Code CoE & Platform Operations",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="size-4 text-emerald-600" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROFILE */}
      <section id="profile" className="py-14 bg-slate-50/70 border-y scroll-mt-[60px]">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 items-start">
          {/* 左カラム：本文 */}
          <div className="md:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">プロフィール</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              大手外資系IT企業にて、PLM導入(リプレース)を起点とした業務プロセス改善／開発生産性向上／設計製造業務のデータ整流化プロジェクトを牽引。
              製造業や社会インフラ企業向けに ID管理／データ分析基盤／CPQシステム／Microsoft製品の導入展開 など情報系領域のプロジェクトも多数推進。<br />
              <a
                href="https://www.credly.com/badges/f27dda23-ce48-469f-ba4a-3915a353d573"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                Project Management Professional (PMP)® 認定
              </a>
            </p>
          </div>

          {/* 右カラム：提供価値 */}
          <div className="soft-card p-6 text-sm text-slate-600 space-y-2">
            <div className="font-medium text-slate-800">提供価値</div>
            <ul className="list-disc ml-5 space-y-1">
              <li>未開の技術領域へもディープダイブ可能な技術力</li>
              <li>事例のない取組でもプロジェクトを完遂できるPM力</li>
              <li>定着まで現場密着で伴走する運用・教育・改善力</li>
            </ul>
          </div>

          {/* 下段フル幅：TechScroller（= 右カード領域まで使う） */}
          <div className="md:col-span-3">
            <TechScroller
              items={[
                "Aras Innovator",
                "HOOPS Communicator",
                "Azure/AWS",
                ".NET/C#",
                "Power Apps/Automate",
                "Power BI",
                "Microsoft 365",
                "SharePoint / Hosted Add-in",
                "Excel VSTO/VBA",
                "Python",
                "Ansible",
                "Apache Solr/Tika",
              ]}
            />
          </div>
        </div>
      </section>

      {/* PLM領域 */}
      <section id="cases" className="py-14 bg-slate-50/70 scroll-mt-[60px]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">PLM領域</h2>
          <ul className="mt-6 space-y-2 text-slate-700 list-disc list-inside">
            <li>ディスクリート型製造業：メカ／エレキ／ソフト混成BOM管理改善</li>
            <li>AQイベント（品質ゲート・承認プロセス）／法規制対応効率化</li>
            <li>EOL対応／設計製造BOM連携（BOP）</li>
            <li>設計変更管理プロセス改善</li>
          </ul>
          <p className="mt-3 text-slate-700 leading-relaxed">
            業務部門主導のプロジェクトにおいて、事業部長級から現場担当者まで幅広いステークホルダーと直接協働し、
            Aras Innovatorを基盤にアジャイル型で実装・定着をリード。アーキテクトとして新興PLM製品への
            ネイティブCAD対応・3D可視化機能導入の支援実績あり。
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-14 bg-slate-50/70 border-t scroll-mt-[60px]">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">お問い合わせ</h2>
            <p className="mt-3 text-slate-600">オンライン相談（無料）を承ります。下記からご連絡ください。</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:takamichi.kojima@kjbiz.jp" className="soft-btn-primary">
                <Mail className="size-4" /> メール
              </a>
              <a
                href="https://www.linkedin.com/in/takamichi-k-2a9382ba/"
                target="_blank"
                rel="noopener noreferrer"
                className="soft-btn-ghost flex items-center gap-2"
              >
                <LinkedInIcon className="size-4 text-[#0A66C2]" /> LinkedIn
              </a>
            </div>
          </div>
          <div className="soft-card p-6 text-sm text-slate-600 space-y-3">
            <div className="font-medium text-slate-800">想定プロジェクト</div>
            <ul className="list-disc ml-5 space-y-1">
              <li>PLM製品導入に伴う技術選定/機能要件・設計</li>
              <li>3D × BOM Webビューア設計/ベンダー外部調整</li>
              <li>サイロ化したマクロの再設計(アドイン/ノーコード化)</li>
              <li>クラウド基盤をベースにしたWEB構築と運用支援</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t bg-white/60">
        <div className="max-w-6xl mx-auto px-4 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} KOJIMA DIGITAL WORKS</div>
          <div className="flex gap-4">
            <a
              href="https://github.com/takamichikojima"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub（公開ツール/コード集）
            </a>
            <a
              href="https://www.linkedin.com/in/takamichi-k-2a9382ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
            <a href="mailto:takamichi.kojima@kjbiz.jp" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ------- sub components ------- */
function Logo() {
  return (
    <img
      src={`${import.meta.env.BASE_URL}favicon.svg`}
      alt="Logo"
      className="size-9 rounded-2xl max-w-full h-auto"
    />
  );
}

export function MacWindow({ children }: { children: ReactNode }) {
  return (
    <div className="soft-card overflow-hidden">
      <div className="h-9 flex items-center gap-1 px-3 border-b bg-white/60 backdrop-blur" style={{ borderColor: "var(--border)" }}>
        <div className="size-3 rounded-full bg-red-400" />
        <div className="size-3 rounded-full bg-yellow-400" />
        <div className="size-3 rounded-full bg-green-400" />
        <div className="ml-2 text-xs text-slate-500">Preview</div>
      </div>
      {children}
    </div>
  );
}
export function Card({ title, points }: { title: string; points: string[] }) {
  return (
    <div className="soft-card p-5">
      <div className="font-semibold text-lg">{title}</div>
      <ul className="mt-3 space-y-2 text-sm text-slate-600">
        {points.map((p) => (
          <li key={p} className="flex gap-2"><span>•</span><span>{p}</span></li>
        ))}
      </ul>
    </div>
  );
}
export function KPI({ kpi, text }: { kpi: string; text: string }) {
  return (
    <div className="soft-card p-6">
      <div className="text-3xl font-extrabold text-primary">{kpi}</div>
      <p className="mt-2 text-slate-600 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

/* ------- tiny inline icons ------- */
function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Check(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
export function Sparkle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 2l2.2 5.8L20 10l-5.8 2.2L12 18l-2.2-5.8L4 10l5.8-2.2L12 2z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" className="text-primary" />
    </svg>
  );
}
function Mail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" fill="none" />
    </svg>
  );
}
function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6V24h-4v-7.5c0-1.8 0-4.1-2.5-4.1s-2.9 1.9-2.9 3.9V24h-4V8.5z" />
    </svg>
  );
}
export function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 9h18" />
    </svg>
  );
}

/* ------- tech scroller ------- */
function TechScroller({ items }: { items: string[] }) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [canL, setCanL] = useState(false);
  const [canR, setCanR] = useState(false);

  const update = () => {
    const el = wrapRef.current;
    if (!el) return;
    setCanL(el.scrollLeft > 0);
    setCanR(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    update();
    const el = wrapRef.current;
    if (!el) return;
    const on = () => update();
    el.addEventListener("scroll", on, { passive: true });
    const r = new ResizeObserver(on);
    r.observe(el);
    return () => { el.removeEventListener("scroll", on); r.disconnect(); };
  }, []);

  const slide = (dir: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const firstChip = el.querySelector<HTMLElement>("[data-chip='1']");
    const step = firstChip ? firstChip.getBoundingClientRect().width + 8 : 140;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    /* モバイルは左右端まで指が届くように -mx-4、スクロールバーは完全非表示 */
    <div className="relative mt-2 -mx-4 px-4 sm:mx-0 sm:px-0">
      {/* フェード（左右） */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent" />

      {/* トラック：スクロールバー非表示 */}
      <div
        ref={wrapRef}
        className="no-scrollbar overflow-x-auto overscroll-x-contain snap-x snap-mandatory"
        onWheel={(e) => {
          if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            e.currentTarget.scrollLeft += e.deltaY;
          }
        }}
      >
        <div className="flex gap-2 py-1 pr-10 min-w-max">
          {items.map((t, i) => (
            <span
              key={t}
              data-chip={i === 0 ? "1" : "0"}
              className="px-3 py-1 rounded-full text-xs border whitespace-nowrap snap-start bg-white/90 backdrop-blur"
              style={{ borderColor: "var(--border)" }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ナビゲーションボタン（重ならないよう内側に固定） */}
      <button
        type="button"
        aria-label="prev"
        onClick={() => slide(-1)}
        disabled={!canL}
        className="absolute left-1 top-1/2 -translate-y-1/2 size-8 grid place-items-center rounded-full border bg-white shadow disabled:opacity-30"
        style={{ borderColor: "var(--border)" }}
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="next"
        onClick={() => slide(1)}
        disabled={!canR}
        className="absolute right-1 top-1/2 -translate-y-1/2 size-8 grid place-items-center rounded-full border bg-white shadow disabled:opacity-30"
        style={{ borderColor: "var(--border)" }}
      >
        ›
      </button>
    </div>
  );
}
