import Card from "@/app/ui/Card";

const page = () => {
  const myCourses = [
    {
      id: 1,
      title: `Python for absolute beginners: Zero to Hero`,
      desc: `This python course is made for absolute beginners, all the basics are
            covered. It progress to advance level python skills which are
            essential today and in near future.`,
      src: `/courses/python.png`,
      alt: `python`,
      vwidth: 1024,
      vheight: 576,
    },
    {
      id: 2,
      title: `Python for absolute beginners: Zero to Hero`,
      desc: `This python course is made for absolute beginners, all the basics are
            covered.`,
      src: `/courses/python.png`,
      alt: `python`,
      vwidth: 1024,
      vheight: 576,
    },
    {
      id: 3,
      title: `Python Advance`,
      desc: `This python course is made for absolute beginners, all the basics are
            covered. It progress to advance level python skills which are
            essential today and in near future.`,
      src: `/courses/python.png`,
      alt: `python`,
      vwidth: 1024,
      vheight: 576,
    },
  ];

  return (
    <>
      <main className="myContainer">
        <section>
          <h2 className="text-center">Our Courses, Enroll now!</h2>
          <p className="text-center subP">
            You are welcome to enroll in any course you like.
          </p>

          <div className="flex gap-4 w-fit mx-auto my-12 flex-wrap justify-cente">
            {myCourses.map((value) => {
              return (
                <Card
                  title={value.title}
                  desc={value.desc}
                  src={value.src}
                  alt={value.alt}
                  iwidth={value.vwidth}
                  iheight={value.vheight}
                  bLink="/"
                  key={value.id}
                />
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
