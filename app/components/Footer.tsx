import { socialData } from "@/lib/data";
import ContactMe from "./ContactMe";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <div className="max-w-7xl w-full mx-auto text-white bg-black-100 mt-32">
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
          <h2 className="font-semibold text-sm sm:text-lg my-4 ">
            Contact Information
          </h2>
          <ul className="text-xs sm:text-sm">
            <li className="flex items-center">
              <Phone className="w-4 mr-2 text-purple/80" />
              <span>+088 01889126591</span>
            </li>
            <li className="flex items-center">
              <Mail className="w-4 mr-2 text-purple/80" />
              <span>masaduzzaman193146@gmail.com</span>
            </li>
          </ul>
        </div>
        <div>
          <div className="md:flex  md:justify-start md:items-center ">
            {socialData.map(({ id, link, icon }) => {
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
      </div>

      <div className="flex justify-center my-5 text-sm">
        <div>© 2024 Asaduzzaman. All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
