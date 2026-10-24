export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  // Tailwind resolves conflicting utilities by stylesheet order, not by the
  // order they appear in the attribute — so a caller passing `max-w-2xl`
  // used to lose to the default below and render full width. Drop the
  // default whenever the caller supplies its own max-width.
  const hasMaxWidth = /(?:^|\s)(?:max-w-|sm:max-w-|md:max-w-|lg:max-w-)/.test(
    className,
  );

  return (
    <div
      className={`mx-auto w-full px-6 ${hasMaxWidth ? "" : "max-w-[1200px]"} ${className}`}
    >
      {children}
    </div>
  );
}
