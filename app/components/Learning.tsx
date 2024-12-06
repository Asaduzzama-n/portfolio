/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { MotionDiv } from "./ui/MotionDiv";
import { bottomTransition } from "@/lib/framer-motion";
import "./learning.css";
const stagger = 0.25;

const CurrentlyLearning = () => {
  const learningData = [
    {
      id: 1,
      title: "React Native",
      image: "/tech/react-native-1.svg", // Replace with the correct path
    },
    {
      id: 2,
      title: "Go",
      description: "Exploring the power of Go for scalable backend systems.",
      image: "/tech/go-8.svg", // Replace with the correct path
    },
    {
      id: 3,
      title: "System Design",
      image: "/tech/napkin-selection (1).png", // Replace with the correct path
    },
  ];

  return (
    <MotionDiv
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.1 }}
      variants={bottomTransition}
      className="w-full  rounded-md p-6  text-white font-mono"
    >
      <div className="text-lg mb-4">
        <div className="relative inline-block">
          <span className="animate-typewriter overflow-hidden whitespace-nowrap border-r-2 border-green-400 pr-2">
            Currently Exploring React Native, Go, and System Design
          </span>
        </div>
      </div>

      <MotionDiv
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        {learningData.map(({ id, title, image }) => (
          <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: id * stagger,
              ease: "easeInOut",
              duration: 0.6,
            }}
            key={id}
            className="p-6  hover:scale-105 duration-300 text-center"
          >
            <div className="flex justify-center mb-4">
              <Image
                src={image}
                alt={title}
                width={100}
                height={100}
                className="w-16 h-16"
              />
            </div>
            {/* <h5 className="text-lg font-semibold text-purple-500">{title}</h5> */}
          </MotionDiv>
        ))}
      </MotionDiv>
    </MotionDiv>
  );
};

export default CurrentlyLearning;
