# vue2-test

> A Vue2.0+webpack+exprss project

## Build Setup

``` bash
# 安装依赖包
npm install

# webpack开发模式，vue2.0项目实时更新
npm run dev

# webpack打包vue生产环境
npm run build

# 开发模式，webpack+mock提供vue需要的模拟接口数据，建议前端开发使用这个命令
npm run mockdev

# 如果是使用express提供接口，可以使用该命令
# 通过webpack-dev-middleware和webpack-hot-middleware中间件，实现webpack实时编译vue和提供接口
# 如果是前后端都做的话建议使用该命令
npm run server-dev

# expres运行编译后的vue项目，这里开发了webpack的watch模式，只要改动vue的都会在dist下面重新生成对于的新文件
# 一般不建议使用（）
npm run server-build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
