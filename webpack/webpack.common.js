const path = require('path');
const glob = require('glob');
const loaders = require('./loaders');
const plugins = require('./plugins');

const webpackDir = path.resolve(__dirname);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

function getEntries(pattern) {
  const entries = {};

  glob.sync(pattern).forEach((file) => {
    const filePath = file.split('src/components/')[1];
    const newfilePath = `js/${filePath.replace('.js', '')}`;
    entries[newfilePath] = file;
  });

  entries.css = path.resolve(webpackDir, 'styles.js');

  return entries;
}

module.exports = {
  stats: {
    errorDetails: true,
  },
  entry: getEntries(
    path.resolve(
      rootDir,
      'src/components/**/!(*.stories|*.component|*.min|*.test).js',
    ),
  ),
  module: {
    rules: [loaders.CSSLoader, loaders.JSLoader],
  },
  plugins: [
    plugins.MiniCssExtractPlugin,
    plugins.ProgressPlugin,
    plugins.CopyWebpackPlugin,
  ],
  output: {
    path: distDir,
    filename: '[name].js',
  },
};
