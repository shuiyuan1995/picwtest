(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-84066508"],{"8abb":function(t,a,e){},b56d:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home fullscreen"},[e("smallhead",{attrs:{left:"huitui",center:"发红包"}}),e("mynav",{staticClass:"nav",attrs:{allroomred:t.allroomred}}),e("p",{staticClass:"title"},[t._v(t._s(t.$t("message.chooseluck")))]),e("ul",{staticClass:"numlist flex"},t._l(10,function(a){return e("li",{key:a,class:t.number==a-1?"active":"",on:{click:function(e){t.gonum(a)}}},[t._v(t._s(a-1))])}),0),e("p",{staticClass:"contant"},[t._v(t._s(t.$t("message.explain")))]),e("p",{staticClass:"contant"},[t._v(t._s(t.$t("message.explain1")))]),e("div",{staticClass:"btn"},[e("button",{staticClass:"gobtn",on:{click:t.send}},[t._v(t._s(t.$t("message.sendbtn1")))])]),e("loadingbao",{directives:[{name:"show",rawName:"v-show",value:t.loadingbao,expression:"loadingbao"}],attrs:{loadingbaodata:t.loadingbaodata}})],1)},o=[],s=(e("c5f6"),e("be94")),i=(e("cadf"),e("551c"),e("097d"),e("3069")),c=e("2f62"),l=e("aa16"),d=e("bd5c"),r=e("4534"),u=e("9fb0"),b=e("365c"),m={data:function(){return{number:Math.floor(9*Math.random()),eosnum:[.1,1,5,20],allroomred:[],loadingbao:!1,loadingbaodata:{intype:1}}},components:{smallhead:i["a"],mynav:l["a"],loadingbao:d["a"]},methods:Object(s["a"])({},Object(c["b"])({SET_ROOM_RED_EVELOPE_LIST_UPDATA:u["r"],SET_CLICK_ROOMID_RED_EVELOPE_LIST:u["c"]}),Object(c["d"])({SET_MY_SEND:u["k"],SET_ROOMID:u["o"]}),{changeE:function(t){var a=t;this.SET_CLICK_ROOMID_RED_EVELOPE_LIST({roomid:a,redEnvelopeList:this.roomRedEnvelopeList[t]})},gonum:function(t){this.number=t-1},send:function(){return"{}"===JSON.stringify(this.userInfo)?Object(r["e"])():(this.loadingbaodata=Object(s["a"])({},this.loadingbaodata,{eos:this.eosnum[this.roomId],num:this.number}),this.loadingbao=!this.loadingbao,console.log(this.loadingbaodata),!1)},updata:function(t){var a={name:this.userInfo.name,packetId:t.packetId,txId:t.txId,type:1,num:this.number,eos:this.eosnum[this.roomId],time:(new Date).getTime()/1e3,none:!1},e={issus_sum:this.eosnum[this.roomId],tail_number:this.number,count:10,eosid:t.packetId,blocknumber:t.txId,addr:this.inviteName},n=this.roomId;this.SET_ROOM_RED_EVELOPE_LIST_UPDATA({packetData:a,index:n}),Object(b["b"])("/issus_packet",e).then(function(){})},closeloadingbao:function(){this.loadingbao=!this.loadingbao}}),computed:Object(s["a"])({},Object(c["c"])(["roomId","userInfo","inviteName","redEnvelopeList","roomRedEnvelopeList"]))},_=m,h=(e("b711"),e("2877")),E=Object(h["a"])(_,n,o,!1,null,"74188e06",null);E.options.__file="send.vue";a["default"]=E.exports},b711:function(t,a,e){"use strict";var n=e("8abb"),o=e.n(n);o.a}}]);