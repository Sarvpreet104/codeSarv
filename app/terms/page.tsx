import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - codeSarv",
  description:
    "Read the Terms of Service for codeSarv. Understand your rights and responsibilities when using our website and services.",
  robots: {
    index: false, // noindex
    follow: true, // links can still be followed
  },
};

const page = () => {
  return (
    <>
      <main className="myContainer">
        <section>
          <h1 className="text-center">Terms & Conditions — codesarv.com</h1>
          <p className="subP text-right">(Last updated: 5 September, 2025)</p>
        </section>

        <section>
          <h2>Introduction</h2>
          <p>
            Welcome to codesarv.com. By using our website, you agree to comply
            with these Terms & Conditions. If you do not agree, please do not
            use our site.
          </p>
        </section>

        <section>
          <h2>Use of Website</h2>
          <ul className="">
            <li>You must be at least 13 years old to use this website.</li>
            <li>You agree not to use the site for any unlawful purpose.</li>
            <li>
              You may not copy, reproduce, or redistribute our content without
              written permission.
            </li>
          </ul>
        </section>

        <section>
          <h2>Content & Intellectual Property</h2>
          <ul className="">
            <li>
              All content on codesarv.com (text, images, code examples, etc.) is
              owned by us or licensed to us.
            </li>
            <li>
              You may use our content for personal learning purposes only.
            </li>
            <li>
              You may not resell, republish, or modify our content without
              permission.
            </li>
          </ul>
        </section>

        <section>
          <h2>Disclaimer</h2>
          <ul className="">
            <li>The content provided is for educational purposes only.</li>
            <li>
              We make no guarantees of accuracy, completeness, or usefulness.
            </li>
            <li>
              We are not liable for any losses or damages resulting from using
              our content.
            </li>
          </ul>
        </section>

        <section>
          <h2>External Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the content, policies, or practices of these
            websites.
          </p>
        </section>

        <section>
          <h2>Advertisements</h2>

          <ul className="">
            <li>
              We may display ads from third-party providers (such as Google
              AdSense).
            </li>
            <li>These ads may use cookies to display relevant promotions.</li>
          </ul>
        </section>

        <section>
          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, codesarv.com shall not be
            liable for:
          </p>
          <ul className="">
            <li>Any indirect, incidental, or consequential damages</li>
            <li>
              Loss of data, revenue, or business arising from your use of the
              website
            </li>
          </ul>
        </section>

        <section>
          <h2>Changes to These Terms</h2>
          <p>
            We may update these Terms & Conditions at any time. Changes will be
            posted on this page with the updated date.
          </p>
        </section>

        <section>
          <h2>Governing Law</h2>
          <p>
            These Terms shall be governed by and interpreted in accordance with
            the laws of India.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have questions about these Terms, contact us at our:{" "}
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
