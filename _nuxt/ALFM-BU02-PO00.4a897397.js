import{_ as n,c as s,a as t,t as a,o as i}from"./entry.ff5b9463.js";const c={name:"ALFM-BU02-PO00",emits:["setLayout","openPopup"],data(){return{layout:{header:"sub2",footer:"none",floatMenu:"none",title:"편의점 조회"}}},mounted(){this.$emit("setLayout",this.layout),this.$emit("openPopup",["BU02PO00","btn_BU02PO00",101])}},p={class:"container"},r={class:"content",id:"content"},_={class:"title_nav"},l={class:"section"};function u(d,e,m,B,o,P){return i(),s("div",p,[t("div",r,[t("h2",_,a(o.layout.title),1),t("div",l,[t("button",{type:"button",class:"btn md c03",id:"btn_BU02PO00",onClick:e[0]||(e[0]=h=>{this.$emit("openPopup",["BU02PO00","btn_BU02PO00",101])})},"편의점 조회")])])])}const b=n(c,[["render",u]]);export{b as default};
