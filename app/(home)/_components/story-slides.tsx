"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { dummyReviews } from "@/config/dummy";
import Image from "next/image";
import { PlayCircle } from "lucide-react";

export const StorySlides = () => {
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
          <div className="flex h-full flex-col gap-2 overflow-hidden rounded-2xl border bg-background">
            {/* # */}
            <figure
              aria-hidden
              className="aspect-h-9 aspect-w-16 relative isolate flex overflow-hidden"
            >
              <Image
                aria-hidden
                src="/video-thumbnail.webp"
                alt="Thumbnail"
                width={640}
                height={320}
                className="z-0 h-full w-auto object-cover transition duration-500 group-hover:scale-110"
              />

              <span
                aria-hidden
                className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50"
              >
                <div className="grid h-14 w-14 cursor-pointer place-content-center rounded-full bg-white bg-opacity-20">
                  <PlayCircle className="h-5 w-5 scale-150 text-white" />
                </div>
              </span>
            </figure>

            {/* # */}
            <div className="flex h-full flex-col gap-3 p-4 md:p-6">
              {/* ## */}
              <p className="line-clamp-4 text-sm text-foreground md:text-base">
                &quot;{item.review}&quot;
              </p>

              {/* ## */}
              <div className="mt-auto flex items-end gap-2">
                <h4 className="text-sm font-semibold text-foreground">
                  {item.user.name},
                </h4>
                <span className="text-xs text-muted-foreground md:text-sm">
                  {item.institution.position}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
