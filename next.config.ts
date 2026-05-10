import { build } from "next/build";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for Vercel deployment
  poweredByHeader: false,
  
  // Prisma needs to be bundled for serverless
  serverExternalPackages: [],
  
  // Ensure Prisma client is generated before build
  experimental: {
    buildMode: "default",
  },
};

export default nextConfig;
