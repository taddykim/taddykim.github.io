import{_ as s,c as n,a as t,t as i,o as a}from"./entry.ff5b9463.js";const c={name:"ALFM-PR03-PO02",emits:["setLayout","openPopup"],data(){return{layout:{header:"sub2",footer:"none",title:"휴대폰 정보 확인 방법",floatMenu:"none"}}},mounted(){this.$emit("setLayout",this.layout),this.$emit("openPopup",["PR03PO02","btn_PR03PO02",101])}},_={class:"container"},p={class:"content",id:"content"},r={class:"title_nav"},d={class:"section"},l={class:"btn_group"};function u(P,o,m,h,e,b){return a(),n("div",_,[t("div",p,[t("h2",r,i(e.layout.title),1),t("div",d,[t("div",l,[t("button",{type:"button",class:"btn md c03",id:"btn_PR03PO02",onClick:o[0]||(o[0]=f=>{this.$emit("openPopup",["PR03PO02","btn_PR03PO02",101])})},"휴대폰 정보 확인 방법")])])])])}const O=s(c,[["render",u]]);export{O as default};
