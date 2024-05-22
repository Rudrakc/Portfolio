import "./App.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar from "./components/ui/navbar";
import Hero from "./components/ui/Hero/hero";
import { ContainerScroll } from "./components/ui/container-scroll-animation";
import gitProfile from "@/assets/git-profile.png";
import gitMob from "@/assets/git-profile-mob.png";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";
import Footer from "./components/ui/Footer/footer";
import AboutMe from "./components/ui/AboutMe/aboutMe";
import ProjectSection from "./components/ui/ProjectSection/projectSection";
import { useState, useEffect } from "react";

function App() {
  const [gitImg, setGitImg] = useState(gitProfile);

  useEffect(() => {
    const updateImageSrc = () => {
      if (window.outerWidth <= 768) {
        setGitImg(gitMob);
      } else {
        setGitImg(gitProfile);
      }
    };

    updateImageSrc(); // Initial check
    window.addEventListener('resize', updateImageSrc); // Update on resize

    return () => {
      window.removeEventListener('resize', updateImageSrc); // Cleanup listener
    };
  }, []);

  const skills: string[] = [
    "React",
    "Java",
    "Spring Boot",
    "Kotlin",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScipt",
  ];
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="w-screen flex items-center justify-center flex-col">
        <Navbar></Navbar>
        <section className=" w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
          <div className="fixed   h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
          <div className=" w-full mt-14 md:mt-0" id="hero">
            <Hero></Hero>
          </div>
          <div className="flex flex-col mt-[-40px] md:mt-[-50px] ">
            <ContainerScroll
              titleComponent={
                <div className="flex items-center flex-col"></div>
              }
            >
              <img
                src={gitImg}
                alt="bannerImage"
                className="object-contain border-8 rounded-2xl w-full h-full md:scale-[1.09]"
              />
            </ContainerScroll>
          </div>
        </section>
        <section className="w-full flex justify-center md:-mt-[150px] -mt-[180px]">
          <InfiniteMovingCards
            className=" "
            items={skills}
            direction="right"
            speed="slow"
          />
        </section>
        <section className="w-full" id="projects">
          <ProjectSection></ProjectSection>
        </section>
        <section className="w-full z-[100]" id="aboutMe">
          <AboutMe></AboutMe>
        </section>
        <footer className="w-full z-[100]" id="contact">
          <Footer></Footer>
        </footer>
      </main>
    </ThemeProvider>
  );
}

export default App;
