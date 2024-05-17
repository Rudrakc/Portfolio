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
    <div className="z-[100] flex items-center justify-between mb-4 px-14" >
      <div className=" opacity-85">
        <Lottie
          animationData={studentAnime}
          style={{ width: "600px", height: "600px" }}
        ></Lottie>
      </div>
      <div className="">
        <TypewriterEffectSmooth words={words} />
        <p className="text-left text-lg">
          Hey there! I'm Rudra Chahaun, a first-year Computer Science
          undergraduate based in Bangalore,<br /> India. 
          I have a passion forcoding and love exploring the endless
          possibilities it offers. <br />
          I like tinkering with algorithms and solve
          challenging problems <br />
          Outside coding I also like Bikes and travelling
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
