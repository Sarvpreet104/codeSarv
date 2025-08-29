import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();

  const products = [
    { name: "Courses", path: "/" },
    { name: "Blogs", path: "/" },
  ];

  const resources = [
    { name: "Privacy", path: "/" },
    { name: "Terms", path: "/" },
    { name: "Contact", path: "/" },
  ];

  return (
    <footer className="bg-[var(--ele-bg-color)] border-t-2 border-[var(--border-color)] w-full px-4 py-10 lg:py-16 text-[var(--primary-color)]">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-4 w-full lg:w-[70%] mx-auto">
        {/* branding */}
        <div className="flex flex-row gap-2 items-center lg:items-start lg:flex-col">
          <div className="text-2xl font-semibold">codeSarv</div>
          <div className="text-[var(--secondary-color)]">&copy; {year}</div>
        </div>

        {/* navigations */}
        <nav className="flex w-full flex-wrap justify-between lg:w-fit gap-8 lg:gap-26">
          {/* Products */}
          <div className="flex flex-col gap-2">
            <div className="font-semibold text-lg">Products</div>
            <ul className="flex flex-col gap-1">
              {products.map((value) => {
                return (
                  <li key={value.name}>
                    <Link
                      href={value.path}
                      className="text-[var(--accent-color)] hover:text-[var(--highlight-color)] hover:underline transition-all duration-300"
                    >
                      {value.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-2">
            <div className="font-semibold text-lg">Resources</div>
            <ul className="flex flex-col gap-1">
              {resources.map((value) => {
                return (
                  <li key={value.name}>
                    <Link
                      href={value.path}
                      className="text-[var(--accent-color)] hover:text-[var(--highlight-color)] hover:underline transition-all duration-300"
                    >
                      {value.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Developers */}
          <div className="flex flex-col gap-2">
            <div className="font-semibold text-lg">Developers</div>
            <div>
              <div className="flex flex-wrap gap-4">
                <Image
                  src={"/github.svg"}
                  alt="github"
                  width={30}
                  height={30}
                  className="invert hover:invert-75 cursor-pointer transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
