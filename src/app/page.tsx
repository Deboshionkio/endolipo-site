import { Benefits } from "../components/Benefits";
import { Footer } from "../components/Footer";
import { Gallery } from "../components/Gallery";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { Professional } from "../components/Professional";
import { Results } from "../components/Results";
import { Treatments } from "../components/Treatments";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        
        {/* Secção de fundo branco que ocupa a tela inteira */}
        <section className="w-full bg-white py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto w-full gap-12 px-5 sm:px-8 lg:px-10">
            <HowItWorks />
            <Treatments />
          </div>
        </section>

        <Benefits />
        <Results />
        <Gallery />
        <Professional />
      </main>
      <Footer />
    </>
  );
}