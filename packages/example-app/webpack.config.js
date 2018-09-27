const path = require('path')
let autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: ['babel-polyfill', './src/index.jsx'],
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/},
      {test: /\.(png|woff|woff2|eot|ttf|otf|svg)$/, loader: 'file-loader?name=fonts/[name].[ext]'},
      {
        test: /\.s?css$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              modules: true
            }
          },
          ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: 'static/index.html'}),
  ],
  devServer: {
    historyApiFallback: true,
  },
}