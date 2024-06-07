"use strict";
const common_vendor = require("../../../common/vendor.js");
const goodfriends = () => "../../../components/goodfriend/goodfriend.js";
const concern = () => "../../../components/goodfriend/concern.js";
const _sfc_main = {
  components: {
    goodfriends,
    concern
  },
  data() {
    return {
      items: ["我的关注", "我的好友"],
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
  const _component_concern = common_vendor.resolveComponent("concern");
  const _component_goodfriends = common_vendor.resolveComponent("goodfriends");
  (_easycom_uni_segmented_control2 + _component_concern + _component_goodfriends)();
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
      activeColor: "#ff8d1a"
    }),
    c: $data.current === 0,
    d: $data.current === 1
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/maker/SeatMeat/seat/pages/tabbar/friend/friend.vue"]]);
wx.createPage(MiniProgramPage);
