import{_ as f}from"./popupSelect.5063ce03.js";import{_ as m}from"./InputBox.a97d032d.js";import{_ as b,c as u,a as o,b as n,g as _,h as d,o as r}from"./entry.ff5b9463.js";import"./MVNOList.95885cb9.js";import"./nuxt-link.3bf03507.js";import"./frontData.466cf310.js";const y={name:"GuideFormPopupSelect",emits:["setLayout","openPopup"],data(){return{layout:{header:"sub",footer:"",title:""},deliveryRequestSelfInput:!1,emailSelfInput:!0,emailSelectDomain:""}},methods:{selectDeliveryRequest(s){this.deliveryRequestSelfInput=s.value==3,this.deliveryRequestSelfInput&&setTimeout(()=>{this.$refs.deliveryRequestSelfInput.$refs.input.focus()},10)},selectDomain(s){this.emailSelfInput=s.value==0,this.emailSelectDomain=s.title,this.emailSelfInput&&setTimeout(()=>{this.$refs.emailSelfInput.$refs.input.focus()},10)}},mounted(){this.$emit("setLayout",this.layout)},components:{InputBox:m,PopupSelect:f},props:{frontData:Object}},g={class:"container"},c={class:"content",id:"content"},v=o("h2",{class:"title_nav"},"Guide",-1),S=o("div",{class:"page_info"},"Form Popup Select",-1),I={class:"section"},$=o("h3",{class:"tit02"},"PopupSelect",-1),T={class:"form_group"},k=o("strong",{class:"form_label"},"현재 요금납부방법을 선택해주세요",-1),V={class:"form_item"},q={class:"form_group"},B=o("strong",{class:"form_label"},"알뜰폰 통신사",-1),w={class:"form_item"},C={class:"form_group"},R={class:"form_item"},M={class:"form_group"},N={class:"form_item"},D={class:"form_item"},L={class:"form_item"},O={class:"form_group"},P=o("strong",{class:"form_label"},"USIM 모델명",-1),A={class:"form_item"},h={class:"form_group"},F=o("strong",{class:"form_label"},"문의유형",-1),G={class:"form_item"},j={class:"list_version"},E={class:"form_group"},U=o("strong",{class:"form_label"},"모델명을 선택 해 주세요",-1),z={class:"form_item"},H={class:"form_group"},J=o("strong",{class:"form_label"},"휴대폰 모델명 선택",-1),K={class:"form_item"},Q={class:"form_group"},W=o("strong",{class:"form_label"},"은행 계좌번호",-1),X={class:"form_item"},Y={class:"form_item"},Z={class:"form_group"},x=o("strong",{class:"form_label"},"배송 시 요청사항 (선택)",-1),tt={class:"form_item"},et={key:0,class:"form_item"},ot={class:"form_group"},st=o("strong",{class:"form_label"},"이메일",-1),nt={class:"form_item"},lt=o("span",{class:"mark_div"},"@",-1),it=o("div",{class:"error"},null,-1),rt={class:"form_item"};function pt(s,t,at,ut,p,a){const l=f,i=m;return r(),u("div",g,[o("div",c,[v,S,o("div",I,[$,o("div",T,[k,o("div",V,[o("button",{type:"button",class:"btn_select",ref:"btn_payType",onClick:t[0]||(t[0]=(...e)=>s.$refs.payType.open&&s.$refs.payType.open(...e))},"선택하세요",512)]),n(l,{ref:"payType",option:{data:"payType",popupTitle:"선택",targetBtn:"btn_payType"},onSelectItem:t[1]||(t[1]=e=>console.log(e))},null,512)]),o("div",q,[B,o("div",w,[o("button",{type:"button",class:"btn_select",ref:"btn_MVNO",onClick:t[2]||(t[2]=(...e)=>s.$refs.MVNO.open&&s.$refs.MVNO.open(...e))},"선택",512)]),n(l,{ref:"MVNO",option:{data:"MVNO",popupTitle:"알뜰폰 통신사 선택",targetBtn:"btn_MVNO"},onSelectItem:t[3]||(t[3]=e=>console.log(e))},null,512)]),o("div",C,[o("div",R,[o("button",{type:"button",class:"btn_select boardsort",ref:"btn_boardSort",onClick:t[4]||(t[4]=(...e)=>s.$refs.boardSort.open&&s.$refs.boardSort.open(...e))},"전체",512),n(i,{option:{placeholder:"검색어를 입력해주세요",search:!0},onInputValue:t[5]||(t[5]=e=>console.log(e))})]),n(l,{ref:"boardSort",option:{data:"boardSort",popupTitle:"검색 구분",targetBtn:"btn_boardSort"},onSelectItem:t[6]||(t[6]=e=>console.log(e))},null,512)]),o("div",M,[o("div",N,[o("button",{type:"button",class:"btn_select",ref:"btn_subwayArea",onClick:t[7]||(t[7]=(...e)=>s.$refs.subwayArea.open&&s.$refs.subwayArea.open(...e))},"지역 선택",512)]),o("div",D,[o("button",{type:"button",class:"btn_select",ref:"btn_subwayLine",onClick:t[8]||(t[8]=(...e)=>s.$refs.subwayLine.open&&s.$refs.subwayLine.open(...e))},"노선 선택",512)]),o("div",L,[o("button",{type:"button",class:"btn_select",ref:"btn_subwayStation",onClick:t[9]||(t[9]=(...e)=>s.$refs.subwayStation.open&&s.$refs.subwayStation.open(...e))},"역 선택",512)]),n(l,{ref:"subwayArea",option:{data:"subwayArea",popupTitle:"지역 선택",targetBtn:"btn_subwayArea"},onSelectItem:t[10]||(t[10]=e=>console.log(e))},null,512),n(l,{ref:"subwayLine",option:{data:"subwayLine",popupTitle:"노선 선택",targetBtn:"btn_subwayLine"},onSelectItem:t[11]||(t[11]=e=>console.log(e))},null,512),n(l,{ref:"subwayStation",option:{data:"subwayStation",popupTitle:"역 선택",targetBtn:"btn_subwayStation"},onSelectItem:t[12]||(t[12]=e=>console.log(e))},null,512)]),o("div",O,[P,o("div",A,[o("button",{type:"button",class:"btn_select",ref:"btn_usimModel",onClick:t[13]||(t[13]=(...e)=>s.$refs.usimModel.open&&s.$refs.usimModel.open(...e))},"선택",512)]),n(l,{ref:"usimModel",option:{data:"usimModel",popupTitle:"선택",targetBtn:"btn_usimModel"},onSelectItem:t[14]||(t[14]=e=>console.log(e))},null,512)]),o("div",h,[F,o("div",G,[o("button",{type:"button",class:"btn_select",ref:"btn_inquiryType",onClick:t[15]||(t[15]=(...e)=>s.$refs.inquiryType.open&&s.$refs.inquiryType.open(...e))},"문의유형 선택",512)]),n(l,{ref:"inquiryType",option:{data:"inquiryType",popupTitle:"선택",targetBtn:"btn_inquiryType"},onSelectItem:t[16]||(t[16]=e=>console.log(e))},null,512)]),o("div",j,[o("button",{type:"button",class:"btn_select",ref:"btn_privacyVer",onClick:t[17]||(t[17]=(...e)=>s.$refs.privacyVer.open&&s.$refs.privacyVer.open(...e))},"버전 V.20230303",512),n(l,{ref:"privacyVer",option:{data:"privacyVer",popupTitle:"선택",targetBtn:"btn_privacyVer"},onSelectItem:t[18]||(t[18]=e=>console.log(e))},null,512)]),o("div",E,[U,o("div",z,[o("button",{type:"button",class:"btn_select",ref:"btn_iphone",onClick:t[19]||(t[19]=(...e)=>s.$refs.iphone.open&&s.$refs.iphone.open(...e))},"선택하세요",512)]),n(l,{ref:"iphone",option:{data:"iphone",popupTitle:"휴대폰 모델명 선택",targetBtn:"btn_iphone"},onSelectItem:t[20]||(t[20]=e=>console.log(e))},null,512)]),o("div",H,[J,o("div",K,[o("button",{type:"button",class:"btn_select",ref:"btn_galaxy",onClick:t[21]||(t[21]=(...e)=>s.$refs.galaxy.open&&s.$refs.galaxy.open(...e))},"선택하세요",512)]),n(l,{ref:"galaxy",option:{data:"galaxy",popupTitle:"휴대폰 모델명 선택",targetBtn:"btn_galaxy"},onSelectItem:t[22]||(t[22]=e=>console.log(e))},null,512)]),o("div",Q,[W,o("div",X,[o("button",{type:"button",class:"btn_select",ref:"btn_bank",onClick:t[23]||(t[23]=(...e)=>s.$refs.bank.open&&s.$refs.bank.open(...e))},"선택",512)]),o("div",Y,[n(i,{option:{placeholder:"‘-’ 없이 숫자만 입력"},onInputValue:t[24]||(t[24]=e=>console.log(e))})]),n(l,{ref:"bank",option:{data:"bank",popupTitle:"선택",targetBtn:"btn_bank"},onSelectItem:t[25]||(t[25]=e=>console.log(e))},null,512)]),o("div",Z,[x,o("div",tt,[o("button",{type:"button",class:"btn_select",ref:"btn_deliveryRequest",onClick:t[26]||(t[26]=(...e)=>s.$refs.deliveryRequest.open&&s.$refs.deliveryRequest.open(...e))},"배송 시 요청사항 선택하기",512)]),p.deliveryRequestSelfInput?(r(),u("div",et,[n(i,{option:{placeholder:"40글자 이내로 입력"},onInputValue:t[27]||(t[27]=e=>console.log(e)),ref:"deliveryRequestSelfInput"},null,512)])):_("",!0),n(l,{ref:"deliveryRequest",option:{data:"deliveryRequest",popupTitle:"배송 시 요청사항 선택",targetBtn:"btn_deliveryRequest"},onSelectItem:t[28]||(t[28]=e=>a.selectDeliveryRequest(e))},null,512)]),o("div",ot,[st,o("div",nt,[n(i,{option:{placeholder:"아이디"},onInputValue:t[29]||(t[29]=e=>console.log(e))}),lt,p.emailSelfInput?(r(),d(i,{key:0,option:{placeholder:"도메인"},onInputValue:t[30]||(t[30]=e=>console.log(e)),ref:"emailSelfInput"},null,512)):(r(),d(i,{key:1,option:{value:p.emailSelectDomain,placeholder:"도메인",disabled:!0},onInputValue:t[31]||(t[31]=e=>console.log(e)),ref:"domain"},null,8,["option"]))]),it,o("div",rt,[o("button",{type:"button",class:"btn_select",ref:"btn_email",onClick:t[32]||(t[32]=(...e)=>s.$refs.email.open&&s.$refs.email.open(...e))},"직접입력",512)]),n(l,{ref:"email",option:{data:"email",popupTitle:"도메인 선택",targetBtn:"btn_email"},onSelectItem:t[33]||(t[33]=e=>a.selectDomain(e))},null,512)])])])])}const gt=b(y,[["render",pt]]);export{gt as default};
