import Link from 'next/link';

/**
 * Global fallback for paths that never reach a locale segment. The root
 * layout is pass-through, so this provides its own <html>/<body>.
 */
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="bg-primary-beige text-gray-900">
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
          <p className="font-mono text-7xl font-extrabold text-accent-base mb-4">
            404
          </p>
          <h1 className="text-2xl font-bold mb-2">Page not found</h1>
          <p className="text-gray-500 mb-8 max-w-md">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/en"
            className="px-6 py-3 bg-accent-base text-white rounded-xl font-semibold"
          >
            Back to home
          </Link>
        </div>
      </body>
    </html>
  );
}
