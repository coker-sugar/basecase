<template>
	<view class="BomOther" v-for="(item,index) in msg" :key="item.id">
		<view class="BomText">
				<view class="rank">
					{{item.id}}
				</view>
				<image class="anitor" :src="item.anitor" mode=""></image>
				<view class="name">
					{{item.name}}
				</view>
				<view class="time">
					{{item.time}}
				</view>
				<view class="like-out" @click="ChangeImg(index)">
					<image class="like" v-show="item.showImg" src="../../../static/like-off.png" mode="" ></image>
					<image class="like" v-show="!item.showImg" src="../../../static/like-on.png" mode=""></image>
				</view>
		</view>
	</view>
	<view class="tail">
		没有更多了
	</view>
	
	<view class="BomTextwo">
			<image class="anitor" :src="myself.anitor" mode=""></image>
			<view class="MiddleText">
				<view class="text-top">
					<view class="name">
						{{myself.name}}
					</view>
				</view>
				<view class="text">
					我的排名：{{myself.id}}
				</view>
			</view>
			<view class="sit">
				正确坐姿：{{myself.time}}
			</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				myself:{
					id:"1",
					anitor:"http://rtrz9uulj.hn-bkt.clouddn.com/find/pic-one.png",
					name:"Musiani Wanda",
					time:"12h",
					text:"描述"
				},
				msg: [
					{
						id:"1",
						showImg:true,
						anitor:"http://rtrz9uulj.hn-bkt.clouddn.com/find/pic-one.png",
						name:"Musiani Wanda",
						time:"12h",
					},
					{
						id:"2",
						showImg:false,
						anitor:"http://rtrz9uulj.hn-bkt.clouddn.com/avater1.png",
						name:"空山新雨",
						time:"11h28min",
					},
					{
						id:"3",
						showImg:true,
						anitor:"http://rtrz9uulj.hn-bkt.clouddn.com/find/18%E6%9D%8E%E6%98%8E%E5%BA%B7.jpg",
						name:"WALKEPR",
						time:"10h45min",
					},
					{
						id:"4",
						showImg:false,
						anitor:"http://rtrz9uulj.hn-bkt.clouddn.com/find/%E5%BC%A0%E5%9C%A3.jpg",
						name:"所思在远道",
						time:"9h18min",
					},
					{
						id:"5",
						showImg:false,
						anitor:"http://rtrz9uulj.hn-bkt.clouddn.com/find/%E4%BA%8E%E6%B8%AF.jpg",
						name:"renaissance",
						time:"9h06min",
					},
					{
						id:"6",
						showImg:true,
						anitor:"http://rtrz9uulj.hn-bkt.clouddn.com/find/%E5%A4%8F%E9%9B%AA%E6%80%A1.jpg",
						name:"biossming",
						time:"8h16min",
					},
					{
						id:"7",
						showImg:false,
						anitor:"http://rtrz9uulj.hn-bkt.clouddn.com/find/%E6%9D%8E%E4%B8%9C%E5%B8%86.jpg",
						name:"邱子平",
						time:"8h5min",
					},
					{
						id:"8",
						showImg:true,
						anitor:"http://rtrz9uulj.hn-bkt.clouddn.com/find/19%E6%96%87%E5%8F%B6%E8%A1%A1.jpg",
						name:"李昊wo",
						time:"7h35min",
					},
					{
						id:"9",
						showImg:true,
						anitor:"http://rtrz9uulj.hn-bkt.clouddn.com/find/%E5%90%B4%E8%99%B9.jpg",
						name:"cx330",
						time:"7h15min",
					},
				]
			}
		},
		methods:{
			ChangeImg(i){
				// console.log('hh')
				this.msg[i].showImg = !this.msg[i].showImg
				console.log(this.msg[i].showImg )
			},
		}
	}
</script>

<style lang="less">
	.BomOther {
			width: 95vw;
			margin: 0 auto;
			// background-color: pink;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			
			.BomText {
				width: 95vw;
				height: 160rpx;
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				align-items: center;
				border: 6rpx solid #fff0df;
				border-bottom: none;
				border-radius: 20rpx;			
				.name,.time {
					font-weight: normal;
				}
			}
			&:nth-of-type(9) {
				border-bottom: 2px solid #fff0df;
				margin-bottom: 20rpx;
			}
		}
		.rank {
			font-family: 'Courier New', Courier, monospace;
			font-weight: 900;
			font-size: 80rpx;
		}
		image {
			width: 150rpx;
			height:150rpx;
			border-radius: 50%;
		}
		.name .time {
			font-size: 40rpx;
			font-weight: 700;
		}
		.like {
			width:45rpx;
			height: 45rpx;
		}
		.tail {
			width: 140rpx;
			height: 30rpx;
			// background-color: pink;
			font-size: 26rpx;
			margin: 0 auto;
			padding-bottom: 20rpx;
		}
		.like-out {
			width: 70rpx;
			height: 70rpx;
			// background-color: pink;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.BomTextwo {
			width: 100vw;
			height: 160rpx;
			position: fixed;
			bottom: 0rpx;
			background-color: #ffdfc0;
			display: flex;
			// flex-direction: row;
			justify-content: space-around;
			align-items: center;
			border-bottom: 1px solid #ededee;		
			.anitor {
				width: 100rpx;
				height:100rpx;
				border-radius: 50%;
				border:1rpx solid #b0cef0;
				margin-left: 30rpx;
			}
			.MiddleText {
				width: 50%;
				// background-color: #ffdfc0;
				height: 120rpx;
				// background-color: pink;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				align-items: flex-start;
				.text-top {
					width: 100%;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					.name {
						font-size: 32rpx;
						font-weight: 600;
					}
				}
				.text {
					font-size: 34rpx;
					// color: #aeb7c1;
				}
			}
			.sit {
				width: 150rpx;
				font-size: 30rpx;
				white-space: nowrap;
				position: relative;
				right: 60rpx;
				top: 30rpx;
				
			}
		}
</style>