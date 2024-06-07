<template>
	<view class="out">
		<view class="outside">
			<view class="icon"></view>
			<!-- values怎么改字体大小 -->
			<uni-segmented-control style="font-size: 30rpx;" class="top-title" :current="current" :values="items" @clickItem="onClickItem" styleType="text" activeColor="#fda54c"></uni-segmented-control>
		    
			<view class="content">
		        <view v-show="current === 0">
		            <myself/>
		        </view>
		        <view v-show="current === 1">
		            <life/>
		        </view>
		    </view>
		</view>
	</view>
</template>

<script>
	import life from '@/components/medal/life.vue'
	import myself from '@/components/medal/myself.vue'
	export default {
		components:{
			life,
			myself
		},
		data() {
			return {
				items: ['挑战自我', '绚丽人生'],
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
	margin: 0 auto;
	width: 90vw;
	.icon {
		width: 1px;
		height: 40rpx;
		background-color: #666666;
		position: absolute;
		top: 32rpx;
		left: 50%;
		transform: translate(-50%);
		z-index: 999;
		border-bottom: 1px solid #aeb7c1;
	}
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
