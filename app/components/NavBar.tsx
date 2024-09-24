import Image from "next/image";
import logo from "../../public/a-high-resolution-logo-transparent.png";
import { navData } from "@/lib/data";

const NavBar = () => {
  return (
    <div className=" text-white flex justify-between items-center ">
      <div className="w-1/2">
        <Image height={40} width={40} src={logo} alt="logo"></Image>
      </div>
      <div className="flex  items-center  justify-end">
        {navData.map(({ id, icon, link }) => {
          const Icon = icon;
          return (
            <a
              key={id}
              className="bg-gradient-to-r from-purple/10 to-purple/15 hover:bg-purple/20 mx-1 rounded-sm"
              href={link}
            >
              <Icon className="w-8 h-8 p-2 text-purple/80" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
