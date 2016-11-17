var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('./css/[name]_[hash:8].css');
const isProduction = process.env.NODE_ENV === 'production'; // 是否是
const publicPath = isProduction? './' : 'http://127.0.0.1:3000/';

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: publicPath,
    filename: 'build_[hash:8].js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.vue$/,
        loader: 'vue',
        options: {
          js: 'babel',
          css: ExtractTextPlugin.extract("css"),
          sass: ExtractTextPlugin.extract("css!sass")
        }
      },
      { test: /\.scss$/i, loader: extractCSS.extract(['css','sass']) },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=4192&name=images/[name]_[hash:8].[ext]'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue'
    }
  },
  devServer: {
    historyApiFallback:true,
    hot:true,
    inline:true,
    progress:true,
    proxy: {
      '*': {
        target: 'http://127.0.0.1:9090',
        secure: false
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/index.html"
    }),
    extractCSS
  ]
}

if (isProduction) {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
} else {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ])
}
