1、点击顶部栏左边图标，为什么可以收缩到左边，再次点击又扩展到右边（和侧边栏有关）
2、侧边栏 SidebarlItem.vue 什么含义
3、utils/request.js  |    api\user.js  |  store\modules\user.js  |  src\permission.js
4、 build修改端口号为9526
5、api和views一一对应
6、store放公共数据，login
7、用户填写账号和密码，传给后端验证，后端传回token，将token存在本地和cookie中，前端根据token获取用户详细信息
8、权限验证，通过token获取用户对应的role，根据用户的role算出对应的权限路由，通过 router.addRoutes 动态挂载这些路由。

1. src\views\login\index.vue 登录组件,验证path,发送账号和密码,成功则跳转到首页
2. src\store\modules\user.js 向服务器发送请求,拿回一个token,放token到cookie中