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

  // Disable styled-jsx during server-side rendering to avoid useContext issues
  compiler: {
    styledComponents: true, // Enable styled-components instead
  },

  serverExternalPackages: ["styled-jsx"], // Push styled-jsx to client side only
};

export default withBundleAnalyzer(nextConfig);
