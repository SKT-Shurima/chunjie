const { assetsPath, resolve } = require('./../utils');
const path = require('path');

function getUrlLoader(loader, assetsPrefix) {
  return {
    loader,
    options: {
      limit: 10000,
      name: assetsPath(`${assetsPrefix}/[name].[hash:7].[ext]`)
    }
  };
}
module.exports = [
  {
    test: /\.(png|jpe?g|gif)(\?.*)?$/,
    use: [getUrlLoader('url-loader', 'img')]
  },
  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    use: [getUrlLoader('url-loader', 'fonts')]
  },
  {
    test: /\.svg$/,
    use: [getUrlLoader('file-loader', 'img')],
    include: [path.resolve(__dirname, '../../src/assets/images/')]
  },
  {
    test: /\.svg$/,
    include: [path.resolve(__dirname, '../../src/assets/icons/')],
    use: [
      {
        loader: '@svgr/webpack'
      }
    ]
  }
];
