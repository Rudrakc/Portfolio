import { ButtonsCard } from "./button";

const Footer = () => {
  return (
    <div className="z-[100] pb-32 pt-10 px-28 w-full">
      <div className="text-sm text-gray-500 text-start ">&copy; 2024</div>
      <div className="mt-10  text-lg text-start font-normal">
        HAVE A PROJECT IN MIND?
      </div>
      <h1 className="text-[10rem] -mt-10 tracking-widest font-semibold text-start  opacity-80  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
        LET'S TALK
      </h1>
      <div className="mt-10 flex items-center justify-between">
      <div className=" flex justify-start items-center space-x-6">
        <ButtonsCard title="GITHUB" onClick={() => {window.open('https://github.com/Rudrakc', '_blank');}}></ButtonsCard>
        <ButtonsCard title="LINKEDIN" onClick={() => {window.open('https://www.linkedin.com/in/rudrachauhan', '_blank');}}></ButtonsCard>
        <ButtonsCard title="TWITTER" onClick={() => {window.open('https://twitter.com/theRudraChauhan', '_blank');}}></ButtonsCard>
        <ButtonsCard title="LEETCODE" onClick={() => {window.open('https://leetcode.com/u/Rudra_Chauhan', '_blank');}}></ButtonsCard>
      </div>
        <p className="text-left text-gray-400">Rudra Chauhan <br/> rudrachauhan2888@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
