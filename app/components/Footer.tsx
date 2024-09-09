import { socialData } from "@/lib/data";
import ContactMe from "./ContactMe";
import Image from "next/image";
import gmailIcon from "../../public/icons8-gmail-50.png";
import phoneIcon from "../../public/icons8-phone-50.png";

const Footer = () => {
  return (
    <div className="max-w-7xl w-full mx-auto text-white bg-black-100 ">
      <div className="flex justify-center items-center ">
        <div className="">
          <h1 className="text-4xl md:text-5xl font-semibold">
            Let&apos;s <span className="text-purple">work</span> together
          </h1>
          <p className="text-xs">
            Reach out to me and let&apos;s discuss how can I help you achieve
            your goals.
          </p>
          <div className="flex justify-center my-10">
            <ContactMe></ContactMe>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-semibold text-lg">Contact Information</h2>
          <ul>
            <li className="flex items-center">
              <Image
                className="mr-2"
                src={phoneIcon}
                height={15}
                width={15}
                alt="gmail"
              ></Image>
              <span>+088 01889126591</span>
            </li>
            <li className="flex items-center">
              <Image
                className="mr-2"
                src={gmailIcon}
                height={15}
                width={15}
                alt="gmail"
              ></Image>
              <span>masaduzzaman193146@gmail.com</span>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex  justify-start items-center z-50">
            {socialData.map(({ id, link, image }) => (
              <a
                href={link}
                key={id}
                className="mx-3 p-1 hover:-translate-y-2 duration-200 "
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

      <div className="flex justify-center">
        <div>© 2024 Asaduzzaman. All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;