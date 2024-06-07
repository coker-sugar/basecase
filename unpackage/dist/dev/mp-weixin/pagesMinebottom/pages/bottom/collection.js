"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      msg: [
        {
          id: "0",
          name: "中国青少年身体姿态健康亟待重视",
          text: "如何合理干预？",
          decide: true,
          time: "刚刚"
        }
      ]
    };
  },
  methods: {
    goInner(e) {
      if (e == 0) {
        common_vendor.index.navigateTo({
          url: "/pagesMinebottom/pages/bottom/collection-text"
        });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.msg, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.t(item.text),
        c: common_vendor.o(($event) => $options.goInner(item.id), item.id),
        d: item.id
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/maker/SeatMeat/seat/pagesMinebottom/pages/bottom/collection.vue"]]);
wx.createPage(MiniProgramPage);
