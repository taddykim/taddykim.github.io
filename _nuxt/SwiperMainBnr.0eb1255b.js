import{_ as f}from"./nuxt-link.269023db.js";import{P as y}from"./pagination.cb3e5dec.js";import{A as b}from"./autoplay.cc160646.js";import{S as h,a as g}from"./swiper.5c8b5574.js";import{f as k}from"./frontData.466cf310.js";import"./SwiperFlow.d0261a1c.js";import{_ as v,i as c,o as n,h as u,w as r,c as i,r as P,b as x,a,F as S,g as _}from"./entry.a941e244.js";const B={name:"SwiperMainBnr",data(){return{modules:[y,b],data:k.swiper.mainBanner,autoPlay:!0,swiper:Object}},watch:{autoPlay(o,t){t?this.swiper.autoplay.stop():this.swiper.autoplay.start()}},methods:{onInit(o){this.swiper=o},focus(o){this.swiper.slideTo(o)}},components:{Swiper:h,SwiperSlide:g}},C=["src","alt"],F={class:"play_box"},N=a("span",{class:"blind"},"시작",-1),V=[N],A=a("span",{class:"blind"},"멈춤",-1),I=[A],L=a("div",{class:"swiper-pagination"},null,-1);function j(o,t,D,E,e,p){const m=f,d=c("swiper-slide"),w=c("swiper");return n(),u(w,{class:"swiper main_bnr",modules:e.modules,"slides-per-view":"1","space-between":"0",loop:!0,autoplay:!0,pagination:{el:".swiper-pagination",type:"fraction"},observer:!0,observeParents:!0,onSwiper:p.onInit},{default:r(()=>[(n(!0),i(S,null,P(e.data,(s,l)=>(n(),u(d,{key:l},{default:r(()=>[x(m,{to:s.to,onFocus:M=>p.focus(l)},{default:r(()=>[a("img",{src:s.img,alt:s.alt},null,8,C)]),_:2},1032,["to","onFocus"])]),_:2},1024))),128)),a("div",F,[e.autoPlay?_("",!0):(n(),i("button",{key:0,type:"button",class:"play_start",onClick:t[0]||(t[0]=s=>e.autoPlay=!0)},V)),e.autoPlay?(n(),i("button",{key:1,type:"button",class:"play_stop",onClick:t[1]||(t[1]=s=>e.autoPlay=!1)},I)):_("",!0),L])]),_:1},8,["modules","pagination","onSwiper"])}const K=v(B,[["render",j]]);export{K as _};
