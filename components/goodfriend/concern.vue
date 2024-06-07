<template>
	<view class="outside">
		<uni-row class="demo-uni-row">
			<view class="demo-add" v-for="item in listArr" index="item.id">
				<uni-col :span="6">
					<view class="demo-uni-col">
						<image class="avater" :src="item.avator" mode=""></image>
					</view>
				</uni-col>
				<uni-col :span="10">
					<view class="demo-uni-col" style="padding-left: 20rpx;">
						<h1>{{item.name}}</h1>
						<!-- <view class="friend-text">
							{{item.text}}
						</view> -->
					</view>
				</uni-col>
				<uni-col :span="6">
					<view class="demo-uni-col">
						<view class="bottom">
						  <button  class="attention {{item.likes=='0'?'attentionBg':''}}" @click="getUserInfo(item)">{{item.likes=='0'?'已关注':'关注'}}</button>
						</view>
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
					id:0,
					avator:"http://rtrz9uulj.hn-bkt.clouddn.com/friend/friend1.png",
					name:"Keep",
					likes:1
				},
				{
					id:1,
					avator:"http://rtrz9uulj.hn-bkt.clouddn.com/friend/friend2.png",
					name:"小优不想写作业",	
					likes:1
				},
				{
					id:2,
					avator:"http://rtrz9uulj.hn-bkt.clouddn.com/friend/friend3.png",
					name:"风止无落叶",
					likes:1
				},
				{
					id:3,
					avator:"http://rtrz9uulj.hn-bkt.clouddn.com/friend/friend4.png",
					name:"程甘",
					likes:1
				}
				]
			}
		},
		data() {
			return {
				listArr:[],
			}
		},
		mounted() {
			var _this=this;
			_this.listArr=_this.listData
		},
		methods: {
			  getUserInfo(e){
			    let index = e.id
			    let that = this
			    let likes = e.likes
			    if (likes==1){
			      that.listArr[index].likes = 0
			      console.log(e.likes,"关注了")
			    }else{
			     that.listArr[index].likes = 1
			      console.log(e.likes, "取关了")
			    }
			  },
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
		// align-items: center;
		// width: 90vw;
		height: 160rpx;
		border-bottom: 1px solid #ccc;
		// background-color: pink !important;
		
		.avater {
			width: 120rpx;
			height: 120rpx;
			margin: 0 auto;
			border-radius: 50%;
		}
		
		h1 {
			font-size: 33rpx;
		}
		
		
		.dialog {
			width: 60rpx;
			height: 60rpx;
		}
		
	}
}
.bottom{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 150rpx;
  height: 70rpx;
  margin-right: 160rpx;
  // background-color: pink;
  .attention {
    width:150rpx;
    height: 60rpx;
    background:rgba(204, 204, 204, 1);
    color: black;
    border-radius: 8rpx;
    font-size: 24rpx;
    line-height: 60rpx;
	font-size: 28rpx;
  }
  .attentionBg {
    background-color: rgba(244, 164, 96, 0.89) !important;
  }
  
}
.bottom-text {
	padding-top: 20rpx;
	font-size: 16rpx;
	color: #808080;
	// margin: 0 auto;
}
</style>
