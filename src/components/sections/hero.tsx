import { Button } from "../ui/button";
import Background from "@/assets/background.svg";
import BackgroundMobile from "@/assets/background-mobile.svg";
import {
  NavigationCard,
  NavigationCardCategory,
  NavigationCardContent,
  NavigationCardHeader,
  NavigationCardTitle,
} from "../hero/navigation-card";
import { whatsappLink } from "@/data/links";

type NavigationCardItem = {
  category: string;
  title: string;
  imgSrc: string;
  href: string;
};

const navigationCards: NavigationCardItem[] = [
  {
    category: "Sobre mim",
    title: "Conheça a profissional que construirá o seu sorriso",
    imgSrc: "/images/foto-1.webp",
    href: "#sobre-mim",
  },
  {
    category: "Serviços",
    title: "Explore todos os serviços disponíveis para você",
    imgSrc: "/images/foto-2.webp",
    href: "#servicos",
  },
  {
    category: "Dúvidas Frequentes",
    title: "Tem alguma dúvida? Veja se ela já foi respondida no nosso FAQ",
    imgSrc: "/images/foto-3.webp",
    href: "#faq",
  },
];

export function HeroSection() {
  return (
    <section id="hero" className="flex flex-col items-center">
      <div className="bg-secondary-light-4 relative flex w-full md:py-[152px] px-4 pt-[137px] h-[524px] lg:h-[537px] pb-[264px] flex-col flex-start  shrink-0">
        <div className="max-w-[min(1100px,calc(100vw-32px))] mx-auto w-full flex flex-col gap-6 md:gap-8">
          <h1
            className="font-poppins max-w-[334px] md:max-w-[569px] text-[28px] leading-[145%] tracking-[-0.42px] md:text-[40px] md:leading-[56px] md:tracking-[-0.6px] bg-clip-text"
            style={{
              background: "linear-gradient(91deg, #F8F1E4 0%, #EDDABB 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            O sorriso é seu. <br /> A arte é minha.
          </h1>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="max-w-full md:max-w-fit">
              AGENDAR CONSULTA
            </Button>
          </a>
        </div>

        <img
          src={Background}
          alt="Background"
          className="absolute pointer-events-none hidden md:block md:right-[235px] md:top-0 z-0 fill-primary-light-1-b opacity-[0.5] bg-blend-soft-light"
        />
        <img
          src={BackgroundMobile}
          alt="Background Mobile"
          className="absolute pointer-events-none md:hidden top-0 right-0 w-full z-0 fill-primary-light-1-b opacity-[0.5] bg-blend-soft-light"
        />
      </div>
      <div className="grid md:grid-cols-3 overflow-clip -mt-33.5 lg:-mt-35.5 z-10 max-w-[min(1100px,calc(100vw-32px))] rounded-3xl bg-[#f3f3f3]">
        {navigationCards.map((card) => (
          <NavigationCard key={card.title}>
            <NavigationCardHeader href={card.href}>
              <NavigationCardCategory>{card.category}</NavigationCardCategory>
              <NavigationCardTitle>{card.title}</NavigationCardTitle>
            </NavigationCardHeader>
            <NavigationCardContent>
              <img
                src={card.imgSrc}
                alt={card.title}
                className="max-w-[382px] max-h-[417px] md:max-h-full md:h-full aspect-[382/417] md:aspect-[365/402] object-cover md:max-w-full w-full"
              />
            </NavigationCardContent>
          </NavigationCard>
        ))}
      </div>
    </section>
  );
}
