import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TechnologyStrip } from "@/components/TechnologyStrip";
import { ProblemCards } from "@/components/ProblemCards";
import { Services } from "@/components/Services";
import { WhyTestForge } from "@/components/WhyTestForge";
import { Solutions } from "@/components/Solutions";
import { SampleProjects } from "@/components/SampleProjects";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-background"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <TechnologyStrip />
        <ProblemCards />
        <Services />
        <WhyTestForge />
        <Solutions />
        <SampleProjects />
        <Process />
        <About />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
