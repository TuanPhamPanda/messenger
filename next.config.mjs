/** @type {import('next').NextConfig} */
const nextConfig = {
  //   experimental: {
  //     swcPlugins: [["next-superjson-plugin", {}]],
  //   },
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "res.cloundinary.com",
      "lh3.googleusercontent.com",
    ],
  },
};

export default nextConfig;
