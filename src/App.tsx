import { MainLayout } from "./layouts/main";
import { HeroSection } from "./components/sections/hero";
import { Services } from "./components/sections/services";

function App() {
  return (
    <MainLayout className="gap-14 lg:gap-28 flex flex-col">
      <HeroSection />
      <Services />
    </MainLayout>
  );
}

export default App;
