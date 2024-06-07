"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  options: {
    styleIsolation: "shared"
  },
  data() {
    return {
      msg: [
        {
          id: "0",
          name: "每日运动30分钟",
          text: "许多研究都指出，每天运动30分钟就有好处，包括预防心脏病、糖尿病等，甚至有研究指出，运动可以让人感到快乐，增强自信心。如果你很久没有运动，可以从走路运动开始，每天快走20～30分钟，持续走下去，一定能感受到许多好处。",
          decide: true,
          time: "刚刚"
        },
        {
          id: "1",
          name: "适当晒阳光",
          text: "阳光是一种天然的兴奋剂。最好的提神方法是在晨曦中做30分钟的散步或慢跑。因为这可以使身体贮存大量的维生素D，有助于维护骨骼和牙齿的强健。太阳下还是很好的物理消毒场所。",
          // decide:"false",
          time: "5小时前"
        },
        {
          id: "2",
          name: "提高睡眠质量",
          text: "良好的睡眠可以让身体得到充分休息，增强肌肉质量。如何拥有好的睡眠呢?第一，睡前30分钟关掉电子产品;第二，房间光线保持昏暗;第三，确保睡眠时间每天达到7-8小时。",
          // decide:"false",
          time: "5天前"
        }
      ],
      searchValue: "Search...",
      value: "",
      dowHeight: "400rpx"
    };
  },
  methods: {
    getDomConfig() {
      let that = this;
      console.log(that.msg[0].text.length);
      let info = common_vendor.index.createSelectorQuery().select(".text");
      info.boundingClientRect(function(data) {
        console.log(data);
        if (that.msg[0].text.length > 100) {
          that.dowHeight = "500rpx";
        } else {
          that.dowHeight = "400rpx";
        }
      }).exec();
    }
  },
  onShow() {
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  _easycom_uni_search_bar2();
}
const _easycom_uni_search_bar = () => "../../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  _easycom_uni_search_bar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      radius: "100",
      placeholder: $data.searchValue,
      cancelButton: "none"
    }),
    b: common_vendor.f($data.msg, (item, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.time),
        b: item.decide
      }, item.decide ? {} : {}, {
        c: common_vendor.t(item.name),
        d: common_vendor.t(item.text)
      });
    }),
    c: $data.dowHeight,
    d: $data.msg.id
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4164e744"], ["__file", "E:/maker/SeatMeat/seat/pagesMine/pages/dialog/heathy.vue"]]);
wx.createPage(MiniProgramPage);
