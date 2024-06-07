"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      formData: {
        text: "",
        tel: ""
      }
    };
  }
};
if (!Array) {
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  _easycom_uni_file_picker2();
}
const _easycom_uni_file_picker = () => "../../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
if (!Math) {
  _easycom_uni_file_picker();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.formData.text,
    b: common_vendor.o(($event) => $data.formData.text = $event.detail.value),
    c: common_vendor.p({
      limit: "4"
    }),
    d: $data.formData.tel,
    e: common_vendor.o(($event) => $data.formData.tel = $event.detail.value),
    f: common_vendor.o((...args) => _ctx.submitForm && _ctx.submitForm(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e533dd2f"], ["__file", "E:/maker/SeatMeat/seat/pagesMinebottom/pages/bottom/fallback.vue"]]);
wx.createPage(MiniProgramPage);
