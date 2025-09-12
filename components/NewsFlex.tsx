import { ReactNode } from "react";
import clsx from "clsx";

interface NewsFlexProps {
  src: string;
  vwidth: number;
  vheight: number;
  vposter: string;
  title: string;
  content: ReactNode;
  isleft: boolean;
}

const NewsFlex = ({
  src,
  vwidth,
  vheight,
  vposter,
  title,
  content,
  isleft,
}: NewsFlexProps) => {
  return (
    <div
      className={clsx("flex gap-4 my-4", {
        "flex-row": isleft === true,
        "flex-row-reverse": isleft === false,
      })}
    >
      <div className="hidden md:flex md:justify-center md:items-center md:flex-1">
        <video
          src={src}
          muted
          loop
          autoPlay
          width={vwidth}
          height={vheight}
          className="rounded-3xl"
          poster={vposter}
        ></video>
      </div>

      <div className="md:p-4 flex flex-col md:flex-2 justify-center">
        <h2>{title}</h2>
        {content}
      </div>
    </div>
  );
};

export default NewsFlex;
