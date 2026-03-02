/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects() {
    return [
      {
        source: "/404",
        destination: "/",
        permanent: true,
      },
    ];
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
