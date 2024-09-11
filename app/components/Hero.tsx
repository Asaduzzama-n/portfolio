import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { socialData } from "@/lib/data";
import downloadIcon from "../../public/download.png";
import Image from "next/image";
import MagicButton from "./ui/MagicButton";
import arrowIcon from "../../public/arrow.svg";

const Hero = () => {
  return (
    <section className="pb-10  w-4/5 md:w-3/4 mx-auto py-20 md:pt-40 md:h-screen ">
      <div className="">
        <BackgroundBeams></BackgroundBeams>
      </div>
      <div className="text-white flex flex-col-reverse sm:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 z-50 mx-auto text-center sm:text-start">
          <div>
            <p className="text-white-100 ">Full-stack Web Developer</p>
            <TextGenerateEffect
              className=" text-[40px] md:text-4xl lg:text-6xl text-white text-center sm:text-start"
              words="Hello I'am Asaduzzaman"
              filter
            ></TextGenerateEffect>
            <p className="w-full  mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              in asperiores accusamus animi? Libero, maxime!
            </p>
          </div>
          <div className="flex flex-col-reverse  sm:flex-row my-5  items-center justify-start ">
            <div className="pt-5 sm:pt-0 mr-0 md:mr-10">
              <MagicButton
                title="DOWNLOAD CV"
                icon={downloadIcon}
                otherClasses="w-full"
              ></MagicButton>
            </div>
            <div className="flex  justify-start items-center">
              {socialData.map(({ id, link, image }) => (
                <a
                  href={link}
                  key={id}
                  className="mx-3 p-1 border-2 border-purple rounded-full min-w-8 min-h-8"
                >
                  <Image
                    height={24}
                    width={24}
                    src={image}
                    alt="social-image"
                  ></Image>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className=" w-full md:w-1/2 flex justify-center mb-4"></div>
      </div>
      <div className="my-10 flex justify-center">
        <MagicButton
          title="SEE MY WORK"
          icon={arrowIcon}
          otherClasses="w-full"
        ></MagicButton>
      </div>
    </section>
  );
};

export default Hero;
