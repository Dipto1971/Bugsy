/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async headers() {
    return [
      {
        source: "/:path*", // Apply to all paths
        headers: [{ key: "referrer-policy", value: "no-referrer" }], // Set the referrer-policy header
      },
    ];
  },
};

module.exports = nextConfig;

module.exports = nextConfig;
