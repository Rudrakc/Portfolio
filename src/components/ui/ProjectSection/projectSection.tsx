import { CardContainer, CardBody, CardItem } from "./3d-card";
import { LampComponent } from "./lamp";
import imgeditor from "@/assets/imgeditor.png";
import kotlinuiImg from "@/assets/kotlinui.png";
import schema from "@/assets/schema.png";


const ProjectSection = () => {
  return (
    <div className="z-[150]">
      <LampComponent></LampComponent>
      <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-72">
        <CardContainer className=" ">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <div className="flex flex-col items-start">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Image Editor
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-left"
              >
                A Java program that allows various image manipulation operations
              </CardItem>
            </div>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={imgeditor}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="div"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Java
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                onClick={() => {
                  window.open(
                    "https://github.com/Rudrakc/Image_Editor",
                    "_blank"
                  );
                }}
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Github
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className=" ">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <div className="flex flex-col items-start">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Book Lending App UI
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-left"
              >
                A simple UI of a book lending app in Kotlin
              </CardItem>
            </div>
            <CardItem translateZ="100" className="w-full mt-8">
              <img
                src={kotlinuiImg}
                className="h-60 w-full object-contain scale-[1.3] rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="div"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Kotlin
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                onClick={() => {
                  window.open(
                    "https://github.com/Rudrakc/BookLendingApp",
                    "_blank"
                  );
                }}
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Github
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className=" ">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <div className="flex flex-col items-start">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Timetable Management Backend
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-left"
              >
                A School Timetable Management System using Spring Boot and MySQL
                database
              </CardItem>
            </div>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={schema}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="div"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Spring Boot, MySQL
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                onClick={() => {
                  window.open(
                    "https://github.com/Rudrakc/TimetableManagement",
                    "_blank"
                  );
                }}
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Github
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
};

export default ProjectSection;
