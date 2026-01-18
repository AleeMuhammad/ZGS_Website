"use client"
import { Footer } from "@/components/footer/footer";
import { Hero } from "@/components/hero/hero";

import { useRedirectWarning } from "@/lib/redirect";

export default function Home() {
  useRedirectWarning();

  return (
    <>
      <Hero />
      {/* <Showcase />
      <Quote />
      <Features />
      <Testimonials />
      <FAQs /> */}
      <Footer />
    </>
  );
}
