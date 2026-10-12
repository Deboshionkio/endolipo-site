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
        <HowItWorks />
        <Treatments />
        <Benefits />
        <Results />
        <Gallery />
        <Professional />
      </main>
      <Footer />
    </>
  );
}
