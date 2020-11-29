const { VueLoaderPlugin } = require('vue3-loader')

module.exports = {
  entry: {
    vue3: './src/vue3/index.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  resolveLoader: {
    alias: {
      'vue-loader': 'vue3-loader',
    },
  },
  resolve: {
    alias: {
      vue: 'vue3',
    },
  },
  plugins: [new VueLoaderPlugin()],
}
