import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimisations pour réduire la consommation énergétique
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Désactiver les fonctionnalités non essentielles
  images: {
    unoptimized: false,
  },
  // Optimiser la compilation
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
