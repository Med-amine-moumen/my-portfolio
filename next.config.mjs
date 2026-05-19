import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The bare root is redirected here (308 permanent) BEFORE the next-intl
  // middleware runs, so French-first users always land on /fr.
  async redirects() {
    return [
      {
        source: '/',
        destination: '/fr',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
