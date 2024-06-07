"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    listData: {
      type: Array,
      default: () => [
        {
          id: 0,
          avator: "http://rtrz9uulj.hn-bkt.clouddn.com/friend/friend1.png",
          name: "Keep",
          likes: 1
        },
        {
          id: 1,
          avator: "http://rtrz9uulj.hn-bkt.clouddn.com/friend/friend2.png",
          name: "小优不想写作业",
          likes: 1
        },
        {
          id: 2,
          avator: "http://rtrz9uulj.hn-bkt.clouddn.com/friend/friend3.png",
          name: "风止无落叶",
          likes: 1
        },
        {
          id: 3,
          avator: "http://rtrz9uulj.hn-bkt.clouddn.com/friend/friend4.png",
          name: "程甘",
          likes: 1
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
    getUserInfo(e) {
      let index = e.id;
      let that = this;
      let likes = e.likes;
      if (likes == 1) {
        that.listArr[index].likes = 0;
        console.log(e.likes, "关注了");
      } else {
        that.listArr[index].likes = 1;
        console.log(e.likes, "取关了");
      }
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
        b: "7d68683a-1-" + i0 + ",7d68683a-0",
        c: common_vendor.t(item.name),
        d: "7d68683a-2-" + i0 + ",7d68683a-0",
        e: common_vendor.t(item.likes == "0" ? "已关注" : "关注"),
        f: common_vendor.o(($event) => $options.getUserInfo(item)),
        g: "7d68683a-3-" + i0 + ",7d68683a-0"
      };
    }),
    b: common_vendor.p({
      span: 6
    }),
    c: common_vendor.p({
      span: 10
    }),
    d: common_vendor.p({
      span: 6
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/maker/SeatMeat/seat/components/goodfriend/concern.vue"]]);
wx.createComponent(Component);
