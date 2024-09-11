"use client";
import { projects } from "@/lib/data";
import { MotionDiv } from "./ui/MotionDiv";
import TextRevealing from "./ui/TextRevealing";
import { PinContainer } from "./ui/3d-pin";
import { bottomTransition, charVariants, variants } from "@/lib/framer-motion";

const Work = () => {
  return (
    <div
      id="projects"
      className="max-w-7xl w-full md:mx-auto text-white  z-50 min-h-screen my-20"
    >
      <div className="mb-20 text-center">
        <TextRevealing
          className="text-lg font-semibold text-purple"
          text="REAL-WORLD RESULTS"
        ></TextRevealing>
        <br />
        <TextRevealing
          className="text-5xl font-semibold "
          text="Featured Projects"
        ></TextRevealing>
      </div>
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 5 }}
        className="flex flex-wrap items-center justify-center p-4 gap-16"
      >
        {projects.map(
          ({
            id,
            title,
            image,
            live,
            github,
            description,
            iconLists,
            gitImg,
          }) => (
            <MotionDiv
              variants={variants}
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
              key={id}
            >
              <PinContainer className="" title={title} href={live}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10 rounded-md ">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl rounded-lg"></div>
                  <img
                    src={image}
                    alt="cover"
                    className="z-10 absolute bottom-0 rounded-md"
                  />
                </div>

                <h1 className="font-semibold  text-lg line-clamp-1">{title}</h1>

                <small className="  mt-1 line-clamp-4">{description}</small>

                <div className="flex items-center justify-between mt-7 mb-3 relative">
                  <div className="flex items-center ">
                    {iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-tr from-purple/5 to-purple/15 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center rounded-full"
                        style={{
                          transform: `translateX(-${10 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end items-center absolute right-0 z-50">
                    <a
                      href={github.frontend}
                      onClick={(e) => e.stopPropagation()} // Prevents the live link from being triggered
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="w-8 h-8 mr-2 bg-purple/40 p-1 rounded-full"
                        src={gitImg}
                        alt="Frontend GitHub"
                      />
                    </a>
                    <a
                      href={github.backend}
                      onClick={(e) => e.stopPropagation()} // Prevents the live link from being triggered
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="w-8 h-8  bg-purple/40 p-1 rounded-full"
                        src={gitImg}
                        alt="Backend GitHub"
                      />
                    </a>
                  </div>
                </div>
              </PinContainer>
            </MotionDiv>
          )
        )}
      </MotionDiv>
    </div>
  );
};

export default Work;
