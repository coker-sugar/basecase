"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      items: ["今日实时榜", "周榜", "月榜"],
      current: 0,
      showmg: true,
      showI: true,
      showIm: false,
      msg: [
        {
          id: "4",
          showImg: false,
          anitor: "http://rtrz9uulj.hn-bkt.clouddn.com/find/%E5%BC%A0%E5%9C%A3.jpg",
          name: "所思在远道",
          time: "9h18min"
        },
        {
          id: "5",
          showImg: false,
          anitor: "http://rtrz9uulj.hn-bkt.clouddn.com/find/%E4%BA%8E%E6%B8%AF.jpg",
          name: "renaissance",
          time: "9h06min"
        },
        {
          id: "6",
          showImg: true,
          anitor: "http://rtrz9uulj.hn-bkt.clouddn.com/find/%E5%A4%8F%E9%9B%AA%E6%80%A1.jpg",
          name: "biossming",
          time: "8h16min"
        },
        {
          id: "7",
          showImg: false,
          anitor: "http://rtrz9uulj.hn-bkt.clouddn.com/find/%E6%9D%8E%E4%B8%9C%E5%B8%86.jpg",
          name: "邱子平",
          time: "8h5min"
        },
        {
          id: "8",
          showImg: true,
          anitor: "http://rtrz9uulj.hn-bkt.clouddn.com/find/19%E6%96%87%E5%8F%B6%E8%A1%A1.jpg",
          name: "李昊wo",
          time: "7h35min"
        },
        {
          id: "9",
          showImg: true,
          anitor: "http://rtrz9uulj.hn-bkt.clouddn.com/find/%E5%90%B4%E8%99%B9.jpg",
          name: "cx330",
          time: "7h15min"
        }
      ]
    };
  },
  methods: {
    // 跳转同级界面
    onClickItem(e) {
      if (this.current != e.currentIndex) {
        this.current = e.currentIndex;
      }
    },
    // 修改点赞
    ChangeImg(i) {
      this.msg[i].showImg = !this.msg[i].showImg;
      console.log(this.msg[i].showImg);
    },
    ChangeI() {
      this.showI = !this.showI;
    },
    ChangeIm() {
      this.showIm = !this.showIm;
    },
    Changemg() {
      this.showmg = !this.showmg;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.showmg,
    b: common_vendor.o(($event) => $options.Changemg()),
    c: !$data.showmg,
    d: common_vendor.o(($event) => $options.Changemg()),
    e: $data.showIm,
    f: common_vendor.o(($event) => $options.ChangeIm()),
    g: !$data.showIm,
    h: common_vendor.o(($event) => $options.ChangeIm()),
    i: $data.showI,
    j: common_vendor.o(($event) => $options.ChangeI()),
    k: !$data.showI,
    l: common_vendor.o(($event) => $options.ChangeI()),
    m: common_vendor.f($data.msg, (item, index, i0) => {
      return {
        a: common_vendor.t(item.id),
        b: item.anitor,
        c: common_vendor.t(item.name),
        d: common_vendor.t(item.time),
        e: item.showImg,
        f: !item.showImg,
        g: common_vendor.o(($event) => $options.ChangeImg(index), item.id),
        h: item.id
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-321dc10c"], ["__file", "E:/maker/SeatMeat/seat/components/find/findweek.vue"]]);
wx.createComponent(Component);
