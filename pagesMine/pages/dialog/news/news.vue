<template>
	<uni-search-bar class="uni-mt-10" radius="100" :placeholder="searchValue"  cancelButton="none"  v-model="value" @click="Search"/>
	<view class="BomOther" v-for="(item,index) in msg" :key="item.id">
		<view class="BomText" @click="goInner(item.id)">
				<view class="MiddleText">
					<view class="text-top">
						<view class="dot" v-show="item.decide"/>
						<view class="name">
							{{item.name}}
						</view>
						<view class="right">
							{{item.time}}
						</view>
					</view>
					<view class="text">
						{{item.text}}
					</view>
				</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				msg: [
					{
						id:"0",
						name:"WHO实锤“久坐伤身”，运动自救“指南”来了",
						text:"过节别光坐着过，赶紧活动一下！",
						decide:true,
						time:"刚刚"
					},
					{
						id:"1",
						name:"久坐的危害以及预防措施",
						text:"久坐伤损五脏，容易造成亚健康状态，容易形成过度......",
						// decide:"false",
						time:"2小时前"
					},
					{
						id:"2",
						name:"不得不久坐时，一个摆烂小动作能减轻危害",
						text:"过段事件，很多[阳康]的朋友陆续开始复工了，只是......",
						// decide:"false",
						time:"1天前"
					}],
					searchValue:'Search...',
					value:''
			}
		},
		methods: {
			goInner(e){
				if(e==0 || e==1){
					uni.navigateTo({
						url:'/pagesMine/pages/dialog/news/text-one'
				  })
				this.msg[0].decide = false
				console.log(this.msg[0].decide)
				}else if(e==2){
					uni.navigateTo({
						url:'/pagesMine/pages/dialog/news/text-three'
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.BomOther {
		width: 85vw;
		margin: 0 auto;
		// background-color: pink;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		.BomText {
			width: 85vw;
			height: 180rpx;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			border-bottom: 1px solid #ededee;		
			.MiddleText {
				width: 100%;
				height: 180rpx;
				// background-color: pink;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				align-items: flex-start;
				.text-top {
					width: 100%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					white-space: pre-line;
					.dot {
						width: 13rpx;
						height: 13rpx;
						margin-bottom: 50rpx;
						transform: translate(-50%,0);
						background-color: #ff1a1a;
						border-radius: 50%;
					}
					.name {
						width: 80%;
						font-size: 30rpx;
						// font-weight: 500;
					}
					.right {
						font-size:20rpx;
						color: #aeb7c1;
					}
				}
				.text {
					font-size: 23rpx;
					color: #aeb7c1;
				}
			}
		}
	}
	
</style>