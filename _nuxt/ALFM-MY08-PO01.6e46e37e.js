import{_ as o,c as n,a as t,t as i,o as a}from"./entry.a941e244.js";const c={name:"ALFM-MY08-PO01",emits:["setLayout","openAlert"],data(){return{layout:{header:"sub2",footer:"none",floatMenu:"none",title:"회원탈퇴 완료"}}},mounted(){this.$emit("setLayout",this.layout),this.$emit("openAlert",["MY08PO01","btn_MY08PO01",101])}},l={class:"container"},r={class:"content",id:"content"},_={class:"title_nav"},d={class:"section"},u=t("h3",{class:"tit02"},"회원탈퇴 완료",-1),p={class:"btn_group"};function h(m,e,M,b,s,f){return a(),n("div",l,[t("div",r,[t("h2",_,i(s.layout.title),1),t("div",d,[u,t("div",p,[t("button",{type:"button",class:"btn md c03",id:"btn_MY08PO01",onClick:e[0]||(e[0]=y=>{this.$emit("openAlert",["MY08PO01","btn_MY08PO01",101])})},"Alert")])])])])}const P=o(c,[["render",h]]);export{P as default};
