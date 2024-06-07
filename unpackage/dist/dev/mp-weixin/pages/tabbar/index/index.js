"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      checkoutInfo: {
        isShowEle: true,
        oneChecked: true,
        twoChecked: false
      }
    };
  },
  onReady() {
  },
  methods: {
    switchChange(id) {
      if (id === "one") {
        if (this.checkoutInfo.oneChecked == false) {
          this.checkoutInfo.oneChecked = true;
          this.checkoutInfo.twoChecked = false;
        } else {
          this.checkoutInfo.oneChecked = false;
          this.checkoutInfo.twoChecked = true;
        }
      } else if (id === "two") {
        if (this.checkoutInfo.twoChecked == false) {
          this.checkoutInfo.oneChecked = false;
          this.checkoutInfo.twoChecked = true;
        } else {
          this.checkoutInfo.oneChecked = true;
          this.checkoutInfo.twoChecked = false;
        }
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.switchChange("one")),
    b: $data.checkoutInfo.oneChecked,
    c: common_vendor.o(($event) => $options.switchChange("two")),
    d: $data.checkoutInfo.twoChecked
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/maker/SeatMeat/seat/pages/tabbar/index/index.vue"]]);
wx.createPage(MiniProgramPage);
