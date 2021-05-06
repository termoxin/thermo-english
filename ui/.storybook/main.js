module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    const newWebpackConfig = {
      ...config,
      resolve: {
        ...config.resolve,
        fallback: { ...config.resolve.fallback, assert: false },
      },
    }

    return newWebpackConfig
  },
}
