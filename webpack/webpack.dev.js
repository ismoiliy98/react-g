const PATHS = require('./paths')
const webpack = require('webpack')

const output = {
  filename: 'bundle.js',
  path: PATHS.OUTPUT_PATH,
  chunkFilename: '[id].js',
  chunkLoadTimeout: 30000
}

const rules = [
  {
    test: /\.s?css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          localsConvention: 'camelCase',
          modules: {
            localIdentName: '[local]_[hash:base64:5]'
          }
        }
      },
      'postcss-loader',
      'sass-loader'
    ]
  },
  {
    test: /\.(png|jpe?g|gif|svg)$/,
    exclude: /node_modules/,
    loader: 'file-loader'
  }
]

const devServer = {
  contentBase: PATHS.OUTPUT_PATH,
  compress: true,
  port: 7777,
  hot: true,
  open: true,
  overlay: {
    warnings: true,
    errors: true
  }
}

module.exports = {
  mode: 'development',
  output,
  module: {
    rules
  },
  devServer,
  plugins: [new webpack.HotModuleReplacementPlugin()]
}
