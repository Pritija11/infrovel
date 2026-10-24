import { IconFlame } from "@/components/icons";

const jobs = [
  { label: "e2e-test:checkout", time: "4m 32s", change: "+38% vs avg" },
  { label: "build:web", time: "2m 10s", change: "+12% vs avg" },
  { label: "integration:billing", time: "1m 48s", change: "flaky · reran 3x" },
];

export function SlowJobsMock() {
  return (
    <div className="mock-frame w-full">
      <div className="mock-head">
        <span className="font-semibold uppercase tracking-[0.1em]">
          Slowest jobs this week
        </span>
        <span>last 7 days</span>
      </div>
      <div className="flex flex-col divide-y divide-[var(--border)] px-5">
        {jobs.map((j) => (
          <div key={j.label} className="flex items-center gap-3 py-3.5">
            <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-[var(--orange-soft)]">
              <IconFlame className="h-4 w-4 text-[var(--orange)]" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate font-mono text-xs text-[var(--ink)]">
                {j.label}
              </p>
              <p className="mt-0.5 text-xs text-[var(--fg-faint)]">
                {j.change}
              </p>
            </div>
            <span className="tnum text-sm font-semibold text-[var(--ink)]">
              {j.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
