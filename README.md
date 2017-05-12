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
    整理中...
    ```

* 在使用v-for时，记得写:key，利于代码性能，不加会有个警告提示，

* 关于数据请求使用的是[vue-resource](https://github.com/pagekit/vue-resource)在main.js主文件里引入vue-resource并注入进vue并配置相关的参数，代码如下:
    ``` bash
    # // 引入vue-resource
    import VueResource from 'vue-resource'

    # // 注入VueResource到vue中
    Vue.use(VueResource)
    
    # // 配置请求，解决请求获取不到参数问题
    Vue.http.options.emulateJSON = true
    # // http拦截器，可以在这里做一些拦截操作（比如是否登录，token是否过期等等）
    Vue.http.interceptors.push((req, next) => {
        // 请求发送前的处理逻辑
        req.method = 'POST'
        
        next((res) => {
            // 请求发送后的处理逻辑
            // 根据请求的状态，response参数会返回给successCallback或errorCallback
        })
    })

    # // 在.vue文件中get请求数据
    this.$http.get('/someUrl').then(response => {
        // 数据处理操作
        this.someData = response.body;
    }, response => {
        // 错误请求回调
    })
    ```

---
For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
