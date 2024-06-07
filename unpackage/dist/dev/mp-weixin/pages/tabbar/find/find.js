"use strict";
const common_vendor = require("../../../common/vendor.js");
const findweek = () => "../../../components/find/findweek.js";
const findmonth = () => "../../../components/find/findmonth.js";
const _sfc_main = {
  components: {
    findweek,
    findmonth
    // question
  },
  data() {
    return {
      items: ["今日实时榜", "周榜", "月榜"],
      current: 0,
      showmg: true,
      showI: true,
      showIm: false,
      intro: [
        {
          id: 0,
          url: "http://rtrz9uulj.hn-bkt.clouddn.com/find/%E8%8D%AF%E6%9D%90.png",
          title: "[养生知识] 推荐你了解",
          que: "秋季养生为何重在“养肺”？",
          text: "《黄帝内经》有论述：“肺朝百脉”，指全身的血液都通过脉络汇聚于肺，通过肺的呼吸、吐故纳新。但肺部比较“娇气”，在秋天尤其容易被外邪侵袭而发病，影响...",
          anitor: "http://rtrz9uulj.hn-bkt.clouddn.com/find/pic-one.png",
          name: "新五禽戏·宣肺理气   >"
        },
        {
          id: 1,
          url: "http://rtrz9uulj.hn-bkt.clouddn.com/find/dream.png",
          title: "[健身增肌] 推荐你了解",
          que: "还在用仰卧起坐练腹肌？小心你的腰",
          text: "练腹肌要注意选择正确动作，练习不当容易导致腰痛甚至腰间盘的永久损伤。而仰卧起坐看似是练腹的“经典动作”，实际却让腰部承受着更大压力，不仅效果一般，还会...",
          anitor: "http://rtrz9uulj.hn-bkt.clouddn.com/find/%E5%A4%8F%E9%9B%AA%E6%80%A1.jpg",
          name: "零基础腹肌训练   >"
        },
        {
          id: 2,
          url: "http://rtrz9uulj.hn-bkt.clouddn.com/find/river.png",
          title: "[梦境解读] 推荐你了解",
          que: "梦，是一种原始认识",
          text: "我们每个人都做过梦，其中有些梦可能很多人都做过，比如梦见自己会飞，梦见被人追赶，梦见考试等等。那么，这些梦是什么意思？我们为什么会做这些梦...",
          anitor: "http://rtrz9uulj.hn-bkt.clouddn.com/find/19%E6%96%87%E5%8F%B6%E8%A1%A1.jpg",
          name: "成为自己的解梦师  >"
        }
      ],
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
    },
    goLook() {
      common_vendor.index.navigateTo({
        url: "/pagesFind/pages/find"
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_segmented_control2 = common_vendor.resolveComponent("uni-segmented-control");
  const _component_findweek = common_vendor.resolveComponent("findweek");
  const _component_findmonth = common_vendor.resolveComponent("findmonth");
  (_easycom_uni_segmented_control2 + _component_findweek + _component_findmonth)();
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
    c: $data.showmg,
    d: common_vendor.o(($event) => $options.Changemg()),
    e: !$data.showmg,
    f: common_vendor.o(($event) => $options.Changemg()),
    g: $data.showIm,
    h: common_vendor.o(($event) => $options.ChangeIm()),
    i: !$data.showIm,
    j: common_vendor.o(($event) => $options.ChangeIm()),
    k: $data.showI,
    l: common_vendor.o(($event) => $options.ChangeI()),
    m: !$data.showI,
    n: common_vendor.o(($event) => $options.ChangeI()),
    o: common_vendor.f($data.msg, (item, index, i0) => {
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
    p: common_vendor.o(($event) => $options.goLook()),
    q: common_vendor.f($data.intro, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: item.url,
        c: common_vendor.t(item.que),
        d: common_vendor.t(item.text),
        e: item.anitor,
        f: common_vendor.t(item.name),
        g: item.id
      };
    }),
    r: $data.current === 0,
    s: $data.current === 1,
    t: $data.current === 2
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/maker/SeatMeat/seat/pages/tabbar/find/find.vue"]]);
wx.createPage(MiniProgramPage);
