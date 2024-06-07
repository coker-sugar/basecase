<template>
<uni-search-bar class="uni-mt-10" radius="100" :placeholder="searchValue"  cancelButton="none"  v-model="value" @click="Search"/>
	<view class="BomOther" v-for="(item,index) in msg" :key="item.id">
		<view class="BomText" @click="goInner(item.id)">
				<image class="anitor" :src="item.anitor" mode=""></image>
				<view class="MiddleText">
					<view class="text-top">
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
						anitor:"http://rtrz9uulj.hn-bkt.clouddn.com/index/news.png",
						name:"新闻咨询",
						text:"WHO实锤“久坐伤身”，运动自救“指南”来了",
						time:"刚刚"
					},
					{
						id:"1",
						anitor:"http://rtrz9uulj.hn-bkt.clouddn.com/index/healthy.png",
						name:"健康小贴士",
						text:"每日运动30分钟",
						time:"1小时前"
					}],
					searchValue:'Search...',
					value:''
			}
		},
		methods: {
			goInner(e){
				if(e==0){
					uni.navigateTo({
						url:'/pagesMine/pages/dialog/news/news'
					})
				}else if (e==1){
					uni.navigateTo({
						url:'/pagesMine/pages/dialog/heathy'
					})
				}
			},
		Search() {
			this.userName = uni.getStorageSync("username_log"),
			uni.request({
				url:'https:xxxx',
				method:'GET',
				data:{ value:this.value},
				header: {
					'content-type': 'application/x-www-form-urlencoded' //表明后端接收的是（表单）字符串类型，例如'id=1231454&sex=男' 
				},
				success: (res) => {
					if(this.value=='')return
				}
			})
		}
	},
	onLaunch: {
		onNavigationBarButtonTap:function(e){
		    console.log(JSON.stringify(e))
		},
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
		&:last-child {
			// border-bottom: 1px solid #fff0df;
		}
		.BomText {
			width: 85vw;
			height: 160rpx;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			border-bottom: 1px solid #ededee;		
			image {
				width: 100rpx;
				height:100rpx;
				border-radius: 50%;
				border:1rpx solid #b0cef0;
				margin-right: 30rpx;
			}
			.MiddleText {
				width: 80%;
				height: 120rpx;
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
					.name {
						font-size: 30rpx;
						font-weight: 500;
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