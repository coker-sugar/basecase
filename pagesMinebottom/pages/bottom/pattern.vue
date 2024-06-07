<template>
	<view class="out" >
		<view class="" v-for="(item,index) in msg" :key="msg.id">
			<view class="top">
				<view class="left">
					{{item.name}}
				</view>
				<view class="right">
					<switch @change="switchChange" color="#f7b16a" :checked="checkoutInfo.checked" style="zoom:.7" />
				</view>
			</view>
			<view class="text">
				{{item.text}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				msg:[
				{
					id:'0',
					name:'强力监管',
					isShow:true,
					text:'在该模式下，会对您的正确坐姿要求和久坐时长管理都会更高一些，当您处于不正确坐姿情况下以及久坐时长超过适宜时长时，对您的提醒频率比较高！'
				},
				{
					id:'1',
					name:'适度提醒',
					isShow:true,
					text:'在该模式下，会对您的正确坐姿要求以及久坐时长管理较松一些，当您处于不正确坐姿情况下时，对您的提醒频率为中等！久坐时长达到危害身体对应的时长才会进行提醒。'
				},
				{
					id:'2',
					name:'轻松自由',
					isShow:true,
					text:'在该模式下，会对您的正确坐姿要求以及久坐时长管理均为无，当您的坐姿和久坐时长不进行提醒，只会在对应数据图中展现。'
				},
			],
			checkoutInfo: {
				isShowEle: true,
				checked: false,
			}, 
			}
		},
		methods: {
			switchChange(e) {
				// console.log(e)
				var canHandOver = e.detail.value ? 1 : 0
				//调用某个requst接口，可能因网络原因不成功，要强制修改开关
				if (data.data.data.success == false) { //不成功
					this.showMsg(data.data.data.msg)
					this.$set(this.checkoutInfo, "isShowEle", false) //先隐藏switch组件
					this.$set(this.checkoutInfo, "checked", !e.detail.value) //修改checked绑定的变量值
					this.$nextTick(() => {
						setTimeout(() => {
							this.$set(this.checkoutInfo, "isShowEle", true) //显示switch组件
							this.$forceUpdate() //强制更新
						}, 0)
					})
					 return
				}
			}
		}
	}
</script>

<style lang="scss">
	.out {
		width: 100vw;
		height:98vh;
		padding-top: 2vh;
		background-color: #f8f8f8;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		font-family: '方正楷体简体';
		.top {
			width: 90vw;
			height:85rpx;
			line-height: 90rpx;
			margin-bottom: 20rpx;
			border-radius: 15rpx;
			background-color: #fff;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.left {
				margin-left: 30rpx;
				font-size: 34rpx;
				font-weight: 400;
				// font-family: '宋体';
			}
			.right {
				margin-right: 30rpx;
			}
		}
		.text {
			margin:0 auto;
			width: 85vw;
			font-size: 30rpx;
			font-weight: 400;
			color: rgba(166, 166, 166, 1);
			text-align: left;
			vertical-align: top;
			padding-bottom: 60rpx;
		}
	}
</style>