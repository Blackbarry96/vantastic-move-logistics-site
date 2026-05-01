interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: "light" | "dark";
}

/**
 * Direct Movers — spearhead with rose petal motif.
 * Sharp tip with a small white rose silhouette nested inside.
 */
export const Logo = ({ className = "", showText = true, variant = "light" }: LogoProps) => {
  const textColor = variant === "light" ? "text-foreground" : "text-white";
  const subColor = variant === "light" ? "text-muted-foreground" : "text-white/70";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Spearhead outer shape */}
        <path
          d="M24 2 L40 18 C40 30 32 42 24 46 C16 42 8 30 8 18 Z"
          fill="hsl(var(--primary))"
          stroke="hsl(var(--brand-black))"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Inner darker spear groove */}
        <path
          d="M24 7 L35 18 C35 27 29 37 24 40 C19 37 13 27 13 18 Z"
          fill="hsl(var(--brand-black))"
          opacity="0.25"
        />
        {/* Rose petals — stylised white rose nested in centre */}
        <g transform="translate(24 22)">
          <circle r="2.4" fill="white" />
          <path d="M0 -6 C 3 -5 4 -2 2.2 -1 C 4 -1 5 2 2 3 C 3 5 0 6 -1 4 C -2 6 -5 5 -4 2 C -6 1 -5 -2 -3 -1 C -5 -3 -3 -6 0 -6 Z" fill="white" />
          <circle r="1.1" fill="hsl(var(--primary))" />
        </g>
      </svg>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-display font-bold text-lg sm:text-xl tracking-wide ${textColor}`}>
            DIRECT
          </span>
          <span className={`text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] ${subColor}`}>
            MOVERS
          </span>
        </div>
      )}
    </div>
  );
};
