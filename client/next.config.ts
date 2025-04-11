import type { NextConfig } from "next";
const imageDomains = process.env.NEXT_PUBLIC_IMAGE_DOMAINS
  ? process.env.NEXT_PUBLIC_IMAGE_DOMAINS.split(",")
  : ["localhost"];

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: imageDomains,
  },
};

export default nextConfig;
