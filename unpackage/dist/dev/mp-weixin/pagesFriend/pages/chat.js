"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      chartDataone: {},
      //您可以通过修改 config-ucharts.js 文件中下标为 ['line'] 的节点来配置全局默认参数，如都是默认参数，此处可以不传 opts 。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
      optsone: {
        color: ["#f6b779", "#f5375e"],
        padding: [15, 10, 0, 15],
        dataLabel: false,
        dataPointShape: false,
        enableScroll: false,
        legend: {},
        xAxis: {
          disableGrid: true
        },
        yAxis: {
          gridType: "dash",
          type: "value",
          dashLength: 6,
          formatter: function(value) {
            var texts = [];
            if (value === 0 || value === "0") {
              texts.push("Ⅰ类");
            } else if (value === 1 || value === "1") {
              texts.push("Ⅱ类");
            } else if (value === 2 || value === "2") {
              texts.push("Ⅲ类");
            } else if (value === 3 || value === "3") {
              texts.push("Ⅳ类");
            } else if (value === 4 || value === "4") {
              texts.push("V类");
            } else if (value === 5 || value === "5") {
              texts.push("Ⅵ类");
            }
            return texts;
          },
          data: [{
            // type:"categeories"
            //          format:'text'
          }]
        },
        extra: {
          line: {
            type: "curve",
            width: 4,
            activeType: "hollow",
            linearType: "custom"
          }
        }
      }
    };
  },
  onReady() {
    this.getServerData();
  },
  methods: {
    getServerData() {
      setTimeout(() => {
        let res = {
          categories: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
          series: [
            {
              name: "今日坐姿时间分布",
              data: [0, 1, 2, 3, 4, 5]
            }
          ]
        };
        this.chartDataone = JSON.parse(JSON.stringify(res));
      }, 500);
    }
  }
};
if (!Array) {
  const _easycom_qiun_data_charts2 = common_vendor.resolveComponent("qiun-data-charts");
  _easycom_qiun_data_charts2();
}
const _easycom_qiun_data_charts = () => "../../uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.js";
if (!Math) {
  _easycom_qiun_data_charts();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: "line",
      opts: $data.optsone,
      chartData: $data.chartDataone
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-bae85873"], ["__file", "E:/maker/SeatMeat/seat/pagesFriend/pages/chat.vue"]]);
wx.createPage(MiniProgramPage);
