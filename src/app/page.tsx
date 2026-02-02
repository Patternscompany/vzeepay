import Hero from "@/components/home/Hero";
import Partners from "@/components/home/Partners";
import AISection from "@/components/home/AISection";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import Company from "@/components/home/Company";
import Comparison from "@/components/home/Comparison";
import FAQ from "@/components/home/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <AISection />
      <Stats />
      <Partners />
      <Services />
      <Testimonials />
      <Company />
      <Comparison />
      <FAQ />
    </>
  );
}
