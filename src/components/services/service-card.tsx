import { cn } from "@/lib/utils";
import Info from "@/assets/info.svg";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "../ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";

interface ServiceCardProps {
  imgSrc: string;
  className?: string;
  children: React.ReactNode;
  supportingText: React.ReactNode;
  title: string;
}

export function ServiceCard({
  imgSrc,
  className,
  children,
  supportingText,
  title,
}: ServiceCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={cn(
            "flex w-full aspect-[315/280] lg:aspect-[348/380] min-h-[280px] flex-col justify-end items-start gap-8 rounded-3xl bg-white bg-cover bg-center bg-no-repeat overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.0] active:scale-[1.0]",
            className
          )}
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(248, 241, 228, 0.48), rgba(248, 241, 228, 0.48)), url(${imgSrc})`,
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-35 group-active:opacity-55 transition-opacity duration-300 pointer-events-none" />
          {children}
        </button>
      </DialogTrigger>
      <DialogContent showCloseButton={false} className="flex flex-col">
        <DialogTitle className="flex items-center gap-2 shrink-0">
          <span className="w-full">O que são {title}</span>
          <DialogClose asChild>
            <Button
              variant="ghost"
              size="icon"
              className="min-w-8 flex items-center justify-center size-8 shrink-0 border border-[rgba(55,30,19,0.12)] aspect-square"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                className="size-[16px] shrink-0"
              >
                <path
                  d="M13.6297 13.3815C13.6788 13.4306 13.7178 13.4889 13.7443 13.5531C13.7709 13.6172 13.7846 13.686 13.7846 13.7554C13.7846 13.8248 13.7709 13.8936 13.7443 13.9577C13.7178 14.0219 13.6788 14.0802 13.6297 14.1292C13.5806 14.1783 13.5224 14.2173 13.4582 14.2439C13.3941 14.2704 13.3253 14.2841 13.2559 14.2841C13.1865 14.2841 13.1177 14.2704 13.0536 14.2439C12.9894 14.2173 12.9311 14.1783 12.882 14.1292L8.5002 9.74675L4.11837 14.1292C4.01922 14.2284 3.88474 14.2841 3.74452 14.2841C3.6043 14.2841 3.46982 14.2284 3.37067 14.1292C3.27152 14.0301 3.21582 13.8956 3.21582 13.7554C3.21582 13.6152 3.27152 13.4807 3.37067 13.3815L7.75317 8.99972L3.37067 4.61788C3.27152 4.51873 3.21582 4.38426 3.21582 4.24403C3.21582 4.10381 3.27152 3.96934 3.37067 3.87019C3.46982 3.77103 3.6043 3.71533 3.74452 3.71533C3.88474 3.71533 4.01922 3.77103 4.11837 3.87019L8.5002 8.25268L12.882 3.87019C12.9812 3.77103 13.1157 3.71533 13.2559 3.71533C13.3961 3.71533 13.5306 3.77103 13.6297 3.87019C13.7289 3.96934 13.7846 4.10381 13.7846 4.24403C13.7846 4.38426 13.7289 4.51873 13.6297 4.61788L9.24724 8.99972L13.6297 13.3815Z"
                  fill="#7E482E"
                />
              </svg>
            </Button>
          </DialogClose>
        </DialogTitle>
        <DialogDescription className="sr-only">{title}</DialogDescription>
        <div className="text-primary-dark-4 font-sora flex flex-col gap-2 text-base font-normal leading-[150%] tracking-[-0.32px] md:overflow-visible overflow-y-auto md:flex-none flex-1 min-h-0">
          {supportingText}
        </div>
        <DialogFooter className="mt-4 shrink-0">
          <Button variant="outline" className="max-w-full w-full">
            ENTRAR EM CONTATO
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

interface ServiceCardContent {
  children: React.ReactNode;
  className?: string;
}

export function ServiceCardContent({
  children,
  className,
}: ServiceCardContent) {
  return (
    <div
      className={cn(
        "flex px-6 pb-6 pt-10 flex-col items-start gap-3 self-stretch relative",
        className
      )}
      style={{
        background:
          "linear-gradient(180deg,rgba(248,241,228,0.00),rgba(248,241,228,0.12))",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none "
        style={{
          backdropFilter: "blur(5px)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 5%, rgba(0,0,0,0.7) 30%, black 70%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 5%, rgba(0,0,0,0.7) 30%, black 70%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

interface ServiceCardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function ServiceCardTitle({
  children,
  className,
}: ServiceCardTitleProps) {
  return (
    <h3
      className={cn(
        "text-primary-dark-4 self-stretch font-poppins text-xl font-semibold tracking-[-0.4px] leading-[145%]",
        className
      )}
    >
      {children}
    </h3>
  );
}

interface ServiceCardSubTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function ServiceCardSubTitle({
  children,
  className,
}: ServiceCardSubTitleProps) {
  return (
    <p
      className={cn(
        "text-secondary-dark-3 font-poppins text-sm font-medium tracking-[-0.28px] leading-[145%] flex items-center gap-2",
        className
      )}
    >
      <img src={Info} alt="Info" className="w-4 h-4" />
      <span>{children}</span>
    </p>
  );
}
