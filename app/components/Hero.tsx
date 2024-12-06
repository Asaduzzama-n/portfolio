import Image from "next/image";
import MagicButton from "./ui/MagicButton";
import TextRevealing from "./ui/TextRevealing";
import avatar from "../../public/IMG_3436.png";
import avatar2 from "../../public/IMG_2690.png";
import { MotionDiv } from "./ui/MotionDiv";
import { leftTransition, rightTransition } from "@/lib/framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { profile } from "@/lib/data";
import { Spotlight } from "./ui/spotlight";

import { TextGenerateEffect } from "./ui/text-generate-effect";

const avatars = [avatar, avatar2];

const Hero = () => {
  const changeAvatar = () => {
    return avatars[Math.floor(Math.random() * avatars.length)];
  };

  return (
    <section className="   mx-auto py-20 md:pt-40 ">
      <div className="">
        {/* <BackgroundBeams></BackgroundBeams> */}
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
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
            <TextGenerateEffect
              className=" text-[40px] md:text-4xl lg:text-6xl text-white text-center sm:text-start"
              words={`Hello I'am ${profile?.name}`}
              filter
            ></TextGenerateEffect>
            <TextRevealing
              className="text-purple  md:text-xl  font-semibold "
              text={profile?.title}
            ></TextRevealing>
            <br />
            <TextRevealing
              className="w-full  mx-auto"
              text={profile?.description}
            ></TextRevealing>
          </div>
          <div className="flex flex-col-reverse  sm:flex-row my-5  items-center justify-start ">
            <div className="pt-5 sm:pt-0 mr-0 md:mr-10">
              <a href="/Asaduzzaman_uiu_cv.pdf" download>
                <MagicButton
                  title="DOWNLOAD CV"
                  icon={<Download className="w-6 h-6 p-1 ml-2 text-purple" />}
                  otherClasses="w-full hover:bg-gradient-to-r from-purple/5 to-purple/15"
                ></MagicButton>
              </a>
            </div>
          </div>
        </MotionDiv>
        <MotionDiv
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.2 }}
          variants={rightTransition}
          transition={{
            duration: 1,
          }}
          className="z-50  md:w-1/3"
        >
          <Image
            src={changeAvatar()}
            height={600} // Adjust height here
            width={400} // Adjust width here
            className="rounded-md w-1/2   mx-auto md:w-2/3 md:mx-0 shadow-purple shadow-md  opacity-90"
            alt="avatar"
          />
        </MotionDiv>
      </div>

      <div className="md:mt-20 flex justify-center">
        <a href="#projects">
          <MagicButton
            title="SEE MY WORK"
            icon={<ArrowUpRight className="w-7 h-7 p-1 ml-2 text-purple" />}
            otherClasses="w-full hover:bg-gradient-to-r from-purple/5 to-purple/15"
          ></MagicButton>
        </a>
      </div>
    </section>
  );
};

export default Hero;
