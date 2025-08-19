import { cn } from "@/lib/utils";
import {
  ServiceCard,
  ServiceCardContent,
  ServiceCardTitle,
  ServiceCardSubTitle,
} from "../services/service-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services">
      <div className="max-w-[min(1100px,calc(100vw-32px))] flex flex-col gap-10 mx-auto">
        <h2 className="self-stretch text-primary-dark-2 font-poppins text-[32px] font-medium tracking-[-0.32px]">
          Serviços
        </h2>

        <div className="lg:grid grid-cols-3 gap-x-6 gap-y-8 hidden">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              imgSrc={service.imgSrc}
              supportingText={service.supportingText}
              title={service.title}
            >
              <ServiceCardContent>
                <ServiceCardTitle>{service.title}</ServiceCardTitle>
                <ServiceCardSubTitle>{service.subTitle}</ServiceCardSubTitle>
              </ServiceCardContent>
            </ServiceCard>
          ))}
        </div>
      </div>
      <div className="lg:hidden">
        <Carousel className="w-full">
          <CarouselContent className="overflow-visible me-4">
            {services.map((service, index) => (
              <CarouselItem
                key={index}
                className={cn("md:basis-2/5 basis-3/4", index === 0 && "ms-4")}
              >
                <ServiceCard
                  key={service.title}
                  imgSrc={service.imgSrc}
                  supportingText={service.supportingText}
                  title={service.title}
                >
                  <ServiceCardContent>
                    <ServiceCardTitle>{service.title}</ServiceCardTitle>
                    <ServiceCardSubTitle>
                      {service.subTitle}
                    </ServiceCardSubTitle>
                  </ServiceCardContent>
                </ServiceCard>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="pt-10 px-4 flex items-center gap-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
