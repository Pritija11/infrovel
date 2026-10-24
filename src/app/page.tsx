import Link from "next/link";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Avatar } from "@/components/Avatar";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JobGraphMock } from "@/components/mocks/JobGraphMock";
import { CacheHitMock } from "@/components/mocks/CacheHitMock";
import { ParallelLanesMock } from "@/components/mocks/ParallelLanesMock";
import { SlowJobsMock } from "@/components/mocks/SlowJobsMock";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconCheck,
  IconGitBranch,
  IconCache,
  IconChart,
} from "@/components/icons";

const stats = [
  { value: "Beta", label: "Current stage" },
  { value: "60%", label: "Avg. CI time saved in testing" },
  { value: "<5 min", label: "To connect your first pipeline" },
  { value: "Kathmandu", label: "Where we build" },
];

const howItWorks = [
  {
    icon: IconGitBranch,
    step: "01",
    title: "Connect your pipeline",
    body: "Point Infrovel's agent at your existing GitHub Actions workflow. There's no new YAML dialect to learn and nothing to migrate — it wraps around the pipeline you already have.",
  },
  {
    icon: IconCache,
    step: "02",
    title: "Let the cache warm up",
    body: "The first run on a given input builds normally and gets cached. Every run after that, from any contributor, reuses it instead of rebuilding from scratch.",
  },
  {
    icon: IconChart,
    step: "03",
    title: "Watch the trend line, not the clock",
    body: "Instead of refreshing a CI dashboard hoping it finishes, you get a weekly view of which jobs are getting faster, which are regressing, and where the next hour of engineering time is best spent.",
  },
];

const sections = [
  {
    eyebrow: "Cache",
    title: "A shared cache your whole team actually hits",
    body: [
      "Most teams cache locally, so every new branch starts cold. Infrovel's remote cache is shared across every contributor and every CI run — if a teammate already built this exact input an hour ago, your pipeline reuses it instead of rebuilding from scratch.",
      "That matters most on the jobs that feel the slowest: a full end-to-end test suite, a from-scratch production build, a Docker image rebuild. Those are exactly the tasks most likely to have an identical equivalent sitting in cache somewhere, waiting to be reused instead of repeated.",
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
    title: "Run independent jobs at the same time, automatically",
    body: [
      "If your test suite doesn't depend on your lint step finishing first, it shouldn't have to wait for it. Infrovel schedules jobs across available workers based on their actual dependency graph, not the order they happen to appear in your config file.",
      "Most teams discover their pipeline has far more room to parallelize than they assumed — steps that were written sequentially out of habit, not necessity, start running side by side the moment the scheduler can see the real dependency graph instead of a flat list.",
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
    title: "Know exactly which job is wasting your team's time",
    body: [
      "\"CI feels slow\" isn't actionable. A ranked list of which specific job regressed, by how much, and since which commit — that's something an engineer can actually go fix.",
      "Insights are rolled up weekly, so a job that's quietly gotten 5% slower every release for two months shows up as a clear trend line, not a complaint someone eventually brings up in standup once it's already unbearable.",
    ],
    bullets: [
      "Per-job duration history, not just total pipeline time",
      "Automatic flagging of jobs that got slower or started flaking",
      "Compare any two runs side by side to see what changed",
    ],
    mock: <SlowJobsMock />,
  },
];

const testimonials = [
  {
    quote:
      "Our CI went from the thing everyone complained about in standup to something nobody thinks about anymore. That's the whole win.",
    highlight: "nobody thinks about anymore",
    name: "Ramesh Khadka",
    initials: "RK",
    role: "Engineering lead, early-access team",
  },
  {
    quote:
      "We found a single flaky integration test that was adding four minutes to every single PR, just by looking at the insights dashboard for ten minutes.",
    highlight: "just by looking at the insights dashboard",
    name: "Elena Fischer",
    initials: "EF",
    role: "Staff engineer, early-access team",
  },
  {
    quote:
      "Setup took less time than the Slack thread we'd already spent arguing about whether to buy bigger CI runners.",
    highlight: "less time than the Slack thread",
    name: "Priya Shrestha",
    initials: "PS",
    role: "Tech lead, early-access team",
  },
];

const faqs = [
  {
    q: "What's the actual difference between Infrovel and just buying bigger CI runners?",
    a: "Bigger runners make every job faster by a fixed percentage, including work that didn't need to happen at all. Infrovel skips the redundant work first — caching and smarter scheduling — so the runners you already have go further before you need to pay for more.",
  },
  {
    q: "How long does it take to see results?",
    a: "Most teams connect a pipeline in under 5 minutes and see their first cache hits within the next few runs. The full picture — a meaningful cache hit rate and a clear insights trend — usually takes about a week of normal usage.",
  },
  {
    q: "Do you support monorepos?",
    a: "Yes — Ultracache's per-task input tracking was built specifically so monorepos don't need to be split into many small packages just to cache well.",
  },
  {
    q: "What if our team is still pretty small?",
    a: "That's who the Beta tier is for. As a startup ourselves, we built Infrovel because our own small team's CI time mattered just as much, proportionally, as a larger team's would.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--border)] py-24 md:py-32 lg:py-36">
        <div className="grid-backdrop pointer-events-none absolute inset-0" />
        <Container className="relative">
          <Reveal>
            <Link
              href="/cache"
              className="mx-auto flex w-fit items-center gap-2.5 rounded-full border border-[var(--border)] bg-white py-1.5 pl-1.5 pr-4 text-xs font-medium text-[var(--fg-muted)] shadow-[var(--shadow-sm)] transition-all duration-150 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-md)]"
            >
              <span className="pill-tag bg-[var(--primary-soft)] text-[var(--primary-deep)]">
                New
              </span>
              Ultracache now supports monorepos
              <IconArrowRight className="h-3.5 w-3.5 text-[var(--fg-faint)]" />
            </Link>
            <h1 className="mx-auto mt-8 max-w-4xl text-center font-[family-name:var(--font-display)] text-[2.25rem] font-extrabold leading-[1.08] tracking-[-0.025em] text-[var(--ink)] sm:text-5xl md:text-[4rem] lg:text-[4.75rem]">
              Ship code faster.
              <br />
              <span className="text-[var(--primary-deep)]">
                Waste less compute.
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-[var(--fg-muted)] md:text-xl md:leading-9">
              Infrovel is a developer infrastructure startup that cuts slow
              builds and repetitive test execution through remote caching,
              parallel execution, and pipeline performance insights — for
              teams who&apos;d rather fix the bottleneck than add another
              runner.
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-[var(--fg-faint)] md:text-[0.9375rem]">
              Most CI pipelines spend the majority of their time redoing
              work they&apos;ve already done — rebuilding unchanged code,
              rerunning unaffected tests, waiting on jobs that didn&apos;t
              need to run in sequence. Infrovel wraps around the pipeline
              you already have and removes that waste without asking you to
              rewrite it.
            </p>
            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Button href="/contact">
                Get started
                <IconArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/platform" variant="outline">
                See the platform
              </Button>
            </div>
          </Reveal>

          <Reveal delay={80} className="mx-auto mt-20 max-w-3xl">
            <JobGraphMock />
          </Reveal>
        </Container>
      </section>

      {/* Stat strip */}
      <section className="border-b border-[var(--border)] bg-[var(--bg-alt)]">
        <Container>
          <div className="grid grid-cols-2 divide-x divide-y divide-[var(--border)] sm:grid-cols-4 sm:divide-y-0">
            {stats.map((s) => (
              <div key={s.label} className="px-4 py-8 text-center">
                <p className="tnum font-[family-name:var(--font-display)] text-xl font-extrabold tracking-tight text-[var(--ink)] sm:text-2xl">
                  {s.value}
                </p>
                <p className="mt-1.5 text-xs leading-5 text-[var(--fg-muted)]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-24">
        <Container>
          <Reveal>
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.02em] text-[var(--ink)] md:text-[2.5rem] md:leading-[1.15]">
              Three steps, no pipeline rewrite
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--fg-muted)]">
              Infrovel is designed to sit on top of the CI setup you already
              have, not replace it. Most teams go from signing up to seeing
              their first cache hit in a single sitting.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {howItWorks.map((step, i) => (
              <Reveal key={step.step} delay={i * 40} className="h-full">
                <div className="card card-hover flex h-full flex-col p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--primary-soft)]">
                      <step.icon className="h-5 w-5 text-[var(--primary-deep)]" />
                    </span>
                    <span className="tnum font-[family-name:var(--font-display)] text-sm font-bold text-[var(--fg-faint)]">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-semibold tracking-tight text-[var(--ink)]">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-[var(--fg-muted)]">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Feature sections, alternating */}
      {sections.map((s, i) => (
        <section
          key={s.eyebrow}
          className={`py-24 ${i % 2 === 1 ? "bg-[var(--bg-alt)]" : ""}`}
        >
          <Container
            className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <Reveal>
              <Eyebrow>{s.eyebrow}</Eyebrow>
              <h2 className="mt-4 max-w-[30rem] font-[family-name:var(--font-display)] text-[1.75rem] font-bold leading-[1.2] tracking-[-0.02em] text-[var(--ink)] md:text-[2.125rem]">
                {s.title}
              </h2>
              {s.body.map((para) => (
                <p
                  key={para.slice(0, 20)}
                  className="mt-4 max-w-md text-sm leading-7 text-[var(--fg-muted)]"
                >
                  {para}
                </p>
              ))}
              <ul className="mt-7 flex flex-col gap-3.5 border-t border-[var(--border)] pt-7">
                {s.bullets.map((b) => (
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
            <Reveal delay={60}>{s.mock}</Reveal>
          </Container>
        </section>
      ))}

      {/* Testimonials */}
      <section className="border-t border-[var(--border)] py-24">
        <Container>
          <Reveal>
            <Eyebrow tone="green">Early access</Eyebrow>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.02em] text-[var(--ink)] md:text-[2.5rem] md:leading-[1.15]">
              What early-access teams are saying
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 50} className="h-full">
                <figure className="card card-hover flex h-full flex-col p-7">
                  <blockquote className="flex-1 text-[15px] leading-[1.65] text-[var(--ink)]">
                    {t.quote.split(t.highlight)[0]}
                    <span className="font-semibold text-[var(--primary-deep)] underline decoration-[var(--primary)]/30 decoration-2 underline-offset-[3px]">
                      {t.highlight}
                    </span>
                    {t.quote.split(t.highlight)[1]}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-[var(--border)] pt-5">
                    <Avatar initials={t.initials} className="h-9 w-9 text-[11px]" />
                    <div>
                      <p className="text-sm font-semibold text-[var(--ink)]">
                        {t.name}
                      </p>
                      <p className="mt-0.5 text-xs text-[var(--fg-faint)]">
                        {t.role}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <Link
              href="/platform"
              className="mt-10 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary-deep)] underline decoration-[var(--primary)]/30 underline-offset-4 transition-colors hover:decoration-[var(--primary)]"
            >
              See the full platform
              <IconArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container className="max-w-2xl">
          <Reveal>
            <Eyebrow tone="orange">Questions</Eyebrow>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.02em] text-[var(--ink)] md:text-[2.5rem] md:leading-[1.15]">
              Common questions
            </h2>
          </Reveal>
          <Reveal delay={60} className="mt-10">
            <FaqAccordion items={faqs} />
          </Reveal>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="border-t border-[var(--border)] py-24">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-[20px] bg-[var(--ink)] px-6 py-20 text-center sm:px-12">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                  backgroundSize: "56px 56px",
                  maskImage:
                    "radial-gradient(ellipse 70% 70% at 50% 0%, #000, transparent 70%)",
                }}
              />
              <div className="relative">
                <h2 className="mx-auto max-w-xl font-[family-name:var(--font-display)] text-[2rem] font-extrabold leading-[1.15] tracking-[-0.025em] text-white sm:text-4xl md:text-[2.75rem]">
                  The fastest CI run is the one you skip.
                </h2>
                <p className="mx-auto mt-5 max-w-md text-base leading-7 text-[var(--on-dark-muted)]">
                  Connect your first pipeline in under 5 minutes. Free while
                  we&apos;re in beta for teams under 10 contributors — no
                  credit card, and no sales call required to get started.
                </p>
                <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-white px-5 py-2.5 text-sm font-semibold leading-6 text-[var(--ink)] transition-all duration-150 hover:bg-white/90 active:translate-y-px"
                  >
                    Get started free
                    <IconArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-white/20 px-5 py-2.5 text-sm font-semibold leading-6 text-white transition-all duration-150 hover:border-white/40 hover:bg-white/5 active:translate-y-px"
                  >
                    See pricing
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
