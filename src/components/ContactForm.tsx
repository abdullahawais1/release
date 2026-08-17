"use client";

import { useState, type FormEvent } from "react";
import { COMPANY_SIZES, NEED_OPTIONS } from "@/lib/content";
import { Reveal } from "./Reveal";

const inputClasses =
  "w-full rounded-lg border border-border bg-background px-3.5 py-3 text-[15px] text-foreground placeholder:text-muted-2 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25";

const selectClasses = `${inputClasses} select-arrow appearance-none pr-10`;

const labelClasses = "mb-1.5 block text-sm font-medium text-foreground/85";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="border-t border-border py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="section-eyebrow text-xs font-medium uppercase text-accent">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Get a Free QA Assessment
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-muted">
            Tell us about your product and current testing process. We&apos;ll follow up to
            discuss where automation and QA engineering can help.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-8 rounded-2xl border border-border bg-background-raised p-6 sm:p-7">
          {submitted ? (
            <div
              className="animate-fade-in flex flex-col items-center py-10 text-center"
              role="status"
              aria-live="polite"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-success/40 bg-success/10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 12.5L9.5 17L19 6.5"
                    stroke="var(--success)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-semibold">Thanks — request received.</h3>
              <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-muted">
                We&apos;ve received your details. Our team will review them and get back to you
                to schedule your free QA assessment.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClasses}>
                  Name
                </label>
                <input id="name" name="name" type="text" required autoComplete="name" className={inputClasses} />
              </div>

              <div>
                <label htmlFor="email" className={labelClasses}>
                  Work Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="company" className={labelClasses}>
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  autoComplete="organization"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="website" className={labelClasses}>
                  Company Website
                </label>
                <input
                  id="website"
                  name="website"
                  type="url"
                  placeholder="https://"
                  autoComplete="url"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="companySize" className={labelClasses}>
                  Company Size
                </label>
                <select id="companySize" name="companySize" required defaultValue="" className={selectClasses}>
                  <option value="" disabled>
                    Select company size
                  </option>
                  {COMPANY_SIZES.map((size) => (
                    <option key={size} value={size}>
                      {size} employees
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="need" className={labelClasses}>
                  What are you looking for?
                </label>
                <select id="need" name="need" required defaultValue="" className={selectClasses}>
                  <option value="" disabled>
                    Select an option
                  </option>
                  {NEED_OPTIONS.map((need) => (
                    <option key={need} value={need}>
                      {need}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="details" className={labelClasses}>
                  Additional details
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  placeholder="Tell us a bit about your product, testing process, or timeline."
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-[0_10px_24px_-8px_rgba(47,79,219,0.4)] transition-transform hover:translate-y-[-1px] hover:brightness-110 active:translate-y-0 sm:w-auto"
                >
                  Submit Request
                </button>
                <p className="mt-3 text-xs text-muted-2">
                  We&apos;ll only use these details to follow up about your QA assessment.
                </p>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
