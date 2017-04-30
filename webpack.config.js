var path = require('path');
var webpack = require('webpack');

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
    // publicPath: './',
    filename: '[name].js'
  },
  devtool: "cheap-module-eval-source-map",
  module: {
    loaders: [
      // { //添加到所有的loader之前
      //   test: require.resolve('jquery'),exclude: /node_modules/,loader: 'expose?jQuery!expose?$'
      // },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      // { test: /\.(png|jpe?g|eot|svg|ttf|gif|woff2?)$/,exclude: /node_modules/,loader: "file?name=assets/img/[hash][name].[ext]"},
      { test: /\.(png|jpe?g|eot|svg|ttf|gif|woff2?)$/,exclude: /node_modules/,loader: "url?limit=8192&name=assets/img/[hash][name].[ext]"},
      { test: /\.css$/, exclude: /node_modules/,loader: 'style!css' },
       { test: /\.less$/, exclude: /node_modules/,loader: 'style!css!less' }
      // { test: /\.less$/, exclude: /node_modules/,loader: ExtractTextPlugin.extract('style', 'css!less')}
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor','common.js'),
    new ExtractTextPlugin("[name]_[hash].css",{
      allChunks: true
    })
  ],
  resolve: {
      extensions: ['', '.js', '.jsx', '.less', '.scss', '.css']
  }
}