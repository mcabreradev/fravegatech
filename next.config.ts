import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'github.com', 'avatar-management--avatars.us-west-2.prod.public.atl-paas.net'],
  },
  swcMinify: true,
};

export default nextConfig;
