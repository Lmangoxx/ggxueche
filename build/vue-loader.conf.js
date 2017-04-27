var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  // 生成cssLoaders加载器,用于加载.vue文件中的样式
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  // 编译css之后自动添加前缀
  postcss: [
    require('autoprefixer')({
			browsers: ['last 10 versions']
    })
  ]
}
