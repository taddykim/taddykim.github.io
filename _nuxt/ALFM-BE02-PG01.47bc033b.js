import{_ as n}from"./SwiperCard.24565bc9.js";import{_ as a}from"./TextareaBox.0190cb45.js";import{_ as i}from"./logo_s_partner21.6e7db882.js";import{_ as l}from"./img_evt_detail.7d2a635b.js";import{_,c,a as t,t as s,d,f as r,o as m}from"./entry.a941e244.js";import"./nuxt-link.269023db.js";import"./pagination.cb3e5dec.js";import"./swiper.5c8b5574.js";const p={name:"ALFM-BE02-PG00",emits:["setLayout","openAlert"],data(){return{layout:{header:"sub",footer:"",floatMenu:"",title:"이벤트 상세"},eventTitle:"무제한이 9천원대! 오직 알파에서만",startDay:"2023.02.02",endDay:"2023.03.28",comment:[{name:"김*파",content:"댓글을 남겨주세요. (50자 이내) 50자 이내로 댓글을 남겨주세요. 댓글을 등록 하세요.",block:!1,modify:!1,delete:!1},{name:"나*파",content:"댓글을 남겨주세요. (50자 이내) 50자 이내로 댓글을 남겨주세요. 댓글을 등록 하세요.",block:!1,modify:!1,delete:!1},{name:"박*파",content:"댓글을 남겨주세요. (50자 이내) 50자 이내로 댓글을 남겨주세요. 댓글을 등록 하세요.",block:!0,modify:!1,delete:!1},{name:"이*파",content:"안녕하세요?",block:!1,modify:!1,delete:!1}]}},mounted(){this.$emit("setLayout",this.layout)},components:{SwiperCard:n,TextareaBox:a},props:{frontData:Object}},v={class:"container"},f={class:"content",id:"content"},u=["innerHTML"],b={class:"section"},h={class:"evt_dtl_item"},y={class:"evt_dtl_tit"},g=r('<div class="dtl_tit_top"><div class="bag_lft"><div class="bag evt dday"><b>D-1</b></div><div class="bag evt ty01"><b>이번달 이벤트</b></div></div><div class="bag_rit"><img src="'+i+'" alt="tplus"></div></div>',1),x={class:"dtl_tit_bot"},M={class:"share_box"},k=t("span",{class:"blind"},"공유하기",-1),D=[k],B=t("div",{class:"evt_dtl_con evt_close"},[t("div",{class:"box_gray"}," 본 이벤트는 종료되었습니다 "),t("div",{class:"end_thum"},[t("img",{src:l,alt:"이벤트 상세"})])],-1),L=t("hr",null,null,-1),T=t("div",{class:"btn_group"},[t("button",{type:"button",class:"btn md c05"},"목록보기")],-1);function C(G,o,P,A,e,E){return m(),c("div",v,[t("div",f,[t("h2",{class:"title_nav",innerHTML:e.layout.title},null,8,u),t("div",b,[t("div",h,[t("div",y,[g,t("div",x,[t("strong",null,s(e.eventTitle),1),t("div",M,[t("span",null,[t("span",null,s(e.startDay),1),d(" - "),t("span",null,s(e.endDay),1)]),t("button",{type:"button",class:"btn_share",id:"btn_CM12PG00",onClick:o[0]||(o[0]=N=>{this.$emit("openAlert",["CM12PG00","btn_CM12PG00",101])})},D)])])]),B,L]),T])])])}const q=_(p,[["render",C]]);export{q as default};
