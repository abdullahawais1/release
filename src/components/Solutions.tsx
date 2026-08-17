import { Reveal } from "./Reveal";

const SCENARIOS = [
  {
    question: "Starting from zero?",
    answer: "We'll design and build your automation framework.",
  },
  {
    question: "Already have automation?",
    answer: "We'll audit, improve, expand, and maintain it.",
  },
  {
    question: "Tests are flaky?",
    answer: "We'll identify unstable tests and improve framework reliability.",
  },
  {
    question: "Regression is slowing releases?",
    answer: "We'll automate your highest-value regression scenarios.",
  },
  {
    question: "Need CI/CD testing?",
    answer: "We'll integrate your automated suite into your development pipeline.",
  },
  {
    question: "Need performance confidence?",
    answer: "We'll design and execute performance testing with JMeter.",
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="py-14 sm:py-20">
      <div className="mx-auto max-w-(--container-content) px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="section-eyebrow text-xs font-medium uppercase text-accent">
            Solutions
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Where we can help.
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SCENARIOS.map((item, i) => (
            <Reveal key={item.question} delay={i * 60} className="h-full">
              <div className="group h-full bg-background p-6 transition-colors duration-300 hover:bg-background-raised">
                <h3 className="flex items-center gap-2 text-[15px] font-semibold text-foreground">
                  {item.question}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{item.answer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
