import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false, // hide the "N" badge shown in dev mode
  agentRules: false,
};

export default nextConfig;
