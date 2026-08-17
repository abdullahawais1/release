import { Reveal } from "./Reveal";

const FOCUS_AREAS = [
  "Modern automation frameworks",
  "Practical QA engineering",
  "API testing",
  "Manual validation",
  "Performance testing",
];

export function About() {
  return (
    <section id="about" className="py-14 sm:py-20">
      <div className="mx-auto max-w-(--container-content) px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <Reveal className="max-w-2xl">
            <p className="section-eyebrow text-xs font-medium uppercase text-accent">About</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Engineering quality into every release.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-muted">
              TestForge is a specialized QA engineering studio focused on helping growing
              software teams build reliable, scalable testing processes.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              We combine modern automation frameworks, practical QA engineering, API testing,
              manual validation, and performance testing to help teams release software with
              greater confidence.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-border bg-background-raised p-6">
              <span className="section-eyebrow text-xs font-medium uppercase text-muted-2">
                What we focus on
              </span>
              <ul className="mt-4 space-y-3">
                {FOCUS_AREAS.map((area) => (
                  <li key={area} className="flex items-center gap-3 text-sm text-foreground/85">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
