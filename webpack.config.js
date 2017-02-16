var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry:  {
    app: path.join(__dirname, 'src/main.js')
    // ,style: path.join(__dirname, 'src/less/main.less')
  },
  output: {
    path: path.join(__dirname, 'build'),
    // publicPath: '/assets/',
    filename: '[name].min.js'
  },
  devtool: "eval-source-map",
  module: {
    loaders: [
      { //添加到所有的loader之前
        test: require.resolve('jquery'),exclude: /node_modules/,loader: 'expose?jQuery!expose?$'
      },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      { test: /\.css$/, exclude: /node_modules/,loader: 'style!css' },
      { test: /\.(png|jpe?g|eot|svg|ttf|gif|woff2?)$/,exclude: /node_modules/,loader: "file?name=assets/img_build/[hash][name].[ext]"},
      { test: /\.less$/, exclude: /node_modules/,loader: 'style!css!less' }
    ]
  },
  plugins: [

  ]
}