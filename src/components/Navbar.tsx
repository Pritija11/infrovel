"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { IconClose, IconMenu, IconLogo } from "./icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/platform", label: "Platform" },
  { href: "/cache", label: "Cache" },
  { href: "/insights", label: "Insights" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // Track the route the menu was opened on rather than syncing a boolean in
  // an effect — any navigation (including back/forward) closes it for free.
  const [openAt, setOpenAt] = useState<string | null>(null);
  const open = openAt === pathname;
  const setOpen = (next: boolean) => setOpenAt(next ? pathname : null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="bg-[var(--ink)] py-2.5 text-center text-xs font-medium text-white/90">
        <span aria-hidden>⚡</span> New: Ultracache cuts redundant CI runs by
        up to 70%.{" "}
        <Link
          href="/cache"
          className="font-semibold text-white underline decoration-white/40 underline-offset-[3px] transition-colors hover:decoration-white"
        >
          See how
        </Link>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-all duration-200 ${
          scrolled
            ? "border-[var(--border)] bg-white/85 shadow-[var(--shadow-sm)] backdrop-blur-md"
            : "border-transparent bg-white"
        }`}
      >
        <Container className="flex items-center justify-between gap-6 py-3.5">
          <Link
            href="/"
            className="flex flex-none items-center gap-2.5"
            aria-label="Infrovel home"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--primary)] text-white">
              <IconLogo className="h-[18px] w-[18px]" />
            </span>
            <span className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-[var(--ink)]">
              infrovel
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "text-[var(--ink)]"
                      : "text-[var(--fg-muted)] hover:text-[var(--ink)]"
                  }`}
                >
                  {l.label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-[var(--primary)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-none items-center gap-2">
            <Link
              href="/contact"
              className="hidden items-center rounded-[10px] bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white shadow-[var(--shadow-sm)] transition-all duration-150 hover:bg-[var(--primary-hover)] hover:shadow-[var(--shadow-md)] active:translate-y-px lg:inline-flex"
            >
              Get started
            </Link>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="-mr-1 rounded-md p-1.5 text-[var(--ink)] transition-colors hover:bg-[var(--bg-alt)] lg:hidden"
            >
              {open ? (
                <IconClose className="h-6 w-6" />
              ) : (
                <IconMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </Container>

        {open && (
          <div className="border-t border-[var(--border)] bg-white lg:hidden">
            <Container className="flex flex-col gap-0.5 py-3">
              {links.map((l) => {
                const active = pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      active
                        ? "bg-[var(--primary-soft)] text-[var(--primary-deep)]"
                        : "text-[var(--fg-muted)] hover:bg-[var(--bg-alt)] hover:text-[var(--ink)]"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-[10px] bg-[var(--primary)] px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)]"
              >
                Get started
              </Link>
            </Container>
          </div>
        )}
      </header>
    </>
  );
}
