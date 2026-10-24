import Link from "next/link";
import { Container } from "./Container";
import { IconLogo } from "./icons";

const columns = [
  {
    heading: "Product",
    links: [
      { href: "/platform", label: "Platform" },
      { href: "/cache", label: "Cache" },
      { href: "/insights", label: "Insights" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
];

const YEAR = 2026;

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-alt)] text-[var(--fg-muted)]">
      <Container className="flex flex-col gap-12 py-16 lg:flex-row lg:justify-between lg:gap-20">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--primary)] text-white">
              <IconLogo className="h-[18px] w-[18px]" />
            </span>
            <span className="font-[family-name:var(--font-display)] text-base font-bold tracking-tight text-[var(--ink)]">
              infrovel
            </span>
          </div>
          <p className="mt-4 text-sm leading-6">
            Remote caching, parallel execution, and pipeline insights that
            cut CI time — built from Kathmandu, Nepal.
          </p>
          <a
            href="mailto:hello@infrovel.ltd"
            className="mt-4 inline-block text-sm font-medium text-[var(--primary-deep)] underline decoration-[var(--primary)]/30 underline-offset-[3px] transition-colors hover:decoration-[var(--primary)]"
          >
            hello@infrovel.ltd
          </a>
        </div>

        <div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 lg:gap-x-16">
          {columns.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--ink)]">
                {col.heading}
              </p>
              <ul className="mt-4 flex flex-col gap-3 text-sm">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="transition-colors hover:text-[var(--ink)]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div className="border-t border-[var(--border)]">
        <Container className="flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {YEAR} Infrovel. All rights reserved.</p>
          <p>Developer infrastructure, built from Kathmandu, Nepal.</p>
        </Container>
      </div>
    </footer>
  );
}
