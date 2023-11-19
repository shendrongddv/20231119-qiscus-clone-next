import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Hero from "./_components/hero";
import ClientClouds from "./_components/client-clouds";
import Benefits from "./_components/benefits";
import Reviews from "./_components/reviews";
import WhatWeDo from "./_components/what-we-do";
import MediaClouds from "./_components/media-clouds";
import FreeTrial from "./_components/free-trial";
import HowToUse from "./_components/how-to-use";
import SuccesStories from "./_components/succes-stories";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* ClientClouds */}
      <ClientClouds />

      {/* WhatWeDo */}
      <WhatWeDo />

      {/* Benefits */}
      <Benefits />

      {/* Reviews */}
      <Reviews />

      {/* FreeTrial */}
      <FreeTrial />

      {/* HowToUse */}
      <HowToUse />

      {/* SuccesStories */}
      <SuccesStories />

      {/* MediaClouds */}
      <MediaClouds />
    </>
  );
}
