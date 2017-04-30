var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin'); 
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry:  {
    app: path.join(__dirname, 'src/main.js'),
    vendor:[
      'react',
      'react-dom',
      'react-router'
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: './',
    filename: '[name].js'
  },
  devtool: "cheap-module-source-map",
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      { test: /\.css$/, exclude: /node_modules/,loader: 'style!css' },
      { test: /\.(png|jpe?g|eot|svg|ttf|gif|woff2?)$/,exclude: /node_modules/,loader: "url?limit=8192&name=assets/img/[hash][name].[ext]"},
      // { test: /\.less$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style', ['css', 'postcss', 'less'])},
      { test: /\.less$/, exclude: /node_modules/,loader: ExtractTextPlugin.extract('style', 'css!less')}
    ]
  },
  resolve: {
      extensions: ['', '.js', '.jsx', '.less', '.scss', '.css']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor','common.js'),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
    }),
    new ExtractTextPlugin("style/[name]_[hash].css",{
      allChunks: true
    }),
    new HtmlWebpackPlugin({
        template: './build.html',
        filename: '_index.html',
        hash: true
    })
  ]
}