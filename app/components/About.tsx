/* eslint-disable @typescript-eslint/no-explicit-any */

import { educationData, hobbies, techData } from "@/lib/data";
import Image from "next/image";
import { MotionDiv } from "./ui/MotionDiv";
import {
  bottomTransition,
  leftTransition,
  rightTransition,
  ToolBoxVariants,
} from "@/lib/framer-motion";
import TextRevealing from "./ui/TextRevealing";

const stagger = 0.25;

const About = () => {
  return (
    <div className=" mt-20 text-white">
      <div className="text-center mb-20 ">
        <TextRevealing
          className="text-5xl font-semibold "
          text="A Glimpse Into My World"
        ></TextRevealing>
        <TextRevealing
          className=""
          text="Learn more about who I am, What I do, and what inspires me."
        ></TextRevealing>
      </div>
      <div className="my-10">
        <div className=" sm:flex  ">
          <MotionDiv
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.2 }}
            variants={leftTransition}
            className=" w-full md:mx-2 sm:w-2/3  bg-purple/5 rounded-md p-4 "
          >
            <h1 className="text-xl ">Education</h1>
            <div className="grid  grid-cols-1 sm:grid-cols-2 gap-5 my-5">
              {educationData?.map(
                ({ id, title, timeline, courseType, institute }) => (
                  <MotionDiv
                    variants={ToolBoxVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      delay: id * 0.4,
                      ease: "easeInOut",
                      duration: 0.8,
                    }}
                    className="mx-4 relative h-40 border-b-4 bg-gradient-to-r from-purple/5 to-purple/10 rounded-md hover:scale-110 hover:bg-purple/10 duration-200  border-purple/5 p-4 "
                    key={id}
                  >
                    <p className=" ">{title}</p>
                    <br />
                    <div className="absolute bottom-5">
                      <div className="mb-2">
                        <small className="bg-purple/20 px-2 py-1 rounded-full mr-2">
                          {courseType}
                        </small>
                        <small className="bg-purple/20 px-2 py-1 rounded-full ">
                          {timeline}
                        </small>
                      </div>
                      <p>{institute}</p>
                    </div>
                  </MotionDiv>
                )
              )}
            </div>
          </MotionDiv>
          <MotionDiv
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.2 }}
            variants={rightTransition}
            className="w-full  sm:w-1/3 md:mx-2 bg-purple/5 rounded-md p-4 mt-5 sm:mt-0"
          >
            <h1 className="text-xl">Beyond the Code</h1>
            <small className="">
              Explore my interests and hobbies beyond the digital realm.
            </small>
            <div className="my-5 relative h-[200px]">
              {hobbies.map(({ id, title, top, emoji, left }) => (
                <MotionDiv
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 1.2 }}
                  drag="x"
                  dragConstraints={{ left: 50, right: 10 }}
                  key={id}
                  className={`inline-flex gap-2 p-1 px-2 items-center bg-gradient-to-r from-purple/5 to-purple/15 rounded-full absolute `}
                  style={{
                    left: left,
                    top: top,
                  }}
                >
                  <span className="">{title}</span>
                  <span>{emoji}</span>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>
        </div>
        <MotionDiv
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.2 }}
          variants={bottomTransition}
          className="w-full bg-purple/5  rounded-md p-4 my-5"
        >
          <h1 className="text-xl ">My Toolbox</h1>
          <small className="">
            Explore the technologies and tools I use to craft exceptional
            digital experiences.
          </small>
          <MotionDiv
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.8 }}
            className="flex flex-wrap justify-center my-5"
          >
            {techData.map(({ id, title, image }) => (
              <MotionDiv
                variants={ToolBoxVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  delay: id * stagger,
                  ease: "easeInOut",
                  duration: 0.5,
                }}
                key={id}
                id="item"
                className="hover:-translate-y-1 hover:bg-purple/15 flex items-center justify-center w-24 h-20 bg-gradient-to-tr from-purple/5 to-purple/15 rounded-md m-2 "
              >
                <Image
                  className="p-1 rounded-md"
                  src={image}
                  height={50}
                  width={50}
                  alt={title}
                ></Image>
              </MotionDiv>
            ))}
          </MotionDiv>
        </MotionDiv>
      </div>
    </div>
  );
};

export default About;
