<template>
	<!-- 注意这个outside，不要让他作为所有盒子的父亲 -->
<view class="outside">
	<!-- 上半部 -->
		<uni-row class="demo-uni-row">
			<view class="demo-add" v-for="item in listArr">
				<uni-col :span="10">
					<view class="demo-uni-col">
						<image class="avater" :src="item.avator" mode=""></image>
						<!-- </view> -->
					</view>
				</uni-col>
				<uni-col :span="12">
					<view class="demo-uni-col" style="padding-left: 10rpx;height: 200rpx;">
						<h1>{{item.name}}</h1>
						<view style="font-size:26rpx;">
							个性签名
						</view>
						<view class="friend-text">
							{{item.text}}
						</view>
					</view>
				</uni-col>
				<uni-col :span="2">
					<view class="demo-uni-col">
						<view class="top-right">
							<image class="dialog" :src="item.dialog" mode="" @click="goDialog"></image>
						</view>
					</view>
				</uni-col>
			</view>
		</uni-row>
		
	<!-- 下半部 -->
		<view class="bottom" v-for="item in listAr">
				<view class="bottom-item" @click="goBottom(item.name)">
					<view class="bottom-left">
						<image class="ig" :src="item.avator" mode=""></image>
						<!-- <image src="../../../static/collect.png" mode=""></image> -->
					</view>
					<view class="bottom-right">
					{{item.name}}
					</view>
				</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			listData:{
				type:Array,
				default:()=>[{
					id:'1',
					avator:"http://rtrz9uulj.hn-bkt.clouddn.com/find/pic-one.png",
					name:"MUsiani Wanda",
					text:"Independent woman",
					dialog:"../../../static/remind.png"
				}]
			},
			listDT: {
				type:Array,
				default: ()=>[
				// 	{
				// 	avator:"../../../static/collect.png",
				// 	name:"我的收藏"
				// },
				{
					avator:"../../../static/medal.png",
					name:"我的勋章"
				},{
					avator:"../../../static/report.png",
					name:"我的报告"
				},{
					avator:"../../../static/pattern.png",
					name:"模式设定"
				},{
					avator:"../../../static/set.png",
					name:"设置"
				},
				// {
				// 	avator:"../../../static/feedback.png",
				// 	name:"意见反馈"
				// },
				]
			}
		},
		data() {
			return {
				listArr:[],
				listAr:[]
			}
		},
		mounted() {
			var _this=this;
			_this.listArr=_this.listData;
			_this.listAr=_this.listDT
		},
		methods: {
			goDialog(){
				// uni.navigateTo({
				// 	url:'/pagesMine/pages/dialog'
				// })
			},
			goBottom(e){
				// if(e=="我的收藏"){
				// 	uni.navigateTo({
				// 		url:'/pagesMinebottom/pages/bottom/collection'
				// 	})
				// }else 
				if(e=="我的勋章"){
					uni.navigateTo({
						url:'/pagesMinebottom/pages/bottom/medal'
					})
				}else if(e=="我的报告"){
					uni.navigateTo({
						url:'/pagesMinebottom/pages/bottom/report'
					})
				}else if(e=="模式设定"){
					uni.navigateTo({
						url:'/pagesMinebottom/pages/bottom/pattern'
					})
				}else if(e=="设置"){
					uni.navigateTo({
						url:'/pagesMinebottom/pages/bottom/setting'
					})
				}else if(e=="意见反馈"){
					uni.navigateTo({
						url:'/pagesMinebottom/pages/bottom/fallback',
						// pages/tabbar/mine/bottom/fallback
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.outside {
		// 注意这个outside，不要让他作为所有盒子的父亲
		align-items: flex-start;
	}
.demo-uni-row {
	margin-bottom: 10rpx;
	/* QQ、字节小程序文档写有 :host，但实测不生效 */
	/* 百度小程序没有 :host，需要设置block */
	/* #ifdef MP-TOUTIAO || MP-QQ || MP-BAIDU */
	display: block;
	width:100vw;
	/* #endif */
}
/* 支付宝小程序没有 demo-uni-row 层级 */
/* 微信小程序使用了虚拟化节点，没有 demo-uni-row 层级 */
/* #ifdef MP-ALIPAY || MP-WEIXIN */
 .uni-row {
	width: 100vw;
}
/* #endif */
.demo-add {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	box-sizing: border-box;
	padding-left: 30rpx;
	margin-top: 20rpx;
	margin-bottom: 30px;
	
	
.demo-uni-col {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		// width: 90vw;
		height: 280rpx;
		// border-bottom: 1px solid #ccc;
		// background-color: pink !important;
		
		.avater {
			width: 200rpx;
			height: 200rpx;
			margin: 0 auto;
			// background-image: url(../../../static/avater2.png);
		}
		
		h1 {
			font-size: 33rpx;
			font-weight: 900;
		}
		
		.friend-text {
			font-size: 25rpx;
		}
		.top-right {
			position: relative;
			top: -65rpx;
			left: -80rpx;
			width: 50rpx;
			height: 50rpx;
			border-radius: 50%;
			border: 1px solid #ccc;
			display: flex;
			justify-content: center;
			align-items: center;
			.dialog {
				width: 45rpx;
				height: 45rpx;
			}
		}

		
	}
}
.bottom {
	display: flex;
	width: 50vw;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-start;
	padding-left: 60rpx;
	
	.bottom-item {
		width: 90vw;
		height: 120rpx;
		line-height: 120rpx;
		// background-color: pink;
		display: flex;
		justify-content: flex-start;
		// border-bottom: 1rpx solid #ccc;
		// margin: 30rpx 0;
		.bottom-left {
			width: 15vw;
			height: 60rpx;
			.ig {
				width: 65rpx;
				height: 70rpx;
			}
		}
		.bottom-right {
			width: 35vw;
			height: 70rpx;
			line-height:70rpx;
			font-size: 35rpx;
		}
		
	}
}
</style>
