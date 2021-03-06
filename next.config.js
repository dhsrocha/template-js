// eslint-disable-next-line
const { resolve } = require("path");

module.exports = {
  webpack: (config, { webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin(/(.test.|stories)/));
    config.resolve.alias = {
      ...config.resolve.alias,
      // Replace React by Preact, suited to work only for web applications,
      // in deployment. Since this repository is supposed to work under
      // Next.js' premises, this approach wraps the former and latter up
      // synergically.
      ...this.aliases,
    };
    return config;
  },
  // Externalized Webpack configuration in order to let other vicinal
  // systems present in this repository, like Storybook.js, make use of it.
  aliases: {
    react: "preact/compat",
    "react-dom": "preact/compat",
    "react-render-to-string": "preact-render-to-string",
    "react-ssr-prepass": "preact-ssr-prepass",
    "@src": resolve(__dirname, "./src"),
    "@pages": resolve(__dirname, "./pages"),
  },
  // https://github.com/vercel/next.js/issues/7322#issuecomment-643710701
  plugins: [
    [
      "babel-plugin-styled-components",
      { ssr: true, displayName: true, preprocess: false },
    ],
  ],
  env: {
    development: {
      plugins: [
        [
          "babel-plugin-styled-components",
          { ssr: true, displayName: true, preprocess: false },
        ],
      ],
      presets: ["next/babel"],
    },
    production: {
      plugins: [
        [
          "babel-plugin-styled-components",
          { ssr: true, displayName: true, preprocess: false },
        ],
      ],
      presets: ["next/babel"],
    },
  },
};
