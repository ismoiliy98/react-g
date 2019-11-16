const path = require('path')

module.exports = {
  ROOT: path.resolve(__dirname, '../'),
  OUTPUT_PATH: path.resolve(__dirname, '../', 'build'),
  ENTRY_PATH: path.resolve(__dirname, '../', 'src/main.jsx'),
  TEMPLATE_PATH: path.resolve(__dirname, '../', 'src/index.html'),
  ASSETS_PATH: path.resolve(__dirname, '../', 'src/assets/'),
  IMAGES_FOLDER: 'img',
  FONTS_FOLDER: 'fonts',
  CSS_FOLDER: 'css',
  JS_FOLDER: 'js'
}
