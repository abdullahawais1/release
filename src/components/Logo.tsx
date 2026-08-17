type LogoMarkProps = {
  size?: number;
  className?: string;
  tone?: "default" | "inverted";
};

/**
 * Abstract forged-peak mark: a struck chevron over a base line.
 * Not a literal hammer/anvil illustration — pure geometric form.
 */
export function LogoMark({ size = 28, className, tone = "default" }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="tf-mark-gradient" x1="4" y1="22" x2="28" y2="8" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2f4fdb" />
          <stop offset="1" stopColor="#7b5cf5" />
        </linearGradient>
      </defs>
      <path
        d="M6 20.5L16 9L26 20.5"
        stroke="url(#tf-mark-gradient)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 25.5H21.5"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        className={tone === "inverted" ? "text-white/70" : "text-foreground/70"}
      />
    </svg>
  );
}

type LogoProps = {
  className?: string;
  markSize?: number;
  showWordmark?: boolean;
  tone?: "default" | "inverted";
};

export function Logo({ className, markSize = 26, showWordmark = true, tone = "default" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark size={markSize} tone={tone} />
      {showWordmark ? (
        <span
          className={`text-[17px] font-semibold tracking-tight ${
            tone === "inverted" ? "text-white" : "text-foreground"
          }`}
        >
          TestForge
        </span>
      ) : null}
    </span>
  );
}
