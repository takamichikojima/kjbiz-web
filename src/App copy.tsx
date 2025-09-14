export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-white to-white text-slate-800">
      {/* NAV */}
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo />
            <div>
              <div className="font-semibold tracking-tight">KJ Consulting</div>
              <div className="text-xs text-slate-500">Manufacturing × PLM/IT</div>
            </div>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:underline">サービス</a>
            <a href="#cases" className="hover:underline">実績</a>
            <a href="#profile" className="hover:underline">プロフィール</a>
            <a href="#contact" className="hover:underline">問い合わせ</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 size-80 bg-[var(--primary)]/15 blur-3xl rounded-full" />
        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="soft-badge">
              <Sparkle className="size-3 text-primary" /> 製造業 × PLM/3D/CPQ/クラウド
            </span>
            <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              現場に効くPLM/ITで、<br className="hidden sm:block" />
              成果まで最短距離。
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              PLM再構築、BOM/変更管理、3D可視化、CPQ、Azure/AWS。
              合意形成→仕組み化→定着まで伴走します。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:contact@your-domain.example"  /* ←差し替え */
                className="soft-btn-primary"
              >
                初回30分相談（無料） <ArrowRight className="size-4" />
              </a>
              <a href="#services" className="soft-btn-ghost">サービスを見る</a>
            </div>

            <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-sm text-slate-600">
              {[
                "現場伴走 / モックアップで合意形成",
                "ROI/IRR視点の投資判断",
                "PMP / 品質・変更管理の型",
                "C#/.NET・Three.js・Azure/AWS",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="size-4 text-emerald-600" /> {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Mock preview */}
          <div className="relative">
            <MacWindow>
              <div className="p-6 space-y-4">
                <div className="text-sm text-slate-500">サンプル：BOM × 3D 同期ビュー</div>
                <div className="grid grid-cols-5 gap-4">
                  <div className="col-span-2 soft-card p-3 text-xs h-48 overflow-auto">
                    <p className="font-semibold">BOM</p>
                    <ul className="list-disc ml-4 mt-2 space-y-1">
                      <li>TopAssy</li>
                      <li> ├ Body</li>
                      <li> ├ Stage</li>
                      <li> └ Fasteners...</li>
                    </ul>
                  </div>
                  <div className="col-span-3 soft-card h-48 grid place-items-center text-xs text-slate-500">
                    3D Viewer (placeholder)
                  </div>
                </div>
              </div>
            </MacWindow>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-14 bg-slate-50/70 border-y">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">サービス</h2>
          <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {[
              {
                title: "PLM/BOM/変更管理",
                points: ["EBOM/MBOM/PBOM", "ECR/ECO/ECN & 品質ゲート", "Aras Innovator 実装/拡張"],
              },
              {
                title: "3D × Web可視化",
                points: ["STEP/CAD→glTF/GLB", "Three.js/HOOPS 連携", "構成・バリエーション対応"],
              },
              {
                title: "CPQ/業務システム",
                points: ["見積自動化/原価連動", "C#/.NET・Excel/VBA", "Power Platform 連携"],
              },
              {
                title: "クラウド/DevOps",
                points: ["Azure/AWS 設計運用", "VPN/証明書/監視", "GitHub/GitLab CI"],
              },
            ].map((s) => (
              <Card key={s.title} title={s.title} points={s.points} />
            ))}
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">実績・効果例</h2>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-6 grid md:grid-cols-3 gap-5">
          <KPI kpi="合意形成 1/2" text="モックアップで認識差を可視化し、要件確定までの時間を半減。" />
          <KPI kpi="工程短縮 30%" text="承認フロー自動化で設計変更のリードタイムを短縮。" />
          <KPI kpi="定着率 90%" text="役割別UIと運用ガイドで“使われる設計”に。" />
        </div>
      </section>

      {/* PROFILE */}
      <section id="profile" className="py-14 bg-slate-50/70 border-y">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">プロフィール</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              外資系ITで10年。PLM導入を起点に、業務改善とシステム実装を両輪で推進。
              Microsoft技術、Azure/AWS、Aras、Three.js、Excel/VBAなどで、
              現場が動く仕組みを素早く形にします。
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Aras Innovator","HOOPS/Three.js","Azure/AWS",".NET/C#","Power Platform","GitHub/GitLab","Excel/VBA"]
                .map((t)=>(
                <span key={t} className="px-3 py-1 rounded-full text-xs border" style={{borderColor:'var(--border)'}}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="soft-card p-6 text-sm text-slate-600 space-y-2">
            <div className="font-medium text-slate-800">提供価値</div>
            <ul className="list-disc ml-5 space-y-1">
              <li>要件を「図と試作」で固める合意形成力</li>
              <li>ROI/IRRで意思決定を支える経営目線</li>
              <li>定着まで伴走する運用設計・教育</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-14">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">お問い合わせ</h2>
            <p className="mt-3 text-slate-600">
              初回30分のオンライン相談（無料）を承ります。下記からご連絡ください。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:contact@your-domain.example" className="soft-btn-primary">
                <Mail className="size-4" /> メールで相談
              </a>
              <a href="#" className="soft-btn-ghost">会社紹介PDF</a>
            </div>
          </div>
          <div className="soft-card p-6 text-sm text-slate-600 space-y-3">
            <div className="font-medium text-slate-800">想定プロジェクト</div>
            <ul className="list-disc ml-5 space-y-1">
              <li>PLM再構築ロードマップ策定とPoC</li>
              <li>3D × BOM Webビューアの試作</li>
              <li>CPQ導入、Excelマクロ資産の再設計</li>
              <li>Azure/AWS基盤とVPN/証明書運用</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t bg-white/60">
        <div className="max-w-6xl mx-auto px-4 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} KJ Consulting</div>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">GitHub</a>
            <a href="#" className="hover:underline">LinkedIn</a>
            <a href="mailto:contact@your-domain.example" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

/* ------- sub components ------- */
function Logo() {
  return (
    <div className="size-9 rounded-2xl grid place-items-center text-white font-bold"
         style={{background:'linear-gradient(135deg, #674598, #8b6cc3)'}}>
      KJ
    </div>
  )
}
function MacWindow({ children }) {
  return (
    <div className="soft-card overflow-hidden">
      <div className="h-9 flex items-center gap-1 px-3 border-b bg-white/60 backdrop-blur"
           style={{borderColor:'var(--border)'}}>
        <div className="size-3 rounded-full bg-red-400" />
        <div className="size-3 rounded-full bg-yellow-400" />
        <div className="size-3 rounded-full bg-green-400" />
        <div className="ml-2 text-xs text-slate-500">Preview</div>
      </div>
      {children}
    </div>
  )
}
function Card({ title, points }) {
  return (
    <div className="soft-card p-5">
      <div className="font-semibold text-lg">{title}</div>
      <ul className="mt-3 space-y-2 text-sm text-slate-600">
        {points.map((p) => (
          <li key={p} className="flex gap-2"><span>•</span><span>{p}</span></li>
        ))}
      </ul>
    </div>
  )
}
function KPI({ kpi, text }) {
  return (
    <div className="soft-card p-6">
      <div className="text-3xl font-extrabold text-primary">{kpi}</div>
      <p className="mt-2 text-slate-600 text-sm leading-relaxed">{text}</p>
    </div>
  )
}

/* ------- tiny inline icons ------- */
function ArrowRight(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className}>
      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
function Check(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className}>
      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
function Sparkle(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className}>
      <path d="M12 2l2.2 5.8L20 10l-5.8 2.2L12 18l-2.2-5.8L4 10l5.8-2.2L12 2z"
            stroke="currentColor" strokeWidth="1.5" fill="currentColor" className="text-primary"/>
    </svg>
  )
}
function Mail(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className}>
      <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" fill="none"/>
    </svg>
  )
}
