export function Eyebrow({
  children,
  tone = "primary",
}: {
  children: React.ReactNode;
  tone?: "primary" | "orange" | "green" | "dark";
}) {
  const tones = {
    primary: "bg-[var(--primary-soft)] text-[var(--primary-deep)]",
    orange: "bg-[var(--orange-soft)] text-[var(--orange)]",
    green: "bg-[var(--green-soft)] text-[var(--green)]",
    dark: "bg-white/10 text-white",
  };

  return <span className={`pill-tag ${tones[tone]}`}>{children}</span>;
}
