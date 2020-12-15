const path = require('path')

module.exports = {
  entry: {
    store: './src/store.js',
    react: './src/react/index.js',
    preact: './src/preact/index.js',
    angularjs: './src/angularjs/index.js',
    angular: './src/angular/index.js',
    svelte: './src/svelte/index.js',
    riot: './src/riot/index.js',
    polymer: './src/polymer/index.js',
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
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: 'svelte-loader',
      },
      {
        test: /\.riot$/,
        exclude: /node_modules/,
        use: '@riotjs/webpack-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      store: 'global.store',
    },
  },
}
