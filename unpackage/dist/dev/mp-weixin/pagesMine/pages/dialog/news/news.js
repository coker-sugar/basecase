"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      msg: [
        {
          id: "0",
          name: "WHO实锤“久坐伤身”，运动自救“指南”来了",
          text: "过节别光坐着过，赶紧活动一下！",
          decide: true,
          time: "刚刚"
        },
        {
          id: "1",
          name: "久坐的危害以及预防措施",
          text: "久坐伤损五脏，容易造成亚健康状态，容易形成过度......",
          // decide:"false",
          time: "2小时前"
        },
        {
          id: "2",
          name: "不得不久坐时，一个摆烂小动作能减轻危害",
          text: "过段事件，很多[阳康]的朋友陆续开始复工了，只是......",
          // decide:"false",
          time: "1天前"
        }
      ],
      searchValue: "Search...",
      value: ""
    };
  },
  methods: {
    goInner(e) {
      if (e == 0 || e == 1) {
        common_vendor.index.navigateTo({
          url: "/pagesMine/pages/dialog/news/text-one"
        });
        this.msg[0].decide = false;
        console.log(this.msg[0].decide);
      } else if (e == 2) {
        common_vendor.index.navigateTo({
          url: "/pagesMine/pages/dialog/news/text-three"
        });
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  _easycom_uni_search_bar2();
}
const _easycom_uni_search_bar = () => "../../../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  _easycom_uni_search_bar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(_ctx.Search),
    b: common_vendor.o(($event) => $data.value = $event),
    c: common_vendor.p({
      radius: "100",
      placeholder: $data.searchValue,
      cancelButton: "none",
      modelValue: $data.value
    }),
    d: common_vendor.f($data.msg, (item, index, i0) => {
      return {
        a: item.decide,
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.time),
        d: common_vendor.t(item.text),
        e: common_vendor.o(($event) => $options.goInner(item.id), item.id),
        f: item.id
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/maker/SeatMeat/seat/pagesMine/pages/dialog/news/news.vue"]]);
wx.createPage(MiniProgramPage);
