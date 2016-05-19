var path = require('path');
var webpack = require('webpack');
var plugins = [];
var env = process.env.NODE_ENV;
var containerPath = path.resolve('.');

var config = {
	entry: './src/index.js',
	devtool: 'source-map',
	output: {
		path: path.resolve(containerPath,'dist/'),
		filename: 'kodo.js',
		library: 'Kodo',
		libraryTarget: 'umd'
	},
	module:{
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
          presets: ['react','es2015']
        }
			}
		]
	},
	externals: [
		{
			'react': {
				root: 'React',
				commonjs2: 'react',
				commonjs: 'react'
			}
		},
		{
			'react-dom': {
				root: 'ReactDOM',
				commonjs2: 'react-dom',
				commonjs: 'react-dom'
			}
		}
	],
	extensions: ['', '.js', '.css', '.scss', '.jade', '.png', '.jpg'],
	plugins:plugins
};

module.exports = config;

if (env === 'production') {
	config.plugins.push(new webpack.DefinePlugin({
		'process.env': {
			'NODE_ENV': JSON.stringify(env)
		}
	}));
	config.devtool = 'eval-source-map';
	config.output.filename = 'kodo-min.js';
}
