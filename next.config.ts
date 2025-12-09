import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/cv",
  assetPrefix: "/cv/",

  // Optimisations pour réduire la consommation énergétique
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  // Désactiver les fonctionnalités non essentielles
  images: {
    unoptimized: true, // DOIT être true pour export statique
  },

  // Optimiser la compilation
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
