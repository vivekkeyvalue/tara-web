module.exports = ({ config }) => {
  // Add SVGR Loader
  // ========================================================
  // Remove svg rules from existing webpack rule
  let loaders = config.module.rules[config.module.rules.length - 1].oneOf;
  loaders?.splice(loaders.length - 1, 0, {
    test: /\.svg$/,
    use: [
      {
        loader: require.resolve('@svgr/webpack'),
        options: {
          prettier: false,
          svgo: false,
          svgoConfig: {
            plugins: [{ removeViewBox: false }]
          },
          titleProp: true,
          ref: true
        }
      },
      {
        loader: require.resolve('file-loader'),
        options: {
          name: 'static/media/[name].[hash].[ext]'
        }
      }
    ]

    // issuer: {
    //   and: [/\.(ts|tsx|js|jsx|md|mdx)$/]
    // }
  });

  return config;
};
