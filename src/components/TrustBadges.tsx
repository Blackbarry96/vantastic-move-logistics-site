import { ShieldCheck, IdCard, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { Icon: ShieldCheck, label: "Fully insured" },
  { Icon: IdCard, label: "DBS checked" },
  { Icon: Wallet, label: "Pay on completion" },
] as const;

type TrustBadgesProps = {
  className?: string;
  /** Hero / light-on-dark overlays */
  variant?: "onDark" | "onDarkMuted";
};

export function TrustBadges({ className, variant = "onDark" }: TrustBadgesProps) {
  const muted = variant === "onDarkMuted";
  return (
    <ul
      className={cn(
        "flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-8 text-xs sm:text-sm font-medium",
        muted ? "text-white/75" : "text-white/90",
        className,
      )}
      aria-label="Trust and credentials"
    >
      {items.map(({ Icon, label }) => (
        <li key={label} className="flex items-center gap-2 py-0.5">
          <Icon className="h-4 w-4 shrink-0 text-primary" aria-hidden />
          <span>{label}</span>
        </li>
      ))}
    </ul>
  );
}
