/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-07-10 11:21:09
 * @LastEditors: liang
 * @LastEditTime: 2020-07-22 17:08:13
 */
const { merge } = require('webpack-merge');
const paths = require('./paths');
const common = require('./webpack.common.js');
module.exports = merge(common('production'), {
  output: {
    path: paths.appBuild,
    filename: 'static/js/bundle.js',
    chunkFilename: 'static/js/[name].[contenthash:8].js',
    publicPath: paths.publicUrlOrPath //留白，则可以直接打开打包后的index.html文件
  },
  // devtool: 'source-map',
  devtool: false,
  optimization: {
    minimize: true
  }
});
