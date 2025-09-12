"use client";
import Image from "next/image";
import { newLinkBtn } from "@/libs/utils";

const SocialCard = () => {
  const icon_width = 35;
  const icon_height = 35;

  const socils = [
    {
      src: "/icons/github.svg",
      alt: "github",
      bLink: "https://github.com/Sarvpreet104/codeSarv",
    },
  ];

  return (
    <div className="bg-[var(--ele-bg-color)] border-2 border-[var(--border-color)] flex flex-col text-center rounded-3xl justify-center items-center flex-1 p-10 gap-4">
      <div>
        <h3 className="text-2xl font-semibold mb-1">Follow us</h3>
        <p className="subP">Connect with us, to know us more!</p>
      </div>

      <div className="flex flex-wrap gap-2 items-center justify-center">
        {socils.map((value) => {
          return (
            <button
              className="bg-[var(--accent-color)] hover:bg-[var(--highlight-color)] p-1 rounded-full cursor-pointer transition-all duration-300 overflow-hidden"
              onClick={() => {
                newLinkBtn(value.bLink);
              }}
              key={value.bLink}
            >
              <Image
                src={value.src}
                alt={value.alt}
                width={icon_width}
                height={icon_height}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SocialCard;
