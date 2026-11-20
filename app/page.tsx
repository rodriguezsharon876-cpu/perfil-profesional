import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IndexSection from "@/components/IndexSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import portfolio from "@/content/portfolio.json";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero profile={portfolio.profile} />
        <IndexSection />
        <Projects projects={portfolio.projects} />
        <Skills skills={portfolio.skills} />
        <Education />
        <Contact profile={portfolio.profile} />
      </main>
    </>
  );
}
