const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const openBrowser = require('react-dev-utils/openBrowser');
const moment = require('moment');
const time = moment().format();

const config = require('./config');
const constants = require('./constants');
const styleRules = require('./rules/styleRules');
const jsRules = require('./rules/jsRules');
const fileRules = require('./rules/fileRules');
const plugins = require('./plugins');
const { assetsPath, resolve } = require('./utils');
const optimization = require('./optimization');
require('./cleanup-folder');
const conf = {
  mode: process.env.NODE_ENV,
  entry: { app: ['./src/index.tsx'] },
  output: {
    path: config.assetsRoot,
    filename:
      constants.APP_ENV === 'dev'
        ? '[name].js'
        : assetsPath(`js/[name].[chunkhash:7]${time}.js`),
    chunkFilename:
      constants.APP_ENV === 'dev'
        ? '[name].js'
        : assetsPath(`js/[name].[id].[chunkhash:7]${time}.js`),
    publicPath: config.assetsPublicPath,
    pathinfo: false
  },
  resolve: {
    extensions: constants.FILE_EXTENSIONS,
    plugins: [
      new TsconfigPathsPlugin({
        configFile: resolve('tsconfig.webpack.json'),
        extensions: constants.FILE_EXTENSIONS
      })
    ]
  },
  module: {
    rules: [...styleRules, ...jsRules, ...fileRules]
  },
  plugins,
  optimization,
  stats: {
    all: false,
    errors: true,
    errorDetails: true,
    warnings: true,
    timings: true,
    // 添加构建日期和构建时间信息
    builtAt: true
  },
  devtool: config.sourceMap
};

if (process.env.NODE_ENV === 'development') {
  conf.devServer = {
    port: config.devPort,
    hot: true,
    disableHostCheck: true,
    host: '0.0.0.0',
    after() {
      openBrowser(`http://localhost:${config.devPort}`);
    },
    proxy: {
      // 'api/dam': {
      '/project/dam/supngin/api/dam': {
        // 对象建模模块
        // target: 'http://192.168.11.182:18090/',
        target: 'http://dt.245.dev.supos.net/',
        // pathRewrite: {'^/api' : ''},
        changeOrigin: true, // target是域名的话，需要这个参数，
        secure: false // 设置支持https协议的代理
      },
      '/project/dam/supngin/api/image': {
        //张京京服务器地址
        target: 'http://dt.245.dev.supos.net/',
        // pathRewrite: {'^/api' : ''},
        changeOrigin: true, // target是域名的话，需要这个参数，
        secure: false // 设置支持https协议的代理
      },
      '/project/dam/supngin/api/config': {
        //张京京服务器地址
        target: 'http://dt.245.dev.supos.net/',
        // pathRewrite: {'^/api' : ''},
        changeOrigin: true, // target是域名的话，需要这个参数，
        secure: false // 设置支持https协议的代理
      },
      '/project/dam/supngin/api': {
        // 其他默认
        target: 'http://192.168.12.43:9999/',
        changeOrigin: true, // target是域名的话，需要这个参数，
        secure: false // 设置支持https协议的代理
      }
    }
  };
}

module.exports = conf;
