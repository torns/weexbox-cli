const path = require('path')
const WebpackBar = require('webpackbar')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const config = require('./config')
const helper = require('./helper')
const vueLoaderConfig = require('./vue-loader.conf')
const utils = require('./utils')
const weexboxConfig = require(helper.projectPath(config.weexboxConfig))

const plugins = [
  new WebpackBar({
    name: 'WeexBox',
    profile: true
  }),
  new CleanWebpackPlugin(helper.projectPath(config.delpoyDir), {
    root: path.resolve('/'),
    verbose: true
  })
]

const weexConfig = {
  mode: 'none',
  entry: utils.getEntries(),
  output: {
    path: helper.projectPath(config.distDir),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        enforce: 'pre',
        include: [helper.projectPath(config.sourceDir)],
        loader: 'eslint-loader',
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: weexboxConfig.imagePublicPath,
              name: '[name]_[hash].[ext]',
              outputPath: config.staticDir
            }
          }
        ]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: config.excludeModuleReg
      },
      {
        test: /\.vue(\?[^?]+)?$/,
        use: [
          {
            loader: 'weex-loader',
            options: vueLoaderConfig({ useVue: false })
          }
        ],
        exclude: config.excludeModuleReg
      }
    ]
  },
  plugins,
  node: config.nodeConfiguration
}

module.exports = weexConfig