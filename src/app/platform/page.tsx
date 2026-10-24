import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CacheHitMock } from "@/components/mocks/CacheHitMock";
import { ParallelLanesMock } from "@/components/mocks/ParallelLanesMock";
import { BuildTimeChart } from "@/components/mocks/BuildTimeChart";
import { IconArrowRight, IconCheck } from "@/components/icons";

export const metadata = pageMetadata({
  title: "Platform",
  description:
    "How Infrovel's platform helps startup and growing engineering teams cut CI time through remote caching, parallel execution, and pipeline performance insights.",
  path: "/platform",
});

const pillars = [
  {
    eyebrow: "Cache",
    title: "Stop rebuilding what hasn't changed",
    body: [
      "Infrovel's remote cache is content-addressed by the actual inputs to a task — source files, dependencies, environment variables — not by timestamps or branch names. If the inputs match a cache entry from any contributor's run, the output is reused instead of rebuilt.",
      "That cache is shared across your whole team and every CI run, so the first person to build a given change pays the cost once, and everyone else gets it for free.",
      "It also travels with your branches. Rebase a feature branch on top of a teammate's merged change, and the tasks whose inputs didn't shift stay cached — only the parts that actually changed get rebuilt.",
    ],
    bullets: [
      "Shared remote cache across CI and every developer's machine",
      "Content-addressed by inputs, not timestamps — accurate, not approximate",
      "Works with the build tools you already use, no rewrite required",
    ],
    mock: <CacheHitMock />,
  },
  {
    eyebrow: "Parallel execution",
    title: "Your dependency graph decides what runs at once",
    body: [
      "Most CI configs run jobs in whatever order someone wrote them in a YAML file, serially unless manually parallelized. Infrovel reads your actual job dependency graph and schedules independent jobs across available workers automatically.",
      "A pipeline that depends on 6 independent test suites doesn't need to run them one after another just because that's how the file happened to be written.",
      "Worker allocation adjusts to the size of the change, too. A one-line copy fix doesn't get the same parallel footprint as a change that touches a shared library used by half the codebase — so you're not paying for idle workers on small pull requests.",
    ],
    bullets: [
      "Automatic scheduling based on real job dependencies",
      "Scales workers up for a big pipeline, down for a small one",
      "No pipeline file rewrite — point it at your existing CI config",
    ],
    mock: <ParallelLanesMock />,
  },
  {
    eyebrow: "Insights",
    title: "See the trend, not just today's run",
    body: [
      "A single slow CI run could be a fluke. A job that's been getting 5% slower every week for two months is a trend worth fixing before it becomes the thing everyone complains about in standup.",
      "Infrovel tracks duration per job over time, so regressions show up as a trend line, not a one-off complaint in Slack.",
      "The same history also makes it easy to tell the difference between a job that's genuinely gotten slower and one that's just running against a bigger test suite than it used to — duration is tracked alongside the size of the change, not in isolation.",
    ],
    bullets: [
      "Per-job duration history, not just total pipeline time",
      "Automatic flagging of jobs that got slower or started flaking",
      "Compare any two runs side by side to see exactly what changed",
    ],
    mock: <BuildTimeChart />,
  },
];

const faqs = [
  {
    q: "Do we need to rewrite our CI pipeline configuration?",
    a: "No. Infrovel's agent wraps around your existing CI config — most teams see caching and parallelization working within an afternoon, without rewriting pipeline YAML from scratch.",
  },
  {
    q: "Which CI providers and build tools are supported?",
    a: "GitHub Actions is supported today, with GitLab CI and CircleCI on the roadmap. On the build tool side, we support npm/yarn/pnpm scripts, Turborepo, and Nx workspaces, with more planned based on early-access requests.",
  },
  {
    q: "Is this only useful for large monorepos?",
    a: "No — we built it as a small startup ourselves, and even a single-repo team running the same test suite on every PR sees meaningful cache hit rates and time savings.",
  },
  {
    q: "How is cache correctness guaranteed?",
    a: "Cache keys are derived from the actual files and environment a task reads, not from a timestamp or a manually maintained list — so a cache hit means the output really would have been identical.",
  },
  {
    q: "What happens on the very first run, before anything is cached?",
    a: "The first run on a given input builds normally — there's no cache to hit yet, so there's no speed-up on that specific run. Every subsequent run with the same inputs, from any contributor, benefits from it.",
  },
  {
    q: "Does parallel execution change the order our tests report results in?",
    a: "Test results are reported per job as they finish, so the overall pipeline UI may show jobs completing in a different order than before — but each job's own output and exit code are unaffected by running in parallel.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Platform</Eyebrow>
            <h1 className="mx-auto mt-5 font-[family-name:var(--font-display)] text-[2rem] font-extrabold leading-[1.12] tracking-[-0.025em] text-[var(--ink)] sm:text-[2.5rem] md:text-[3.25rem]">
              Everything a startup engineering team needs to stop waiting on
              CI
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              Cache, Parallel execution, and Insights aren&apos;t three
              separate add-ons — they&apos;re one agent that wraps your
              existing pipeline, so a job you cached today is the same job
              whose history you&apos;re tracking tomorrow.
            </p>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              You install it once, against the pipeline you already have,
              and the three pillars below work together automatically from
              that point on — there&apos;s no separate dashboard to
              configure for caching versus scheduling versus analytics.
            </p>
          </Reveal>
        </Container>
      </section>

      {pillars.map((p, i) => (
        <section key={p.eyebrow} className={i % 2 === 1 ? "bg-[var(--bg-alt)]" : ""}>
          <Container className="py-20 md:py-24">
            <div
              className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <Eyebrow>{p.eyebrow}</Eyebrow>
                <h2 className="mt-4 max-w-[30rem] font-[family-name:var(--font-display)] text-[1.75rem] font-bold leading-[1.2] tracking-[-0.02em] text-[var(--ink)] md:text-[2.125rem]">
                  {p.title}
                </h2>
                {p.body.map((para) => (
                  <p
                    key={para.slice(0, 20)}
                    className="mt-4 max-w-md text-sm leading-7 text-[var(--fg-muted)]"
                  >
                    {para}
                  </p>
                ))}
                <ul className="mt-7 flex flex-col gap-3.5 border-t border-[var(--border)] pt-7">
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm leading-6 text-[var(--ink)]"
                    >
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[var(--primary-soft)]">
                        <IconCheck className="h-3 w-3 text-[var(--primary-deep)]" />
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={60}>{p.mock}</Reveal>
            </div>
          </Container>
        </section>
      ))}

      <section className="border-t border-[var(--border)] py-20 text-center md:py-24">
        <Container className="max-w-xl">
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.02em] text-[var(--ink)] md:text-[2.5rem] md:leading-[1.15]">
              See it running against your own pipeline
            </h2>
            <Button href="/contact" className="mt-7">
              Get started free
              <IconArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container className="max-w-2xl">
          <Reveal>
            <Eyebrow tone="green">Questions</Eyebrow>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.02em] text-[var(--ink)] md:text-[2.5rem] md:leading-[1.15]">
              Platform FAQ
            </h2>
          </Reveal>
          <Reveal delay={60} className="mt-10">
            <FaqAccordion items={faqs} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
