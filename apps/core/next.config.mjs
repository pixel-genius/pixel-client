/** @type {import('next').NextConfig} */

import bundleAnalyzer from "@next/bundle-analyzer";

// https://s3-alpha-sig.figma.com/img/ce79/f737/ea54458a8146c4935
//https://images.unsplash.com/photo-1730292422804-5bbb2bd2d3f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
// https://github.com/shadcn.png
// https://img1.wsimg.com/cdnassets/transform/777d2c5b-ef8d-45b1-96be-3e898a8dc94a/Mrq
//  config src image

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui"],
  images: {
    domains: [
      "images.unsplash.com",
      "github.com/shadcn.png",
      "images.ui8.net",
      "img1.wsimg.com",
    ],
  },
  output: "standalone",
  swcMinify: true,

  // Disable styled-jsx during server-side rendering to avoid useContext issues
  compiler: {
    styledComponents: true, // Enable styled-components instead
    // Remove console calls in production to reduce client bundle size
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },

  serverExternalPackages: ["styled-jsx"], // Push styled-jsx to client side only
  experimental: {
    // Tree-shake named imports from these packages into per-module imports
    // to avoid pulling in entire libraries
    optimizePackageImports: ["lucide-react", "recharts", "framer-motion"],
  },
};

/** @type {import('next').NextConfig} */
const config = withBundleAnalyzer(nextConfig);

export default config;
