const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const base = require('./webpack.config.base')

module.exports = {
   
  mode:"production",//"production",
   
  devServer: {
    contentBase: './dist',
  },
  plugins: [ 
    ...base.plugins,
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: '[name].[contenthash].css',
    chunkFilename: '[id].[contenthash].css',
  }),],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: (resourcePath, context) => {
                  return path.relative(path.dirname(resourcePath), context) + '/';
                },
              },
            },
            'css-loader',
          ],
        //use: [MiniCssExtractPlugin.loader, 'css-loader'],
      } 
    ],
  },
};