"use client";
import { workExperiences } from "@/lib/data";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Experience = () => {
  return (
    <div className="text-white">
      <div className="px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center pb-10">
          Work Experience
        </h2>
        <div className="p-10 bg-gradient-to-tl from-purple/5 to-purple/15 rounded-md hover:bg-gradient-to-tr hover:from-purple/5 hover:to-purple/15 hover:duration-1000">
          {workExperiences &&
            workExperiences.map(
              ({ id, title, description, duration, company, technologies }) => (
                <div className="pl-4 relative" key={id}>
                  <p className="text-xl font-bold">
                    {title} @ <span className="text-purple">{company}</span>
                  </p>
                  <br />
                  <p>{duration}</p>
                  <p>{description}</p>
                  <br />
                  {/* Animated Technologies */}
                  <motion.div
                    className="flex flex-wrap items-center pb-10"
                    initial={{ opacity: 0, y: 20 }} // Initial state for animation
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }} // Animate when in view
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                      staggerChildren: 0.2, // Stagger the items with a delay
                    }}
                    viewport={{ once: true }} // Triggers animation only once when in view
                  >
                    {technologies?.map((technology, index) => (
                      <motion.p
                        key={technology}
                        className="text-sm px-2 m-1 py-1 rounded-md bg-purple/10 text-purple hover:translate-y-2 hover:duration-500"
                        initial={{ opacity: 0, scale: 0.8 }} // Initial state for each technology item
                        whileInView={{
                          opacity: 1,
                          scale: 1, // Animate to final state when in view
                        }}
                        transition={{
                          duration: 0.3, // Duration for each technology item
                          delay: index * 0.2, // Delay staggered animation based on index
                        }}
                      >
                        {technology}
                      </motion.p>
                    ))}
                  </motion.div>

                  <div className="h-4 w-4 bg-purple rounded-full absolute -left-3 top-1"></div>
                  <div className="h-full w-0.5 bg-purple/20 absolute -left-1.5 top-1"></div>
                </div>
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
