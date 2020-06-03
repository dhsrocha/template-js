// eslint-disable-next-line
const { resolve } = require("path");

module.exports = {
  stories: ["../src/**/stories.tsx"],
  addons: [
    {
      name: "@storybook/preset-typescript",
      options: {
        transpileManager: true,
        tsLoaderOptions: { configFile: resolve(__dirname, "../tsconfig.json") },
        include: [resolve(__dirname, "../src")],
      },
    },
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...require("../next.config").aliases,
    };

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [
          ["@babel/preset-react", { flow: false, typescript: true }],
          ["@babel/preset-typescript", {}],
          ["@babel/preset-env", {}],
        ],
        plugins: [
          "@babel/plugin-transform-react-jsx",
          "babel-plugin-react-require",
        ],
      },
    });

    return { ...config };
  },
};
