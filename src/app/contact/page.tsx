import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "./ContactForm";
import { IconMail, IconPhone, IconMapPin } from "@/components/icons";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Talk to Infrovel about your CI pipeline — a developer infrastructure startup based in Kathmandu, Nepal, building remote caching and pipeline insights.",
  path: "/contact",
});

const contactPoints = [
  { icon: IconMail, label: "hello@infrovel.ltd" },
  { icon: IconPhone, label: "+977 982-7788990" },
  { icon: IconMapPin, label: "Chabahil, Kathmandu 44600, Nepal" },
];

export default function ContactPage() {
  return (
    <section className="py-20 md:py-28">
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-5 font-[family-name:var(--font-display)] text-[2rem] font-extrabold leading-[1.12] tracking-[-0.025em] text-[var(--ink)] sm:text-[2.5rem] md:text-[3.25rem]">
            Tell us what&apos;s slow about your CI.
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-[var(--fg-muted)]">
            As a startup, someone on the founding team reads and replies to
            every message personally — no ticket number, no automated
            sequence. Expect a response within a business day.
          </p>
          <p className="mt-4 max-w-md text-base leading-7 text-[var(--fg-muted)]">
            Whether you&apos;re trying to figure out if Infrovel fits your
            setup, you want a walkthrough before connecting a real
            pipeline, or you&apos;re already on the Beta tier and hit
            something unexpected — this is the fastest way to reach us.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            {contactPoints.map((c) => (
              <div key={c.label} className="flex items-center gap-3.5 text-sm text-[var(--ink)]">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[var(--primary-soft)]">
                  <c.icon className="h-4 w-4 text-[var(--primary-deep)]" />
                </span>
                {c.label}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="card bg-[var(--bg-alt)] p-7 sm:p-9">
            <ContactForm />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
