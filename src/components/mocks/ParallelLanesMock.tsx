const lanes = [
  {
    worker: "worker-1",
    jobs: [
      { label: "lint", start: 0, width: 14 },
      { label: "unit-test", start: 16, width: 30 },
    ],
  },
  { worker: "worker-2", jobs: [{ label: "build:api", start: 0, width: 36 }] },
  { worker: "worker-3", jobs: [{ label: "build:web", start: 0, width: 58 }] },
  { worker: "worker-4", jobs: [{ label: "e2e-test", start: 40, width: 50 }] },
];

export function ParallelLanesMock() {
  return (
    <div className="mock-frame w-full">
      <div className="mock-head">
        <span className="tnum">4 workers · 1m 42s total</span>
        <span className="tnum font-semibold tracking-normal text-[var(--green)]">
          vs 6m 10s serial
        </span>
      </div>
      <div className="flex flex-col gap-2.5 px-5 py-5">
        {lanes.map((lane) => (
          <div key={lane.worker} className="flex items-center gap-3">
            <span className="w-[4.25rem] flex-none font-mono text-[10px] text-[var(--fg-faint)]">
              {lane.worker}
            </span>
            <div className="relative h-7 flex-1 overflow-hidden rounded-md bg-[var(--bg-sunken)]">
              {lane.jobs.map((j) => (
                <div
                  key={j.label}
                  className="absolute top-0 flex h-full items-center overflow-hidden rounded-md bg-[var(--primary)] px-2 text-[10px] font-medium whitespace-nowrap text-white"
                  style={{ left: `${j.start}%`, width: `${j.width}%` }}
                >
                  {j.label}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
