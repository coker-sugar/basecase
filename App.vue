<script>
	export default {
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	// @import './common/uni.css';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	// 设置整个项目的背景色
	page {
		background-color: #ffffff;
	}
	
	uni-tabbar {
	        .uni-tabbar { // tab背景
	            background-color: #ffffff!important; // 
	            .uni-tabbar-border { // tabBar上边框
	                background-color: #fff!important; // tabBar上边框的颜色
					border: none;
	            }
	            .uni-tabbar__bd { // tabBar单项
					height: 100rpx!important;
					background-color: pink!important;
	                .uni-tabbar__icon { // 图标
	                    width: 40rpx!important;
	                    height: 40rpx!important;
	                }
	                .uni-tabbar__label { // 文字
	                    font-size: 10rpx!important;
	                }
	            }
	        }
	    }
	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
</style>
