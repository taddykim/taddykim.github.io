import{_ as s,c as n,a as t,t as i,o as a}from"./entry.a941e244.js";const c={name:"ALFM-CM02-PG00",emits:["setLayout","openPopup"],data(){return{layout:{header:"sub2",footer:"none",floatMenu:"none",title:"안내"}}},mounted(){this.$emit("setLayout",this.layout),this.$emit("openPopup",["CM02PG00","btn_CM02PG00",101])}},_={class:"container"},d={class:"content",id:"content"},l={class:"title_nav blind"},p={class:"section"},r={class:"btn_group"};function u(m,o,h,M,e,P){return a(),n("div",_,[t("div",d,[t("h2",l,i(e.layout.title),1),t("div",p,[t("div",r,[t("button",{type:"button",class:"btn md c03",id:"btn_CM02PG00",onClick:o[0]||(o[0]=b=>{this.$emit("openPopup",["CM02PG00","btn_CM02PG00",101])})},"서비스 점검중 (팝업)")])])])])}const C=s(c,[["render",u]]);export{C as default};
