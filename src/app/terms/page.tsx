import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "The terms that govern use of the Infrovel platform for remote caching, parallel execution, and pipeline performance insights.",
  path: "/terms",
});

const sections = [
  {
    heading: "1. Using the platform",
    body: [
      "Infrovel grants you a non-exclusive, non-transferable right to use the platform to cache, parallelize, and analyze your CI pipelines, subject to the limits of your plan (Beta, Team, or Enterprise).",
      "You're responsible for the content of the pipelines you connect, including any third-party CI or build tool costs incurred independently of Infrovel.",
    ],
  },
  {
    heading: "2. Acceptable use",
    body: [
      "You may not use the platform to cache or process content that violates applicable law, or to attempt to access cache data belonging to another workspace.",
      "We may suspend a workspace that we reasonably believe poses a security risk to our infrastructure or other customers, with notice where practical.",
    ],
  },
  {
    heading: "3. Beta tier terms",
    body: [
      "The Beta tier is offered free of charge for workspaces with 10 or fewer contributors, and may change or be discontinued with 30 days' notice. It's provided without the uptime commitments available on paid plans.",
    ],
  },
  {
    heading: "4. Billing",
    body: [
      "Team and Enterprise plans are billed in advance on a monthly or annual basis as agreed at signup. Fees are non-refundable except where required by law.",
    ],
  },
  {
    heading: "5. Data ownership",
    body: [
      "You own the source code, pipeline configuration, and build artifacts you connect to the platform. We process pipeline metadata and cached outputs only to operate the service for you, as described in our Privacy Policy, and you can clear your cache or export your data at any time.",
    ],
  },
  {
    heading: "6. Limitation of liability",
    body: [
      "As an early-stage startup, we provide the platform on an as-is basis. To the extent permitted by law, Infrovel is not liable for indirect or consequential damages arising from your use of the platform, including a cache miss that temporarily increases build time.",
    ],
  },
  {
    heading: "7. Termination",
    body: [
      "You may close your workspace at any time. We may suspend or terminate access for material breach of these terms, with an opportunity to cure where reasonable.",
    ],
  },
  {
    heading: "8. Contact",
    body: [
      "Questions about these terms can be sent to hello@infrovel.ltd, or by post to Chabahil, Kathmandu 44600, Nepal.",
    ],
  },
];

export default function TermsPage() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <Reveal>
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-[2rem] font-extrabold leading-[1.12] tracking-[-0.025em] text-[var(--ink)] sm:text-[2.5rem] md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
            The terms that govern use of the Infrovel platform. By using it,
            you agree to the terms below.
          </p>
        </Reveal>

        <div className="mt-16 max-w-2xl">
          {sections.map((section, i) => (
            <Reveal key={section.heading} delay={Math.min(i * 40, 240)}>
              <div className="border-t border-[var(--border)] py-8 first:border-t-0 first:pt-0">
                <h2 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-[-0.01em] text-[var(--ink)]">
                  {section.heading}
                </h2>
                <div className="mt-4 flex flex-col gap-3">
                  {section.body.map((p) => (
                    <p
                      key={p}
                      className="text-sm leading-7 text-[var(--fg-muted)]"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
