# ggxueche

> 基于vue+vue-router+vuex构建的驾校服务单页面项目

## 项目启动
``` bash
# 安装依赖
npm install

# 启动本地服务：localhost:8080
npm run dev

# 生成线上版本
npm run build
```
## 技术栈(基于vue-cli)
vue2 + vuex + vue-router + vue-resource + webpack + ES6/7 + sass(rem) + flex

## vue常用的组件汇总:
[awesome-vue](https://github.com/vuejs/awesome-vue)

## 开发中遇到的问题汇总：
* 首先是eslint缩进规则的问题，很多人的缩进习惯不一样，有的人喜欢用space，有的人喜欢用tab，vue-cli默认的缩进规则是2个space，本人习惯使用tab，在项目开发的时候eslint报了大量的错误，很让人蛋疼，这里在本项目中把缩进规则给关闭了，在根目录下找到eslintrc.js文件，在rules里修改indent规则，具体rules文档请参考[eslint rules](http://eslint.org/docs/rules/)

* IOS下a标签的:active失效问题处理:
    ``` bash
    <body ontouchstart="">
        # // 在body上添加ontouchstart即可
    </body>
    ```

* jquery引入问题，虽然vue很强大，但是还是避免不了要使用到jquery，下面是jquery引入方法:
    ``` bash
    # // 首先npm jquery
    npm install jquery --save
    # // 在build/webpack.base.conf.js的plugins里添加：
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jquery: 'jquery',
            'window.jQuery': 'jquery',
            jQuery: 'jquery'
        })
    ]
    # // 在.vue文件里使用jquery
    import $ from 'jquery'
    mounted() {
        $('body').hide()
    }
    ```

* 在使用v-for时，记得写:key，利于代码性能，不加会有个警告提示

* 关于数据请求使用的是[vue-resource](https://github.com/pagekit/vue-resource)在main.js主文件里引入vue-resource并注入进vue并配置相关的参数，代码如下:
    ``` bash
    # // 引入vue-resource
    import VueResource from 'vue-resource'

    # // 注入VueResource到vue中
    Vue.use(VueResource)
    
    # // 配置请求，解决请求获取不到参数问题
    Vue.http.options.emulateJSON = true
    # // http拦截器，可以在这里做一些拦截操作（比如是否登录，token是否过期等等）
    Vue.http.interceptors.push( (req, next) => {
        # // 请求发送前的处理逻辑
        req.method = 'POST'

        next( (res) => {
            # // 请求发送后的处理逻辑
            # // 根据请求的状态，response参数会返回给successCallback或errorCallback
        })
    })

    # // 在.vue文件中get请求数据
    Vue.$http.get('/someUrl').then(response => {
        # // 数据处理操作
        this.someData = response.body
    }, error => {
        # // 错误请求回调
    })
    ```

## 项目布局

```
.
├── build                                       # // webpack配置文件
├── config                                      # // 项目打包路径
├── dist                                        # // 上线项目文件，放在服务器即可正常访问
├── src                                         # // 源码目录
│   ├── components                              # // 组件
│   │   ├── blocks                              # // 全局、公共组件
│   │   │   ├── consultation.vue                # // 客服咨询按钮组件
│   │   │   ├── footNav.vue                     # // 底部导航组件
│   │   │   ├── header.vue                      # // 头部组件
│   │   │   ├── loading.vue                     # // 页面加载数据的动画组件
│   │   │   ├── message.vue                     # // 信息提示组件
│   │   │   ├── stars.vue                       # // 评论的五颗星组件
│   │   ├── home.vue                            # // 主页（驾校报名） 
│   │   └── city.vue                            # // 城市页面  
│   ├── config                                  # // 公共配置
│   │   ├── index.js                            # // 全局配置（全局组件、指令、vue原型链函数等）
│   │   ├── lazyload.js                         # // 第三方插件配置文件（开发中）
│   │   └── rem.js                              # // px转换rem
│   ├── fonts                                   # // 字体文件
│   ├── images                                  # // 图片文件
│   ├── libs                                    # // 引用的第三方插件
│   │   ├── jquery                              # // jquery插件
│   │   └── vue                                 # // vue插件（第三方及自定义）
│   ├── router
│   │   └── router.js                           # // 路由配置
│   ├── store                                   # // vuex的状态管理（待完成）
│   └── style
│       ├── common.scss                         # // 公共样式文件
│       └── mixin.scss                          # // 样式配置文件
│   ├── App.vue                                 # // 页面入口组件
│   ├── main.js                                 # // 程序入口文件，加载各种公共组件
├── static                                      # // 静态资源文件
├── test                                        # // 测试案例文件
├── .eslintrc.js                                # // eslint配置文件（eslint的规则可以在这里配置）
├── .eslintignore                               # // eslint忽略检查（不想让eslint检查的文件可以在里面配置）
.
```

---
For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
