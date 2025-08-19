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
    </div>
  );
}
