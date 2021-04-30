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

    const assetRule = newWebpackConfig.module.rules.find(({ test }) =>
      test.test('.svg'),
    )

    const assetLoader = {
      loader: assetRule.loader,
      options: assetRule.options || assetRule.query,
    }

    // Merge our rule with existing assetLoader rules
    newWebpackConfig.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack', assetLoader],
    })

    /**
     * @todo remove as soon as it is fixed offically
     * @description this fix is for storybook bug
     */
    delete newWebpackConfig.module.rules[0].include

    return newWebpackConfig
  },
}
