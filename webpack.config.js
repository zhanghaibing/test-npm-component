const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const config = {
  mode: 'development',
  entry: {
    // app: './src/app.js',
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            // options: {
            //   modules: true,
            // },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '../dist/img/',
              outputPath: 'img/',
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
          },
        ],
      },
      // { test: /\.ts$/, use: 'ts-loader' },
    ],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = () => {
  return config;
}
