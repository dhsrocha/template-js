// eslint-disable-next-line
const path = require("path");

module.exports = {
  webpack: (config, { webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin(/.test./));
    config.resolve.alias = {
      ...config.resolve.alias,
      "@src": path.resolve(__dirname, "./src"),
      "@pages": path.resolve(__dirname, "./pages"),
    };
    return config;
  },
};
