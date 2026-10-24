import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Infrovel, a developer infrastructure startup, collects, processes, and protects data from workspace, cache, and pipeline activity.",
  path: "/privacy",
});

const sections = [
  {
    heading: "1. What we collect",
    body: [
      "Account data: your name, work email, and workspace details when you sign up or request a demo.",
      "Pipeline metadata: job names, durations, cache hit/miss status, and dependency graphs generated as Infrovel orchestrates your CI — not your source code or application data.",
      "Cached build outputs: the actual artifacts produced by cached tasks, stored so they can be reused across runs.",
      "Usage and log data: IP addresses, request metadata, and product usage events, collected for security, billing, and reliability purposes.",
    ],
  },
  {
    heading: "2. How we use it",
    body: [
      "Pipeline metadata and cached outputs are used only to run the platform for you — serving cache hits, rendering insights, and scheduling parallel jobs.",
      "We don't read your source code for any purpose beyond what's needed to compute cache keys, and we never use customer data to train any model.",
    ],
  },
  {
    heading: "3. Who we share it with",
    body: [
      "Infrastructure sub-processors required to run the platform — cloud hosting, error monitoring, and email delivery. A current list is available on request.",
      "We do not sell customer data, and cached outputs are never shared across workspaces.",
    ],
  },
  {
    heading: "4. Data retention",
    body: [
      "Job history retention depends on your plan — 7 days on the Beta tier, 90 days on Team, and configurable on Enterprise. Cached outputs expire automatically once their inputs are no longer referenced by active branches.",
    ],
  },
  {
    heading: "5. Your rights",
    body: [
      "You can request a copy of the data we hold for your workspace, ask us to correct it, or request deletion. Reach out through the contact details below.",
    ],
  },
  {
    heading: "6. Changes to this policy",
    body: [
      "If this policy changes in a way that materially affects how we handle your data, we'll notify active workspace owners by email before the change takes effect.",
    ],
  },
  {
    heading: "7. Contact",
    body: [
      "Questions about this policy can be sent to hello@infrovel.ltd, or by post to Chabahil, Kathmandu 44600, Nepal.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <Reveal>
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-[2rem] font-extrabold leading-[1.12] tracking-[-0.025em] text-[var(--ink)] sm:text-[2.5rem] md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
            This explains what data Infrovel collects, how it&apos;s used,
            and what you can do about it.
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
