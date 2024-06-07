"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      chartDatatwo: {},
      //您可以通过修改 config-ucharts.js 文件中下标为 ['pie'] 的节点来配置全局默认参数，如都是默认参数，此处可以不传 opts 。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
      optstwo: {
        color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
        padding: [5, 5, 5, 5],
        enableScroll: false,
        extra: {
          pie: {
            activeOpacity: 0.5,
            activeRadius: 10,
            offsetAngle: 0,
            labelWidth: 15,
            border: true,
            borderWidth: 1,
            borderColor: "#FFFFFF"
          }
        }
      },
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
          dashLength: 6,
          data: [{
            min: 16,
            max: 30
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
      },
      chartData: {},
      //您可以通过修改 config-ucharts.js 文件中下标为 ['column'] 的节点来配置全局默认参数，如都是默认参数，此处可以不传 opts 。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
      opts: {
        color: [
          "#FAC858",
          "#EE6666",
          "#FAC858",
          "#EE6666",
          "#73C0DE",
          "#3CA272",
          "#FC8452",
          "#9A60B4",
          "#ea7ccc"
        ],
        padding: [15, 15, 0, 5],
        enableScroll: false,
        legend: {},
        xAxis: {
          disableGrid: true
        },
        yAxis: {
          data: [{
            min: 0
          }]
        },
        extra: {
          column: {
            type: "group",
            width: 20,
            activeBgColor: "#000000",
            activeBgOpacity: 0.08,
            linearType: "custom",
            seriesGap: 5,
            linearOpacity: 0.5,
            barBorderCircle: true,
            customColor: [
              "#f52c56",
              "#fbdcd2"
            ]
          }
        }
      }
    };
  },
  onReady() {
    this.getServerDatatwo();
    this.getServerData();
    this.getServerDataone();
  },
  methods: {
    getServerDatatwo() {
      setTimeout(() => {
        let res = {
          series: [
            {
              data: [{ "name": "前倾", "value": 3, "labelText": "3h04min" }, { "name": "左倾", "value": 6, "labelText": "1h14min" }, { "name": "右倾", "value": 50, "labelText": "12h58min" }, { "name": "左抬腿", "value": 10, "labelText": "2h55min" }, { "name": "右抬腿", "value": 9, "labelText": "2h46min" }, { "name": "正坐", "value": 45, "labelText": "10h53min" }, { "name": "正坐弯腰", "value": 16, "labelText": "4h39min" }]
            }
          ]
        };
        this.chartDatatwo = JSON.parse(JSON.stringify(res));
      }, 500);
    },
    getServerData() {
      setTimeout(() => {
        let res = {
          categories: ["0:00", "9:43", "13:10", "15:43", "17:02", "21:45", "23:08"],
          series: [{
            name: "心率血压",
            data: [109, 78, 82, 54, 63, 89, 108]
          }]
        };
        this.chartData = JSON.parse(JSON.stringify(res));
      }, 1e3);
    },
    getServerDataone() {
      setTimeout(() => {
        let res = {
          categories: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
          series: [
            {
              name: "BMI=体重/身高的平方",
              data: [20.3, 21.7, 20.1, 24.6, 26, 27.4]
            },
            {
              name: "上一年同时期BMI",
              data: [21.33, 22.54, 26.37, 22.7, 28.79, 24.46]
            }
          ]
        };
        this.chartDataone = JSON.parse(JSON.stringify(res));
      }, 2500);
    }
  }
};
if (!Array) {
  const _easycom_qiun_data_charts2 = common_vendor.resolveComponent("qiun-data-charts");
  _easycom_qiun_data_charts2();
}
const _easycom_qiun_data_charts = () => "../../../uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.js";
if (!Math) {
  _easycom_qiun_data_charts();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: "pie",
      opts: $data.opts,
      chartData: $data.chartDatatwo
    }),
    b: common_vendor.p({
      type: "line",
      opts: $data.optsone,
      chartData: $data.chartDataone
    }),
    c: common_vendor.p({
      type: "column",
      opts: $data.opts,
      chartData: $data.chartData
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b502f075"], ["__file", "E:/maker/SeatMeat/seat/pages/tabbar/server/server.vue"]]);
wx.createPage(MiniProgramPage);
