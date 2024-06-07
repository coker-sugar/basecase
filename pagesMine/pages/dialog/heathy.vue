<template>
<uni-search-bar class="uni-mt-10" radius="100" :placeholder="searchValue"  cancelButton="none"/>
	<view class="healthy" v-for="(item,index) in msg" :key="msg.id">
		<view class="time">{{item.time}}</view>
		<view class="text" :style="{height:dowHeight}">
			
			<view class="top">
				<view class="dot" v-if="item.decide"/>
				<view class="title">
					{{item.name}}
				</view>
			</view>
			<p class="inner" >
				{{item.text}}
			</p>
		</view>
	</view>
</template>

<script>
	export default {
		options: {
					styleIsolation: 'shared'
				},
		data(){
			return {
				msg: [
					{
						id:"0",
						name:"每日运动30分钟",
						text:"许多研究都指出，每天运动30分钟就有好处，包括预防心脏病、糖尿病等，甚至有研究指出，运动可以让人感到快乐，增强自信心。如果你很久没有运动，可以从走路运动开始，每天快走20～30分钟，持续走下去，一定能感受到许多好处。",
						decide:true,
						time:"刚刚"
					},
					{
						id:"1",
						name:"适当晒阳光",
						text:"阳光是一种天然的兴奋剂。最好的提神方法是在晨曦中做30分钟的散步或慢跑。因为这可以使身体贮存大量的维生素D，有助于维护骨骼和牙齿的强健。太阳下还是很好的物理消毒场所。",
						// decide:"false",
						time:"5小时前"
					},
					{
						id:"2",
						name:"提高睡眠质量",
						text:"良好的睡眠可以让身体得到充分休息，增强肌肉质量。如何拥有好的睡眠呢?第一，睡前30分钟关掉电子产品;第二，房间光线保持昏暗;第三，确保睡眠时间每天达到7-8小时。",
						// decide:"false",
						time:"5天前"
					}],
					searchValue:'Search...',
					value:'',
					dowHeight:'400rpx'
			}
		},
		methods:{
			getDomConfig() {
				 let that = this
				 console.log(that.msg[0].text.length )
				 let info = uni.createSelectorQuery().select(".text");
				 info.boundingClientRect(function(data) { //data - 各种参数
				    console.log(data) // 获取元素的相关信息
					
					 if (that.msg[0].text.length > 100) {
						 that.dowHeight = '500rpx'
					 } else {
						 that.dowHeight = '400rpx'
					 }
				 }).exec() 
			},
		},
		onShow() {
				// console.log(this.msg[0].text.length)
				// console.log(this.msg[1].text.length)
		}
	}
</script>

<style lang="scss" scoped>
	.uni-search-bar {
		padding-top: 10rpx;
		background-color: #f6f6f6;
	}
	.healthy {
		width: 100vw;
		padding-top: 20rpx;
		background-color: #f6f6f6;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		.time {
			font-size: 22rpx;
			font-weight: 400;
			color: #aeb7c1;
			margin-bottom: 10rpx;
		}
		.text {
			width: 85vw;
			// height: 500rpx;
			margin: 0 auto;
			background-color: #fff;
			border-radius: 20rpx;
			margin-bottom: 50rpx;
			.top {
				.title {
					display:inline-block;
					margin: 20rpx;
					color: #ff9e3d;
					font-size: 24rpx;
				}
				.dot {
					display:inline-block;
					width: 15rpx;
					height: 15rpx;
					margin-left: 10rpx;
					// margin-right: 10rpx;
					border-radius: 50%;
					background-color: #ff1a1a;
				}
			}
			.inner {
				width: 72vw;
				text-indent: 2em;
				padding-top: 10rpx;
				margin: 0 auto;
				// text-align: center;
			}
		}
	}
</style>