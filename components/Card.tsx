import Image from "next/image";
import PrimaryButton from "./PrimaryButton";

interface CardProps {
  title: string;
  desc: string;
  src: string;
  alt: string;
  iwidth: number;
  iheight: number;
  bLink: string;
}

const Card = ({ title, desc, src, alt, iwidth, iheight, bLink }: CardProps) => {
  return (
    <div className="flex flex-col gap-2 max-w-85 min-w-70 border-2 border-[var(--border-color)] rounded-3xl overflow-hidden bg-[var(--ele-bg-color)] text-[var(--primary-color)]">
      <div>
        <Image src={src} alt={alt} width={iwidth} height={iheight} />
      </div>
      <div className="px-4 py-2 flex flex-col gap-4 h-full">
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-xl md:text-2xl">{title}</h3>
          <p className="text-[var(--secondary-color)] text-md">{desc}</p>
        </div>
        <div className="mt-auto mb-4">
          <PrimaryButton name="Start now" bLink={bLink} />
        </div>
      </div>
    </div>
  );
};

export default Card;
