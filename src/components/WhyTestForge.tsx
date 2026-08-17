import { Reveal } from "./Reveal";

const REASONS = [
  {
    number: "01",
    title: "Automation First",
    description: "Reduce repetitive manual testing with maintainable automation.",
  },
  {
    number: "02",
    title: "Engineering Mindset",
    description: "Testing isn't just about finding bugs. We understand the software behind them.",
  },
  {
    number: "03",
    title: "Flexible Engagement",
    description: "Get help with a specific automation project or ongoing QA engineering support.",
  },
  {
    number: "04",
    title: "Startup Friendly",
    description: "Access specialized QA expertise without building a large internal QA team.",
  },
];

export function WhyTestForge() {
  return (
    <section className="border-t border-border bg-background-raised/40 py-14 sm:py-20">
      <div className="mx-auto max-w-(--container-content) px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="section-eyebrow text-xs font-medium uppercase text-accent">
            Why TestForge
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            A QA partner built for growing teams.
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-border border-t border-border">
          {REASONS.map((reason, i) => (
            <Reveal key={reason.number} delay={i * 90}>
              <div className="group grid grid-cols-1 items-baseline gap-2 py-6 sm:grid-cols-[auto_1fr_1.4fr] sm:gap-8">
                <span className="font-mono text-sm text-muted-2 transition-colors group-hover:text-accent">
                  {reason.number}
                </span>
                <h3 className="text-lg font-semibold text-foreground">{reason.title}</h3>
                <p className="max-w-md text-[15px] leading-relaxed text-muted">
                  {reason.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
