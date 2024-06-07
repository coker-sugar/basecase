"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      myself: {
        id: "1",
        anitor: "http://rtrz9uulj.hn-bkt.clouddn.com/find/pic-one.png",
        name: "Musiani Wanda",
        time: "12h",
        text: "描述"
      },
      msg: [
        {
          id: "1",
          showImg: true,
          anitor: "http://rtrz9uulj.hn-bkt.clouddn.com/find/pic-one.png",
          name: "Musiani Wanda",
          time: "12h"
        },
        {
          id: "2",
          showImg: false,
          anitor: "http://rtrz9uulj.hn-bkt.clouddn.com/avater1.png",
          name: "空山新雨",
          time: "11h28min"
        },
        {
          id: "3",
          showImg: true,
          anitor: "http://rtrz9uulj.hn-bkt.clouddn.com/find/18%E6%9D%8E%E6%98%8E%E5%BA%B7.jpg",
          name: "WALKEPR",
          time: "10h45min"
        },
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
    ChangeImg(i) {
      this.msg[i].showImg = !this.msg[i].showImg;
      console.log(this.msg[i].showImg);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.msg, (item, index, i0) => {
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
    }),
    b: $data.myself.anitor,
    c: common_vendor.t($data.myself.name),
    d: common_vendor.t($data.myself.id),
    e: common_vendor.t($data.myself.time)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/maker/SeatMeat/seat/pagesFind/pages/find.vue"]]);
wx.createPage(MiniProgramPage);
