type ParameterCardProps = {
  title: string;
  description: string;
  items: { label: string; value: string }[];
};

export function ParameterCard({ title, description, items }: ParameterCardProps) {
  return (
    <section className="rounded-xl border border-slate-600/40 bg-slate-900/40 p-6 shadow-lg shadow-slate-950/50 backdrop-blur">
      <header className="mb-4">
        <h2 className="text-lg font-semibold text-slate-100">{title}</h2>
        <p className="text-sm text-slate-300/90">{description}</p>
      </header>
      <dl className="grid gap-3 text-sm text-slate-200">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col">
            <dt className="font-medium text-slate-300">{item.label}</dt>
            <dd className="text-slate-100/90">{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
