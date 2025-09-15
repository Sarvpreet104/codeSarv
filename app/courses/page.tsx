import Card from "@/components/Card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses - codeSarv",
  description:
    "Explore our range of free coding courses at codeSarv. Our courses are designed for beginners and advanced learners alike. Start your coding journey today!",
};

const page = () => {
  const courses = [
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
    <main className="myContainer">
      <section>
        <h1 className="text-center">Our Courses</h1>
        <p className="text-center">Enroll in a course today!</p>
      </section>

      <section>
        <div className="flex gap-4 w-fit mx-auto my-12 flex-wrap justify-center">
          {courses.map((value) => {
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
  );
};

export default page;
