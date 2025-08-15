import type { NextConfig } from "next";
import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ hostname: "*" }],
  },
};

export default withMDX(nextConfig);
