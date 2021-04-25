module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    const newWebpackConfig = {
      ...config,
      resolve: {
        ...config.resolve,
        fallback: { ...config.resolve.fallback, assert: false },
      },
    };

    /**
     * @todo remove as soon as it is fixed offically
     * @description this fix is for storybook bug
     */
    delete newWebpackConfig.module.rules[0].include;

    return newWebpackConfig;
  },
};
