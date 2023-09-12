import{_ as l}from"./InputBox.a97d032d.js";import{_ as c,c as d,a as o,t as _,b as n,d as i,f as r,o as u}from"./entry.ff5b9463.js";const p={name:"ALFM-PR03-PG18",emits:["setLayout","openPopup"],data(){return{layout:{header:"sub2",footer:"none",floatMenu:"none",title:"추천인 정보"}}},mounted(){this.$emit("setLayout",this.layout)},components:{InputBox:l}},m={class:"container"},v={class:"content",id:"content"},b={class:"title_nav"},f=o("div",{class:"page_info"},[i("추천인의 정보를 "),o("br"),i("입력해주세요 "),o("span",{class:"fc02"},"(선택)")],-1),h={class:"section"},g={class:"form_wrap"},y={class:"form_group"},x=o("strong",{class:"form_label"},"추천인 이름",-1),V={class:"form_item"},I=o("div",{class:"error"},"고객명을 입력해 주세요",-1),B={class:"form_item"},P={class:"form_group"},L=o("strong",{class:"form_label"},"추천인 휴대폰번호",-1),N={class:"form_item"},$=o("button",{type:"button",class:"btn md c03"},"추천인 확인",-1),M=o("div",{class:"error"},"추천인 휴대폰번호를 입력해주세요.",-1),k=o("div",{class:"error"},[i("입력하신 추천인은 "),o("sup",null,"+"),i("알파 사용자가 아니므로 혜택을 받을 수 없습니다.")],-1),w=o("div",{class:"error"},"추천인과 피추천인의 휴대폰번호가 동일할 경우 혜택을 받을 수 없습니다.",-1),A={class:"form_item"},F=o("button",{type:"button",class:"btn md c03",disabled:""},"추천인 확인",-1),G=r('<div class="section"><div class="box_gray"><ul class="text_list bull"><li>추천해주신 분의 이름과 휴대폰번호를 입력해주세요. 개통완료 후 추천인을 입력하신 개통고객님과 추천인 모두에게 혜택을 드립니다. (개통 2달 후 지급) </li></ul></div></div><div class="bottom_float"><div class="inner"><div class="float_btn_wrap"><div class="btn_group"><button type="button" class="btn lg c01">신청완료</button></div></div></div></div>',2);function R(S,t,D,E,a,T){const e=l;return u(),d("div",m,[o("div",v,[o("h2",b,_(a.layout.title),1),f,o("div",h,[o("div",g,[o("div",y,[x,o("div",V,[n(e,{option:{placeholder:"추천인 이름 입력"},onInputValue:t[0]||(t[0]=s=>console.log(s))})]),I,o("div",B,[n(e,{option:{placeholder:"홍*동",disabled:!0},onInputValue:t[1]||(t[1]=s=>console.log(s))})])]),o("div",P,[L,o("div",N,[n(e,{option:{placeholder:"‘-’ 없이 숫자만 입력"},onInputValue:t[2]||(t[2]=s=>console.log(s))}),$]),M,k,w,o("div",A,[n(e,{option:{value:"010-12**-56**",placeholder:"‘-’ 없이 숫자만 입력",disabled:!0},onInputValue:t[3]||(t[3]=s=>console.log(s))}),F])])])]),G])])}const z=c(p,[["render",R]]);export{z as default};
