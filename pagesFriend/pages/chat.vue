<template>
  <view class="charts-box">
    <qiun-data-charts 
      type="line"
      :opts="optsone"
      :chartData="chartDataone"
    />
  </view>
</template>

<script>
export default {
  data() {
    return {
      chartDataone: {},
      //您可以通过修改 config-ucharts.js 文件中下标为 ['line'] 的节点来配置全局默认参数，如都是默认参数，此处可以不传 opts 。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
      optsone: {
        color: ["#f6b779","#f5375e"],
        padding: [15,10,0,15],
        dataLabel: false,
        dataPointShape: false,
        enableScroll: false,
        legend: {},
        xAxis: {
          disableGrid: true
        },
        yAxis: {
          gridType: "dash",
		  type:'value',
          dashLength:6,
		  formatter: function(value){
			  var texts = []
		       if (value === 0 || value === '0') {
		         texts.push('Ⅰ类')
		       } else if (value === 1 || value === '1') {
		         texts.push('Ⅱ类')
		       } else if (value === 2 || value === '2') {
		         texts.push('Ⅲ类')
		       } else if (value === 3 || value === '3') {
		         texts.push('Ⅳ类')
		       } else if (value === 4 || value === '4') {
		         texts.push('V类')
		       } else if (value === 5 || value === '5') {
		         texts.push('Ⅵ类')}
				 return texts
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
      //模拟从服务器获取数据时的延时
      setTimeout(() => {
        //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
        let res = {
            categories: ["JUL","AUG","SEP","OCT","NOV","DEC"],
            series: [
              {
                name: "今日坐姿时间分布",
                data: [0,1,2,3,4,5]
              }
            ]
          };
        this.chartDataone = JSON.parse(JSON.stringify(res));
      }, 500);
    },
  }
};
</script>

<style scoped>
  /* 请根据实际需求修改父元素尺寸，组件自动识别宽高 */
  .charts-box {
    width: 100%;
    height: 300px;
  }
</style>