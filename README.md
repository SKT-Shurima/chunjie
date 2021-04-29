# supngin 前端项目简介

## 基本介绍

react-typescript-mobx-webpack 技术栈框架

## 环境依赖

IDE: VSCode<br/>
必备插件: eslint stylelint GitHistory GitLens Prettier<br/>
建议插件: JavaScript (ES6) code snippets<br/>

## 开发

开发环境<br>
如遇到安装时间超时,请设置代理镜像

```
$ npm config set registry http://nexus.supos.ai/repository/supos.npm.group/
```

安装依赖

```
$ npm install
```

项目启动

```
$ npm run dev
```

## 常用命令

```
$ npm run eslint: 使用 eslint 校验 /src 下所有.tsx .ts后缀的文件;
$ npm run stylelint: 使用 stylelint 校验 /src 下所有的 less 文件;
$ npm run lint: 执行 eslint和 stylelint 命令;
$ npm run lint-staged: 执行 prettier美化， eslint fix修复，和修复文件后的git add;
$ npm run precommit: 提交前自动执行，执行了 lint 和 lint-staged 命令;
```

## 部署

```
$ npm build
```

## Others

开发环境中,如遇到 js 文件有 ts 报错信息,打开设置搜索 tsconfig,Check JS/Experimental Decorators 去掉勾选

## Project Structure 介绍

```
|-- supngin-fornt-end

​	|-- build    webpack 打包相关

​	|-- dependencies     外部依赖（第三方离线文件）

​	|-- dist    打包后的静态文件

​	|-- node_modules

​	|-- src

​		|-- assets    图片/样式表

​			|-- css   全局样式

​			|-- icons   基于antd Icon 封装的自定义组件，使用webpack SVG loader打包处理

​			|-- images   普通图片引用，如 JPEG/PNG 格式，主要作为 CSS 背景图片使用

​		|--  components  公共组件库 （非业务逻辑相关的-单独文件夹，与业务逻辑有关联的存放对应模块下）

​			|-- Authorized   权限校验组件

​			|-- Message   消息提示

​			|-- Modal   模态框

​			|-- Icons   supngin 自定义图标库，对应图片文件在 src/assets/icons 下

​			|-- ImageLoader   对图片加载处理

​			|-- ScriptEditor  脚本编辑器

​			|-- ObjSelector  对象选择器

​			|-- DataSource  数据源管理模块相关公共组件，如 DBUserName、DBPassword 等

​			|-- DevTask  数据加工模块公共组件，如 LineTable 等

​			|-- Factory 对象建模模块相关组件

​			|-- ...

​		|-- pages  路由对象的页面（大致结构如下）

​			|-- xxx

​				|-- container  页面中大的模块

					|--- xxx.tsx

					|--- xxx.less

					|--- xxx.d.ts  ts 接口定义

​				|-- components  其他组件

​				|-- store   数据状态管理相关

​				|-- service   API 相关

			 |-- lib  复杂业务逻辑函数提取

​				|--  ...

​		|-- config  环境配置

​		|-- layouts   布局相关

​		|-- consts   常量

​		|-- locales   国际化相关

​		|-- router  路由配置

​			|-- menu.config.ts    菜单目录结构

​			|-- route.config.ts    路由配置文件

​			|-- ...

​		|-- services  axios 封装 http 请求及公共 API

​		|-- stores  全局状态管理

​		|-- typings   ts 类型声明

​		|-- utils  自定义函数库

​		|-- index.ts  supngin 入口文件

​	|--  .dockerignore     docker build 忽略文件配置

​	|-- .editorconfig    编辑器配置信息

​	|-- .eslintignore   eslint 忽略配置

​	|-- .gitignore   git commit 忽略配置

​	|-- .huskyrc    commit 钩子相关

​	|-- .prettierignore  格式化忽略配置

​	|-- .prettierrc.js  格式化配置

​	|-- .stylelintignore   样式忽略配置

​	|-- .stylelinerc.js    样式校验配置

​	|-- commitlint.config.js   配合 git hooks 提交校验

​	|-- Dcokerfile   docker 打包配置文件

​	|-- nginx.conf   nginx 相关配置

​	|-- package.json

​	|-- postcss.config.js

​	|-- README.md

​	|-- theme.js    全局主题样式配置文件

​	|-- tsconfig.json  ts 相关配置

​	|-- tsconfig.webpack.json

​	|-- ...

```
