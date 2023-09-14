/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // add a rule to handle the canvas.node binary module
    config.module.rules.push({ test: /\.node$/, use: "raw-loader" });

    // Exclude canvas from beging processed by Next.js in the browser
    if (!isServer) config.externals.push("canvas");
    return config;
  },
};

module.exports = nextConfig;
