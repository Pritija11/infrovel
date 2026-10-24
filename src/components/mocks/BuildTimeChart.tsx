const builds = [
  { label: "Mon", before: 70, after: 70 },
  { label: "Tue", before: 76, after: 42 },
  { label: "Wed", before: 68, after: 22 },
  { label: "Thu", before: 82, after: 24 },
  { label: "Fri", before: 74, after: 18 },
];

export function BuildTimeChart() {
  return (
    <div className="mock-frame w-full">
      <div className="mock-head">
        <span className="font-semibold uppercase tracking-[0.1em]">
          Avg. build duration
        </span>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-[2px] bg-[var(--border-strong)]" />
            before
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-[2px] bg-[var(--primary)]" />
            after
          </span>
        </div>
      </div>

      <div className="px-5 py-6">
        <div className="relative">
          {/* Reference gridlines give the bars something to be read against. */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 flex h-32 flex-col justify-between"
          >
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="h-px w-full bg-[var(--border)]" />
            ))}
          </div>

          <div className="relative flex h-32 items-end justify-between gap-3">
            {builds.map((b) => (
              <div key={b.label} className="flex h-full flex-1 items-end gap-1.5">
                <div
                  className="flex-1 rounded-t-[3px] bg-[var(--border-strong)]"
                  style={{ height: `${b.before}%` }}
                />
                <div
                  className="flex-1 rounded-t-[3px] bg-[var(--primary)]"
                  style={{ height: `${b.after}%` }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-2.5 flex justify-between gap-3 border-t border-[var(--border-strong)] pt-2.5">
          {builds.map((b) => (
            <span
              key={b.label}
              className="flex-1 text-center text-[10px] text-[var(--fg-faint)]"
            >
              {b.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
