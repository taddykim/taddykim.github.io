import{_ as c}from"./TextareaBox.0190cb45.js";import{_ as u,i as v,c as i,a as t,t as o,F as m,r as g,b as a,o as l}from"./entry.a941e244.js";const h={name:"ALFM-MY07-PG01",emits:["setLayout","openPopup"],data(){return{layout:{header:"sub",footer:"",floatMenu:"",title:"사용자 평점·후기 등록"},dataProduct:[{label:"사업자",info:"프리티"},{label:"요금제",info:"5G 더빠른 180GB+"},{label:"개통일",info:"2022.10.03"},{label:"월 통신 요금",info:"51,700원"},{label:"부가서비스",info:"<span>2</span>건"}],rating:0,rating2:0,rating3:0,ratingText:["선택해주세요","별로예요","그저그래요","괜찮아요","좋아요","최고에요"]}},mounted(){this.$emit("setLayout",this.layout)},components:{TextareaBox:c}},p={class:"container"},b={class:"content",id:"content"},x={class:"title_nav"},y={class:"section"},f=t("h3",{class:"tit02"},"요금제",-1),T={class:"list_info_ty01"},V=["innerHTML"],k={class:"eval_wrap"},L={class:"eval_item"},M=t("h3",{class:"tit02"},"개통과정은 잘 되었나요?",-1),B={class:"eval_star"},P={key:0,class:"eval_desc"},F={key:1,class:"eval_desc"},G={class:"eval_item"},U=t("h3",{class:"tit02"},"고객상담은 어떠셨나요?",-1),A={class:"eval_star"},C={key:0,class:"eval_desc"},H={key:1,class:"eval_desc"},N={class:"eval_item"},S=t("h3",{class:"tit02"},"개통 이후 만족하셨나요?",-1),Y={class:"eval_star"},w={key:0,class:"eval_desc"},D={key:1,class:"eval_desc"},E={class:"eval_item"},j=t("h3",{class:"tit02"},"어떤점이 좋았나요?",-1),q=t("div",{class:"text_info"},"관련없는 내용이나 동일문자의 반복 등 부적합한 내용의 후기작성은 통보없이 삭제됩니다. ",-1),z=t("div",{class:"section"},[t("div",{class:"btn_group"},[t("button",{type:"button",class:"btn md c06"},"취소하기"),t("button",{type:"button",class:"btn md c03",disabled:""},"등록하기")])],-1);function I(J,n,K,O,e,Q){const _=v("v-rating"),r=c;return l(),i("div",p,[t("div",b,[t("h2",x,o(e.layout.title),1),t("div",y,[f,t("div",T,[(l(!0),i(m,null,g(e.dataProduct,(s,d)=>(l(),i("dl",{key:d},[t("dt",null,o(s.label),1),t("dd",{innerHTML:s.info},null,8,V)]))),128))]),t("div",k,[t("div",L,[M,t("div",B,[a(_,{modelValue:e.rating,"onUpdate:modelValue":n[0]||(n[0]=s=>e.rating=s)},null,8,["modelValue"])]),e.rating<1?(l(),i("div",P,o(e.ratingText[0]),1)):(l(),i("div",F,o(e.rating)+"점 ("+o(e.ratingText[e.rating])+")",1))]),t("div",G,[U,t("div",A,[a(_,{modelValue:e.rating2,"onUpdate:modelValue":n[1]||(n[1]=s=>e.rating2=s),"item-aria-label":"custom icon label text {0} of {1}"},null,8,["modelValue"])]),e.rating2<1?(l(),i("div",C,o(e.ratingText[0]),1)):(l(),i("div",H,o(e.rating2)+"점 ("+o(e.ratingText[e.rating2])+")",1))]),t("div",N,[S,t("div",Y,[a(_,{modelValue:e.rating3,"onUpdate:modelValue":n[2]||(n[2]=s=>e.rating3=s)},null,8,["modelValue"])]),e.rating3<1?(l(),i("div",w,o(e.ratingText[0]),1)):(l(),i("div",D,o(e.rating3)+"점 ("+o(e.ratingText[e.rating3])+")",1))]),t("div",E,[j,a(r,{data:{type:"ty01",placeholder:"최소 10자 이상 입력해주세요",maxlength:1e3,byteCheck:!0},onTextareaValue:n[3]||(n[3]=s=>console.log(s)),onTextareaSubmit:n[4]||(n[4]=s=>console.log(s))}),q])])]),z])])}const X=u(h,[["render",I]]);export{X as default};
