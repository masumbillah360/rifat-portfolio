/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
      },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
};

export default nextConfig;
