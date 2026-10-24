/*
 * Rendered entirely inside one SVG coordinate space so the edges are
 * drawn from real node geometry — the previous version positioned the
 * nodes with CSS percentages and hard-coded the edge path separately,
 * so the lines pointed at empty space.
 */

const W = 520;
const H = 200;

const NODE_W = 122;
const NODE_H = 38;

type Node = { id: string; label: string; x: number; y: number };

// x, y are the node's centre in the viewBox.
const nodes: Node[] = [
  { id: "lint", label: "lint", x: 75, y: 46 },
  { id: "build", label: "build", x: 75, y: 154 },
  { id: "unit", label: "unit-test", x: 260, y: 100 },
  { id: "e2e", label: "e2e-test", x: 445, y: 46 },
  { id: "deploy", label: "deploy", x: 445, y: 154 },
];

const edges: [string, string][] = [
  ["lint", "unit"],
  ["build", "unit"],
  ["unit", "e2e"],
  ["unit", "deploy"],
];

const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

/** Horizontal cubic between the right edge of `a` and the left edge of `b`. */
function edgePath(a: Node, b: Node) {
  const x1 = a.x + NODE_W / 2;
  const x2 = b.x - NODE_W / 2;
  const c = (x2 - x1) / 2;
  return `M ${x1} ${a.y} C ${x1 + c} ${a.y}, ${x2 - c} ${b.y}, ${x2} ${b.y}`;
}

export function JobGraphMock() {
  return (
    <div className="mock-frame w-full">
      <div className="mock-head">
        <span className="font-mono">pipeline · apps/web</span>
        <span className="flex items-center gap-1.5 font-medium text-[var(--green)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--green)]" />
          all jobs passing
        </span>
      </div>

      <div className="bg-[var(--bg-alt)] px-5 py-6">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full"
          role="img"
          aria-label="A CI pipeline graph: lint and build both feed into unit-test, which fans out to e2e-test and deploy."
        >
          <g
            fill="none"
            stroke="var(--border-strong)"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            {edges.map(([from, to]) => (
              <path key={`${from}-${to}`} d={edgePath(byId[from], byId[to])} />
            ))}
          </g>

          {nodes.map((n) => (
            <g key={n.id}>
              <rect
                x={n.x - NODE_W / 2}
                y={n.y - NODE_H / 2}
                width={NODE_W}
                height={NODE_H}
                rx={9}
                fill="var(--surface)"
                stroke="var(--border-strong)"
                strokeWidth="1"
              />
              <circle cx={n.x - NODE_W / 2 + 18} cy={n.y} r="3.5" fill="var(--green)" />
              <text
                x={n.x - NODE_W / 2 + 30}
                y={n.y}
                dominantBaseline="central"
                fill="var(--ink)"
                className="font-mono"
                fontSize="12.5"
              >
                {n.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
