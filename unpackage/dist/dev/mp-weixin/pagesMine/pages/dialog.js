"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      msg: [
        {
          id: "0",
          anitor: "http://rtrz9uulj.hn-bkt.clouddn.com/index/news.png",
          name: "新闻咨询",
          text: "WHO实锤“久坐伤身”，运动自救“指南”来了",
          time: "刚刚"
        },
        {
          id: "1",
          anitor: "http://rtrz9uulj.hn-bkt.clouddn.com/index/healthy.png",
          name: "健康小贴士",
          text: "每日运动30分钟",
          time: "1小时前"
        }
      ],
      searchValue: "Search...",
      value: ""
    };
  },
  methods: {
    goInner(e) {
      if (e == 0) {
        common_vendor.index.navigateTo({
          url: "/pagesMine/pages/dialog/news/news"
        });
      } else if (e == 1) {
        common_vendor.index.navigateTo({
          url: "/pagesMine/pages/dialog/heathy"
        });
      }
    },
    Search() {
      this.userName = common_vendor.index.getStorageSync("username_log"), common_vendor.index.request({
        url: "https:xxxx",
        method: "GET",
        data: { value: this.value },
        header: {
          "content-type": "application/x-www-form-urlencoded"
          //表明后端接收的是（表单）字符串类型，例如'id=1231454&sex=男' 
        },
        success: (res) => {
          if (this.value == "")
            return;
        }
      });
    }
  },
  onLaunch: {
    onNavigationBarButtonTap: function(e) {
      console.log(JSON.stringify(e));
    }
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  _easycom_uni_search_bar2();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  _easycom_uni_search_bar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.Search),
    b: common_vendor.o(($event) => $data.value = $event),
    c: common_vendor.p({
      radius: "100",
      placeholder: $data.searchValue,
      cancelButton: "none",
      modelValue: $data.value
    }),
    d: common_vendor.f($data.msg, (item, index, i0) => {
      return {
        a: item.anitor,
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.time),
        d: common_vendor.t(item.text),
        e: common_vendor.o(($event) => $options.goInner(item.id), item.id),
        f: item.id
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/maker/SeatMeat/seat/pagesMine/pages/dialog.vue"]]);
wx.createPage(MiniProgramPage);
