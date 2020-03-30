const webpackMerge = require('webpack-merge')
const base = require('./webpack/webpack.base')

const envs = {
  development: 'dev',
  production: 'prod',
  test: 'dev'
}

const env = envs[process.env.NODE_ENV || 'development']
const envConfig = require(`./webpack/webpack.${env}.js`)

module.exports = webpackMerge(base, envConfig)
