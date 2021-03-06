module.exports = {
  target: "serverless",
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });

    // Fixes packages that depend on fs/module module
    if (!isServer) {
      config.node = { fs: "empty", module: "empty" };
    }

    return config;
  },
};
