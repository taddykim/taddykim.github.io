import{_ as r}from"./Tag.68ea5bd7.js";import{_ as f}from"./nuxt-link.3bf03507.js";import{_ as u}from"./Pagination.93042596.js";import{_ as d}from"./NoData.3b80fbda.js";import{_ as y,c as e,a as t,t as a,b as o,j as v,v as x,F as w,r as L,w as _,o as c,d as l}from"./entry.ff5b9463.js";const T={name:"ALFM-MY07-LT00",emits:["setLayout","openPopup"],data(){return{layout:{header:"sub",footer:"",floatMenu:"",title:"사용자 평점·후기 관리"},tableShow:!0,dataTable:[{agent:"프리티",data:"5G 더빠른 180GB+",status:'<button type="button" class="btn xsm c07">후기등록</button>'},{agent:"프리티",data:"데이터안심무제한 7G+",status:"등록완료"},{agent:"프리티",data:"인스 유심 스피드 180 1123123",status:"등록완료"},{agent:"프리티",data:"데이터안심무제한 7G+",status:'<button type="button" class="btn xsm c07">후기등록</button>'}]}},mounted(){this.$emit("setLayout",this.layout)},components:{Tag:r,Pagination:u,NoData:d},props:{frontData:Object}},M={class:"container"},D={class:"content",id:"content"},N={class:"title_nav"},S={class:"section"},j={class:"table ty03"},k=t("caption",null,"추천 활동 내역",-1),B=t("colgroup",null,[t("col",{style:{width:"30%"}}),t("col",{style:{width:"auto"}}),t("col",{style:{width:"8rem"}})],-1),F={scope:"row"},G=["innerHTML"],P={class:"btn_group pc_hide mgt12"},V=t("div",{class:"btn_group"},[t("button",{type:"button",class:"btn md c03"},"요금제 보러가기")],-1);function A(H,Y,p,z,n,C){const m=r,i=f,h=u,b=d;return c(),e("div",M,[t("div",D,[t("h2",N,a(n.layout.title),1),t("div",S,[o(m,{data:p.frontData.tag.review,option:{type:"expandedResize",multi:!1}},null,8,["data"]),v(t("div",j,[t("table",null,[k,B,t("tbody",null,[(c(!0),e(w,null,L(n.dataTable,(s,g)=>(c(),e("tr",{key:g},[t("th",F,a(s.agent),1),t("td",null,[o(i,{to:"javascript:void(0);"},{default:_(()=>[l(a(s.data),1)]),_:2},1024)]),t("td",{class:"tb_stat",innerHTML:s.status},null,8,G)]))),128))])])],512),[[x,n.tableShow]]),t("div",P,[o(i,{to:"javascript:void(0);",role:"button",class:"btn md c05"},{default:_(()=>[l("더볼래요")]),_:1})]),o(h,{option:{pcShow:!0}}),o(b,{option:{type:"his",html:"<strong>지금 바로 셀프개통하고<br>사용자 평점·후기를 남겨보세요!</strong><p>셀프개통이 완료된 건만 평점·후기를 남길 수 있습니다.</p>"}},null,8,["option"]),V])])])}const I=y(T,[["render",A]]);export{I as default};
