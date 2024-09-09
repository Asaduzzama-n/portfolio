import Image from "next/image";
import logo from "../../public/a-high-resolution-logo-transparent.png";

type IItems = {
  id: number;
  href: string;
  title: string;
};

const NavBar = ({ items }: { items: IItems[] }) => {
  return (
    <div className=" text-white flex justify-between items-center">
      <div className="w-1/2">
        <Image height={60} width={60} src={logo} alt="logo"></Image>
      </div>
      <div className="flex  items-center  ">
        {items.map(({ id, href, title }) => (
          <a className="mx-4" key={id} href={href}>
            {title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
