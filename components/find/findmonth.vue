<template>
<view class="contentcontent">
	<view class="TopThree">
		<view class="TopLeft Top">
			<view class="rank">
				2
			</view>
			<image class="anitor" src="http://rtrz9uulj.hn-bkt.clouddn.com/avater1.png" mode=""></image>
			<view class="name">
				空山新雨
			</view>
			<view class="time">
				11h28min
			</view>
			<view class="like-out">
				<image class="like" v-show="showmg" src="../../../static/like-off.png" mode="" @click="Changemg()"></image>
				<image class="like" v-show="!showmg" src="../../../static/like-on.png" mode="" @click="Changemg()"></image>
			</view>
		</view>
		<view class="TopMiddle Top">
			<view class="rank">
				1
			</view>
			<image class="anitor" src="http://rtrz9uulj.hn-bkt.clouddn.com/find/pic-one.png" mode=""></image>
			<view class="name">
				安山鸟语
			</view>
			<view class="time">
				12h
			</view>
			<view class="like-out">
				<image class="like" v-show="showIm" src="../../../static/like-off.png" mode="" @click="ChangeIm()"></image>
				<image class="like" v-show="!showIm" src="../../../static/like-on.png" mode="" @click="ChangeIm()"></image>
			</view>
		</view>
		<view class="TopRight Top">
			<view class="rank">
				3
			</view>
			<image class="anitor" src="http://rtrz9uulj.hn-bkt.clouddn.com/find/18%E6%9D%8E%E6%98%8E%E5%BA%B7.jpg" mode=""></image>
			<view class="name">
				WALKEPR
			</view>
			<view class="time">
				10h45min
			</view>
			<view class="like-out">
				<image class="like" v-show="showI" src="../../../static/like-off.png" mode="" @click="ChangeI()"></image>
				<image class="like" v-show="!showI" src="../../../static/like-on.png" mode="" @click="ChangeI()"></image>
			</view>
		</view>
	</view>
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
		
</view>
</template>

<script>
	export default {
			data() {
			    return {
			        items: ['今日实时榜', '周榜', '月榜'],
			        current: 0,
					showmg: true,
					showI:true,
					showIm:false,
					msg: [
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
			    };
			  },
			  
			  methods: {
				  // 跳转同级界面
			    onClickItem(e) {
			      if (this.current != e.currentIndex) {
			        this.current = e.currentIndex;
			      }
			    },
				// 修改点赞
				ChangeImg(i){
					// console.log('hh')
					this.msg[i].showImg = !this.msg[i].showImg
					console.log(this.msg[i].showImg )
				},
				ChangeI(){
					this.showI = !this.showI
				},
				ChangeIm(){
					this.showIm = !this.showIm
				},
				Changemg(){
					this.showmg =!this.showmg
				}
			  },
	}
	
</script>

<style lang="scss" scoped>
	.content {
		width: 100vw;
		.TopThree {
			width: 95vw;
			height: 430rpx;
			// background-color: pink;
			margin: 0 auto;
			padding-top: 55rpx;
			display: flex;
			justify-content: space-around;
			.Top {
				width: 30vw;
				height:360rpx;
				display: flex;
				position: relative;
				top: 0;
				left: 0;
				flex-direction: column;
				align-items: center;
				justify-content: space-around;
				border-top-left-radius:80rpx ;
				border-top-right-radius: 80rpx;
				// padding-top: 10rpx;
				background: linear-gradient(to bottom,#fe9022,#fff);
				.rank {
					position: absolute;
					top: -40rpx;
				}
				.anitor {
					margin-top: 30rpx;
				}
			}
			.TopLeft,.TopRight {
				margin-top: 50rpx;
				background: linear-gradient(to bottom,#f9c99f,#fff);
			}
		}
		.BomOther {
			width: 95vw;
			margin: 0 auto;
			// background-color: pink;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			&:last-child {
				border-bottom: 1px solid #fff0df;
			}
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
	}
		.like-out {
			width: 70rpx;
			height: 70rpx;
			// background-color: pink;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	
</style>