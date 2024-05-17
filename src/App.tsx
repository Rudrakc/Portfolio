import "./App.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar from "./components/ui/navbar";
import Hero from "./components/ui/Hero/hero";
import { ContainerScroll } from "./components/ui/container-scroll-animation";
import gitProfile from "@/assets/git-profile.png";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";
import Footer from "./components/ui/Footer/footer";
import AboutMe from "./components/ui/AboutMe/aboutMe";
import ProjectSection from "./components/ui/ProjectSection/projectSection";

function App() {
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
      <main className="flex items-center justify-center flex-col">
        <Navbar></Navbar>
        <section className="h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
          <div className="fixed inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
          <div className=" w-full" id="hero">
            <Hero></Hero>
          </div>
          <div className="flex flex-col mt-[-100px] md:mt-[-50px] ">
            <ContainerScroll
              titleComponent={
                <div className="flex items-center flex-col">
                  <h2 className="text-3xl md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-semibold">
                    Automate Your Work With Fuzzie
                  </h2>
                </div>
              }
            >
              <img
                src={gitProfile}
                alt="bannerImage"
                className="object-cover border-8 rounded-2xl w-full h-full scale-[1.09]"
              />
            </ContainerScroll>
          </div>
        </section>
        <InfiniteMovingCards
          className="md:mt-[34rem] mt-[-100px] z-[100]"
          items={skills}
          direction="right"
          speed="slow"
        />
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
