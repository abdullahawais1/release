import { PRIMARY_CTA_LABEL } from "@/lib/content";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="cta-gradient relative overflow-hidden py-14 text-center sm:py-20">
      <div className="pointer-events-none absolute inset-0 panel-grid opacity-40" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 panel-noise" aria-hidden="true" />

      <Reveal className="relative mx-auto max-w-(--container-content) px-5 sm:px-8">
        <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          Ready to make testing a competitive advantage?
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-balance text-base leading-relaxed text-white/75 sm:text-lg">
          Let&apos;s identify where automation and better QA can improve your development
          workflow.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#1a1f8c] shadow-[0_10px_28px_-8px_rgba(0,0,0,0.35)] transition-transform hover:translate-y-[-1px] hover:brightness-105 sm:w-auto"
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
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/35 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:border-white/60 hover:bg-white/10 sm:w-auto"
          >
            Book a Consultation
          </a>
        </div>
      </Reveal>
    </section>
  );
}
