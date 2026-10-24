import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Avatar } from "@/components/Avatar";
import { IconArrowRight } from "@/components/icons";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Infrovel is a developer infrastructure startup based in Kathmandu, Nepal, building remote caching, parallel execution, and pipeline insights for CI.",
  path: "/about",
});

const stats = [
  { value: "2026", label: "Founded" },
  { value: "5", label: "People on the team" },
  { value: "Kathmandu", label: "Where we build" },
];

const roles = [
  {
    title: "Founder & CEO",
    initials: "FC",
    body: "Spent five years optimizing build systems at a previous job before starting Infrovel, and still reads every slow-job report personally.",
  },
  {
    title: "Head of Infrastructure",
    initials: "HI",
    body: "Owns the cache and scheduling engine — the part of the platform that has to be correct on every single run.",
  },
  {
    title: "Developer Experience Engineer",
    initials: "DE",
    body: "Works directly with early-access teams to connect their first pipeline, then folds what breaks back into the product.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <Eyebrow>About Infrovel</Eyebrow>
            <h1 className="mt-5 font-[family-name:var(--font-display)] text-[2rem] font-extrabold leading-[1.12] tracking-[-0.025em] text-[var(--ink)] sm:text-[2.5rem] md:text-[3.25rem]">
              We built this because our own CI was the slowest part of our
              day
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[var(--fg-muted)]">
              Infrovel started in 2026 as a small team in Kathmandu who kept
              running the same math: a 10-minute CI run, multiplied by
              every push, multiplied by every engineer on the team, was
              hours of waiting a day that nobody had actually budgeted for.
              As a startup ourselves, we didn&apos;t have a platform team to
              fix it for us — so we built the thing we needed.
            </p>
          </Reveal>
          <Reveal delay={60}>
            <div className="grid grid-cols-3 gap-px overflow-hidden rounded-[14px] bg-[var(--border)] shadow-[var(--shadow-sm)] ring-1 ring-[var(--border)]">
              {stats.map((s) => (
                <div key={s.label} className="bg-[var(--bg-alt)] px-3 py-7 text-center">
                  <p className="tnum font-[family-name:var(--font-display)] text-xl font-extrabold tracking-tight text-[var(--ink)] sm:text-2xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[var(--fg-muted)]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container className="mx-auto max-w-2xl">
          <Reveal>
            <blockquote className="border-l-[3px] border-[var(--primary)] pl-6 font-[family-name:var(--font-display)] text-[1.6rem] font-semibold leading-[1.35] tracking-[-0.015em] text-[var(--ink)]">
              &ldquo;We didn&apos;t want to add more machines to a slow
              pipeline. We wanted the pipeline to stop doing work it had
              already done.&rdquo;
            </blockquote>
            <p className="mt-8 text-sm leading-7 text-[var(--fg-muted)]">
              The common advice for a slow CI pipeline is to throw more
              compute at it — bigger runners, more parallel jobs. That
              helps, but it doesn&apos;t fix the underlying problem: most of
              what a pipeline runs on a given commit is identical to what
              it ran on the last one.
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--fg-muted)]">
              Infrovel exists to skip that redundant work entirely, not
              just run it faster. We&apos;re still a small startup, a few
              months into building it with early-access teams, and the
              roadmap is shaped directly by whichever job they&apos;re
              complaining about that week.
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--fg-muted)]">
              We also didn&apos;t want to build something that required a
              rewrite to adopt. Every one of us had, at some point, been
              handed a build-tooling migration that promised to fix CI and
              instead became a multi-quarter project of its own. Infrovel
              is deliberately designed to sit on top of the pipeline you
              already have, not replace it.
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--fg-muted)]">
              That constraint shapes almost every product decision we
              make. If a feature can&apos;t be adopted in an afternoon by a
              team that just found us, it doesn&apos;t ship — no matter how
              interesting the underlying engineering problem is.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow tone="green">Who you&apos;d work with</Eyebrow>
            <h2 className="mt-4 max-w-[30rem] font-[family-name:var(--font-display)] text-[1.75rem] font-bold leading-[1.2] tracking-[-0.02em] text-[var(--ink)] md:text-[2.125rem]">
              A small team, directly involved in your rollout
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {roles.map((r, i) => (
              <Reveal key={r.title} delay={i * 40} className="h-full">
                <div className="h-full card card-hover p-6">
                  <Avatar initials={r.initials} className="h-10 w-10 text-sm" />
                  <h3 className="mt-4 text-base font-semibold text-[var(--ink)]">
                    {r.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-[var(--fg-muted)]">
                    {r.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container className="mx-auto max-w-2xl">
          <Reveal>
            <Eyebrow tone="orange">Where we&apos;re headed</Eyebrow>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.02em] text-[var(--ink)] md:text-[2.5rem] md:leading-[1.15]">
              What we&apos;re building next
            </h2>
            <p className="mt-5 text-sm leading-7 text-[var(--fg-muted)]">
              GitLab CI and CircleCI support are next on the roadmap,
              followed by a self-hosted cache option for teams with data
              residency requirements. Both came directly from conversations
              with early-access teams, not from a roadmap we wrote in
              isolation.
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--fg-muted)]">
              Longer term, we want Infrovel to be the thing a new engineer
              on your team never has to think about — CI that&apos;s fast
              enough, and transparent enough about why, that it stops being
              a topic of conversation at all.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] py-20 text-center md:py-24">
        <Container>
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.02em] text-[var(--ink)] md:text-[2.5rem] md:leading-[1.15]">
              Want to see it on your own pipeline?
            </h2>
            <Button href="/contact" className="mt-7">
              Get started free
              <IconArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
