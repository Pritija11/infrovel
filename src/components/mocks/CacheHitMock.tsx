const steps = [
  { label: "lint", status: "hit", time: "0.2s" },
  { label: "build:api", status: "hit", time: "0.4s" },
  { label: "build:web", status: "miss", time: "48s" },
  { label: "unit-test", status: "hit", time: "0.3s" },
  { label: "e2e-test", status: "miss", time: "1m 12s" },
];

const style: Record<string, string> = {
  hit: "bg-[var(--green-soft)] text-[var(--green)]",
  miss: "bg-[var(--orange-soft)] text-[var(--orange)]",
};

export function CacheHitMock() {
  return (
    <div className="mock-frame w-full">
      <div className="mock-head">
        <span className="font-mono">run_7f21 · apps/web</span>
        <span className="font-semibold tracking-normal text-[var(--green)]">
          82% cache hit
        </span>
      </div>
      <div className="flex flex-col divide-y divide-[var(--border)] px-5">
        {steps.map((s) => (
          <div
            key={s.label}
            className="flex items-center justify-between gap-4 py-3"
          >
            <span className="font-mono text-xs text-[var(--ink)]">
              {s.label}
            </span>
            <div className="flex items-center gap-3">
              <span className="tnum text-xs text-[var(--fg-faint)]">
                {s.time}
              </span>
              <span
                className={`w-12 flex-none rounded-full py-1 text-center text-[11px] font-semibold ${style[s.status]}`}
              >
                {s.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
