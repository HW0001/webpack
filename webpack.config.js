const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin'); 
const base = require('./webpack.config.base')

module.exports = {
   ...base,
  mode:"production",//"production",
  devServer: {
    contentBase: './dist',
  }, 
  module: {
    rules: [
        ...base.module.rules,
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      } 
    ],
  },
};