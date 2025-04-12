import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
const imageDomains = process.env.NEXT_PUBLIC_IMAGE_DOMAINS
  ? process.env.NEXT_PUBLIC_IMAGE_DOMAINS.split(',')
  : ['localhost'];

const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: imageDomains,
  },
};

export default withNextIntl(nextConfig);
