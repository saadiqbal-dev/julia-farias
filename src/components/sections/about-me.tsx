import { Marquee } from "../magicui/marquee";

const images: string[] = [
  "/images/sobre-mim/sobre-mim-1.png",
  "/images/sobre-mim/sobre-mim-2.png",
  "/images/sobre-mim/sobre-mim-1.png",
  "/images/sobre-mim/sobre-mim-2.png",
  "/images/sobre-mim/sobre-mim-1.png",
  "/images/sobre-mim/sobre-mim-2.png",
  "/images/sobre-mim/sobre-mim-1.png",
  "/images/sobre-mim/sobre-mim-2.png",
];

export function AboutMe() {
  return (
    <section
      id="sobre-mim"
      className="flex flex-col md:flex-row items-start gap-12 w-full md:pl-[calc((100vw-min(1116px,calc(100vw-32px)))/2)] md:py-14 overflow-x-clip"
    >
      <div className="flex flex-col gap-8 max-w-fit shrink-0 px-4 md:px-0">
        <h2 className="self-stretch text-primary-dark-2 font-poppins text-2xl md:text-[32px] font-medium tracking-[-0.32px]">
          Sobre mim
        </h2>
        <div className="relative max-w-[471px] w-full max-h-[3250px] md:max-h-[594px] h-full aspect-[471/594] text-primary-dark-4 font-sora text-md font-light leading-[150%] flex flex-col gap-4 overflow-clip">
          <div
            className="absolute hidden md:block left-0 top-0 w-full h-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(248, 241, 228, 0.00) 0%, #F8F1E4 76.92%)",
            }}
          />
          <div
            className="absolute md:hidden left-0 top-0 w-full h-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(248, 241, 228, 0.00) 0%, #F8F1E4 95.92%)",
            }}
          />
          <p>
            Me chamo Dra. Júlia Farias, sou cirurgiã-dentista formada pela
            Universidade Federal da Bahia, uma das instituições de ensino mais
            respeitadas do país. Há quatro anos, dedico minha carreira à
            Odontologia Estética, com foco em facetas em resina e lentes de
            contato dental.
          </p>
          <p>
            Acredito que cada sorriso é único. Por isso, meu trabalho é guiado
            por um princípio claro: realçar a beleza natural de cada paciente,
            respeitando sua identidade e individualidade. Não se trata apenas de
            estética, mas de devolver autoestima, confiança e qualidade de vida
            através de resultados harmônicos, naturais e personalizados.
          </p>
          <p>
            Atendo em Serrinha, Salvador e Vitória da Conquista, oferecendo um
            ambiente acolhedor, moderno e preparado para proporcionar uma
            experiência odontológica leve e transformadora.
          </p>
          <p>
            Se você busca um sorriso bonito, natural e com a sua essência, será
            um prazer te atender.
          </p>
        </div>
        <a
          href={`#`}
          className="flex max-w-fit px-6 py-2 justify-center items-center gap-2 text-primary-light-4 text-center font-poppins text-base font-normal leading-[130%] transition-colors duration-300 ease-in-out hover:text-primary-light-3"
        >
          Continuar leitura{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16.175 13L10.575 18.6L12 20L20 12L12 4L10.575 5.4L16.175 11H4V13H16.175Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>

      <Marquee className="[--gap:2rem] md:[--gap:5rem] [--duration:120s]">
        {images.map((image, index) => (
          <img
            src={image}
            key={index}
            className="aspect-[208/370] min-h-[370px] min-w-[208px] max-h-[370px] max-w-[208px] md:aspect-[67/119] md:min-w-[334px] md:max-w-[334px] md:min-h-[611px] md:w-full md:h-full object-cover rounded-4xl"
          />
        ))}
      </Marquee>
    </section>
  );
}
