import Logo from "@/assets/logo.svg";

import Facebook from "@/assets/facebook.svg";
import Instagram from "@/assets/instagram.svg";
import Threads from "@/assets/threads.svg";

type Section = {
  label: string;
  href: string;
};

const sections: Section[] = [
  {
    label: "Início",
    href: "#hero",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
  {
    label: "Sobre mim",
    href: "#sobre-mim",
  },
  {
    label: "Contato",
    href: "#footer",
  },
  {
    label: "Serviços",
    href: "#servicos",
  },
];

const sectionsMobile: Section[] = [
  {
    label: "Início",
    href: "#hero",
  },
  {
    label: "Sobre mim",
    href: "#sobre-mim",
  },
  {
    label: "Serviços",
    href: "#servicos",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
  {
    label: "Contato",
    href: "#footer",
  },
];

type SocialLink = {
  name: string;
  url: string;
  icon: string;
};

const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/drajuliafarias",
    icon: Facebook,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/drajuliafarias/",
    icon: Instagram,
  },
  {
    name: "Threads",
    url: "https://www.threads.com/@drajuliafarias",
    icon: Threads,
  },
];

type Location = {
  area: string;
  line: string;
};

const locations: Location[] = [
  {
    area: "Vitória da Conquista, BA",
    line: "Rua Cícero Simões, 83, Pituba, Salvador, Bahia, CEP 41830-475",
  },
  {
    area: "Serrinha, BA",
    line: "Rua Cícero Simões, 83, Pituba, Salvador, Bahia, CEP 41830-475",
  },
  {
    area: "Salvador, BA",
    line: "Rua Cícero Simões, 83, Pituba, Salvador, Bahia, CEP 41830-475",
  },
];

export function Footer() {
  return (
    <footer className="bg-secondary-light-4 text-white" id="footer">
      <div className="max-w-[min(1100px,calc(100vw-32px))] flex flex-col md:flex-row items-center gap-12 md:gap-9 mx-auto w-full py-14">
        <img src={Logo} alt="Julia Farias" />
        <div className="h-full flex flex-col gap-16 justify-between md:mr-12">
          <div className="grid text-center md:text-left md:grid-cols-2">
            {sections.map((section) => (
              <a
                key={section.href}
                href={`${section.href}`}
                className="text-primary-light-1-b hidden md:block h-10 px-6 py-1 justify-center items-center font-poppins text-sm font-semibold tracking-[-0.14px] hover:opacity-80"
              >
                {section.label}
              </a>
            ))}
            {sectionsMobile.map((section) => (
              <a
                key={section.href}
                href={`${section.href}`}
                className="text-primary-light-1-b md:hidden h-10 px-6 py-1 justify-center items-center font-poppins text-sm font-semibold tracking-[-0.14px] hover:opacity-80"
              >
                {section.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6 md:gap-4 md:ps-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="flex items-center gap-2 text-primary-light-1-b hover:opacity-80"
              >
                <img src={link.icon} alt={link.name} className="size-6" />
              </a>
            ))}
          </div>
        </div>
        <div className="space-y-4 md:mr-12 max-w-[218px] md:max-w-[266px]">
          {locations.map((location) => (
            <a
              key={location.area}
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                location.line
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-80 transition-opacity"
            >
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M10.0002 10.4998C10.4585 10.4998 10.8509 10.3366 11.1772 10.0103C11.5036 9.68387 11.6668 9.2915 11.6668 8.83317C11.6668 8.37484 11.5036 7.98248 11.1772 7.65609C10.8509 7.3297 10.4585 7.1665 10.0002 7.1665C9.54183 7.1665 9.14947 7.3297 8.82308 7.65609C8.49669 7.98248 8.3335 8.37484 8.3335 8.83317C8.3335 9.2915 8.49669 9.68387 8.82308 10.0103C9.14947 10.3366 9.54183 10.4998 10.0002 10.4998ZM10.0002 16.6248C11.6946 15.0693 12.9516 13.6561 13.771 12.3853C14.5904 11.1144 15.0002 9.98595 15.0002 8.99984C15.0002 7.48595 14.5175 6.24637 13.5522 5.28109C12.587 4.31581 11.4029 3.83317 10.0002 3.83317C8.59738 3.83317 7.41336 4.31581 6.44808 5.28109C5.4828 6.24637 5.00016 7.48595 5.00016 8.99984C5.00016 9.98595 5.40988 11.1144 6.22933 12.3853C7.04877 13.6561 8.30572 15.0693 10.0002 16.6248ZM10.0002 18.8332C7.76405 16.9304 6.09391 15.163 4.98975 13.5311C3.88558 11.8991 3.3335 10.3887 3.3335 8.99984C3.3335 6.9165 4.00363 5.25678 5.34391 4.02067C6.68419 2.78456 8.23627 2.1665 10.0002 2.1665C11.7641 2.1665 13.3161 2.78456 14.6564 4.02067C15.9967 5.25678 16.6668 6.9165 16.6668 8.99984C16.6668 10.3887 16.1147 11.8991 15.0106 13.5311C13.9064 15.163 12.2363 16.9304 10.0002 18.8332Z"
                    fill="#F8F1E4"
                  />
                </svg>
                <strong className="text-primary-light-1-b font-poppins text-base font-medium leading-[130%] tracking-[-0.16px]">
                  {location.area}
                </strong>
              </div>
              <p className="text-primary-light-1-b ps-6 font-sora text-xs leading-[130%] tracking-[-0.12px]">
                {location.line}
              </p>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
