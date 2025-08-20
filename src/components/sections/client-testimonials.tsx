import { testimonials } from "@/data/testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";

import Quote from "@/assets/quote.svg";
import { cn } from "@/lib/utils";
import { useRef, useEffect, useState } from "react";

interface Testimonial {
  author: string;
  text: string;
  className?: string;
}

function Testimonial({ author, text, className }: Testimonial) {
  return (
    <div
      className={cn(
        "flex md:max-w-[535px] h-full w-full px-10 py-6 flex-col gap-2 rounded-2xl bg-secondary-light-1",
        className
      )}
    >
      <img src={Quote} alt="Quote Icon" className="size-10" />
      <p className="self-stretch text-primary-dark-2 font-sora text-base font-light leading-[145%]">
        {text}
      </p>
      <h4 className="text-primary-dark-2 mt-auto font-sora text-sm font-semibold leading-[145%]">
        {author}
      </h4>
    </div>
  );
}

export function ClientTestimonials() {
  const lastRef = useRef<HTMLDivElement>(null);
  const [lastItemMargin, setLastItemMargin] = useState<string>("267px");

  useEffect(() => {
    const updateMargin = () => {
      if (lastRef.current && window.innerWidth >= 768) {
        const elementWidth = lastRef.current.offsetWidth;
        const margin = `calc(50vw - ${elementWidth}px)`;
        setLastItemMargin(margin);
      }
    };

    // Initial calculation
    updateMargin();

    // Update on resize
    window.addEventListener("resize", updateMargin);

    // Cleanup
    return () => window.removeEventListener("resize", updateMargin);
  }, []);
  return (
    <section id="client-testimonials">
      <div className="mx-auto lg:py-14">
        <Carousel className="flex flex-col gap-6 md:gap-9">
          <div className="max-w-[min(1100px,calc(100vw-32px))]  mx-auto w-full flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <h3 className="text-primary-dark-2 font-sora text-base tracking-[1.28px] md:text-xl leading-[130%] md:tracking-[1.6px]">
                CLIENTES
              </h3>
              <h2 className="text-primary-dark-2 font-poppins text-2xl md:text-[32px] font-medium leading-[130%] tracking-[-0.32px]">
                Depoimentos
              </h2>
            </div>
            <div className="md:flex items-center gap-3 hidden">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
          <CarouselContent className="pl-[calc((100vw-min(1100px,calc(100vw-32px)))/2)]">
            {testimonials.map((testimonial, index) => {
              const isLast = index === testimonials.length - 1;
              const marginRight =
                isLast && window.innerWidth >= 768 ? lastItemMargin : undefined;

              return (
                <CarouselItem
                  key={index}
                  ref={isLast ? lastRef : null}
                  className={cn(
                    "sm:basis-2/3 lg:basis-2/5 max-w-[535px]",
                    index === 0 && "pr-2 lg:pr-0",
                    index === testimonials.length - 1 &&
                      "pr-2 lg:pr-0 max-w-auto"
                  )}
                  style={{ marginRight }}
                >
                  <Testimonial
                    author={testimonial.author}
                    text={testimonial.text}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="flex px-4 items-center gap-3 md:hidden">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
