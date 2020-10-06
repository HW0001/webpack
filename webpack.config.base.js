const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin({
    title: '今天天气不错',
    filename: 'index.html',
    template:"src/assets/index.html"
  })]
};