import{_ as v}from"./nuxt-link.3bf03507.js";import{_ as m,i as d,c as p,a as t,t as f,b as e,w as o,o as h,d as l}from"./entry.ff5b9463.js";const b={name:"ALFM-LG01-PG00-vuetify",emits:["setLayout","openPopup"],data(){return{rules:{required:s=>!!s||"비밀번호는 필수입니다"},emailRules:[s=>!!s||"이메일은 필수입니다",s=>s&&s.length>=5||"이메일은 5자 이상 입력주세요"],layout:{header:"sub",footer:"none",floatMenu:"none",title:"로그인"}}},methods:{async validate(){await this.$refs.form.validate()}},mounted(){this.$emit("setLayout",this.layout)}},g={class:"container"},y={class:"content",id:"content"},x={class:"title_nav"},k=t("div",{class:"page_info center"},"간편하게 로그인 해보세요!",-1),L={class:"section"},w={class:"btn_wrap"},j={class:"btn_group"},G={class:"btn_group"},N=t("div",{class:"center mgt32 mgb32"},"or",-1),V={class:"form_group"},q={class:"form_item"},B={class:"form_item"},C={class:"btn_group mgt20"},M={class:"acc_set"};function P(s,n,A,F,i,c){const a=v,r=d("v-text-field"),_=d("v-form");return h(),p("div",g,[t("div",y,[t("h2",x,f(i.layout.title),1),k,t("div",L,[t("div",w,[t("div",j,[e(a,{to:"javascript:void(0);",role:"button",class:"btn md kakao"},{default:o(()=>[l("카카오톡으로 로그인하기")]),_:1})]),t("div",G,[e(a,{to:"javascript:void(0);",role:"button",class:"btn md naver"},{default:o(()=>[l("네이버로 로그인하기")]),_:1})])]),N,e(_,{class:"form_wrap",ref:"form"},{default:o(()=>[t("div",V,[t("div",q,[e(r,{placeholder:"이메일 입력",variant:"outlined",rules:i.emailRules,required:"","hide-details":"auto",clearable:""},null,8,["rules"])]),t("div",B,[e(r,{type:"password",placeholder:"비밀번호 입력",variant:"outlined",rules:[i.rules.required],"hide-details":"auto",clearable:""},null,8,["rules"])])]),t("div",C,[t("button",{type:"button",class:"btn lg c01",onClick:n[0]||(n[0]=(...u)=>c.validate&&c.validate(...u))},"로그인")])]),_:1},512),t("div",M,[t("ul",null,[t("li",null,[e(a,{to:"javascript:void(0);",target:"_blank",title:"새 창 열림"},{default:o(()=>[l("이메일 찾기")]),_:1})]),t("li",null,[e(a,{to:"javascript:void(0);"},{default:o(()=>[l("비밀번호 재설정")]),_:1})]),t("li",null,[e(a,{to:"javascript:void(0);"},{default:o(()=>[l("회원가입")]),_:1})])])])])])])}const E=m(b,[["render",P]]);export{E as default};
