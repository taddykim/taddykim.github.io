import{_,o,c as i,G as h,d as c,g as l,j as m,H as r,a as n,I as p}from"./entry.a941e244.js";const b={name:"InputBox",emits:["inputValue"],data(){return{type:this.option.type?this.option.type:"text",value:this.option.value==null?"":this.option.value}},watch:{value(t){this.$emit("inputValue",t)},option:{handler(t){this.value=t.value},deep:!0}},methods:{deleteValue(){this.value="",this.$refs.input.focus()}},mounted(){this.option.value==null||this.option.value==""||(this.value=this.option.value)},props:{option:Object}},v={key:0,class:"num_mark"},f=n("span",null,"****",-1),y=["type","placeholder","maxLength","minLength","disabled","readonly"],N=n("span",{class:"blind"},"입력 내용 삭제",-1),x=[N],V=["disabled"],k=n("span",{class:"blind"},"검색",-1),g=[k],L={key:3,class:"timer"},B=n("span",null,"0:01",-1),D=["disabled"];function C(t,s,e,j,a,d){return o(),i("div",{class:p(["input_box",{search:e.option.search||e.option.findNum,find_num:e.option.findNum,auth_num:e.option.authNum}])},[h(t.$slots,"before"),e.option.findNum?(o(),i("div",v,[c("010-"),f,c("-")])):l("",!0),m(n("input",{class:"input",ref:"input",type:a.type,placeholder:e.option.placeholder,maxLength:e.option.maxLength,minLength:e.option.minLength,"onUpdate:modelValue":s[0]||(s[0]=u=>a.value=u),disabled:e.option.disabled,readonly:e.option.readonly},null,8,y),[[r,a.value]]),a.value?(o(),i("button",{key:1,type:"button",class:"btn_del",onClick:s[1]||(s[1]=(...u)=>d.deleteValue&&d.deleteValue(...u))},x)):l("",!0),e.option.search||e.option.findNum?(o(),i("button",{key:2,type:"button",class:"btn_search",disabled:e.option.seasrchDisabled},g,8,V)):l("",!0),e.option.authNum?(o(),i("div",L,[B,n("button",{type:"button",disabled:e.option.authNumDisabled},"시간연장하기",8,D)])):l("",!0),h(t.$slots,"after")],2)}const I=_(b,[["render",C]]);export{I as _};
