import{_ as e}from"./InputBox.5799225a.js";import{_,c as i,a as t,t as r,b as d,d as o,o as l}from"./entry.a941e244.js";const p={name:"ALFM-MY08-PG00",emits:["setLayout","openPopup"],data(){return{layout:{header:"sub2",footer:"none",floatMenu:"none",title:"내 정보 수정"}}},mounted(){this.$emit("setLayout",this.layout)},components:{InputBox:e}},u={class:"container"},m={class:"content",id:"content"},h={class:"title_nav"},f=t("div",{class:"page_info"},[o(" 회원님의 안전한 "),t("br"),o(" 개인정보 보호를 위해 비밀번호를 "),t("br"),o(" 다시 한번 확인합니다 ")],-1),v={class:"section"},b={class:"form_wrap"},y={class:"form_group"},x=t("div",{class:"form_label"},"비밀번호",-1),g={class:"form_item"},B=t("div",{class:"error"},"비밀번호를 다시 확인해주세요",-1),M=t("div",{class:"error"},"비밀번호를 입력해주세요",-1),L=t("div",{class:"btn_group"},[t("button",{type:"button",class:"btn md c03"},"확인")],-1);function V($,s,I,N,n,P){const a=e;return l(),i("div",u,[t("div",m,[t("h2",h,r(n.layout.title),1),f,t("div",v,[t("div",b,[t("div",y,[x,t("div",g,[d(a,{option:{type:"password",placeholder:"비밀번호 입력"},onInputValue:s[0]||(s[0]=c=>console.log(c))})]),B,M])]),L])])])}const A=_(p,[["render",V]]);export{A as default};
