"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  props: {
    listData: {
      type: Array,
      default: () => [{
        id: "1",
        avator: "http://rtrz9uulj.hn-bkt.clouddn.com/find/pic-one.png",
        name: "MUsiani Wanda",
        text: "Independent woman",
        dialog: "../../../static/remind.png"
      }]
    },
    listDT: {
      type: Array,
      default: () => [
        // 	{
        // 	avator:"../../../static/collect.png",
        // 	name:"我的收藏"
        // },
        {
          avator: "../../../static/medal.png",
          name: "我的勋章"
        },
        {
          avator: "../../../static/report.png",
          name: "我的报告"
        },
        {
          avator: "../../../static/pattern.png",
          name: "模式设定"
        },
        {
          avator: "../../../static/set.png",
          name: "设置"
        },
        {
          avator: "../../../static/feedback.png",
          name: "意见反馈"
        }
      ]
    }
  },
  data() {
    return {
      listArr: [],
      listAr: []
    };
  },
  mounted() {
    var _this = this;
    _this.listArr = _this.listData;
    _this.listAr = _this.listDT;
  },
  methods: {
    goDialog() {
    },
    goBottom(e) {
      if (e == "我的勋章") {
        common_vendor.index.navigateTo({
          url: "/pagesMinebottom/pages/bottom/medal"
        });
      } else if (e == "我的报告") {
        common_vendor.index.navigateTo({
          url: "/pagesMinebottom/pages/bottom/report"
        });
      } else if (e == "模式设定") {
        common_vendor.index.navigateTo({
          url: "/pagesMinebottom/pages/bottom/pattern"
        });
      } else if (e == "设置") {
        common_vendor.index.navigateTo({
          url: "/pagesMinebottom/pages/bottom/setting"
        });
      } else if (e == "意见反馈") {
        common_vendor.index.navigateTo({
          url: "/pagesMinebottom/pages/bottom/fallback"
          // pages/tabbar/mine/bottom/fallback
        });
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_col2 = common_vendor.resolveComponent("uni-col");
  const _easycom_uni_row2 = common_vendor.resolveComponent("uni-row");
  (_easycom_uni_col2 + _easycom_uni_row2)();
}
const _easycom_uni_col = () => "../../../uni_modules/uni-row/components/uni-col/uni-col.js";
const _easycom_uni_row = () => "../../../uni_modules/uni-row/components/uni-row/uni-row.js";
if (!Math) {
  (_easycom_uni_col + _easycom_uni_row)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.listArr, (item, k0, i0) => {
      return {
        a: item.avator,
        b: "1428addb-1-" + i0 + ",1428addb-0",
        c: common_vendor.t(item.name),
        d: common_vendor.t(item.text),
        e: "1428addb-2-" + i0 + ",1428addb-0",
        f: item.dialog,
        g: "1428addb-3-" + i0 + ",1428addb-0"
      };
    }),
    b: common_vendor.p({
      span: 10
    }),
    c: common_vendor.p({
      span: 12
    }),
    d: common_vendor.o((...args) => $options.goDialog && $options.goDialog(...args)),
    e: common_vendor.p({
      span: 2
    }),
    f: common_vendor.f($data.listAr, (item, k0, i0) => {
      return {
        a: item.avator,
        b: common_vendor.t(item.name),
        c: common_vendor.o(($event) => $options.goBottom(item.name))
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/maker/SeatMeat/seat/pages/tabbar/mine/mine.vue"]]);
wx.createPage(MiniProgramPage);
