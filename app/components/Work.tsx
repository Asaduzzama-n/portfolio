import { products } from "@/lib/data";
import { HeroParallax } from "./ui/hero-parallax";

const Work = () => {
  return (
    <div
      id="projects"
      className="max-w-7xl w-full md:mx-auto text-white bg-black-100 z-50"
    >
      <HeroParallax products={products}></HeroParallax>
    </div>
  );
};

export default Work;
