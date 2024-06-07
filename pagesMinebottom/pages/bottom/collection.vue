<template>
	<view class="BomOther" v-for="(item,index) in msg" :key="item.id">
		<view class="BomText" @click="goInner(item.id)">
			<img class="pic" src="http://rtrz9uulj.hn-bkt.clouddn.com/mine/child.png" alt="">
				<view class="MiddleText">
					<text class="text-top">		
							{{item.name}}\n
							{{item.text}}
					</text>
					<!-- <view class="text">
						
					</view> -->
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
						name:"中国青少年身体姿态健康亟待重视",
						text:"如何合理干预？",
						decide:true,
						time:"刚刚"
					},
					],
			}
		},
		methods: {
			goInner(e){
				if(e==0){
					uni.navigateTo({
						url:'/pagesMinebottom/pages/bottom/collection-text'
				  })
			}
		}
	},
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
			width: 90vw;
			height: 180rpx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #ededee;	
			.pic {
				width: 140rpx;
				height: 120rpx;
			}
			.MiddleText {
				width: 80%;
				height: 180rpx;
				// background-color: pink;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				align-items: flex-start;
				.text-top {
					width: 100%;
					display: flex;
					font-size: 33rpx;
					justify-content: space-around;
					align-items: center;
					white-space: pre-line;
				}
			}
		}
	}
	
</style>