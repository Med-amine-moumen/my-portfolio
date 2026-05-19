import { ImageResponse } from 'next/og';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const alt = 'Mohamed Amine Moumen — Portfolio';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background:
            'linear-gradient(135deg, #1a1008 0%, #0c0c0c 60%, #0c0c0c 100%)',
          color: '#e0a96d',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 30,
            color: '#c07b3e',
            fontWeight: 700,
            marginBottom: 24,
          }}
        >
          {'</ Portfolio />'}
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: '#f5f0e8',
            lineHeight: 1.1,
          }}
        >
          Mohamed Amine Moumen
        </div>
        <div style={{ fontSize: 40, marginTop: 16, color: '#e0a96d' }}>
          {t('jobTitle')}
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 12,
            background: '#c07b3e',
          }}
        />
      </div>
    ),
    { ...size },
  );
}
