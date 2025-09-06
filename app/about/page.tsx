import SocialCard from "@/app/ui/SocialCard";
import ContactCard from "@/app/ui/ContactCard";
import NewsFlex from "@/app/ui/NewsFlex";

const page = () => {
  return (
    <main className="myContainer">
      <section>
        <h1 className=" text-center">About codeSarv</h1>
        <video
          src="/videos/codeSarv-about.mp4"
          autoPlay
          loop
          muted
          className="rounded-3xl my-10 w-full h-auto"
          width={1920}
          height={1080}
          poster="/videos/thumbnails/codeSarv-about.png"
        ></video>
      </section>

      <section>
        <NewsFlex
          src="/videos/about-1.mp4"
          vwidth={1920}
          vheight={1920}
          vposter="/videos/thumbnails/about-1.png"
          title="Who we are"
          content={
            <p>
              We provide free coding tutorials which are beginners friendly. The
              students can enroll in our courses to learn coding, from basic to
              very advance.
            </p>
          }
          isleft={true}
        />
        <NewsFlex
          src="/videos/about-2.mp4"
          vwidth={1920}
          vheight={1920}
          vposter="/videos/thumbnails/about-2.png"
          title="Why codeSarv"
          content={
            <div>
              <p>
                Hi! I am <strong>Sarvpreet Singh</strong>, founder and C.E.O. of
                codeSarv. I have created this platform to make coding simple,
                fun and free.
              </p>
              <p>
                And, I believe today's world need to learn coding in most
                efficient way without going through the beginner stuggle of
                starting. As, this skill have become very basic. And, the future
                tech geniuses should not worry about the learning part and focus
                on creating new things.
              </p>
            </div>
          }
          isleft={false}
        />
        <NewsFlex
          src="/videos/about-3.mp4"
          vwidth={1920}
          vheight={1920}
          vposter="/videos/thumbnails/about-3.png"
          title="What we offer"
          content={
            <div>
              <p>On this platform, we provide our dear students:</p>
              <ul className="myList list-[var(--check-list)]">
                <li>
                  <span>A proper learning structure to follow.</span>
                </li>
                <li>
                  <span>Free coding tutorials.</span>
                </li>
                <li>
                  <span>Downloadable Notes.</span>
                </li>
              </ul>
            </div>
          }
          isleft={true}
        />
      </section>

      <section>
        <div className="flex flex-col md:flex-row gap-4">
          <SocialCard />
          <ContactCard />
        </div>
      </section>
    </main>
  );
};

export default page;
