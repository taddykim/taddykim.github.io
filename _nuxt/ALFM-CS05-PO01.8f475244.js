import{_ as n,c as i,a as t,t as c,o as a}from"./entry.ff5b9463.js";const l={name:"ALFM-CS05-PO01",emits:["setLayout","openAlert"],data(){return{layout:{header:"sub",footer:"none",floatMenu:"none",title:"1:1 문의하기 > 등록 > 등록확인"}}},mounted(){this.$emit("setLayout",this.layout)}},_={class:"container"},d={class:"content",id:"content"},r={class:"title_nav"},u={class:"section"},p=t("h3",{class:"tit02"},"이메일 주소 확인",-1),h={class:"btn_group"},b={class:"section"},m=t("h3",{class:"tit02"},"문의 등록 확인",-1),C={class:"btn_group"};function v(S,s,f,y,e,O){return a(),i("div",_,[t("div",d,[t("h2",r,c(e.layout.title),1),t("div",u,[p,t("div",h,[t("button",{type:"button",class:"btn md c03",id:"btn_CS05PO01",onClick:s[0]||(s[0]=o=>{this.$emit("openAlert",["CS05PO01","btn_CS05PO01",101])})},"Alert")])]),t("div",b,[m,t("div",C,[t("button",{type:"button",class:"btn md c03",id:"btn_CS05PO01B",onClick:s[1]||(s[1]=o=>{this.$emit("openAlert",["CS05PO01B","btn_CS05PO01B",101])})},"Alert")])])])])}const $=n(l,[["render",v]]);export{$ as default};
