import{_ as c,c as l,a as s,I as n,d as o,f as p,o as i}from"./entry.a941e244.js";const d={name:"GuideFlag",emits:["setLayout","openPopup"],data(){return{layout:{header:"sub",footer:"",title:""},flag:[!1,!1]}},mounted(){this.$emit("setLayout",this.layout)}},g={class:"container"},r={class:"content",id:"content"},b=s("h2",{class:"title_nav"},"Guide",-1),_=s("div",{class:"page_info"},"flag & badge",-1),f={class:"section"},u=s("h3",{class:"tit02"},"btn badge",-1),v=s("span",{class:"blind"},"찜하기",-1),h=p('<div class="section"><h3 class="tit02">text badge</h3><span class="bag clr c01">유심판매</span><span class="bag clr c02">바로픽업</span><span class="bag clr c03">답변완료</span><span class="bag clr c04">결합할인</span><span class="bag clr c05">회원가입</span><span class="bag clr c06">혜택</span><span class="bag clr c07">도로명</span><span class="bag clr c08">도로명</span><span class="bag clr c09">도로명</span></div><div class="section"><h3 class="tit02">event badge</h3><span class="bag evt dday">D-24</span><span class="bag evt ty01">이번달 이벤트</span><span class="bag evt ty02">친구초대</span><span class="bag evt ty03">제휴 이벤트</span><span class="bag evt ty04">제휴카드</span></div>',2);function y(m,t,x,k,a,B){return i(),l("div",g,[s("div",r,[b,_,s("div",f,[u,s("button",{type:"button",class:n(["btn bag c01",{on:a.flag[0]}]),onClick:t[0]||(t[0]=e=>a.flag[0]=!a.flag[0])},[v,o("480")],2),s("button",{type:"button",class:n(["btn bag c02",{on:a.flag[1]}]),onClick:t[1]||(t[1]=e=>a.flag[1]=!a.flag[1])},"비교하기",2)]),h])])}const N=c(d,[["render",y]]);export{N as default};
