import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Serve localized Romanian URL slugs while internally routing to the
  // generic folder names used by the App Router.
  async rewrites() {
    return [
      { source: "/ro/cronologie", destination: "/ro/timeline" },
      { source: "/ro/metoda", destination: "/ro/about" },
      { source: "/en/method", destination: "/en/about" },
    ];
  },

  // Permanently redirect the generic URL to the localized one so search
  // engines and existing links land on the canonical address.
  async redirects() {
    return [
      {
        source: "/ro/timeline",
        destination: "/ro/cronologie",
        permanent: true,
      },
      {
        source: "/ro/about",
        destination: "/ro/metoda",
        permanent: true,
      },
      {
        source: "/en/about",
        destination: "/en/method",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

