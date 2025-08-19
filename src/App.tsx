import { MainLayout } from "./layouts/main";
import { HeroSection } from "./components/sections/hero";
import { Services } from "./components/sections/services";
import { ClientTestimonials } from "./components/sections/client-testimonials";

function App() {
  return (
    <MainLayout className="gap-14 flex flex-col">
      <HeroSection />
      <Services />
      <ClientTestimonials />
    </MainLayout>
  );
}

export default App;
