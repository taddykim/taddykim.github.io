import{_ as o,c as i,a as t,o as c}from"./entry.a941e244.js";const a={name:"BE02PG00",emits:["setLayout","openAlert"],data(){return{layout:{header:"sub",footer:"",floatMenu:"",title:"댓글 삭제 알럿"}}},mounted(){this.$emit("setLayout",this.layout)}},l={class:"container"},_={class:"content",id:"content"},d=["innerHTML"],r={class:"section"},u={class:"btn_group"},p={class:"section"},B={class:"btn_group"};function b(m,e,h,v,s,E){return c(),i("div",l,[t("div",_,[t("h2",{class:"title_nav",innerHTML:s.layout.title},null,8,d),t("div",r,[t("div",u,[t("button",{type:"button",class:"btn md c03",id:"btn_BE02PG00",onClick:e[0]||(e[0]=n=>{this.$emit("openAlert",["BE02PG00","btn_BE02PG00",101])})},"댓글을 삭제하시겠어요?")])]),t("div",p,[t("div",B,[t("button",{type:"button",class:"btn md c03",id:"btn_BE02PG00B",onClick:e[1]||(e[1]=n=>{this.$emit("openAlert",["BE02PG00B","btn_BE02PG00B",101])})},"댓글이 삭제되었습니다.")])])])])}const G=o(a,[["render",b]]);export{G as default};
