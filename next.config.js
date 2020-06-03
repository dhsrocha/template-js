// eslint-disable-next-line
const { resolve } = require("path");

module.exports = {
  webpack: (config, { webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin(/(.test.|stories)/));
    config.resolve.alias = {
      ...config.resolve.alias,
      // Replace React by Preact, suited to work only for web
      // applications, in deployment. Since this repository is
      // suposed to work under Next.js premises, this approach joins
      // the framework and the library synergically.
      ...this.aliases,
    };
    return config;
  },
  // Externalized Webpack configuration in order to let other vicinal
  // systems present in this repository, like Storybook.js, make use of it
  aliases: {
    react: "preact/compat",
    "react-dom": "preact/compat",
    "react-render-to-string": "preact-render-to-string",
    "react-ssr-prepass": "preact-ssr-prepass",
    "@src": resolve(__dirname, "./src"),
    "@pages": resolve(__dirname, "./pages"),
  },
};
