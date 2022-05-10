const { resolve } = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = async ({ config }) => {

  config.module.rules.push({
    test: /\.twig$/,
    use: "twigjs-loader",
    resolve: {
      alias: {
        '@components': resolve(__dirname, '../', 'src/components'),
        '@uswds': resolve(__dirname, '../', 'node_modules/uswds/src/components'),
      }
    }
  });

  // SCSS
  config.module.rules.push({
    test: /\.s[ac]ss$/i,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
        },
      },
    ],
  });

  config.plugins.push(
    new ESLintPlugin({
      context: resolve(__dirname, '../', 'src'),
      files: '**/*.js',
      failOnError: false,
    }),
  );

  return config;
};
