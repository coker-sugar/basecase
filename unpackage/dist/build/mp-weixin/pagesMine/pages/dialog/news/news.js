"use strict";const e=require("../../../../common/vendor.js"),t={data:()=>({msg:[{id:"0",name:"WHO实锤“久坐伤身”，运动自救“指南”来了",text:"过节别光坐着过，赶紧活动一下！",decide:!0,time:"刚刚"},{id:"1",name:"久坐的危害以及预防措施",text:"久坐伤损五脏，容易造成亚健康状态，容易形成过度......",time:"2小时前"},{id:"2",name:"不得不久坐时，一个摆烂小动作能减轻危害",text:"过段事件，很多[阳康]的朋友陆续开始复工了，只是......",time:"1天前"}],searchValue:"Search...",value:""}),methods:{goInner(t){0==t||1==t?(e.index.navigateTo({url:"/pagesMine/pages/dialog/news/text-one"}),this.msg[0].decide=!1,console.log(this.msg[0].decide)):2==t&&e.index.navigateTo({url:"/pagesMine/pages/dialog/news/text-three"})}}};if(!Array){e.resolveComponent("uni-search-bar")()}Math;const a=e._export_sfc(t,[["render",function(t,a,n,i,o,d){return{a:e.o(t.Search),b:e.o((e=>o.value=e)),c:e.p({radius:"100",placeholder:o.searchValue,cancelButton:"none",modelValue:o.value}),d:e.f(o.msg,((t,a,n)=>({a:t.decide,b:e.t(t.name),c:e.t(t.time),d:e.t(t.text),e:e.o((e=>d.goInner(t.id)),t.id),f:t.id})))}}]]);wx.createPage(a);
