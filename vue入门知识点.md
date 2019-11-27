**组件与页面的关系:**
	页面都可以是组件，子组件可以有自己的属性方法，父组件（使用的容器）可以在使用子组件时调用这些属性并配置为自己所用

**创建文件 （vue3）:**
前期准备 `node.js`安装 
`npm install`出错的话 安装`cnpm`
`npm install -g cnpm --registry=https://registry.npm.taobao.org`

**重要步骤：** `npm install -g @vue/cli`
`cnpm install -g @vue/cli`
//以上是一次性操作，只操作一次 打开cmd直接输入

//git bash here 选择的是要创建项目的文件的目录
1.`vue create 文件名`
2.`cd 文件名`
3.`npm run serve`

**再次运行时，执行2,3** 
//可能会出错，我的解决是在Hbuilder中用终端运行一次就好了

**访问组件:在地址栏配置路径跳到相应页面**
在`App.vue`中`template`中写入 `<router-view/>`

**页面跳转**
可在需要跳转的页面写入
`<router-link to="/路由中配置的路径">跳转的承载元素</router-link>`

**注：**
**重要**：导入的插件都组要在`main.js`中注册，使用
`store` `router`都是自己创建
需要自己配置的插件
cd 到项目的文件路径
`npm install vuex --save`	//全局数据状态管理，所有数据全局共享
`npm install vue-router --save`	//页面跳转需要安装
`npm install vue-resource -save` //请求数据 类似`$.ajax()`
