const webpack = require('webpack');
const path = require('path');
// eslint-disable-next-line no-underscore-dangle
const _MiniCssExtractPlugin = require('mini-css-extract-plugin');
// eslint-disable-next-line no-underscore-dangle
const _CopyWebpackPlugin = require('copy-webpack-plugin');

const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
  filename: 'css/styles.css',
  chunkFilename: '[id].css',
});

const CopyWebpackPlugin = new _CopyWebpackPlugin({
  patterns: [
    // Copy USWDS fonts directory to dist/fonts.
    {
      from: path.resolve(
        __dirname,
        '../',
        'node_modules',
        'uswds',
        'dist',
        'fonts',
      ),
      to: path.resolve(__dirname, '../', 'dist', 'fonts'),
    },
    // Copy USWDS images directory to dist/img.
    {
      from: path.resolve(
        __dirname,
        '../',
        'node_modules',
        'uswds',
        'dist',
        'img',
      ),
      to: path.resolve(__dirname, '../', 'dist', 'img'),
    },
  ],
});

const ProgressPlugin = new webpack.ProgressPlugin();

module.exports = {
  ProgressPlugin,
  MiniCssExtractPlugin,
  CopyWebpackPlugin,
};
