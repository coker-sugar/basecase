"use strict";
const common_vendor = require("../../../common/vendor.js");
const life = () => "../../../components/medal/life.js";
const myself = () => "../../../components/medal/myself.js";
const _sfc_main = {
  components: {
    life,
    myself
  },
  data() {
    return {
      items: ["挑战自我", "绚丽人生"],
      current: 0
    };
  },
  methods: {
    onClickItem(e) {
      if (this.current != e.currentIndex) {
        this.current = e.currentIndex;
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_segmented_control2 = common_vendor.resolveComponent("uni-segmented-control");
  const _component_myself = common_vendor.resolveComponent("myself");
  const _component_life = common_vendor.resolveComponent("life");
  (_easycom_uni_segmented_control2 + _component_myself + _component_life)();
}
const _easycom_uni_segmented_control = () => "../../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.js";
if (!Math) {
  _easycom_uni_segmented_control();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.onClickItem),
    b: common_vendor.p({
      current: $data.current,
      values: $data.items,
      styleType: "text",
      activeColor: "#fda54c"
    }),
    c: $data.current === 0,
    d: $data.current === 1
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/maker/SeatMeat/seat/pagesMinebottom/pages/bottom/medal.vue"]]);
wx.createPage(MiniProgramPage);
