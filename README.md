# React start kit for mobx

这个项目是为了测试mobx的后台admin系统, 系统使用的是AntdUI. 包括的特性如下: 

- 热加载(react-hot-loader)
- 支持CSS Module(命名为xx.module.css)
- 支持css/less/sass/scss/styl/stylus样式
- 支持Antd主题修改
- esLint(standard-react)
- react-router v4, 包括懒加载
- build模式打包项目
- SPA模式, 不支持同构应用
- -测试部分未完成


## Contains

- [x] [React](https://facebook.github.io/react/) 15.6
- [x] [React Router](https://github.com/ReactTraining/react-router) 4.1
- [x] [Mobx](https://github.com/mobxjs/mobx)
- [x] [Mobx React](https://github.com/mobxjs/mobx-react)
- [x] [Mobx React Router](https://github.com/alisd23/mobx-react-router/)
- [x] [Mobx React Devtools](https://github.com/mobxjs/mobx-react-devtools)

### Build tools

- [x] [Webpack](https://webpack.github.io) 3.0
  - [x] [Tree Shaking](https://medium.com/@Rich_Harris/tree-shaking-versus-dead-code-elimination-d3765df85c80)
  - [x] [Webpack Dev Server](https://github.com/webpack/webpack-dev-server)
- [x] [React Hot Loader](https://github.com/gaearon/react-hot-loader)
- [x] [ExtractText Plugin](https://github.com/webpack/extract-text-webpack-plugin)
- [x] [HTML Webpack Plugin](https://github.com/ampedandwired/html-webpack-plugin)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```


