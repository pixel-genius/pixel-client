"use client";

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
        <div className="container flex flex-col items-center justify-center min-h-screen gap-8">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl font-bold">Error</h1>
            <h2 className="text-xl font-semibold text-center">
              Something went wrong!
            </h2>
            <p className="text-sm text-center text-gray-500">
              {error.message || "An unexpected error occurred"}
            </p>
          </div>
          <button
            onClick={() => reset()}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
