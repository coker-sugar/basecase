<template>
	<!-- 注意这个outside，不要让他作为所有盒子的父亲 -->
	<view class="outside">
		<image class="ig1" src="http://rtrz9uulj.hn-bkt.clouddn.com/server/server_test1.png"></image>
		<view class="text">本周坐姿时间占比</view>
		<view class="box">
			 <view class="charts-box">
			    <qiun-data-charts 
			      type="pie"
			      :opts="opts"
			      :chartData="chartDatatwo"
			    />
			  </view>
			  <view class="btm">
				  <!-- <img src="" alt="" style="display: inline-block;width:20rpx;height:20rpx;"> -->
				  <text class="text">
					  本周最长不正确坐姿时长为12小时58分钟，最长不正确的坐姿类型为右倾,占比为42%
				  </text>
				  <view class="tips">
					  <text class="warm">
						  温馨小贴士：
						  <text style="position: absolute;top:65rpx;left:95rpx;">微运动可有效缓解脊柱侧弯！</text>
					  </text>
					  <image class="pic" src="http://rtrz9uulj.hn-bkt.clouddn.com/server/%E8%8D%AF.png" mode=""></image>
				  </view>
			  </view>
		</view>
		
		<view class="boxx bx" >
			<view class="charts-box">
				<qiun-data-charts type="line" :opts="optsone" :chartData="chartDataone" />
			</view>
		</view>
		
		<view class="boxx">
			<view class="head">
				<h3 class="heart">心率血压</h3>
				<h4 class="text">Daily Heart Rate</h4>
			</view>
		
			<view class="charts-box">
				<qiun-data-charts type="column" :opts="opts" :chartData="chartData" />
			</view>
		</view>
	</view>
</template>

<script>
export default {
  data() {
    return {
      chartDatatwo: {},
      //您可以通过修改 config-ucharts.js 文件中下标为 ['pie'] 的节点来配置全局默认参数，如都是默认参数，此处可以不传 opts 。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
      optstwo: {
        color: ["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
        padding: [5,5,5,5],
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
	  			min: 16.0,
	  			max: 30.0
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
	  	color: ["#FAC858", "#EE6666", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4",
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
      //模拟从服务器获取数据时的延时
      setTimeout(() => {
        //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
        let res = {
            series: [
              {
                data: [{"name":"前倾","value":3,"labelText":"3h04min"},{"name":"左倾","value":6,"labelText":"1h14min"},{"name":"右倾","value":50,"labelText":"12h58min"},{"name":"左抬腿","value":10,"labelText":"2h55min"},{"name":"右抬腿","value":9,"labelText":"2h46min"},{"name":"正坐","value":45,"labelText":"10h53min"},{"name":"正坐弯腰","value":16,"labelText":"4h39min"}]
              }
            ]
          };
        this.chartDatatwo = JSON.parse(JSON.stringify(res));
      }, 500);
    },
	getServerData() {
		//模拟从服务器获取数据时的延时
		setTimeout(() => {
			//模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
			let res = {
				categories: ["0:00", "9:43", "13:10", "15:43", "17:02", "21:45", "23:08"],
				series: [{
					name: "心率血压",
					data: [109, 78, 82, 54, 63, 89, 108]
				}]
			};
			this.chartData = JSON.parse(JSON.stringify(res));
		}, 1000);
	},
	getServerDataone() {
		//模拟从服务器获取数据时的延时
		setTimeout(() => {
			//模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
			let res = {
				categories: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
				series: [{
						name: "BMI=体重/身高的平方",
						data: [20.3, 21.7, 20.1, 24.6, 26.0, 27.4]
					},
					{
						name: "上一年同时期BMI",
						data: [21.33, 22.54, 26.37, 22.70, 28.79, 24.46]
					},
				]
			};
			this.chartDataone = JSON.parse(JSON.stringify(res));
		}, 2500);
	}
  }
};
</script>

<style lang="scss" scoped>
	.outside {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		margin: 0 auto;
		.text {
			font-size: 36rpx;
			margin: 20rpx 0;
		}
		.box {
			width: 95%;
			height:65vh;
			margin-bottom: 30rpx;
			// background-color: pink;
			border-radius: 20rpx;
			box-shadow: rgba(255, 141, 26, 1) 0px 3px 10px -2px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;	
			 .charts-box {
			    width: 100%;
			    height: 300px;
			  }
			.btm {
				width: 100%;
				height: 20vh;
				// background-color: pink;
				display: flex;
				justify-content: space-around;
				align-items: center;
				.text {
					width: 40%;
					height: 80%;
					display: inline-block;
					text-indent: 1em;
					font-size: 30rpx;
					text-align: left;
					margin-top: 10%;
				}
				.tips {
					width: 40%;
					height: 16vh;
					position: relative;
					.warm {
						border-radius: 30rpx;
						background-color: #ffdfc0;
						position: absolute;
						padding: 20rpx;
						top: 10%;
						left: 50%;
						transform: translate(-50%,0);
						width: 90%;
						height: 80%;
					}
					.pic {
						position: absolute;
						left: -15%;
						top: 65%;
						width:240rpx;
						height: 151rpx;
					}
				}
			}
		}
		.boxx {
			width: 95vw;
			// height: 30vh;
			box-shadow: rgba(255, 141, 26, 1) 0px 3px 10px -2px;
			border-radius: 20rpx;
			height: 50vh;
			margin-bottom: 30rpx;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
		
			.head {
				width: 100%;
				height: 8vh;
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: left;
		
				.heart {
					padding-top: 10rpx;
					padding-left: 5%;
					font-size: 34rpx;
				}
		
				.text {
					width: 100%;
					padding-top: 10rpx;
					padding-left: 5%;
					color: #f52c56;
				}
			}
		
			.charts-box {
				margin-top: 20rpx;
				margin-bottom: 20rpx;
				background-color: #fffaf5;
				width: 90%;
				height: 500rpx;
				border-radius: 16rpx;
			}
		
		}
		.bx {
			height: 38vh;
			margin-bottom:40rpx;
			.charts-box {
				background-color: #fff;
				width:100%;
			}
		}
	}
	.ig1 {
		width:95vw;
		height:490rpx;
	}
</style>
