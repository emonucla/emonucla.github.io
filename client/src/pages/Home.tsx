import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Publications from "@/components/Publications";
import CV from "@/components/CV";
import Footer from "@/components/Footer";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero
          name={portfolioData.name}
          position={portfolioData.position}
          institution={portfolioData.institution}
          bio={portfolioData.bio}
        />
        <About
          content={portfolioData.about}
          interests={portfolioData.interests}
        />
        <Publications publications={portfolioData.publications} />
        <CV
          education={portfolioData.education}
          experience={portfolioData.experience}
          cvPdfUrl={portfolioData.cvPdfUrl}
        />
      </main>
      <Footer {...portfolioData.contact} />
    </div>
  );
}
