"use strict";const e=require("../../../common/vendor.js"),t={data:()=>({msg:[{id:"0",name:"中国青少年身体姿态健康亟待重视",text:"如何合理干预？",decide:!0,time:"刚刚"}]}),methods:{goInner(t){0==t&&e.index.navigateTo({url:"/pagesMinebottom/pages/bottom/collection-text"})}}};const n=e._export_sfc(t,[["render",function(t,n,o,i,r,a){return{a:e.f(r.msg,((t,n,o)=>({a:e.t(t.name),b:e.t(t.text),c:e.o((e=>a.goInner(t.id)),t.id),d:t.id})))}}]]);wx.createPage(n);