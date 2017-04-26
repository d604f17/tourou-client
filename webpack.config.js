const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  {
    entry: './src/client/main.js',
    output: {
      path: path.join(__dirname, 'dist/client'),
      filename: 'main.js',
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            presets: ['stage-0', 'es2015', 'react'],
          },
        },
        {
          test: /\.s?css$/,
          loaders: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'file-loader?name=[path][name].[hash].[ext]',
        },
      ],
    },
    plugins: [
      new HTMLWebpackPlugin({
        filename: 'index.html',
        template: './src/client/main.html',
        inject: 'body',
        minify: {
          collapseWhitespace: true
        },
      }),
    ],
  },
  {
    entry: './src/server/main.js',
    output: {
      path: path.join(__dirname, 'dist/server'),
      filename: 'main.js',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            presets: ['stage-0', 'es2015'],
          },
        },
      ],
    },
  },
];