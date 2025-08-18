import { Button } from "./ui/button";
import Menu from "@/assets/menu.svg";

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
    <header className="flex max-w-[min(1100px,calc(100vw-32px))] h-[60px] lg:h-[68px] w-full fixed top-6 py-3 px-8 justify-between items-center rounded-full bg-primary-light-1-b">
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

      <Button
        size="icon"
        className="bg-secondary-light-4 hover:bg-secondary-light-4 active:bg-secondary-light-4"
      >
        <img src={Menu} alt="Menu" />
        <div className="sr-only">Menu</div>
      </Button>
    </header>
  );
}
