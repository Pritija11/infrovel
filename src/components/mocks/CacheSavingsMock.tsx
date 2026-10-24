const items = [
  { label: "Compute minutes saved this month", value: "1,842 min" },
  { label: "Cache hit rate, last 30 days", value: "74%" },
  { label: "Largest single cache hit saved", value: "6m 40s" },
];

export function CacheSavingsMock() {
  return (
    <div className="mock-frame w-full">
      <div className="mock-head">
        <span className="font-semibold uppercase tracking-[0.1em]">
          Workspace savings
        </span>
      </div>
      <div className="flex flex-col divide-y divide-[var(--border)] px-6">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between gap-6 py-5"
          >
            <span className="text-sm leading-6 text-[var(--fg-muted)]">
              {item.label}
            </span>
            <span className="tnum flex-none font-[family-name:var(--font-display)] text-xl font-extrabold text-[var(--ink)]">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
