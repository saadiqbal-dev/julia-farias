import { Header } from "@/components/header";
import { whatsappLink } from "@/data/links";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function MainLayout({ children, className }: MainLayoutProps) {
  return (
    <div className="flex min-h-svh w-full flex-col items-center justify-center">
      <Header />
      <main className={cn("flex-1 w-full", className)}>{children}</main>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed lg:right-6 lg:bottom-6 size-14 lg:size-18 right-4 bottom-4 z-50 hover:opacity-80 transition-all duration-300 ease-in-out hover:scale-95 active:scale-90"
      >
        <img src={"/images/whatsApp.webp"} alt="WhatsApp" />
      </a>
    </div>
  );
}
