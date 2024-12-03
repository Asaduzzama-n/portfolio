import { workExperiences } from "@/lib/data";

const Experience = () => {
  return (
    <div className="text-white  ">
      <div className=" px-4 py-16 ">
        <h2 className="text-3xl md:text-5xl font-bold  mb-8 text-center pb-10">
          Work Experience
        </h2>
        <div className=" p-10 bg-gradient-to-tl from-purple/5 to-purple/15 rounded-md hover:bg-gradient-to-tr hover:from-purple/5 hover:to-purple/15 hover:duration-1000">
          {workExperiences &&
            workExperiences.map(
              ({ id, title, description, duration, company, technologies }) => (
                <div className=" pl-4 relative " key={id}>
                  <p className="text-xl font-bold">
                    {title} @ <span className="text-purple">{company}</span>
                  </p>
                  <br />
                  <p className="">{duration}</p>
                  <p className="">{description}</p>
                  <br />
                  <div className="flex flex-wrap items-center pb-10">
                    {technologies?.map((technology) => (
                      <p
                        key={technology}
                        className="text-sm px-2  m-1 py-1 rounded-md bg-purple/10  text-purple  hover:translate-y-2  hover:duration-500 "
                      >
                        {technology}
                      </p>
                    ))}
                  </div>

                  <div className="h-4 w-4 bg-purple rounded-full absolute -left-3 top-1"></div>
                  <div className="h-full w-0.5 bg-purple/20  absolute -left-1.5 top-1"></div>
                </div>
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
