"use strict";const e=require("../../../common/vendor.js"),o={data:()=>({checkoutInfo:{isShowEle:!0,oneChecked:!0,twoChecked:!1}}),onReady(){},methods:{switchChange(e){"one"===e?0==this.checkoutInfo.oneChecked?(this.checkoutInfo.oneChecked=!0,this.checkoutInfo.twoChecked=!1):(this.checkoutInfo.oneChecked=!1,this.checkoutInfo.twoChecked=!0):"two"===e&&(0==this.checkoutInfo.twoChecked?(this.checkoutInfo.oneChecked=!1,this.checkoutInfo.twoChecked=!0):(this.checkoutInfo.oneChecked=!0,this.checkoutInfo.twoChecked=!1))}}};const c=e._export_sfc(o,[["render",function(o,c,h,t,n,k){return{a:e.o((e=>k.switchChange("one"))),b:n.checkoutInfo.oneChecked,c:e.o((e=>k.switchChange("two"))),d:n.checkoutInfo.twoChecked}}]]);wx.createPage(c);
