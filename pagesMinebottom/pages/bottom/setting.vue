<template>
	<view class="out">
		<image class="top" src="http://rtrz9uulj.hn-bkt.clouddn.com/mine/setting.png" mode=""></image>
		<view class="title">轻触头像以切换账号</view>
	
		<view class="anitor">
			<view class="left">
				<image class="tu" src="http://rtrz9uulj.hn-bkt.clouddn.com/mine/avater2.png"></image>
				<view class="text">
					<view class="name">
						Musiani Wanda
					</view>
					<view class="tel">
						15192303102
					</view>
				</view>
			</view>
			<view class="right">
				<view class="dot"></view>
				当前使用
			</view>
		</view>
		
		<view class="anitor">
			<image class="out" src="@/static/mine/juxing.png" mode=""></image>
			<view class="add">
				添加账号
			</view>
		</view>
		
	</view>
</template>

<script>

export default {
	data(){
		
	}
}
</script>

<style lang="scss">
	.out {
		width: 100vw;
		height: 100vh;
		background-color:  #f8f8f8;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		.top {
			// margin: 0 auto;
			width: 220rpx;
			height: 220rpx;
			border-radius: 50%;
			margin: 40rpx 0;
		}
		.title {
			// width: 80vw;
			text-align: center;
			font-size:55rpx;
			margin:30rpx 0;
			margin-bottom: 110rpx;
		}
		.anitor {
			height: 10vh;
			width: 95vw;
			margin-top:30rpx;
			background-color: #fff;
			border-radius: 10rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.left {
				width: 56vw;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.tu {
					width: 130rpx;
					height:130rpx;
					border-radius: 50%;
					margin-left: 10rpx;
				}
				.text {
					width: 260rpx;
					// background-color: pink;
					height: 8vh;
					// margin-left: 10rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: flex-start;
					.name {
						font-size: 34rpx;
					}
					.tel {
						font-size: 28rpx;
						color: #b7b7b7;
					}
				}
			}
			.right {
				width: 22vw;
				text-align: center;
				padding-bottom: 80rpx;
				padding-right: 20rpx;
				.dot {
					display:inline-block;
					width: 16rpx;
					height: 16rpx;
					// transform: translate(-50%,0);
					background-color: #f5b26d;
					border-radius: 50%;
				}
		    }
			.out {
				width: 110rpx;
				height: 110rpx;
				margin-left: 20rpx;
				border-radius: 0%;
			}
			.add {
				font-size: 36rpx;
				margin-right: 54vw;
			}
	 }
}
</style>