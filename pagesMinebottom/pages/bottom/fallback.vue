<template>
<view class="out">
	
		<view class="top">
			<view class="left">问题和意见</view>
			<view class="number">0/200</view>
		</view>
		
		<textarea class="input-question" type="text" v-model="formData.text" placeholder="请输入"/>
		
		<view class="top">
			<view class="left">图片（选填，提供问题截图）</view>
			<view class="number">0/4</view>
		</view>

		<view class="example-body">
			<uni-file-picker limit="4" style="background-color: #f6f6f6;"></uni-file-picker>
		</view>

		
		<view class="tel">联系电话</view>
		
		<textarea  class="select" type="text" placeholder="选填,便于我们与你联系" v-model="formData.tel"/>

	<button class="bto" @click="submitForm">提交</button>
</view>
</template>

<script>
	export default {
		data(){
			return {
				formData:{
					text:"",
					tel:""
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.out {
		width: 100vw;
		height: 100vh;
		background-color: #f6f6f6;
		font-size: 36rpx;
		color: rgba(166, 166, 166, 1);
		display:flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		.input-question {
			width: 90vw;
			height: 20vh;
			border-radius: 30rpx;
			background-color: #fff;
			font-size: 36rpx;
			padding-left: 20rpx;
			padding-top: 20rpx;
		}
		.top {
			width: 90vw;
			height: 100rpx;
			line-height:100rpx;
			// background-color: pink;
			display:flex;
			justify-content: space-between;
			align-items: center;
		}
		.example-body {
			width: 86vw;
			height:16vh;
			background-color: #fff;
			border-radius: 30rpx;
			padding: 10px;
			padding-left: 30rpx;
			display: flex;
			justify-content: flex-start;
			align-items: center;
		}
		.select {
			width: 90vw;
			height: 5vh;
			line-height: 5vh;
			padding-top: 16rpx;
			background-color: #fff;
			border-radius: 16rpx;
			padding-left: 10rpx;
			
		}
		.tel {
			position: relative;
			left: -35vw;
			top: 2vh;
			height: 6vh;
		}
		.bto {
			width: 30vw;
			height: 5vh;
			background-color: rgba(244, 164, 96, 0.89);
			text-align: center;
			color: #fff;
			line-height: 5vh;
			margin-top: 3vh;
		}
	}


	// .custom-image-box {
	// 	/* #ifndef APP-NVUE */
	// 	display: flex;
	// 	/* #endif */
	// 	flex-direction: row;
	// 	justify-content: space-between;
	// 	align-items: center;
	// }


	// nvue中穿透不生效 ::v-deep
	//  ::v-deep u-uni-easyinput {
	// 	display: block!important;
	// 	width: 90vw!important;
	// 	height: 500rpx;
	// 	background-color: #fff;
	// }
</style>