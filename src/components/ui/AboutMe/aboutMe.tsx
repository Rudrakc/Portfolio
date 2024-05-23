import Lottie from "lottie-react";
import studentAnime from "@/assets/student.json";
import { TypewriterEffectSmooth } from "./typewriter-effect";


const AboutMe = () => {
  const words = [
    {
      text: "A ",
    },
    {
      text: "Little ",
    },
    {
      text: "About ",
    },
    {
      text: "Me",
    },
  ];
  return (
    <div className="z-[100] flex flex-col md:flex-row items-center justify-between mb-4 px-10">
      <div className="opacity-85 w-full md:w-1/2 flex justify-center">
        <Lottie
          animationData={studentAnime}
          className="w-full max-w-lg h-auto"
        />
      </div>
      <div className="w-full md:w-1/2 mt-4 md:mt-0">
        <TypewriterEffectSmooth words={words} />
        <p className="text-left text-lg mt-4">
          Hey there! I'm Rudra Chahaun, a first-year Computer Science
          undergraduate at Scaler School of Technology based in Bangalore, India. 
          I have a passion for coding and love exploring the endless
          possibilities it offers. 
          I like tinkering with algorithms and solving
          challenging problems. <br />
          Outside coding, I also like bikes and traveling.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
