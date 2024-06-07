<template>
	<view class="out">
		<view class="text">
			<view class="healthy">
				<view class="left">
					健康
				</view>
				<view class="right">
					<view class="trans"></view>
					<view class="en">
						HEALTH
					</view>
				</view>
			</view>
			<view class="report">
				<view class="right">
					<view class="en">
						REPORT
					</view>
					<view class="trans"></view>
				</view>
				<view class="left">
					报告
				</view>
			</view>
		</view>
		<view class="top">
			<image src="http://rtrz9uulj.hn-bkt.clouddn.com/mine/top.png"  mode=""></image>
		</view>
		<!-- <div class="line"></div> -->
		<image src="http://rtrz9uulj.hn-bkt.clouddn.com/mine/middle.png" class="middle" mode=""></image>
		<image src="http://rtrz9uulj.hn-bkt.clouddn.com/mine/bottom.png" class="bottom" mode=""></image>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.out {
		width: 100vw;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		image {
			width: 100vw;
			height: 50vh;
		}
		.text {
			position: absolute;
			top: 35rpx;
			right:170rpx;
			font-family: '方正楷体简体',Tahoma, Geneva, Verdana, sans-serif;
			color: #fff;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			.healthy,.report {
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
			.left {
				font-size: 60rpx;
			}
			.healthy .trans {
					width: 0rpx;
					height: 0rpx;
					margin-top: 12rpx;
					margin-left: 3rpx;
					// border-top: 10rpx solid transparent ;
					border-right:10rpx solid  transparent;
					border-left:10rpx solid  transparent;
					border-bottom: 40rpx solid #fff;
			}
			.right {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				.en {
					font-size: 20rpx;
				}
			}
			.report>.right{
				.en {
					margin-left:90rpx;
				}
				.trans{
			  	   margin-left: 140rpx;
			  	   width: 0rpx;
			  	   height: 0rpx;
			  	   border-right:10rpx solid  transparent;
			  	   border-left:10rpx solid  transparent;
			  	   border-top: 40rpx solid #fff;
			    }   
			}
		}
		.top {
			width: 100vw;
			height: 35vh;
			background-image: linear-gradient(to bottom,#c9def8,#61a5f2);
			image {
				margin-top: 8vh;
				height: 30vh;
			}
		}
		// .line {
		// 	width: 80vw;
		// 	height: 2vh;
		// 	background-color: pink;
		// 	border-radius: 50% 50% 0 0 ;
		// }
		.bottom {
			height: 60vh;
		}
	}
</style>