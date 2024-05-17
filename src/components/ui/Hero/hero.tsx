import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./text-reveal-card";
import { Spotlight } from "./spotlight";
import ProfilePic from "./profile-pic";


const Hero = () => {
  return (
    <div className="flex items-center justify-around w-full">
      <Spotlight className="-top-40 left-0 " fill="white" />
      <div className="flex items-center justify-center bg-transparent h-[40rem] rounded-2xl ">
        <div className="rounded-3xl">
          <div className="h-full  w-full dark:bg-transparent bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center ">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute   pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <ProfilePic />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-transparent h-[40rem] rounded-2xl">
        <TextRevealCard
          text="Rudra Kumar Chauhan"
          revealText="I like coding & bikes  "
        >
          <TextRevealCardTitle>
            I am a CS Undergrad from India
          </TextRevealCardTitle>
          <TextRevealCardDescription>
            I am passionate about Coding, Open Source, and creating cool and
            useful projects!
          </TextRevealCardDescription>
        </TextRevealCard>
      </div>
    </div>
  );
};

export default Hero;
