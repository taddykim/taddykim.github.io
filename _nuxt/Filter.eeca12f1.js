import{_ as i,o as t,c as e,a,F as l,r as _,d,t as u}from"./entry.a941e244.js";const p={name:"Filter",emits:["filterDelete"],data(){return{getData:this.data}},methods:{filterClick(s){this.$emit("filterDelete",s)}},props:{data:Object}},m={class:"tag_list02"},f=["onClick"],h=a("span",{class:"blind"},"삭제",-1);function k(s,x,r,b,g,o){return t(),e("div",m,[a("ul",null,[(t(!0),e(l,null,_(r.data,(n,c)=>(t(),e("li",{key:c},[a("button",{type:"button",onClick:C=>o.filterClick(n)},[d(u(n.value)+" ",1),h],8,f)]))),128))])])}const $=i(p,[["render",k]]);export{$ as _};
