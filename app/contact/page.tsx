import SocialCard from "@/components/SocialCard";
import PrimaryButton from "@/components/PrimaryButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - codeSarv",
  description:
    "Get in touch with the codeSarv team. Whether you have questions, feedback, or need support, we're here to help. Contact us today!",
};

const page = () => {
  return (
    <main className="myContainer">
      <section>
        <h1 className="text-center">Contact codeSarv</h1>

        <div className="flex flex-col lg:flex-row gap-4 w-full">
          <div className="flex flex-1 flex-col bg-[var(--ele-bg-color)] border-2 border-[var(--border-color)] rounded-3xl p-2 md:p-4 gap-2">
            <input
              type="text"
              placeholder="Your Name"
              required
              autoFocus
              className="bg-[var(--bg-color)] rounded-full px-6 py-2 text-lg caret-[var(--highlight-color)] focus:outline-none"
            />
            <input
              type="text"
              placeholder="Your Email"
              required
              className="bg-[var(--bg-color)] rounded-full px-6 py-2 text-lg caret-[var(--highlight-color)] focus:outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              required
              className="bg-[var(--bg-color)] rounded-full px-6 py-2 text-lg caret-[var(--highlight-color)] focus:outline-none"
            />
            <textarea
              placeholder="Message..."
              className="bg-[var(--bg-color)] rounded-3xl min-h-[200px] resize-none overflow-y-auto px-6 py-2 text-lg caret-[var(--highlight-color)] scroll-smooth focus:outline-none"
              required
            ></textarea>

            <PrimaryButton name="Submit" bLink="/" />
          </div>

          <div className="flex-1 flex flex-col justify-center items-center border-2 border-[var(--border-color)] rounded-3xl py-4 px-10 text-center min-h-96">
            <h3 className="font-bold text-3xl md:text-4xl mb-4">Contact Us</h3>
            <p>
              Got a question, feedback, or just want to say hi? We do love to
              hear from you. Every message helps codeSarv become better.
            </p>
          </div>
        </div>
      </section>

      <section>
        <SocialCard />
      </section>
    </main>
  );
};

export default page;
