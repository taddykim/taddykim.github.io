import{_ as s,c as n,a as t,t as a,o as i}from"./entry.ff5b9463.js";const c={name:"ALFM-PR02-PO05",emits:["setLayout","openPopup"],data(){return{layout:{header:"sub",footer:"none",title:"내게 맞는 요금제 찾기",floatMenu:"none"}}},mounted(){this.$emit("setLayout",this.layout),this.$emit("openPopup",["PR02PO05","btn_PR02PO05",101])}},_={class:"container"},l={class:"content cont_ratePlan",id:"content"},p={class:"title_nav"},r={class:"section"},d=t("h3",{class:"tit02"},"요금제 상세",-1);function u(P,e,h,m,o,f){return i(),n("div",_,[t("div",l,[t("h2",p,a(o.layout.title),1),t("div",r,[d,t("button",{type:"button",class:"btn md c03",id:"btn_PR02PO05",onClick:e[0]||(e[0]=b=>{this.$emit("openPopup",["PR02PO05","btn_PR02PO05",101])})},"내게 맞는 요금제 찾기 Step05")])])])}const O=s(c,[["render",u]]);export{O as default};
