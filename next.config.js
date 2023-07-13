/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["apod.nasa.gov"],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "apod.nasa.gov",
        port: "",
        pathname: "/apod/image/**",
      },
    ],
  },
};

module.exports = nextConfig;
