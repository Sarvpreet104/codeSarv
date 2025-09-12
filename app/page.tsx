import Image from "next/image";
import Card from "@/components/Card";

export default function Home() {
  const top_courses = [
    {
      id: 1,
      title: `Python for absolute beginners: Zero to Hero`,
      desc: `This python course is made for absolute beginners, all the basics are
            covered. It progress to advance level python skills which are
            essential today and in the near future.`,
      src: `/courses/python.png`,
      alt: `python`,
      vwidth: 1024,
      vheight: 576,
      bLink: "/courses/python",
    },
  ];

  return (
    <>
      <main className="myContainer">
        <section className="mySection">
          <h1 className="heading1 text-center">Welcome to codeSarv</h1>
          <video
            src="/videos/codeSarv-welcome.mp4"
            autoPlay
            loop
            muted
            className="rounded-3xl my-10 w-full h-auto"
            width={1920}
            height={1080}
            poster="/videos/thumbnails/codeSarv-welcome.png"
          ></video>
        </section>

        <section className="mySection">
          <h2 className="heading2 text-center">Top Courses</h2>
          <div className="flex gap-4 w-fit mx-auto my-12 flex-wrap justify-center">
            {top_courses.map((value) => {
              return (
                <Card
                  title={value.title}
                  desc={value.desc}
                  src={value.src}
                  alt={value.alt}
                  iwidth={value.vwidth}
                  iheight={value.vheight}
                  bLink={value.bLink}
                  key={value.id}
                />
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
