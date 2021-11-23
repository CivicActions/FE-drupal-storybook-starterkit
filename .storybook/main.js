module.exports = {
  core: {
    builder: 'webpack5',
  },
  "stories": [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.js",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-postcss',
  ]
}