<template>
	<view class="out">
		<view class="outside">
			<view class="icon"></view>
			<!-- values怎么改字体大小 -->
			<uni-segmented-control style="font-size: 30rpx;" class="top-title" :current="current" :values="items" @clickItem="onClickItem" styleType="text" activeColor="#ff8d1a"></uni-segmented-control>
			 <view class="content">
			     <view v-show="current === 0">
			         <concern/>
			     </view>
			     <view v-show="current === 1">
			         <goodfriends/>
			     </view>
			 </view>
		</view>
	</view>
</template>

<script>
	import goodfriends from '@/components/goodfriend/goodfriend.vue'
	import concern from '@/components/goodfriend/concern.vue'
	export default {
		components:{
			goodfriends,
			concern
		},
		data() {
			return {
				items: ['我的关注', '我的好友'],
				current: 0,
				}
		},
		methods: {
		  onClickItem(e) {
			if (this.current != e.currentIndex) {
				this.current = e.currentIndex;
			}
		}
	}
}
</script>

<style lang="scss">
.outside {
	.icon {
		width: 1px;
		height: 50rpx;
		background-color: #808080;
		position: absolute;
		top: 25rpx;
		left: 50%;
		transform: translate(-50%);
		z-index: 999;
	}
	// .icon::before{
	// 	content: "";
	// 	border: .1rpx solid #808080;
	// }
	.top-title {
		width: 90vw;
		font-size: 30px !important;
		margin-bottom: 10rpx;
	}
	.content {
		width:100vw;
		// background-color: red;
	}
}
</style>
