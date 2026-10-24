import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CacheHitMock } from "@/components/mocks/CacheHitMock";
import { CacheSavingsMock } from "@/components/mocks/CacheSavingsMock";
import { IconArrowRight, IconCheck } from "@/components/icons";

export const metadata = pageMetadata({
  title: "Cache",
  description:
    "Infrovel's shared remote cache, from a developer infrastructure startup — content-addressed, shared across your whole team, and accurate enough to trust.",
  path: "/cache",
});

const reasons = [
  "A cache hit is based on actual file and environment inputs, not a timestamp you have to trust",
  "Shared across every contributor and every CI run, so the second person to touch a change never pays full price",
  "Works underneath your existing build tool — nothing to migrate, nothing to configure per project",
  "A visible hit rate per run, so you can tell at a glance whether caching is actually helping",
];

const faqs = [
  {
    q: "How do you guarantee a cache hit is actually safe to reuse?",
    a: "Cache keys are derived from every file and environment variable a task declares as an input. If any of those change, it's a cache miss — there's no manual invalidation list to maintain or forget about.",
  },
  {
    q: "Where is cached data stored?",
    a: "In isolated, per-workspace storage — nothing is pooled or shared across different customers' workspaces, including on the free beta tier.",
  },
  {
    q: "What happens if the cache is unavailable?",
    a: "Your pipeline falls back to building normally. The cache is a performance layer, not a dependency your builds rely on to function.",
  },
  {
    q: "Can we self-host the cache for data residency reasons?",
    a: "Not yet — it's on our roadmap. If this is a blocker for you, tell us on a call, since it directly shapes what we prioritize next as a startup.",
  },
  {
    q: "Does the cache work across different operating systems or architectures?",
    a: "Environment details that affect the output — OS, architecture, tool versions — are part of the cache key, so a task run on an ARM runner won't incorrectly reuse output built for x86, or vice versa.",
  },
  {
    q: "Can we manually clear the cache if we don't trust a specific entry?",
    a: "Yes, both for a single task's cache entries and for the whole workspace, from the dashboard or the CLI. In practice this is rarely needed, since correctness is enforced by the input hash rather than by trust.",
  },
];

export default function CachePage() {
  return (
    <>
      <section className="border-b border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Cache</Eyebrow>
            <h1 className="mt-5 font-[family-name:var(--font-display)] text-[2rem] font-extrabold leading-[1.12] tracking-[-0.025em] text-[var(--ink)] sm:text-[2.5rem] md:text-[3.25rem]">
              A cache accurate enough that your team actually trusts it
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[var(--fg-muted)]">
              As a startup building this ourselves, we didn&apos;t want a
              cache that occasionally served stale output and quietly
              trained the team to disable it. Infrovel&apos;s cache is
              content-addressed, so a hit means the output really would
              have been identical.
            </p>
            <p className="mt-4 max-w-lg text-base leading-7 text-[var(--fg-muted)]">
              It sits underneath whatever build tool you already use, and
              it&apos;s shared the moment it&apos;s turned on — the second
              developer to touch an identical change, whether
              that&apos;s a teammate or a CI run an hour later, gets the
              cached result instead of paying full price again.
            </p>
            <Button href="/contact" className="mt-7">
              Get started free
              <IconArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
          <Reveal delay={60}>
            <CacheHitMock />
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow tone="green">Why it matters</Eyebrow>
            <h2 className="mt-4 max-w-[30rem] font-[family-name:var(--font-display)] text-[1.75rem] font-bold leading-[1.2] tracking-[-0.02em] text-[var(--ink)] md:text-[2.125rem]">
              What teams actually notice first
            </h2>
            <div className="mt-8 flex flex-col gap-4">
              {reasons.map((r) => (
                <div
                  key={r.slice(0, 20)}
                  className="card card-hover flex items-start gap-3.5 p-5"
                >
                  <span className="mt-px flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[var(--primary-soft)]">
                    <IconCheck className="h-3 w-3 text-[var(--primary-deep)]" />
                  </span>
                  <p className="text-sm leading-6 text-[var(--ink)]">{r}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={60}>
            <CacheSavingsMock />
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] py-20 md:py-24">
        <Container className="mx-auto max-w-2xl">
          <Reveal>
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.02em] text-[var(--ink)] md:text-[2.5rem] md:leading-[1.15]">
              What actually determines a cache hit
            </h2>
            <p className="mt-5 text-sm leading-7 text-[var(--fg-muted)]">
              When a task runs, Infrovel records every file it reads, every
              environment variable it depends on, and the command used to
              invoke it. Those inputs are hashed together into a single
              cache key — not the task&apos;s name, not a timestamp, and
              not a version number someone has to remember to bump.
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--fg-muted)]">
              The next time a task runs with a cache key that already
              exists, the stored output is restored instead of
              re-executing the task. If even one input byte differs — a
              dependency bump, a changed source file, a different
              environment variable — the key changes too, and the task
              runs for real.
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--fg-muted)]">
              That&apos;s the property that makes the cache something a
              team can leave on by default rather than something they
              reach for cautiously: a hit is never a guess about whether
              the output is still valid, it&apos;s a guarantee derived from
              the actual inputs.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container className="max-w-2xl">
          <Reveal>
            <Eyebrow tone="green">Questions</Eyebrow>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.02em] text-[var(--ink)] md:text-[2.5rem] md:leading-[1.15]">
              Cache FAQ
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
