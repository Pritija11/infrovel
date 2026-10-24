import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { FaqAccordion } from "@/components/FaqAccordion";
import { BuildTimeChart } from "@/components/mocks/BuildTimeChart";
import { SlowJobsMock } from "@/components/mocks/SlowJobsMock";
import { IconArrowRight, IconCheck } from "@/components/icons";

export const metadata = pageMetadata({
  title: "Insights",
  description:
    "Build and test duration analytics from Infrovel, a developer infrastructure startup — see which CI jobs are slow, which ones regressed, and since when.",
  path: "/insights",
});

const capabilities = [
  "A duration history per job, not just a total pipeline time that hides which step is actually slow",
  "Automatic detection of jobs that got slower or started flaking, flagged before someone has to notice it manually",
  "Side-by-side comparison between any two runs, down to which specific step changed",
  "A weekly digest of the slowest and flakiest jobs, so regressions don't sit unnoticed for a month",
];

const faqs = [
  {
    q: "How far back does duration history go?",
    a: "7 days on the Beta tier, 90 days on Team, and configurable retention on Enterprise — matching the same retention tiers as the rest of the platform.",
  },
  {
    q: "Can insights flag flaky tests, not just slow ones?",
    a: "Yes — a job that passes and fails inconsistently across otherwise-identical runs is flagged as flaky, separately from jobs that are just consistently slow.",
  },
  {
    q: "Do we need to add any instrumentation to our tests?",
    a: "No. Insights are derived from the job execution data Infrovel already captures while orchestrating your pipeline — nothing to add to your test code.",
  },
  {
    q: "Can we export this data to our own dashboards?",
    a: "Yes, via a JSON export on the Team tier and up, so you can pull it into Grafana or an internal dashboard if that's where your team already looks.",
  },
  {
    q: "Does a regression alert get sent somewhere, or do we have to check a dashboard?",
    a: "On the Team tier and up, regressions above a threshold you set can be posted to Slack or email automatically, in addition to appearing on the dashboard and in the weekly digest.",
  },
  {
    q: "Can insights tell us which commit introduced a regression, not just which week?",
    a: "Yes — since duration is tracked per commit, a regression is attributed to the specific commit range where the change happened, not just a rough week-over-week average.",
  },
];

export default function InsightsPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Insights</Eyebrow>
            <h1 className="mt-5 font-[family-name:var(--font-display)] text-[2rem] font-extrabold leading-[1.12] tracking-[-0.025em] text-[var(--ink)] sm:text-[2.5rem] md:text-[3.25rem]">
              &quot;CI is slow&quot; isn&apos;t a bug report. This is.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[var(--fg-muted)]">
              As a startup, we didn&apos;t have a dedicated platform team to
              go hunting for slow jobs manually, so Infrovel surfaces
              exactly which job regressed, by how much, and since which
              commit — the version of the complaint an engineer can
              actually act on.
            </p>
            <p className="mt-4 max-w-lg text-base leading-7 text-[var(--fg-muted)]">
              Most teams don&apos;t lack CI logs — they lack a way to turn
              a pile of logs into a ranked list of what&apos;s actually
              worth fixing this week. That&apos;s what Insights is for.
            </p>
            <Button href="/contact" className="mt-7">
              Get started free
              <IconArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
          <Reveal delay={60}>
            <SlowJobsMock />
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow tone="orange">What you get</Eyebrow>
            <h2 className="mt-4 max-w-[30rem] font-[family-name:var(--font-display)] text-[1.75rem] font-bold leading-[1.2] tracking-[-0.02em] text-[var(--ink)] md:text-[2.125rem]">
              A trend line, not a snapshot
            </h2>
            <div className="mt-8 flex flex-col gap-4">
              {capabilities.map((c) => (
                <div
                  key={c.slice(0, 20)}
                  className="card card-hover flex items-start gap-3.5 p-5"
                >
                  <span className="mt-px flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[var(--primary-soft)]">
                    <IconCheck className="h-3 w-3 text-[var(--primary-deep)]" />
                  </span>
                  <p className="text-sm leading-6 text-[var(--ink)]">{c}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={60}>
            <BuildTimeChart />
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] py-20 md:py-24">
        <Container className="mx-auto max-w-2xl">
          <Reveal>
            <Eyebrow>Reading the data</Eyebrow>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.02em] text-[var(--ink)] md:text-[2.5rem] md:leading-[1.15]">
              What a regression actually looks like
            </h2>
            <p className="mt-5 text-sm leading-7 text-[var(--fg-muted)]">
              A job&apos;s duration is tracked against the commit that
              triggered it, not just plotted against time. That
              distinction matters: a test suite that takes longer because
              40 new tests were added isn&apos;t a regression, but a test
              suite that takes longer with no corresponding change to its
              scope almost always is.
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--fg-muted)]">
              Flaky jobs are tracked separately from slow ones. A job that
              passes 80% of the time on otherwise-identical inputs gets
              flagged as flaky well before it becomes the test everyone has
              learned to just rerun without looking at why it failed.
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--fg-muted)]">
              The weekly digest exists because regressions are easy to miss
              one at a time and obvious in aggregate — a job that got 4%
              slower on Monday and another 3% slower on Thursday
              doesn&apos;t feel urgent either day, but the digest shows the
              two-week
              trend line instead of either isolated data point.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container className="max-w-2xl">
          <Reveal>
            <Eyebrow tone="orange">Questions</Eyebrow>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.02em] text-[var(--ink)] md:text-[2.5rem] md:leading-[1.15]">
              Insights FAQ
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
