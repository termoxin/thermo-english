module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          'styled-components': require.resolve('styled-components'),
        },
      },
    }
  },
}
