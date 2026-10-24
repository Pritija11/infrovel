"use client";

import { useEffect, useRef, useState } from "react";
import {
  IconUser,
  IconMail,
  IconPhone,
  IconMessageSquare,
  IconChevronDown,
} from "@/components/icons";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    formRef.current?.reset();
    setSubmitted(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setSubmitted(false), 2000);
  }

  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-6"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Field label="Full name" htmlFor="name" icon={IconUser}>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full rounded-[10px] border border-[var(--border-strong)] bg-white py-2.5 pl-10 pr-4 text-sm text-[var(--ink)] shadow-[var(--shadow-sm)] transition-shadow outline-none placeholder:text-[var(--fg-faint)] focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary-ring)]"
            />
          </Field>
          <Field label="Work email" htmlFor="email" icon={IconMail}>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className="w-full rounded-[10px] border border-[var(--border-strong)] bg-white py-2.5 pl-10 pr-4 text-sm text-[var(--ink)] shadow-[var(--shadow-sm)] transition-shadow outline-none placeholder:text-[var(--fg-faint)] focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary-ring)]"
            />
          </Field>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Field label="Phone (optional)" htmlFor="phone" icon={IconPhone}>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+977 98..."
              className="w-full rounded-[10px] border border-[var(--border-strong)] bg-white py-2.5 pl-10 pr-4 text-sm text-[var(--ink)] shadow-[var(--shadow-sm)] transition-shadow outline-none placeholder:text-[var(--fg-faint)] focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary-ring)]"
            />
          </Field>
          <label htmlFor="ci" className="flex flex-col gap-2">
            <span className="text-sm font-medium text-[var(--ink)]">
              CI provider
            </span>
            <div className="relative">
              <IconChevronDown className="pointer-events-none absolute right-3 top-3 h-4 w-4 text-[var(--fg-faint)]" />
              <select
                id="ci"
                name="ci"
                defaultValue=""
                className="w-full appearance-none rounded-[10px] border border-[var(--border-strong)] bg-white py-2.5 pl-4 pr-10 text-sm text-[var(--ink)] shadow-[var(--shadow-sm)] transition-shadow outline-none focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary-ring)]"
              >
                <option value="" disabled>
                  Select one
                </option>
                <option>GitHub Actions</option>
                <option>GitLab CI</option>
                <option>CircleCI</option>
                <option>Something else</option>
              </select>
            </div>
          </label>
        </div>

        <Field
          label="What's slow about your CI today?"
          htmlFor="message"
          icon={IconMessageSquare}
        >
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="A few sentences on your build tool, team size, and what's painful about CI right now."
            className="w-full resize-none rounded-lg border border-[var(--border-strong)] bg-white py-2.5 pl-9 pr-4 text-sm text-[var(--ink)] outline-none placeholder:text-[var(--fg-faint)] focus:border-[var(--primary)]"
          />
        </Field>

        <button
          type="submit"
          className="mt-2 inline-flex items-center justify-center rounded-[10px] bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-sm)] transition-all duration-150 hover:bg-[var(--primary-hover)] hover:shadow-[var(--shadow-md)] active:translate-y-px"
        >
          Send message
        </button>
      </form>

      <div
        role="status"
        aria-live="polite"
        className={`pointer-events-none fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 transition-all duration-300 ${
          submitted ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
      >
        <span className="flex items-center gap-2 rounded-[10px] border border-[var(--border)] bg-[var(--ink)] px-4 py-2.5 text-sm font-medium text-white shadow-[var(--shadow-lg)]">
          Message sent — we&apos;ll follow up within a business day.
        </span>
      </div>
    </>
  );
}

function Field({
  label,
  htmlFor,
  icon: Icon,
  children,
}: {
  label: string;
  htmlFor: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="text-sm font-medium text-[var(--ink)]">{label}</span>
      <div className="relative">
        <Icon className="pointer-events-none absolute left-3.5 top-3 h-4 w-4 text-[var(--fg-faint)]" />
        {children}
      </div>
    </label>
  );
}
