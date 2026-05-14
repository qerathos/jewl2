"use client";

import "./kit.css";
import { useState } from "react";
import { KitNav } from "@/components/kit/kit-nav";
import { KitHero } from "@/components/kit/kit-hero";
import { KitBenefits } from "@/components/kit/kit-benefits";
import { KitIncludes } from "@/components/kit/kit-includes";
import { KitTestimonials } from "@/components/kit/kit-testimonials";
import { KitFaq } from "@/components/kit/kit-faq";
import { KitCta } from "@/components/kit/kit-cta";
import { KitFooter } from "@/components/kit/kit-footer";

export default function KitPage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  return (
    <div className="kit-page min-h-screen bg-[--kit-bg] text-[--kit-fg] font-sans antialiased">
      <KitNav />
      <KitHero />
      <KitBenefits />
      <KitIncludes />
      <KitTestimonials />
      <KitFaq open={faqOpen} setOpen={setFaqOpen} />
      <KitCta />
      <KitFooter />
    </div>
  );
}
