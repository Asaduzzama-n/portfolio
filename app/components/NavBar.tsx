import Image from "next/image";
import logo from "../../public/a-high-resolution-logo-transparent.png";
import { navData } from "@/lib/data";

const NavBar = () => {
  return (
    <div className=" text-white flex justify-between items-center ">
      <div className="w-1/2">
        <Image height={60} width={60} src={logo} alt="logo"></Image>
      </div>
      <div className="flex  items-center  justify-end">
        {navData.map(({ id, image, link }) => (
          <a
            className="bg-gradient-to-r from-purple/10 to-purple/15 hover:bg-purple/20 mx-1 rounded-lg"
            href={link}
          >
            <img className="w-8 h-8 rounded-lg p-1" src={image}></img>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
