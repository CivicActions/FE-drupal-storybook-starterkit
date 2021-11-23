const { resolve } = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = async ({ config }) => {

  config.module.rules.push({
    test: /\.twig$/,
    use: "twigjs-loader",
    resolve: {
      alias: {
        '@atoms': resolve(__dirname, '../', 'components/atoms'),
        '@molecules': resolve(__dirname, '../', 'components/molecules'),
        '@organisms': resolve(__dirname, '../', 'components/organisms'),
        '@templates': resolve(__dirname, '../', 'components/templates'),
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
      context: resolve(__dirname, '../', 'components'),
      files: '**/*.js',
      failOnError: false,
    }),
  );

  return config;
};
