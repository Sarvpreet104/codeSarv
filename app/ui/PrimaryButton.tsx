import Link from "next/link";

interface PrimaryButtonProps {
  name: string;
  bLink: string;
}

const PrimaryButton = ({ name, bLink }: PrimaryButtonProps) => {
  return (
    <Link
      className={`bg-[var(--accent-color)] rounded-full px-4 py-2 cursor-pointer hover:bg-[var(--highlight-color)] text-[var(--bg-color)] transition-all duration-300 w-fit`}
      href={bLink}
    >
      {name}
    </Link>
  );
};

export default PrimaryButton;
