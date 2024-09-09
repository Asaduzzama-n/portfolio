/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon?: string;
  position?: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <div>
      <button className="relative inline-flex h-10 overflow-hidden rounded-lg p-[1px] focus:outline-none ">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span
          className={`font-semibold inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm  text-white backdrop-blur-3xl ${otherClasses}`}
        >
          {title}
          <Image
            src={icon}
            height={title === "DOWNLOAD CV" ? 20 : 12}
            width={title === "DOWNLOAD CV" ? 20 : 12}
            alt="image"
            className="mx-3 flex j"
          ></Image>
        </span>
      </button>
    </div>
  );
};

export default MagicButton;
