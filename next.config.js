const path = require("path");

module.exports = {
  webpack(config, { dev }) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@src": path.resolve(__dirname, "./src"),
      "@pages": path.resolve(__dirname, "./pages"),
    };
    return config;
  }
};
