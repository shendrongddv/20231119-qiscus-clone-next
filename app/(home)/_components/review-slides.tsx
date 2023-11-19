"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { dummyReviews } from "@/config/dummy";
import Image from "next/image";

export const ReviewSlides = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      breakpoints: {
        "(min-width: 481px)": {
          slides: { perView: 2, spacing: 16 },
        },
        "(min-width: 768px)": {
          slides: { perView: 3, spacing: 24 },
        },
        "(min-width: 1024px)": {
          slides: { perView: 3, spacing: 32 },
        },
      },
      slides: { perView: 1.4, spacing: 0 },
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ],
  );
  return (
    <div ref={sliderRef} className="keen-slider w-full">
      {dummyReviews?.slice(0, 8)?.map((item) => (
        <div key={item.id} className="keen-slider__slide w-full max-md:pl-4">
          <div className="flex h-full flex-col gap-2 overflow-hidden rounded-2xl bg-background p-4 md:p-6">
            {/* # */}
            <figure aria-hidden className="h-8 w-auto">
              <Image
                src={`https://img.logoipsum.com/2${item.institution.media}.svg`}
                alt={item.institution.name}
                width={100}
                height={100}
                className="h-full w-auto"
              />
            </figure>

            {/* # */}
            <div className="flex flex-col">
              <h4 className="font-semibold text-foreground">
                {item.user.name}
              </h4>
              <span className="text-sm text-muted-foreground">
                {item.institution.position}
              </span>
            </div>

            {/* # */}
            <p className="text-foreground">&quot;{item.review}&quot;</p>
          </div>
        </div>
      ))}
    </div>
  );
};
