import { Header } from "@/components/header";
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
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed lg:right-6 lg:bottom-6 size-11 lg:size-18 right-3 bottom-3 z-50 hover:opacity-80 transition-all duration-300 ease-in-out hover:scale-95 active:scale-90"
      >
        <img src={"/images/whatsApp.webp"} alt="WhatsApp" />
      </a>
    </div>
  );
}
