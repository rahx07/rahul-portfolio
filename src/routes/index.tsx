import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Background } from "@/components/portfolio/Background";
import { Loader } from "@/components/portfolio/Loader";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Experience } from "@/components/portfolio/Experience";
import { TechStack } from "@/components/portfolio/TechStack";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements } from "@/components/portfolio/Achievements";
import { Stats } from "@/components/portfolio/Stats";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { BackToTop } from "@/components/portfolio/BackToTop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rahul Ranjan — AI & ML Engineer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Rahul Ranjan — MCA (AI & ML) student at Chandigarh University specializing in Machine Learning, Generative AI, and data-driven software.",
      },
      { property: "og:title", content: "Rahul Ranjan — AI & ML Engineer" },
      {
        property: "og:description",
        content:
          "Aspiring AI Engineer specializing in Machine Learning, Generative AI, and data-driven problem solving.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Rahul Ranjan",
          jobTitle: "AI & ML Engineer",
          email: "mailto:rahuldj2003@gmail.com",
          address: { "@type": "PostalAddress", addressLocality: "Patna", addressRegion: "Bihar", addressCountry: "India" },
          alumniOf: "Chandigarh University",
          knowsAbout: ["Machine Learning", "Generative AI", "Deep Learning", "NLP", "Data Science"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Loader />
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <TechStack />
        <Projects />
        <Achievements />
        <Stats />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <Toaster position="top-center" />
    </>
  );
}
