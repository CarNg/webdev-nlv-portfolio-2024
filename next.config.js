/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: "/abst",
        destination: "/",
        permanent: false,
      },
      {
        source: "/projects",
        destination: "/projects/all",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
