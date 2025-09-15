"use client"; // ⚠️ error.tsx must be a Client Component

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          <h1 className="text-5xl font-bold text-red-500">
            Something went wrong
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            {error.message || "An unexpected error occurred."}
          </p>

          <button
            onClick={() => reset()}
            className="cursor-pointer mt-6 px-6 py-3 rounded-lg bg-[var(--accent-color)] text-white hover:opacity-90 transition"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
