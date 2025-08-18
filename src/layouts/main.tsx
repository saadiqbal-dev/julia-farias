import { Header } from "@/components/header";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-svh w-full flex-col items-center justify-center">
      <Header />
      <main className="flex-1 w-full">{children}</main>
    </div>
  );
}
