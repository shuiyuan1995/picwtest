(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a8e22d6c"],{"295b":function(t,s,e){"use strict";var a=e("6bca"),i=e.n(a);i.a},"38a9":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-page",{staticClass:"fullscreen column home"},[e("smallhead",{attrs:{title:t.$t("message.board"),right:!1}}),e("div",[e("div",{staticClass:"listtitle paititle flex"},[e("span",[t._v(t._s(t.$t("message.rank")))]),e("span",[t._v(t._s(t.$t("message.user")))]),e("span",[t._v(t._s(t.$t("message.amount")))]),e("span",[t._v(t._s(t.$t("message.prize")))])]),t.items2&&t.items2.length>0?e("q-scroll-area",{staticClass:"pailist column"},t._l(t.items2,function(s,a){return e("div",{key:a,staticClass:"paiitem flex"},[e("span",{staticClass:"num",class:a<3?""+(a+1):""},[t._v(t._s(a+1))]),e("p",[t._v(t._s(s.user))]),e("p",[e("span",[t._v(t._s((s.balance/1e4).toFixed(4)))]),t._v(" EOS")]),e("p",[e("span",[t._v(t._s((s.prize/1e4).toFixed(4)))]),t._v(" EOS")])])}),0):e("p",{staticClass:"bottomtxt"},[t._v(t._s(t.$t("message.wu")))])],1)],1)},i=[],n=e("be94"),c=(e("cadf"),e("551c"),e("097d"),e("3069")),o=e("2f62"),l=e("4534"),r={created:function(){var t=this;this.$q.loading.show(),Object(l["h"])().then(function(s){t.$q.loading.hide(),t.items2=s}).catch(function(){t.$q.loading.hide(),t.$q.notify({message:"服务器繁忙，请稍后再试",timeout:500,color:"red",position:"center"})})},components:{smallhead:c["a"]},data:function(){return{swiperOption:{slidesPerView:1},items2:[]}},computed:Object(n["a"])({},Object(o["c"])(["userInfo"]))},u=r,p=(e("e448"),e("295b"),e("2877")),m=Object(p["a"])(u,a,i,!1,null,"5b8e724c",null);m.options.__file="mylist.vue";s["default"]=m.exports},"6bca":function(t,s,e){},b017:function(t,s,e){},e448:function(t,s,e){"use strict";var a=e("b017"),i=e.n(a);i.a}}]);