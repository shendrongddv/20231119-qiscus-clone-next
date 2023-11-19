import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Hero from "./_components/hero";
import ClientClouds from "./_components/client-clouds";
import Benefits from "./_components/benefits";
import Reviews from "./_components/reviews";
import WhatWeDo from "./_components/what-we-do";

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

      {/* HowToUse */}

      {/* SuccesStories */}

      {/* MediaClouds */}

      {/* Test */}
      <section className="px-4">
        <div className="container">
          <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
            <ModeToggle />
            <h1 className="animated-gradient bg-clip-text text-4xl font-black text-transparent md:text-6xl">
              Lorem ipsum dolor sit
            </h1>
            <p className="md:w-3/5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae minima blanditiis eligendi aspernatur commodi,
              expedita cumque!
            </p>
            <Button className="mt-4">Get Started</Button>
          </div>
        </div>
      </section>
    </>
  );
}
