const PATHS = require('./paths')
const webpack = require('webpack')
const dotenv = require('dotenv')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')

const resolveEnvKeys = () => {
  const envFiles = {
    development: PATHS.ROOT + '/.env.dev',
    production: PATHS.ROOT + '/.env.prod'
  }

  const envConfig = dotenv.config({
    path: envFiles[process.env.NODE_ENV || 'development']
  }).parsed

  const envKeys = Object.keys(envConfig).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(envConfig[next])
    return prev
  }, {})

  return envKeys
}

const resolve = {
  alias: {
    assets: PATHS.ASSETS_PATH,
    utils: PATHS.UTILS_PATH
  },
  modules: ['src', 'node_modules'],
  extensions: ['.js', '.jsx', '.json', '.scss', '.css', '*']
}

const rules = [
  {
    enforce: 'pre',
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'eslint-loader',
    options: {
      formatter: 'table',
      emitWarning: process.env.NODE_ENV !== 'production',
      failOnError: process.env.NODE_ENV === 'production'
    }
  },
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel-loader'
  },
  {
    test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          outputPath: PATHS.FONTS_FOLDER,
          name:
            process.env.NODE_ENV !== 'production'
              ? '[path][name].[ext]'
              : '[sha512:hash:base64:7].[ext]'
        }
      }
    ]
  }
]

const plugins = [
  new webpack.ProgressPlugin(),
  new webpack.DefinePlugin(resolveEnvKeys()),
  new HtmlWebpackPlugin({
    template: PATHS.TEMPLATE_PATH
  }),
  new ScriptExtHtmlWebpackPlugin({
    defaultAttribute: 'async'
  })
]

module.exports = {
  entry: PATHS.ENTRY_PATH,
  resolve,
  module: {
    rules
  },
  plugins
}
