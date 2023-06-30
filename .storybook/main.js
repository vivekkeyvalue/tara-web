const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    '@storybook/addon-styling'
  ],
  framework: '@storybook/react-webpack5',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  docs: {
    autodocs: 'tag'
  },
  staticDirs: ['../public'],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@constants': path.resolve(__dirname, '../src/constants'),
      '@contexts': path.resolve(__dirname, '../src/contexts'),
      '@utils': path.resolve(__dirname, '../src/utils'),
      '@hooks': path.resolve(__dirname, '../src/hooks'),
      '@i18n': path.resolve(__dirname, '../src/i18n'),
      '@types': path.resolve(__dirname, '../src/types'),
      '@features': path.resolve(__dirname, '../src/features'),
      '@config': path.resolve(__dirname, '../src/config'),
      '@core': path.resolve(__dirname, '../src/core'),
      '@layouts': path.resolve(__dirname, '../src/layouts')
    };

    return config;
  }
};
