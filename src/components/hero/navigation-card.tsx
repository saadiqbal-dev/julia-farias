import { cn } from "@/lib/utils";
import ArrowTopRight from "@/assets/arrow-top-right.svg";

interface NavigationCardProps {
  className?: string;
  children: React.ReactNode;
}

export function NavigationCard({ className, children }: NavigationCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col max-w-[382px] w-full lg:max-w-full items-start group",
        className
      )}
    >
      {children}
    </div>
  );
}

interface NavigationCardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

export function NavigationCardHeader({
  className,
  children,
}: NavigationCardHeaderProps) {
  return (
    <div
      className={cn(
        "flex p-6 flex-col border-x border-[rgba(55,30,19,0.08)] lg:border-0 items-start gap-4 lg:gap-6 bg-primary-light-1-b group-hover:bg-primary-light-2 transition-all duration-300 ease-in-out",
        className
      )}
    >
      {children}
    </div>
  );
}

interface NavigationCardTitleProps {
  className?: string;
  children: React.ReactNode;
}

export function NavigationCardTitle({
  className,
  children,
}: NavigationCardTitleProps) {
  return (
    <h4
      className={cn(
        "self-stretch text-primary-dark-4 font-poppins text-base font-semibold leading-[145%] tracking-[-0.16px]",
        className
      )}
    >
      {children}
    </h4>
  );
}

interface NavigationCardCategoryProps {
  className?: string;
  children: React.ReactNode;
}

export function NavigationCardCategory({
  className,
  children,
}: NavigationCardCategoryProps) {
  return (
    <div className={cn("flex items-center justify-between w-full", className)}>
      <h5 className="text-secondary-dark-4-b text-sm lg:text-base font-sora font-normal leading-[130%]">
        {children}
      </h5>
      <a href="#" className="">
        <img src={ArrowTopRight} alt="Arrow Top Right" />
      </a>
    </div>
  );
}

interface NavigationCardContentProps {
  className?: string;
  children: React.ReactNode;
}

export function NavigationCardContent({
  className,
  children,
}: NavigationCardContentProps) {
  return (
    <div className={cn("flex flex-col w-full items-start", className)}>
      {children}
    </div>
  );
}
