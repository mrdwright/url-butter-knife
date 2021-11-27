
const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {

  entry: './src/entry.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'url-knife.bundle.js',
    libraryTarget: 'commonjs2' ,
  },

  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }
    ]
  },

  mode: 'production',

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },

};