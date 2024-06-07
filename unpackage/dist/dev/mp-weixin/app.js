"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/tabbar/index/index.js";
  "./pages/tabbar/find/find.js";
  "./pages/tabbar/server/server.js";
  "./pages/tabbar/friend/friend.js";
  "./pages/tabbar/mine/mine.js";
  "./pagesFind/pages/find.js";
  "./pagesFriend/pages/chat.js";
  "./pagesMine/pages/dialog.js";
  "./pagesMine/pages/dialog/heathy.js";
  "./pagesMine/pages/dialog/news/news.js";
  "./pagesMine/pages/dialog/news/text-one.js";
  "./pagesMine/pages/dialog/news/text-three.js";
  "./pagesMinebottom/pages/bottom/collection.js";
  "./pagesMinebottom/pages/bottom/collection-text.js";
  "./pagesMinebottom/pages/bottom/medal.js";
  "./pagesMinebottom/pages/bottom/report.js";
  "./pagesMinebottom/pages/bottom/pattern.js";
  "./pagesMinebottom/pages/bottom/setting.js";
  "./pagesMinebottom/pages/bottom/fallback.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.warn("当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！");
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/maker/SeatMeat/seat/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
