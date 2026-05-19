import Link from 'next/link';

/**
 * Global fallback for paths that never reach a locale segment. The root
 * layout is pass-through, so this provides its own <html>/<body>.
 */
export default function GlobalNotFound() {
  return (
    <html lang="fr">
      <body className="bg-primary-beige text-gray-900">
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
          <p className="font-mono text-7xl font-extrabold text-accent-base mb-4">
            404
          </p>
          <h1 className="text-2xl font-bold mb-2">Page introuvable</h1>
          <p className="text-gray-500 mb-8 max-w-md">
            La page que vous cherchez n&apos;existe pas.
          </p>
          <Link
            href="/fr"
            className="px-6 py-3 bg-accent-base text-white rounded-xl font-semibold"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </body>
    </html>
  );
}
