import{_ as h}from"./nuxt-link.3bf03507.js";import{f as r}from"./frontData.466cf310.js";import{_ as f,o as e,c as s,F as _,r as d,I as k,a as o,t as a,b as x,w as y}from"./entry.ff5b9463.js";const g={name:"MVNOList",emits:["MVNOSelect"],data(){return{data:Object}},methods:{select(n){this.option.listType!="list"&&(this.data=this.data.map(i=>(i.selected=n==i,i)),this.$emit("MVNOSelect",n))}},props:{option:Object},mounted(){const n=this.option.data;this.data=r.select[n]},components:{frontData:r}},b={key:0,class:"mvno_list",role:"listbox"},N=["aria-selected","data-option","onClick"],O={key:0,class:"img"},V={key:1,class:"img"},C=["src","alt"],v={class:"tex"},B={key:1,class:"mvno_list",role:"listbox"},L={class:"img"},M=["src","alt"],S={class:"tex"};function $(n,i,p,j,c,m){const u=h;return p.option.type=="select"?(e(),s("ul",b,[(e(!0),s(_,null,d(c.data,(t,l)=>(e(),s("li",{role:"none",class:k({on:t.selected}),key:l},[o("button",{type:"button",role:"option","aria-selected":t.selected,"data-option":t.title,onClick:w=>m.select(t)},[t.title=="전체"?(e(),s("span",O,a(t.title),1)):(e(),s("span",V,[o("img",{src:t.img,alt:t.title},null,8,C)])),o("span",v,a(t.title),1)],8,N)],2))),128))])):(e(),s("ul",B,[(e(!0),s(_,null,d(c.data,(t,l)=>(e(),s("li",{key:l},[x(u,{to:t.link},{default:y(()=>[o("span",L,[o("img",{src:t.img,alt:t.title},null,8,M)]),o("span",S,a(t.title),1)]),_:2},1032,["to"])]))),128))]))}const E=f(g,[["render",$]]);export{E as _};
