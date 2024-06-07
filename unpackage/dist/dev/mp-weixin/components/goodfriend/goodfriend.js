"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    listData: {
      type: Array,
      default: () => [
        {
          id: "1",
          avator: "http://rtrz9uulj.hn-bkt.clouddn.com/mine/avater2.png",
          name: "山野都有雾灯",
          text: "前途与玫瑰，来日且方长",
          dialog: "../../static/dialog.png"
        },
        {
          id: "2",
          avator: "http://rtrz9uulj.hn-bkt.clouddn.com/mine/avater3.png",
          name: "808bass",
          text: "我没有选择权，生活推着我向前",
          dialog: "../../static/dialog.png"
        },
        {
          id: "3",
          avator: "http://rtrz9uulj.hn-bkt.clouddn.com/mine/avater4.png",
          name: "半夜汽笛",
          text: "拥有的都是侥幸，失去的都是人生",
          dialog: "../../static/dialog.png"
        }
      ]
    }
  },
  data() {
    return {
      listArr: []
    };
  },
  mounted() {
    var _this = this;
    _this.listArr = _this.listData;
  },
  methods: {
    goChat() {
      common_vendor.index.navigateTo({
        url: "/pagesFriend/pages/chat"
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_col2 = common_vendor.resolveComponent("uni-col");
  const _easycom_uni_row2 = common_vendor.resolveComponent("uni-row");
  (_easycom_uni_col2 + _easycom_uni_row2)();
}
const _easycom_uni_col = () => "../../uni_modules/uni-row/components/uni-col/uni-col.js";
const _easycom_uni_row = () => "../../uni_modules/uni-row/components/uni-row/uni-row.js";
if (!Math) {
  (_easycom_uni_col + _easycom_uni_row)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.listArr, (item, k0, i0) => {
      return {
        a: item.avator,
        b: "733dc428-1-" + i0 + ",733dc428-0",
        c: common_vendor.t(item.name),
        d: common_vendor.t(item.text),
        e: "733dc428-2-" + i0 + ",733dc428-0",
        f: item.dialog,
        g: "733dc428-3-" + i0 + ",733dc428-0"
      };
    }),
    b: common_vendor.p({
      span: 6
    }),
    c: common_vendor.p({
      span: 12
    }),
    d: common_vendor.o(($event) => $options.goChat()),
    e: common_vendor.p({
      span: 4
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/maker/SeatMeat/seat/components/goodfriend/goodfriend.vue"]]);
wx.createComponent(Component);
