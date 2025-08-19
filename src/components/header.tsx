import { Button } from "./ui/button";
import { MobileDropdown } from "./navigation/mobile-dropdown";

type Section = {
  label: string;
  id: string;
};

const sections: Section[] = [
  {
    label: "SOBRE MIM",
    id: "sobre-mim",
  },
  {
    label: "SERVIÇOS",
    id: "servicos",
  },
  {
    label: "FAQ",
    id: "faq",
  },
  {
    label: "CONTATO",
    id: "contato",
  },
];

export function Header() {
  return (
    <header className="flex z-[60] max-w-[min(1100px,calc(100vw-32px))] h-[60px] lg:h-[68px] w-full fixed top-[21px] lg:top-6 py-2 lg:py-3 px-6 lg:px-8 justify-between items-center rounded-full bg-primary-light-1-b">
      <a
        href="/"
        className="text-primary-dark-2 font-poppins text-xl font-light tracking-[-0.5px]"
      >
        Júlia Farias
      </a>

      <div className="lg:flex items-center hidden">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="flex px-6 py-2 justify-center items-center gap-2 text-primary-dark-2 text-center font-poppins text-base font-normal leading-[130%] transition-colors duration-300 ease-in-out hover:text-primary-light-4"
          >
            {section.label}
          </a>
        ))}
      </div>

      <Button variant="outline" className="hidden lg:flex">
        ENTRAR EM CONTATO
      </Button>

      <MobileDropdown sections={sections} />
    </header>
  );
}
