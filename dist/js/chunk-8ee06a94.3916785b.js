(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8ee06a94"],{2066:function(t,s,a){t.exports=a.p+"img/bao.6d30fd46.gif"},5603:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"recordHair fullscreen scroll"},[e("smallhead",{attrs:{left:"huitui",center:""+t.name+t.$t("message.debao"),right:"jilu"}}),e("div",{staticClass:"nav"},[e("div",{staticClass:"item",class:0==t.thisjilu?"active":"",on:{click:function(s){t.changeN(0)}}},[t._v("\n      "+t._s(t.$t("message.fa"))+"\n    ")]),e("div",{staticClass:"item",class:1==t.thisjilu?"active":"",on:{click:function(s){t.changeN(1)}}},[t._v("\n      "+t._s(t.$t("message.shou"))+"\n    ")])]),e("div",{staticClass:"box"},[e("div",{staticClass:"boxinfo"},[e("p",{staticClass:"sendname"},[e("span",{staticClass:"big"},[t._v(t._s(t.name))]),t._v(t._s(t.$t("message.debao"))),e("span",{staticClass:"time"},[t._v("("+t._s(t.timer)+")")])]),e("div",{staticClass:"bao"},[e("div",{staticClass:"box-top"},[e("img",{attrs:{src:a("8362")}}),e("div",[e("p",[t._v(t._s(t.$t("message.wei"))+":"+t._s(t.num))]),e("p",[t._v(t._s(t.$t("message.linwan")))])])]),e("div",{staticClass:"box-bottom"},[t._v(t._s(t.$t("message.gong"))+t._s(t.data.outpacketsum)+" EOS")])]),e("cube-scroll",{ref:"scroll",staticClass:"recordscroll"},[t.data.data&&t.data.data.length>0?e("ul",t._l(t.data.data,function(s,i){return e("li",{key:i,staticClass:"recordlist"},[e("div",[e("p",{staticClass:"name"},[t._v(t._s(s.user))]),e("p",{staticClass:"money"},[e("span",{staticClass:"orange"},[t._v(t._s(s.income_sum))]),t._v(" EOS+"),e("span",{staticClass:"orange"},[t._v(t._s(s.own))]),t._v(" OWN\n              ")])]),e("p",[e("span",{staticClass:"time"},[t._v(t._s(s.created_at))]),e("span",{staticClass:"img"},[1==s.is_chailei?e("img",{attrs:{src:a("3f20")}}):t._e(),s.reward_type>0?e("img",{attrs:{src:t.typeImg[s.reward_type]}}):t._e()])])])}),0):e("div",{staticClass:"recordsnone"},[e("img",{attrs:{src:a("2066")}}),e("p",[t._v(t._s(t.$t("message.jinxin1")))])])]),e("span",{staticClass:"close icon icon-close",on:{click:function(s){t.$router.go(-1)}}})],1)])],1)},i=[],c=a("be94"),n=a("3069"),r=a("2f62"),o=a("365c"),l=a("9fb0"),d=a("4534"),u={created:function(){var t=this;this.packetId=this.$route.params.txId,this.name=this.$route.params.name,this.num=this.$route.params.num,this.time=this.$route.params.time;var s={outid:this.packetId};this.SET_LOADING(!0),Object(o["a"])("/red_packet",s).then(function(s){t.SET_LOADING(!1),console.log(s),t.data=s,t.data.data=s.data.map(function(t,s){return Object(c["a"])({},t,{created_at:Object(d["b"])(1e3*t.updated_at,"MM-dd hh:mm")})})}).catch(function(){t.SET_LOADING(!1)})},data:function(){return{packetId:"",data:{}}},components:{smallhead:n["a"]},computed:Object(c["a"])({},Object(r["c"])(["userInfo","thisjilu"]),{typeImg:function(){return["",a("6c09"),a("0eed"),a("f1e7"),a("80df"),a("0443")]},timer:function(){return Object(d["b"])(this.time,"hh:mm:ss")}}),methods:Object(c["a"])({},Object(r["d"])({SET_LOADING:l["i"],SET_THISJULU:l["s"]}),{changeN:function(t){this.SET_THISJULU(t),this.$router.push("/record-hair")}})},m=u,_=(a("fa9c"),a("2877")),p=Object(_["a"])(m,e,i,!1,null,"8a8a6e88",null);p.options.__file="record-this.vue";s["default"]=p.exports},"77e0":function(t,s,a){},fa9c:function(t,s,a){"use strict";var e=a("77e0"),i=a.n(e);i.a}}]);