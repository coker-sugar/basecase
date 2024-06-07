<template>
	<!-- 注意这个outside，不要让他作为所有盒子的父亲 -->
	<view class="outside">
		<view class="head">
			<view class="aside">
				<img class="anitor" src="http://rtrz9uulj.hn-bkt.clouddn.com/find/pic-one.png" alt="">
				<view class="name">
					<h1 class="name-top">Musiani Wanda</h1>
					<h5 class="name-region">长安区|阴 10℃</h5>
				</view>
			</view>
			<view class="raside">
					<img class="dialog" src="http://rtrz9uulj.hn-bkt.clouddn.com/find/dialog.png" alt="">
				<view class="add">
					<img class="tu" src="http://rtrz9uulj.hn-bkt.clouddn.com/find/adden.png" alt="" srcset="">
				</view>
			</view>
		</view>
		<image class="ig1" src="http://rtrz9uulj.hn-bkt.clouddn.com/index/index_test.png"></image>
		<view class="change">
			<view class="top">
				<h3 class="left">模式切换</h3>
				<h5 class="right">当前剩余电量：70%</h5>
			</view>
			<view class="bottom">
				<view class="left">
					<view class="work">
						工作模式
					</view>
					<switch id="one" @change="switchChange('one')" color="#f7b16a" :checked="checkoutInfo.oneChecked"
						style="zoom:.7" />
				</view>
				<view class="right">
					<view class="sleep">
						休息模式
					</view>
					<switch id="two" @change="switchChange('two')" color="#f7b16a" :checked="checkoutInfo.twoChecked"
						style="zoom:.7" />
				</view>
			</view>
		</view>
		<!-- <image class="ig2" src="http://rtrz9uulj.hn-bkt.clouddn.com/index/index-test2.png" mode=""></image> -->

	</view>

</template>

<script>
	export default {
		data() {
			return {
				checkoutInfo: {
					isShowEle: true,
					oneChecked: true,
					twoChecked: false,
				},
			}
		},
		onReady() {
			
		},
		methods: {
			switchChange(id) {
				if (id === 'one') {
					// 如果 one 被打开，关闭 two
					if (this.checkoutInfo.oneChecked == false) {
						this.checkoutInfo.oneChecked = true;
						this.checkoutInfo.twoChecked = false;
					} else {
						this.checkoutInfo.oneChecked = false;
						this.checkoutInfo.twoChecked = true;
					}
				} else if (id === 'two') {
					// 如果 two 被打开，关闭 one
					if (this.checkoutInfo.twoChecked == false) {
						this.checkoutInfo.oneChecked = false;
						this.checkoutInfo.twoChecked = true;
					} else {
						this.checkoutInfo.oneChecked = true;
						this.checkoutInfo.twoChecked = false;
					}
				}
			},
			
		}
	}
</script>

<style lang="scss">
	.outside {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

		.head {
			width: 100vw;
			height: 14vh;
			// background-color: pink;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.aside {
				position: relative;
				left: -7vw;
				width: 60vw;
				height: 10vh;
				border-top-right-radius: 50rpx;
				border-bottom-right-radius: 50rpx;
				box-shadow: rgba(255, 141, 26, 1) 0px 3px 10px -2px;
				display: flex;
				justify-content:flex-end;
				align-items: center;
				.anitor {
					width: 80rpx;
					height: 80rpx;
					border-radius: 50%;
				}
				.name {
					width: 40vw;
					height: 10vh;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					.name-top {
						font-size: 30rpx;
						font-weight: 700;
					}
					.name-region {
						font-size: 26rpx;
					}
				}
			}

			.raside {
				width: 28vw;
				height: 18vh;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.dialog {
					width: 50rpx;
					height: 50rpx;
					border-radius: 50%;
					font-size: 30rpx;	
				}

				.add {
					width: 18vw;
					height: 10vh;
					border-top-left-radius: 50rpx;
					border-bottom-left-radius: 50rpx;
					background-color:#ffdfc0;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.tu {
						width: 40rpx;
						height: 40rpx;
						margin: 0 auto;
					}
				}
			}
		}

		.ig1 {
			width: 700rpx;
			height: 950rpx;
		}

		.ig2 {
			width: 700rpx;
			height: 500rpx;
		}

		.change {
			margin: 0 auto;
			width: 90vw;
			height: 24vh;
			margin: 0;
			padding: 0;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;

			.top {
				width: 100%;
				height: 6vh;
				// background-color: pink;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.left {
					font-size: 38rpx;
				}

				.right {
					color: rgba(255, 141, 26, 1);
				}
			}

			.bottom {
				width: 100%;
				height: 16vh;
				// background-color: pink;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.left,
				.right {
					width: 45%;
					height: 70%;
					box-shadow: rgba(255, 141, 26, 1) 0px 3px 10px -2px;
					border-radius: 10%;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: center;

					.work,
					.sleep {
						font-size: 36rpx;
					}
				}
			}
		}
	}


</style>