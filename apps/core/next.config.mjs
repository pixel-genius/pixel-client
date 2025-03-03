/** @type {import('next').NextConfig} */

// https://s3-alpha-sig.figma.com/img/ce79/f737/ea54458a8146c4935
//https://images.unsplash.com/photo-1730292422804-5bbb2bd2d3f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
//  config src image
const nextConfig = {
  transpilePackages: ["@repo/ui"],
  images: {
    domains: ["images.unsplash.com"],
  },
  output: "standalone",
};

export default nextConfig;
