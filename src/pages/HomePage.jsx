import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CollectionSection } from "../sections/CollectionSection";
import { CtaSection } from "../sections/CtaSection";
import { FeaturedSection } from "../sections/FeaturedSection";
import { HeroSection } from "../sections/HeroSection";
import { MarqueeSection } from "../sections/MarqueeSection";
import { ProcessSection } from "../sections/ProcessSection";
import { PropertiesSection } from "../sections/PropertiesSection";
import { TestimonialSection } from "../sections/TestimonialSection";

export function HomePage() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) window.setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" }), 50);
  }, [hash]);
  return (
    <main>
      <HeroSection />
      <MarqueeSection />
      <FeaturedSection />
      <CollectionSection />
      <PropertiesSection />
      <ProcessSection />
      <TestimonialSection />
      <CtaSection />
    </main>
  );
}
