import { PRIMARY_CTA_LABEL, SECONDARY_CTA_LABEL } from "@/lib/content";
import { TestRunPanel } from "./TestRunPanel";

const TECH_LABELS = ["Playwright", "Cypress", "Selenium", "API Testing", "JMeter"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-wash" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-(--container-content) gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background-raised px-3 py-1 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            QA automation &amp; quality engineering studio
          </div>

          <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-[4.5rem] lg:leading-[1.05]">
            Ship Faster. <span className="text-gradient">Test Smarter.</span>
          </h1>

          <p className="mt-6 text-lg font-medium text-foreground/85 sm:text-xl">
            QA automation and quality engineering for growing software teams.
          </p>

          <p className="mt-4 max-w-xl text-balance text-base leading-relaxed text-muted sm:text-[17px]">
            TestForge helps growing software teams reduce manual regression effort, improve
            test reliability, and ship with greater confidence through modern QA automation
            and engineering.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-[0_10px_24px_-8px_rgba(47,79,219,0.4)] transition-transform hover:translate-y-[-1px] hover:brightness-110 active:translate-y-0"
            >
              {PRIMARY_CTA_LABEL}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5"
              >
                <path
                  d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-border-strong px-6 py-3.5 text-sm font-medium text-foreground/90 transition-colors hover:border-foreground/40 hover:bg-background-raised"
            >
              {SECONDARY_CTA_LABEL}
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2">
            {TECH_LABELS.map((label, i) => (
              <span key={label} className="flex items-center gap-x-5">
                <span className="font-mono text-[13px] text-muted-2">{label}</span>
                {i < TECH_LABELS.length - 1 ? (
                  <span className="h-1 w-1 rounded-full bg-border-strong" aria-hidden="true" />
                ) : null}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end animate-fade-in [animation-delay:150ms]">
          <div className="relative w-full max-w-md">
            <div
              className="absolute -inset-6 -z-10 rounded-[2rem] bg-accent-soft blur-2xl"
              aria-hidden="true"
            />
            <TestRunPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
