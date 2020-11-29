const { VueLoaderPlugin } = require('vue2-loader')

module.exports = {
  entry: {
    vue2: './src/vue2/index.js',
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
      'vue-loader': 'vue2-loader',
    },
  },
  resolve: {
    alias: {
      vue: 'vue2',
    },
  },
  plugins: [new VueLoaderPlugin()],
}
