import { MainLayout } from "./layouts/main";
import { HeroSection } from "./components/sections/hero";
import { Services } from "./components/sections/services";
import { ClientTestimonials } from "./components/sections/client-testimonials";
import { AboutMe } from "./components/sections/about-me";
import { FAQ } from "./components/sections/faq";
import { Footer } from "./components/footer";

function App() {
  return (
    <MainLayout className="gap-14 flex flex-col">
      <HeroSection />
      <Services />
      <ClientTestimonials />
      <AboutMe />
      <FAQ />
      <Footer />
    </MainLayout>
  );
}

export default App;
