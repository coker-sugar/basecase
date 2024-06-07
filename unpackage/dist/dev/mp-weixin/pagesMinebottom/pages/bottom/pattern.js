"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      msg: [
        {
          id: "0",
          name: "强力监管",
          isShow: true,
          text: "在该模式下，会对您的正确坐姿要求和久坐时长管理都会更高一些，当您处于不正确坐姿情况下以及久坐时长超过适宜时长时，对您的提醒频率比较高！"
        },
        {
          id: "1",
          name: "适度提醒",
          isShow: true,
          text: "在该模式下，会对您的正确坐姿要求以及久坐时长管理较松一些，当您处于不正确坐姿情况下时，对您的提醒频率为中等！久坐时长达到危害身体对应的时长才会进行提醒。"
        },
        {
          id: "2",
          name: "轻松自由",
          isShow: true,
          text: "在该模式下，会对您的正确坐姿要求以及久坐时长管理均为无，当您的坐姿和久坐时长不进行提醒，只会在对应数据图中展现。"
        }
      ],
      checkoutInfo: {
        isShowEle: true,
        checked: false
      }
    };
  },
  methods: {
    switchChange(e) {
      e.detail.value ? 1 : 0;
      if (data.data.data.success == false) {
        this.showMsg(data.data.data.msg);
        this.$set(this.checkoutInfo, "isShowEle", false);
        this.$set(this.checkoutInfo, "checked", !e.detail.value);
        this.$nextTick(() => {
          setTimeout(() => {
            this.$set(this.checkoutInfo, "isShowEle", true);
            this.$forceUpdate();
          }, 0);
        });
        return;
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.msg, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.t(item.text)
      };
    }),
    b: common_vendor.o((...args) => $options.switchChange && $options.switchChange(...args), $data.msg.id),
    c: $data.checkoutInfo.checked,
    d: $data.msg.id
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/maker/SeatMeat/seat/pagesMinebottom/pages/bottom/pattern.vue"]]);
wx.createPage(MiniProgramPage);
