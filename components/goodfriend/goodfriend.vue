<template>
	<view class="outside">
		<uni-row class="demo-uni-row">
			<view class="demo-add" v-for="item in listArr">
				<uni-col :span="6">
					<view class="demo-uni-col">
						<image class="avater" :src="item.avator" mode=""></image>
					</view>
				</uni-col>
				<uni-col :span="12">
					<view class="demo-uni-col" style="padding-left: 20rpx;">
						<h1>{{item.name}}</h1>
						<view class="friend-text">
							{{item.text}}
						</view>
					</view>
				</uni-col>
				<uni-col :span="4">
					<view class="demo-uni-col">
						<image class="dialog" :src="item.dialog" @click="goChat()" mode=""></image>
					</view>
				</uni-col>
			</view>
		</uni-row>
		<view class="bottom-text">
			暂时没有更多了
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
					avator:"http://rtrz9uulj.hn-bkt.clouddn.com/mine/avater2.png",
					name:"山野都有雾灯",
					text:"前途与玫瑰，来日且方长",
					dialog:"../../static/dialog.png"
				},
				{
					id:'2',
					avator:"http://rtrz9uulj.hn-bkt.clouddn.com/mine/avater3.png",
					name:"808bass",
					text:"我没有选择权，生活推着我向前",
					dialog:"../../static/dialog.png"
				},
				{
					id:'3',
					avator:"http://rtrz9uulj.hn-bkt.clouddn.com/mine/avater4.png",
					name:"半夜汽笛",
					text:"拥有的都是侥幸，失去的都是人生",
					dialog:"../../static/dialog.png"
				}]
			}
		},
		data() {
			return {
				listArr:[]
			}
		},
		mounted() {
			var _this=this;
			_this.listArr=_this.listData
		},
		methods: {
			goChat(){
				uni.navigateTo({
					url:'/pagesFriend/pages/chat'
				})
			}
			
		}
	}
</script>

<style lang="scss">
	.outside {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}
.demo-uni-row {
	margin-bottom: 10rpx;
	margin-top: 10rpx;
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
	width: 97vw;
	
	
.demo-uni-col {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		// width: 90vw;
		height: 160rpx;
		border-bottom: 1px solid #ccc;
		// background-color: pink !important;
		
		.avater {
			width: 120rpx;
			height: 120rpx;
			margin: 0 auto;
		}
		
		h1 {
			font-size: 33rpx;
		}
		
		.friend-text {
			font-size: 22rpx;
		}
		
		.dialog {
			width: 60rpx;
			height: 60rpx;
		}
		
	}
}
.bottom-text {
	padding-top: 20rpx;
	font-size: 16rpx;
	color: #808080;
	// margin: 0 auto;
}
</style>
