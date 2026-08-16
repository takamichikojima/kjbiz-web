import type { SVGProps } from 'react'

const products = [
  {
    number: '01',
    category: 'Excel / VBA',
    title: 'Simple-Excel-WBS',
    description: 'MS Projectは少し大げさ。Excelだけで、予定・実績・遅延を見える化するWBSテンプレート。',
    points: ['L1〜L3のタスク階層', '計画・実績・ステータス管理', 'ブック内に使い方を収録'],
    href: 'https://github.com/takamichikojima/Simple-Excel-WBS',
    downloadHref: 'https://github.com/takamichikojima/Simple-Excel-WBS/releases/latest/download/Simple-Excel-WBS-v1.0.0.xlsm',
  },
  {
    number: '02',
    category: 'PowerShell / Windows',
    title: 'Simple-TextLogMonitoring',
    description: 'ログファイルをリアルタイム監視し、条件に一致したメッセージをメールで知らせる軽量ツール。',
    points: ['複数ログの同時監視', '正規表現による検出', '再起動後も監視位置を継続'],
    href: 'https://github.com/takamichikojima/Simple-TextLogMonitoring',
    downloadHref: 'https://github.com/takamichikojima/Simple-TextLogMonitoring/releases/latest/download/Simple-TextLogMonitoring-v1.0.0.zip',
  },
  {
    number: '03',
    category: 'IIS / Network',
    title: 'Simple-InfraSiteSeedTest',
    description: '社内サーバーまでの速度・遅延・ジッターを、ブラウザから測定できるイントラネット向けツール。',
    points: ['ダウンロード速度測定', 'RTT・ジッター計測', 'クライアント情報の表示'],
    href: 'https://github.com/takamichikojima/Simple-InfraSiteSeedTest',
    downloadHref: 'https://github.com/takamichikojima/Simple-InfraSiteSeedTest/releases/latest/download/Simple-InfraSiteSeedTest-v1.0.0.zip',
  },
]

export default function SimpleApp() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-slate-100 via-white to-emerald-50/40 text-slate-800">
      <header className="border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <a href="/simple/" className="flex items-center gap-3" aria-label="Simpleシリーズ トップ">
            <span className="grid size-9 place-items-center rounded-2xl bg-primary font-bold text-white">S</span>
            <div>
              <div className="font-bold tracking-tight">Simpleシリーズ</div>
              <div className="text-xs text-slate-500">Practical open-source tools</div>
            </div>
          </a>
          <a href="/" className="text-sm font-medium text-slate-600 hover:text-primary hover:underline">
            事業紹介サイトへ
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-[var(--primary)]/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 left-1/3 size-72 rounded-full bg-emerald-200/30 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
            <div className="max-w-4xl">
              <div className="soft-badge">OPEN SOURCE TOOLS</div>
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-6xl">Simpleシリーズ</h1>
              <p className="mt-6 text-2xl font-bold leading-snug text-slate-700 sm:text-3xl">
                困ったときに、手軽に使える。<br />
                IT運用・業務管理に役立つ便利ツール集。
              </p>
              <p className="mt-5 max-w-2xl leading-relaxed text-slate-600">
                日々の業務やシステム運用で実際に感じた課題から生まれました。
                複雑な導入を避け、必要な機能をすぐ試せる形で公開しています。
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.title} {...product} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-y bg-white/70">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-bold">使ってみた感想や、次にほしい「Simple」を教えてください。</h2>
              <p className="mt-2 text-sm text-slate-600">
                不具合や改善のご提案は、各GitHubリポジトリからお寄せください。いただいた声を今後の改善に活かしていきます。
              </p>
              <p className="mt-2 text-sm text-slate-600">
                もしツールがお役に立ちましたら、今後のツールづくりをご支援いただけるとうれしいです。
              </p>
            </div>
            <a
              href="https://buy.stripe.com/3cI8wPb1V6Xn11r7Jn5c400"
              target="_blank"
              rel="noopener noreferrer"
              className="soft-btn-primary shrink-0"
            >
              開発活動を支援する <ArrowRight className="size-4" />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-white/60 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>Simpleシリーズ</div>
          <div className="flex gap-5">
            <a href="https://github.com/takamichikojima" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
            <a href="https://buy.stripe.com/3cI8wPb1V6Xn11r7Jn5c400" target="_blank" rel="noopener noreferrer" className="hover:underline">開発活動を支援</a>
            <a href="/" className="hover:underline">事業紹介サイト</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ProductCard({
  number,
  category,
  title,
  description,
  points,
  href,
  downloadHref,
}: (typeof products)[number]) {
  return (
    <article className="soft-card group flex flex-col p-6 transition duration-300 hover:-translate-y-1 sm:p-7">
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-xs tracking-[0.2em] text-primary">SIMPLE / {number}</span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">{category}</span>
      </div>
      <h2 className="mt-6 break-words text-xl font-bold tracking-tight">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
      <ul className="mt-5 space-y-2 text-sm text-slate-700">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-2">
            <Check className="mt-0.5 size-4 shrink-0 text-emerald-600" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <div className="mt-7 flex flex-col gap-3">
        <a href={downloadHref} className="soft-btn-primary justify-center">
          最新版をダウンロード <ArrowDown className="size-4" />
        </a>
        <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary hover:underline">
          詳細・使い方を見る <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  )
}

function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 4v12m-5-5 5 5 5-5M5 20h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Check(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
