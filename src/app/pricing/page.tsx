import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { FaqAccordion } from "@/components/FaqAccordion";
import { IconCheck } from "@/components/icons";

export const metadata = pageMetadata({
  title: "Pricing",
  description:
    "Infrovel pricing — a free beta tier for startup teams under 10 contributors, a Team tier for growing engineering orgs, and custom Enterprise plans.",
  path: "/pricing",
});

const tiers = [
  {
    name: "Beta",
    price: "$0",
    period: "while in beta",
    description: "For a startup team under 10 contributors.",
    cta: "Get started free",
    href: "/contact",
    variant: "outline" as const,
    features: [
      "Shared remote cache",
      "Parallel execution across 4 workers",
      "7-day job history",
      "Community support",
    ],
  },
  {
    name: "Team",
    price: "$290",
    period: "per month",
    description: "For teams running CI on every commit, all day.",
    cta: "Get started free",
    href: "/contact",
    variant: "solid" as const,
    highlighted: true,
    features: [
      "Unlimited contributors",
      "Parallel execution across 16 workers",
      "90-day job history and trend analysis",
      "Priority email and chat support",
      "Weekly slow-job digest",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "annual contract",
    description: "For organizations with dedicated infrastructure needs.",
    cta: "Talk to us",
    href: "/contact",
    variant: "outline" as const,
    features: [
      "Everything in Team",
      "Dedicated cache infrastructure and SSO",
      "Custom data retention and residency",
      "A named engineer for onboarding",
    ],
  },
];

const comparisonRows = [
  { label: "Contributors", beta: "Up to 10", team: "Unlimited", enterprise: "Unlimited" },
  { label: "Parallel workers", beta: "4", team: "16", enterprise: "Custom" },
  { label: "Job history", beta: "7 days", team: "90 days", enterprise: "Custom" },
  { label: "SSO & RBAC", beta: "—", team: "Team roles", enterprise: "Full SSO" },
  { label: "Support", beta: "Community", team: "Priority", enterprise: "Dedicated" },
];

const faqs = [
  {
    q: "Is the Beta tier time-limited?",
    a: "No — it's free for as long as you stay under 10 contributors, not a trial with an expiry date. We're a startup ourselves and want teams to actually run it before paying for it.",
  },
  {
    q: "What happens if we grow past 10 contributors?",
    a: "We'll reach out before anything is restricted. You can upgrade to Team at that point, or talk to us if the limit doesn't fit your situation.",
  },
  {
    q: "Do you charge based on compute minutes used?",
    a: "No — pricing is per workspace, not metered per minute. We'd rather you use the caching and parallelization aggressively than worry about a usage bill.",
  },
  {
    q: "Can we switch tiers later?",
    a: "Yes, at any time. Downgrading takes effect at the start of your next billing cycle; upgrading takes effect immediately.",
  },
  {
    q: "Is there a discount for annual billing?",
    a: "Yes — paying annually on the Team tier works out to two months free compared to paying monthly. Enterprise contracts are annual by default.",
  },
  {
    q: "What counts as a 'contributor' for the Beta tier limit?",
    a: "Anyone whose commits trigger a pipeline connected to your workspace in a given month — not total repository collaborators, so an inactive account doesn't count against your limit.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container className="max-w-2xl text-center">
          <Reveal>
            <Eyebrow>Pricing</Eyebrow>
            <h1 className="mx-auto mt-5 font-[family-name:var(--font-display)] text-[2rem] font-extrabold leading-[1.12] tracking-[-0.025em] text-[var(--ink)] sm:text-[2.5rem] md:text-[3.25rem]">
              Priced for a startup team, not a usage-metered bill
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              No per-minute compute charges and no sales call required to
              see numbers. Start free, upgrade when CI time becomes
              something your whole team feels, not just you.
            </p>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              Every tier includes the full Cache and Parallel execution
              toolkit — the differences are in history retention, worker
              count, and support, not in locking core features behind a
              higher plan.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 pt-3 lg:grid-cols-3 lg:items-start">
            {tiers.map((t, i) => (
              <Reveal key={t.name} delay={i * 40} className="h-full">
                <div
                  className={`relative flex h-full flex-col rounded-[14px] bg-white p-7 ${
                    t.highlighted
                      ? "shadow-[var(--shadow-lg)] ring-2 ring-[var(--primary)]"
                      : "shadow-[var(--shadow-sm)] ring-1 ring-[var(--border)]"
                  }`}
                >
                  {t.highlighted && (
                    <span className="absolute -top-3 left-7 inline-flex items-center rounded-full bg-[var(--primary)] px-3 py-1 text-[11px] font-semibold text-white shadow-[var(--shadow-sm)]">
                      Most teams start here
                    </span>
                  )}
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--ink)]">
                    {t.name}
                  </h3>
                  <p className="mt-1.5 min-h-12 text-sm leading-6 text-[var(--fg-muted)]">
                    {t.description}
                  </p>
                  <div className="mt-6 flex items-baseline gap-1.5">
                    <span className="tnum font-[family-name:var(--font-display)] text-[2.5rem] font-extrabold leading-none tracking-[-0.02em] text-[var(--ink)]">
                      {t.price}
                    </span>
                    <span className="text-xs text-[var(--fg-muted)]">
                      {t.period}
                    </span>
                  </div>
                  <Button
                    href={t.href}
                    variant={t.variant}
                    className="mt-7 w-full"
                  >
                    {t.cta}
                  </Button>
                  <ul className="mt-7 flex flex-col gap-3.5 border-t border-[var(--border)] pt-7">
                    {t.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-sm leading-6 text-[var(--ink)]"
                      >
                        <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[var(--primary-soft)]">
                          <IconCheck className="h-3 w-3 text-[var(--primary-deep)]" />
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <Eyebrow tone="green">Compare</Eyebrow>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.02em] text-[var(--ink)] md:text-[2.5rem] md:leading-[1.15]">
              Full comparison
            </h2>
          </Reveal>
          <Reveal delay={60} className="card mt-10 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead className="bg-[var(--bg-alt)]">
                <tr className="border-b border-[var(--border)] text-left">
                  <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.06em] text-[var(--fg-muted)]">Feature</th>
                  <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.06em] text-[var(--fg-muted)]">Beta</th>
                  <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.06em] text-[var(--fg-muted)]">Team</th>
                  <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.06em] text-[var(--fg-muted)]">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-b border-[var(--border)] last:border-0">
                    <td className="px-5 py-4 font-medium text-[var(--ink)]">{row.label}</td>
                    <td className="px-5 py-4 text-[var(--fg-muted)]">{row.beta}</td>
                    <td className="px-5 py-4 text-[var(--fg-muted)]">{row.team}</td>
                    <td className="px-5 py-4 text-[var(--fg-muted)]">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container className="max-w-2xl">
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.02em] text-[var(--ink)] md:text-[2.5rem] md:leading-[1.15]">
              Pricing FAQ
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
