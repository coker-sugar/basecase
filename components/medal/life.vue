<template>
	<view class="ig">
		<view class="line"></view>
		<view class="article" >
			<!-- <image :src="item.url" mode=""></image> -->
			<img src="http://rtrz9uulj.hn-bkt.clouddn.com/mine/medal/1.jpg" alt="">
			<img src="http://rtrz9uulj.hn-bkt.clouddn.com/mine/medal/2.jpg" alt="">
			<img src="http://rtrz9uulj.hn-bkt.clouddn.com/mine/medal/3.jpg" alt="">
			<img src="http://rtrz9uulj.hn-bkt.clouddn.com/mine/medal/4.jpg" alt="">
			<img src="http://rtrz9uulj.hn-bkt.clouddn.com/mine/medal/5.jpg" alt="">
			<img src="http://rtrz9uulj.hn-bkt.clouddn.com/mine/medal/6.jpg" alt="">
			<img src="http://rtrz9uulj.hn-bkt.clouddn.com/mine/medal/7.jpg" alt="">
			<img src="http://rtrz9uulj.hn-bkt.clouddn.com/mine/medal/8.jpg" alt="">
			<img src="http://rtrz9uulj.hn-bkt.clouddn.com/mine/medal/9.jpg" alt="">
			<img src="http://rtrz9uulj.hn-bkt.clouddn.com/mine/medal/10.jpg" alt="">
			<img src="http://rtrz9uulj.hn-bkt.clouddn.com/mine/medal/11.jpg" alt="">
			<img src="http://rtrz9uulj.hn-bkt.clouddn.com/mine/medal/12.jpg" alt="">
		</view>
	</view>

</template>

<script>
	export default {
		data(){
			return {
			imgs: [
				// { url:require('@/static/1.jpg')},
			  ]
			}
		},
		mounted(){
			// console.log(this.imgs.url)
		}
	}
</script>

<style lang="scss">
	.ig {
		position: fixed;
		left: 0;
		top: 0vh;
		height: 100%;
		width: 100%;
		background-color: #7b7b7b;
		z-index: -200;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		.line {
			width: 90vw;
			margin-top: 7vh;
			border-bottom: 2px solid #666666;
		}
		.article {
			margin-top: 3vh;
			width: 85vw;
			height:70vh;
			display: flex;
			justify-content: space-around;
			align-items: flex-start;
			flex-wrap: wrap;
			background-color: #262626;
			border-radius: 30rpx;
			image {
				// position: relative;
				// z-index: 99;
				// flex: 1;
				margin-top: 10rpx;
				width: 210rpx;
				height: 240rpx;
				// border-radius: 50%;
			}
		}
	}
</style>