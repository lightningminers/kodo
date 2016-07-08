var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var env = process.env.NODE_ENV;
var getEntry = require('./getEntry');
var rmdir = require('./rmdir');
var alias = require('./alias');
var ROOTPATH = path.resolve('.');

var plugins = [];
var CSS_NAME = '';
var FILE_NAME = '';
var LIBS = '';

if (env === 'EXAMPDEV') {
  CSS_NAME = '[name].css';
  FILE_NAME = '[name].js';
  LIBS = '[name].js';
}

if (env === 'EXAMPPRODUCT') {
  CSS_NAME = '[name]-[hash].css';
  FILE_NAME = '[name]-[hash].js';
  LIBS = '[name]-[hash].js';
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress:{
      warnings:false
    }
  }));
  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }));
  console.log('清理www目录中....');
  rmDir('./app/www');
  console.log('清理www目录成功....');
}
console.log(ROOTPATH)
//配置入口文件
var entrys = getEntry('./examples/src/*.js');
entrys.commons = ['react','react-dom','react-router','redux'];

console.log(entrys);

// 配置插件
var extractLESS = new ExtractTextPlugin(CSS_NAME);
plugins.push(extractLESS);
plugins.push(new webpack.optimize.CommonsChunkPlugin('commons',LIBS));

// 配置页面
var conf = {
  filename: 'index.html',
  template: './examples/web/index.jade',
  inject: true,
  title: 'kodo UI',
  minify: {
    removeComments: true,
    collapseWhitespace: false
  },
  chunks: Object.keys(entrys),
  hash: false
}
console.log(conf);
plugins.push(new HtmlWebpackPlugin(conf));

//webpack配置
var config = {
  entry: entrys,
  output: {
    path: path.resolve(ROOTPATH,'./examples/www'),
    publicPath: './',
    filename: FILE_NAME
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react','es2015']
        }
      },
      {
        test: /\.css$/,
        loader: extractLESS.extract(['css']),
        exclude: /(node_modules)/
      },
      {
        test: /\.jade$/,
        loader: 'jade-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8192&name=images/[name]-[hash].[ext]'
      }
    ]
  },
  plugins: plugins,
  resolve: {
    alias: alias,
    extensions: ['', '.js', '.css', '.scss', '.jade', '.png', '.jpg']
  },
  externals: {

  }
};

module.exports = config;
