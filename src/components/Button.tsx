import Link from "next/link";

export function Button({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "dark";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[10px] px-5 py-2.5 text-sm font-semibold leading-6 transition-all duration-150 active:translate-y-px";
  const variants = {
    solid:
      "bg-[var(--primary)] text-white shadow-[var(--shadow-sm)] hover:bg-[var(--primary-hover)] hover:shadow-[var(--shadow-md)]",
    outline:
      "border border-[var(--border-strong)] bg-white text-[var(--ink)] shadow-[var(--shadow-sm)] hover:border-[var(--fg-faint)] hover:bg-[var(--bg-alt)]",
    dark: "bg-[var(--ink)] text-white shadow-[var(--shadow-sm)] hover:bg-[var(--ink-soft)]",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
