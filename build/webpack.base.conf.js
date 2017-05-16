var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var webpack = require("webpack")

// 给出正确的绝对路径
function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    // 配置webpack编译入口
    entry: {
        app: './src/main.js'
    },
    // 配置webpack输出路径和命名规则
    output: {
        // webpack输出的目标文件夹路径（例如：/dist）
        path: config.build.assetsRoot,
        // webpack输出bundle文件命名格式
        filename: '[name].js',
        // webpack编译输出的发布路径
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    // 配置模块resolve的规则
    resolve: {
        extensions: ['.js', '.vue', '.json', '.scss'],
        alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        'libs': resolve('src/libs')
        }
    },
    module: {
        rules: [
            {
                // 对src和test文件夹下的.js和.vue文件使用eslint-loader
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [resolve('src'), resolve('test')],
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            },
            {
                // 对所有.vue文件使用vue-loader
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                // 对src和test文件夹下的.js文件使用babel-loader
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },
            {
                // 对图片资源文件使用url-loader，query.name指明了输出的命名规则
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                // 对字体资源文件使用url-loader，query.name指明了输出的命名规则
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jquery: 'jquery',
            'window.jQuery': 'jquery',
            jQuery: 'jquery'
        })
    ]
}
