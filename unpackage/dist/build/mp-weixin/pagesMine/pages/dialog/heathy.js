"use strict";const e=require("../../../common/vendor.js"),t={options:{styleIsolation:"shared"},data:()=>({msg:[{id:"0",name:"每日运动30分钟",text:"许多研究都指出，每天运动30分钟就有好处，包括预防心脏病、糖尿病等，甚至有研究指出，运动可以让人感到快乐，增强自信心。如果你很久没有运动，可以从走路运动开始，每天快走20～30分钟，持续走下去，一定能感受到许多好处。",decide:!0,time:"刚刚"},{id:"1",name:"适当晒阳光",text:"阳光是一种天然的兴奋剂。最好的提神方法是在晨曦中做30分钟的散步或慢跑。因为这可以使身体贮存大量的维生素D，有助于维护骨骼和牙齿的强健。太阳下还是很好的物理消毒场所。",time:"5小时前"},{id:"2",name:"提高睡眠质量",text:"良好的睡眠可以让身体得到充分休息，增强肌肉质量。如何拥有好的睡眠呢?第一，睡前30分钟关掉电子产品;第二，房间光线保持昏暗;第三，确保睡眠时间每天达到7-8小时。",time:"5天前"}],searchValue:"Search...",value:"",dowHeight:"400rpx"}),methods:{getDomConfig(){let t=this;console.log(t.msg[0].text.length),e.index.createSelectorQuery().select(".text").boundingClientRect((function(e){console.log(e),t.msg[0].text.length>100?t.dowHeight="500rpx":t.dowHeight="400rpx"})).exec()}},onShow(){}};if(!Array){e.resolveComponent("uni-search-bar")()}Math;const o=e._export_sfc(t,[["render",function(t,o,n,i,a,c){return{a:e.p({radius:"100",placeholder:a.searchValue,cancelButton:"none"}),b:e.f(a.msg,((t,o,n)=>e.e({a:e.t(t.time),b:t.decide},(t.decide,{}),{c:e.t(t.name),d:e.t(t.text)}))),c:a.dowHeight,d:a.msg.id}}],["__scopeId","data-v-8e58bf92"]]);wx.createPage(o);