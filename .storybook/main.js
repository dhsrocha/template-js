// eslint-disable-next-line
const resolve = (path) => require("path").resolve(__dirname, "..", path);

module.exports = {
  stories: ["../src/**/stories.tsx"],
  addons: [
    {
      name: "@storybook/preset-typescript",
      options: {
        transpileManager: true,
        tsLoaderOptions: { configFile: resolve("tsconfig.json") },
      },
    },
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    "@storybook/addon-viewport",
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-knobs",
    "@storybook/addon-jest",
    {
      name: "@storybook/addon-storysource",
      options: {
        rule: {
          test: [/stories\.tsx?$/],
          include: [resolve("src")],
        },
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
      exclude: /node_modules/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: ["next/babel"],
        plugins: [
          "@babel/plugin-transform-react-jsx",
          "babel-plugin-react-require",
        ],
      },
    });

    return config;
  },
};
