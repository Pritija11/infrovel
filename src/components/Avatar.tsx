export function Avatar({
  initials,
  className = "h-9 w-9 text-xs",
}: {
  initials: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`flex flex-none items-center justify-center rounded-full bg-[var(--primary-soft)] font-[family-name:var(--font-display)] font-bold tracking-wide text-[var(--primary-deep)] ring-1 ring-inset ring-[var(--primary)]/15 ${className}`}
    >
      {initials}
    </div>
  );
}
