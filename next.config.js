// eslint-disable-next-line
const path = require("path");

module.exports = {
  webpack: (config, { webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin(/.test./));
    config.resolve.alias = {
      ...config.resolve.alias,
      "@src": path.resolve(__dirname, "./src"),
      "@pages": path.resolve(__dirname, "./pages"),
      // Replace React by Preact, suited to work only for web
      // applications, in deployment. Since this repository is
      // suposed to work under Next.js premises, this approach joins
      // the framework and the library synergically.
      react: "preact/compat",
      "react-dom": "preact/compat",
      "react-render-to-string": "preact-render-to-string",
      "react-ssr-prepass": "preact-ssr-prepass",
    };
    return config;
  },
};
