import{_ as c,o as s,c as a,F as i,r as d,I as _,a as u,t as p}from"./entry.ff5b9463.js";const m={name:"SortList",data(){return{data:[{selected:!0,value:0,title:"추천 순"},{selected:!1,value:1,title:"마감일 순"}]}},methods:{click(o){this.data=this.data.map(e=>(e.selected=o==e,e))}}},f={class:"sort_group",role:"listbox"},k=["aria-selected","onClick"];function h(o,e,x,b,r,l){return s(),a("ul",f,[(s(!0),a(i,null,d(r.data,(t,n)=>(s(),a("li",{role:"none",class:_({on:t.selected}),key:n},[u("button",{type:"button",role:"option","aria-selected":t.selected,onClick:g=>l.click(t)},p(t.title),9,k)],2))),128))])}const y=c(m,[["render",h]]);export{y as _};
