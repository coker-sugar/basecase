<template>
	<!-- 写HTML -->
	<div id="home_page">
	
		<!-- input框  绑定关键字   鼠标按下回车键搜索   键盘抬起执行实时搜索  失焦的时候，不会展示展示数据列表-->
		<input type="text" v-model="keywords" @keydown.enter="search" @keyup="getData($event)" @blur="hiddenData" />
		
		<!-- 点击button按钮执行搜索功能 -->
		<button @click="search">搜索</button>
		
		<!-- 记录搜索记录 点击的时候回拿到数据值 -->
		搜索记录：
		<span class="search-history" v-for="(item,index) in searchHistory" @click="ressetSearch(item)">
			{{item}} &nbsp;
		</span>
		
		<!--  实时的搜索数据显示列表-->
		<ul class="show_data" v-show="isShow">
			<li v-for="(item,index) in data" v-bind:key="index">{{item}}</li>
		</ul>
		
		<!-- 当点击搜索按钮，和按下回车键的时候 ，会把搜索出来的与input框中的字一致的数据展示出来 -->
		<ul>
			<li v-for="(item,index) in result" v-bind:key="index">{{item}}</li>
		</ul>
	</div>
</template>

<script>
	// 写js
	export default {
		data() {
			return {
				goodsList: ["html", "css", "javascript", "html5", "css3", "vue", "react", "node"], //所有的数据
				keywords: '', //input框绑定的关键字
				result: [], //搜索结果，是一个数组
				data: [], //实时的搜索的数据
				isShow: false, //判断实时的数据是否要显示  默认是不显示
				searchHistory: [], //搜索记录
			}
		},
		methods: {
			//搜索的方法
			search() { 
				// 每次搜索前 把之前的数据清空
				this.result = [];
				// 每次输入的时候，让他显示出来
				this.isShow = true;
				// 遍历拿到item，并判断值是否和input框相似，一样就添加到result数组中
				this.goodsList.map((item, index) => {
					if (item.includes(this.keywords)) {
						this.result.push(item);
					}
				});
				// 存数据之前  如果历史记录中有的话，就不让添加  ！取反
				if (!this.searchHistory.includes(this.keywords)) {
					// 搜索记录会添加那些的input框的关键字
					this.searchHistory.push(this.keywords);
				}
			},
			// 实时的搜索的数据  根据传的参数，拿到event的对象
			getData(event) {
				// 监听event的事件  当键盘码是13的话，就让实时的列表隐藏
				if (event.keyCode == 13) {
					this.isShow = false;
					return; //方法结束，不执行
				}
				// 每次搜索前 把之前的数据清空
				this.data = [];
				// 当他按下回车的时候也没有，即，不会显示实时更新的一部分
				this.isShow = true;
				this.goodsList.map((item, index) => {
					if (item.includes(this.keywords)) {
						this.data.push(item);
					}
				})
			},
			// 当他失去焦点的时候，会隐藏实时的列表
			hiddenData() {
				this.isShow = false;
			},
			// kw就是传过来的值item，意思就是点击历史记录的词，会重新返回到input输入框
			ressetSearch(kw) {
				this.keywords = kw;
			}
		}
	}
</script>

<style scoped>
	/* 写样式 */
	#home_page {
		margin: 50px 0;
	}
	.show_data {
		border: 1px solid #999;
		list-style: none;
		padding: 0;
		margin: 0;
		width: 154px;
		padding: 10px 5px;
	}
	.search-history {
		color: #222;
		cursor: pointer;
	}
	.search-history:hover {
		color: red;
	}
</style>

