import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <h1 className="text-6xl font-bold text-[var(--accent-color)]">404</h1>
      <h2 className="text-2xl mt-4">Page Not Found</h2>
      <p className="mt-2 text-lg text-gray-500">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="cursor-pointer mt-6 px-6 py-3 rounded-lg bg-[var(--accent-color)] text-white hover:opacity-90 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
