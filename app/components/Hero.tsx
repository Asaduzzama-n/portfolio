import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import downloadIcon from "../../public/download.png";
import Image from "next/image";
import MagicButton from "./ui/MagicButton";
import arrowIcon from "../../public/arrow.svg";
import TextRevealing from "./ui/TextRevealing";
import avatar from "../../public/IMG_3436.png";
import avatar2 from "../../public/IMG_2690.png";
import { MotionDiv } from "./ui/MotionDiv";
import { leftTransition, rightTransition } from "@/lib/framer-motion";

const avatars = [avatar, avatar2];

const Hero = () => {
  const changeAvatar = () => {
    return avatars[Math.floor(Math.random() * avatars.length)];
  };

  return (
    <section className="pb-10   mx-auto py-20 md:pt-40 ">
      <div className="">
        <BackgroundBeams></BackgroundBeams>
      </div>
      <div className="text-white flex flex-col-reverse sm:flex-row items-center justify-between">
        <MotionDiv
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.0 }}
          variants={leftTransition}
          className="w-full md:w-1/2 z-50 mx-auto text-center sm:text-start"
        >
          <div className="my-5 sm:my-0">
            <TextRevealing
              className="text-white-100"
              text="Full-stack Web Developer"
            ></TextRevealing>

            <TextGenerateEffect
              className=" text-[40px] md:text-4xl lg:text-6xl text-white text-center sm:text-start"
              words="Hello I'am Asaduzzaman"
              filter
            ></TextGenerateEffect>
            <TextRevealing
              className="w-full  mx-auto"
              text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              in asperiores accusamus animi? Libero, maxime!"
            ></TextRevealing>
          </div>
          <div className="flex flex-col-reverse  sm:flex-row my-5  items-center justify-start ">
            <div className="pt-5 sm:pt-0 mr-0 md:mr-10">
              <MagicButton
                title="DOWNLOAD CV"
                icon={downloadIcon}
                otherClasses="w-full hover:bg-gradient-to-r from-purple/5 to-purple/15"
              ></MagicButton>
            </div>
          </div>
        </MotionDiv>
        <div className=" w-full md:w-1/2 flex justify-center mb-4"></div>
        <MotionDiv
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.2 }}
          variants={rightTransition}
          transition={{
            duration: 1,
          }}
          className="z-50"
        >
          <Image
            src={changeAvatar()}
            height={700}
            width={500}
            className="rounded-md "
            alt="avatar"
          ></Image>
        </MotionDiv>
      </div>

      <div className="my-20 flex justify-center">
        <MagicButton
          title="SEE MY WORK"
          icon={arrowIcon}
          otherClasses="w-full hover:bg-gradient-to-r from-purple/5 to-purple/15"
        ></MagicButton>
      </div>
    </section>
  );
};

export default Hero;
