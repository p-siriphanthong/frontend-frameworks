const path = require('path')

module.exports = {
  entry: {
    store: './src/store.js',
    react: './src/react/index.js',
    preact: './src/preact/index.js',
    angularjs: './src/angularjs/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
  resolve: {
    alias: {
      store: 'global.store',
    },
  },
}
