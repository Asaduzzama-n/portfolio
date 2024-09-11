/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { educationData, hobbies, techData } from "@/lib/data";
import Image from "next/image";

const About = () => {
  return (
    <div className=" my-10 text-white">
      <div className="text-center">
        <h1 className="text-2xl mb-10">About Me</h1>
        <h1 className="text-4xl font-semibold">A Glimpse Into My World</h1>
        <small>
          Learn more about who I am, What I do, and what inspires me.
        </small>
      </div>
      <div className="my-10">
        <div className=" sm:flex  ">
          <div className="w-full md:mx-2 sm:w-2/3  bg-purple/5 rounded-md p-4 ">
            <h1 className="text-xl ">Education</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-5">
              {educationData?.map(
                ({ id, title, timeline, courseType, institute }) => (
                  <div
                    className="mx-4  border-b-4 border-purple/5 p-2 "
                    key={id}
                  >
                    <p className=" ">{title}</p>
                    <br />
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
                )
              )}
            </div>
          </div>
          <div className="w-full  sm:w-1/3 md:mx-2 bg-purple/5 rounded-md p-2">
            <h1 className="text-xl">Beyond the Code</h1>
            <small className="">
              Explore my interests and hobbies beyond the digital realm.
            </small>
            <div className="my-5 relative h-[200px]">
              {hobbies.map(({ id, title, top, emoji, left }) => (
                <div
                  key={id}
                  className={`inline-flex gap-2 p-1 px-2 items-center bg-gradient-to-r from-purple/5 to-purple/15 rounded-full absolute `}
                  style={{
                    left: left,
                    top: top,
                  }}
                >
                  <span className="">{title}</span>
                  <span>{emoji}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full bg-purple/5  rounded-md p-2 my-5">
          <h1 className="text-xl">My Toolbox</h1>
          <small className="">
            Explore the technologies and tools I use to craft exceptional
            digital experiences.
          </small>
          <div className="flex flex-wrap my-5">
            {techData.map(({ id, title, image }) => (
              <div
                key={id}
                className="flex items-center justify-center w-24 h-20 bg-gradient-to-tr from-purple/5 to-purple/15 rounded-md m-2 hover:opacity-70 hover:-translate-y-2  duration-200"
              >
                <Image
                  className="p-1 rounded-md"
                  src={image}
                  height={50}
                  width={50}
                  alt={title}
                ></Image>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
