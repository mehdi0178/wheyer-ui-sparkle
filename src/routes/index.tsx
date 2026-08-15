import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Ticker } from "@/components/landing/Ticker";
import { Platform } from "@/components/landing/Platform";
import { WhyWheyer } from "@/components/landing/WhyWheyer";
import { Ops } from "@/components/landing/Ops";
import { Marketplace } from "@/components/landing/Marketplace";
import { Earnings } from "@/components/landing/Earnings";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials } from "@/components/landing/Testimonials";
import { AddAnything } from "@/components/landing/AddAnything";
import { LaunchFaq } from "@/components/landing/LaunchFaq";
import { Resources } from "@/components/landing/Resources";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wheyer — Create a travel business without limits" },
      {
        name: "description",
        content:
          "Wheyer gives travel operators a branded storefront, booking engine, escrow payouts and marketplace demand. Start free, no credit card required.",
      },
      { property: "og:title", content: "Wheyer — Create a travel business without limits" },
      {
        property: "og:description",
        content:
          "Wheyer gives travel operators a branded storefront, booking engine, escrow payouts and marketplace demand. Start free, no credit card required.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Platform />
        <WhyWheyer />
        <Ops />
        <Marketplace />
        <Earnings />
        <Pricing />
        <Testimonials />
        <AddAnything />
        <LaunchFaq />
        <Resources />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
