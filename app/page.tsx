import { pineScriptSource } from '@/lib/pineIndicator';
import { CopyButton } from '@/components/CopyButton';
import { ParameterCard } from '@/components/ParameterCard';

const sections = [
  {
    title: 'Core Optimizations',
    description:
      'Adaptive online-learning logistic scorer updates weights only on confirmed bars, ensuring a non-repainting signal stream suitable for automation.',
    items: [
      { label: 'Engine', value: 'Online logistic regression with per-bar gradient updates' },
      { label: 'Lookback Range', value: '50 – 200 bars (default 100)' },
      { label: 'Feature Modes', value: 'RSI, MACD, Volume, Price Action (preset multi-select)' },
    ],
  },
  {
    title: 'Execution Ready',
    description:
      'Turn-key arrow markers for chart visualization plus TradingView alert hooks make it seamless to port into bots or unified strategies.',
    items: [
      { label: 'Signal Styling', value: 'Green BUY triangles below bars, red SELL triangles above' },
      { label: 'Alerts', value: 'alertcondition() for both BUY and SELL probability triggers' },
      { label: 'Probabilities', value: 'Continuous ML probability plot with threshold bands' },
    ],
  },
  {
    title: 'Controls & Risk',
    description:
      'Threshold pairs decouple entry and exit to avoid overlapping paints, while L2 regularization stabilizes updates on noisy instruments.',
    items: [
      { label: 'Thresholds', value: 'Buy: 0.5 – 0.9, Sell: 0.1 – 0.5 (defaults 0.7 / 0.3)' },
      { label: 'Marker Sizing', value: 'Small, Medium, Large (default Medium)' },
      { label: 'Regularization', value: 'Adjustable L2 penalty for weight decay' },
    ],
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 py-16">
      <header className="flex flex-col gap-6 rounded-3xl border border-slate-600/40 bg-slate-900/40 p-10 shadow-xl shadow-black/40 backdrop-blur">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
          Pine Script ML
        </span>
        <h1 className="text-4xl font-semibold leading-tight text-slate-50 md:text-5xl">
          Adaptive ML Momentum Pulse Indicator
        </h1>
        <p className="max-w-3xl text-lg text-slate-200/90">
          Drop-in Pine Script v5 indicator engineered for non-repainting execution. Pair the
          online-trained logistic model with your preferred automation stack for high-fidelity buy
          and sell routing on any TradingView chart.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-200/80">
          <span className="rounded-md border border-slate-600/60 px-3 py-1">
            Non-repainting gradient updates
          </span>
          <span className="rounded-md border border-slate-600/60 px-3 py-1">
            Alert-ready signal hooks
          </span>
          <span className="rounded-md border border-slate-600/60 px-3 py-1">Automation-safe</span>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-700/50 bg-slate-950/40 p-8 shadow-lg shadow-black/40 backdrop-blur">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-xl font-semibold text-slate-100">Pine Script Source</h2>
            <CopyButton text={pineScriptSource} label="Copy Script" />
          </div>
          <div className="relative">
            <pre className="max-h-[32rem] overflow-auto rounded-xl border border-slate-700/40 bg-slate-900/80 p-4 text-xs leading-relaxed text-emerald-100">
              <code>{pineScriptSource}</code>
            </pre>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 rounded-b-xl bg-gradient-to-t from-slate-950/90 to-transparent" />
          </div>
        </article>
        <div className="flex flex-col gap-6">
          {sections.map((section) => (
            <ParameterCard
              key={section.title}
              title={section.title}
              description={section.description}
              items={section.items}
            />
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-2xl border border-slate-700/40 bg-slate-950/40 p-8 shadow-lg shadow-black/40 backdrop-blur md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold text-slate-100">Deployment Notes</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-200/90">
            Paste the script directly into a new Pine Script editor panel inside TradingView, save it,
            and add to your chart. Use the built-in alert templates to route signals to webhooks or
            bots. The logistic model updates only after bar confirmation, so historical signals remain
            fixed once printed.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
            Quick Tips
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-200/85">
            <li>Backtest in TradingView&apos;s Strategy Tester by wrapping outputs in your engine.</li>
            <li>Tune thresholds to align with instrument volatility and execution latency.</li>
            <li>Leverage feature presets to isolate signal generators per market regime.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
