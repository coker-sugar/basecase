<template>
	<view>
			<uni-segmented-control style="font-size: 30rpx;" class="top-title" :current="current" :values="items" @clickItem="onClickItem" styleType="text" activeColor="#ff8d1a"></uni-segmented-control>
	        <view class="content">
	            <view v-show="current === 0">
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
				
					<view class="look" @click="goLook()">
						查看所有 >>
					</view>
					

					<view class="question">
						<view class="title">
							<view class="lt">每日小问</view>
							<img class="pic" src="http://rtrz9uulj.hn-bkt.clouddn.com/find/add.png" alt="">
						</view>
										
						<view class="article" v-for="(item,index) in intro" :key="item.id">
							<view class="item">
								<view class="tle">
									{{item.title}}
								</view>
								<view class="inner">
										<img class="pic" :src="item.url" alt="">
									<view class="rtext">
										<view class="top">{{item.que}}</view>
										<view class="btm">
											{{item.text}}
										</view>
									</view>
								</view>
								<view class="bom">
									<view class="left">
										<img class="tu" :src="item.anitor" alt="">
										<view class="biao">{{item.name}}</view>
										<!-- &gt; -->
									</view>
									
										<img class="right" src="http://rtrz9uulj.hn-bkt.clouddn.com/find/%E6%92%AD%E6%94%BE.png" alt="">
									
								</view>
							</view>
						</view>
					</view>
				</view>

	            <view v-show="current === 1">
	                <findweek/>
	            </view>
	            <view v-show="current === 2">
	                <findmonth/>
	            </view>
	        </view>
	
	</view>
</template>

<script>
	import findweek from "@/components/find/findweek.vue"
	import findmonth from "@/components/find/findmonth.vue"
	// import question from "@/components/find/question.vue"
	export default {
		components:{
			findweek,
			findmonth,
			// question
		},
		data() {
		    return {
		        items: ['今日实时榜', '周榜', '月榜'],
		        current: 0,
				showmg: true,
				showI:true,
				showIm:false,
				intro:[
					{
					id:0,
					url:"http://rtrz9uulj.hn-bkt.clouddn.com/find/%E8%8D%AF%E6%9D%90.png",
					title:"[养生知识] 推荐你了解",
					que:"秋季养生为何重在“养肺”？",
					text:"《黄帝内经》有论述：“肺朝百脉”，指全身的血液都通过脉络汇聚于肺，通过肺的呼吸、吐故纳新。但肺部比较“娇气”，在秋天尤其容易被外邪侵袭而发病，影响...",
					anitor:"http://rtrz9uulj.hn-bkt.clouddn.com/find/pic-one.png",
					name:"新五禽戏·宣肺理气   >",
				},{
					id:1,
					url:"http://rtrz9uulj.hn-bkt.clouddn.com/find/dream.png",
					title:"[健身增肌] 推荐你了解",
					que:"还在用仰卧起坐练腹肌？小心你的腰",
					text:"练腹肌要注意选择正确动作，练习不当容易导致腰痛甚至腰间盘的永久损伤。而仰卧起坐看似是练腹的“经典动作”，实际却让腰部承受着更大压力，不仅效果一般，还会...",
					anitor:"http://rtrz9uulj.hn-bkt.clouddn.com/find/%E5%A4%8F%E9%9B%AA%E6%80%A1.jpg",
					name:"零基础腹肌训练   >",
				},{
					id:2,
					url:"http://rtrz9uulj.hn-bkt.clouddn.com/find/river.png",
					title:"[梦境解读] 推荐你了解",
					que:"梦，是一种原始认识",
					text:"我们每个人都做过梦，其中有些梦可能很多人都做过，比如梦见自己会飞，梦见被人追赶，梦见考试等等。那么，这些梦是什么意思？我们为什么会做这些梦...",
					anitor:"http://rtrz9uulj.hn-bkt.clouddn.com/find/19%E6%96%87%E5%8F%B6%E8%A1%A1.jpg",
					name:"成为自己的解梦师  >",
				}
				],
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
			},
			goLook(){
				uni.navigateTo({
					url:'/pagesFind/pages/find'
				})
			}
		  },
}

</script>

<style lang="scss">
view,image {
	margin: 0;
	padding: 0;
}
.top-title {
		width: 90vw;
		font-size: 30px !important;
		margin-bottom: 10rpx;
		&:active {
			font-size: 30rpx;
		}
	}
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
		&:nth-of-type(7) {
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
}
	.like-out {
		width: 70rpx;
		height: 70rpx;
		// background-color: pink;
		display: flex;
		justify-content: center;
		align-items: center;
	}
.look {
	float: right;
	// top: 1vh;
	// left: 70vw;
	font-size: 28rpx;
	color: #ff8d1a;
}
.look::after {
	content: "";
	display: block;
	height: 0;
	clear:both;
	visibility: hidden;
	margin-bottom: 20rpx;
}
.question {
	// margin-top: 20rpx;
	width: 95%;
	height:108vh;
	margin:0 auto;
	margin-bottom: 30rpx;
	border-radius: 20rpx;
	box-shadow: rgba(255, 141, 26, 1) 0px 3px 10px -2px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	.title {
		box-sizing: border-box;
		width: 100%;
		height: 6vh;
		// background-color: pink;
		display: flex;
		padding: 0 40rpx;
		justify-content: space-between;
		align-items: center;
		.lt {
			font-size: 30rpx;
		}
		.pic {
			width: 60rpx;
			height: 60rpx;
		}
	}
	.article {
		width: 90vw;
		// height: 200vh;
		padding: 0;
		// height: ;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		margin-bottom: 20rpx;
		.item {
			width: 95%;
			margin:15rpx 0;
		
			// height: 30vh;
			display: flex;
			background-color: #fffaf5;
			border-radius: 20rpx;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
			.tle {
				position: relative;
				top: 0rpx;
				left: -23%;
				padding: 20rpx;
			}
			.inner {
				width: 100%;
				height: 20vh;
				display: flex;
				justify-content: space-around;
				align-items: center;
				
				.pic {
					width: 150rpx;
					height: 220rpx;
					border-radius: 0;
				}
				.rtext {
					width: 65%;
					height: 100%;
					display: flex;
					font-size: 26rpx;
					flex-direction: column;
					justify-content: space-around;
					align-items: center;
					.top {
							font-size: 30rpx;
							// font-weight: 600;
							color: #ec9040;
					}
				}
			}
			.bom {
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.left {
					width: 60%;
					display: flex;
					justify-content: space-around;
					align-items: center;
					.tu {
						width: 60rpx;
						height: 60rpx;
					}
				}
				.right {
					width: 60rpx;
					height: 60rpx;
				}
			}
		}
	}
}
</style>
