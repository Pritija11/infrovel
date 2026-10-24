"use client";

import { useId, useState } from "react";
import { IconChevronDown } from "@/components/icons";

export function FaqAccordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="card divide-y divide-[var(--border)] overflow-hidden">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;

        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-[var(--bg-alt)]"
              >
                <span className="text-sm font-semibold text-[var(--ink)]">
                  {item.q}
                </span>
                <span
                  className={`flex h-6 w-6 flex-none items-center justify-center rounded-full border transition-all duration-200 ${
                    isOpen
                      ? "rotate-180 border-[var(--primary)] bg-[var(--primary-soft)] text-[var(--primary-deep)]"
                      : "border-[var(--border)] text-[var(--fg-muted)]"
                  }`}
                >
                  <IconChevronDown className="h-3.5 w-3.5" />
                </span>
              </button>
            </h3>

            {/* grid-rows 0fr → 1fr animates to the content's natural height
                without needing a hard-coded max-height. */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!isOpen}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 pr-12 text-sm leading-6 text-[var(--fg-muted)]">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
