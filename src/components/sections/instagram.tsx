import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import { InstagramEmbed } from "react-social-media-embed";

const instagramPosts = [
  "https://www.instagram.com/p/DNT3K0wv6VQ",
  "https://www.instagram.com/p/DM06ciZvQ6f",
  "https://www.instagram.com/p/DMFyPssgC3O",
  "https://www.instagram.com/reel/DL8VduWvvLP",
  "https://www.instagram.com/p/DLirCddxPzE",
  "https://www.instagram.com/reel/DKaiT5qg1OY",
];

export function Instagram() {
  return (
    <section
      id="instagram"
      className="bg-[rgba(237,218,187,0.24)] py-12 md:py-14"
    >
      <div className="mx-auto lg:py-14">
        <Carousel
          className="flex flex-col gap-6 md:gap-9"
          opts={{
            loop: true,
          }}
        >
          <div className="max-w-[min(1100px,calc(100vw-32px))] mx-auto w-full flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <h3 className="text-primary-dark-2 font-sora text-base tracking-[1.28px] md:text-xl leading-[130%] md:tracking-[1.6px]">
                ACOMPANHE MEU INSTAGRAM
              </h3>
              <h2 className="text-primary-dark-2 font-poppins text-2xl md:text-[32px] font-medium leading-[130%] tracking-[-0.32px]">
                Casos & Rotina
              </h2>
            </div>
            <div className="md:flex items-center gap-3 hidden">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
          <div className="max-w-[min(1100px,calc(100vw-32px))] md:max-w-[1100px] mx-auto">
            <CarouselContent className="max-w-[min(1100px,calc(100vw-32px))] mx-auto">
              {instagramPosts.map((url, index) => (
                <CarouselItem
                  key={index}
                  className="basis-9/10 pl-0 sm:basis-2/4 md:basis-2/5 lg:basis-1/3"
                >
                  <div className="flex justify-center px-2 [&_.EmbeddedMediaImage]:object-cover!">
                    <InstagramEmbed url={url} height={460} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
          <div className="flex px-4 items-center gap-3 md:hidden">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
