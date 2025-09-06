import Link from "next/link";

const page = () => {
  return (
    <>
      <main className="myContainer">
        <section>
          <h1 className="text-center">Privacy Policy — codesarv.com</h1>
          <p className="subP text-right">(Last updated: 5 September, 2025)</p>
        </section>

        <section>
          <h2>Introduction</h2>
          <p>
            At codesarv.com, your privacy is important to us. This Privacy
            Policy explains how we collect, use, and protect your information
            when you visit our website. By using our website, you agree to the
            practices described in this policy.
          </p>
        </section>

        <section>
          <h2>Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ol className="myList list-decimal font-bold">
            <li className="my-2">
              Personal Information:
              <ul className="myList list-disc font-normal">
                <li>Name</li>
                <li>Email address</li>
                <li>Contact details</li>
              </ul>
            </li>

            <li className="my-2">
              Non-Personal Information:
              <ul className="myList list-disc font-normal">
                <li>Browser type</li>
                <li>Device information</li>
                <li>Pages visited</li>
                <li>Time spent on site</li>
              </ul>
            </li>

            <li className="my-2">
              Cookies and Tracking Technologies:
              <ul className="myList list-disc font-normal">
                <li>
                  We use cookies to improve user experience and analyze website
                  traffic.
                </li>
                <li>
                  Third-party services like Google AdSense and Google Analytics
                  may use cookies to display personalized ads.
                </li>
              </ul>
            </li>
          </ol>
        </section>

        <section>
          <h2>How We Use Your Information</h2>

          <p>We may use your information to:</p>

          <ul className="myList list-disc">
            <li>Provide and improve our content</li>
            <li>Respond to inquiries or feedback</li>
            <li>Personalize your experience</li>
            <li>Serve relevant advertisements</li>
            <li>Analyze site usage</li>
          </ul>
        </section>

        <section>
          <h2>Third-Party Services</h2>
          <p>We may use third-party tools such as:</p>
          <ul className="myList list-disc">
            <li>Google AdSense — for displaying ads</li>
            <li>Google Analytics — for tracking website performance</li>
          </ul>
          <p>
            These services may collect information directly from your browser
            and may set cookies.
          </p>
          <p>For more details, visit:</p>
          <ul className="myList list-disc">
            <li>
              <Link
                href={"https://policies.google.com/privacy"}
                className="text-blue-400 hover:underline"
              >
                Google’s Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href={"https://policies.google.com/technologies/partner-sites"}
                className="text-blue-400 hover:underline"
              >
                How Google uses information from sites or apps
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h2>Cookies</h2>
          <p>You can choose to disable cookies in your browser settings.</p>
          <p>
            However, some features of the site may not work properly without
            cookies.
          </p>
        </section>

        <section>
          <h2>Data Protection</h2>
          <p>
            We take reasonable measures to protect your information from
            unauthorized access, alteration, or disclosure.
          </p>

          <p>
            However, no method of transmission over the internet is completely
            secure.
          </p>
        </section>

        <section>
          <h2>Children's Privacy</h2>
          <p>
            Our content is intended for individuals over the age of 13. We do
            not knowingly collect personal information from children.
          </p>
        </section>

        <section>
          <h2>Changes to This Privacy Policy</h2>

          <p>
            We may update this Privacy Policy from time to time. Updates will be
            posted on this page with the revised date.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, contact us at our:{" "}
            <Link href={"/contact"} className="text-blue-400 hover:underline">
              Contact Page
            </Link>
          </p>
        </section>
      </main>
    </>
  );
};

export default page;
