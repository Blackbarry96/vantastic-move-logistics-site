import { type ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealSectionProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Subtle scroll entrance; disabled for prefers-reduced-motion via CSS.
 */
export function RevealSection({ children, className }: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.06 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "reveal-section",
        visible && "reveal-section-visible",
        className,
      )}
    >
      {children}
    </div>
  );
}
