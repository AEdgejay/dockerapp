(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[68],{VwyT:function(e,t,l){var a=l("cl9M");e.exports={layout:a.layout.table,title:a.pageName.table,items:[{component:"Search",config:{fields:a.searchFields}},{component:"Table",config:{API:{listAPI:a.listAPI,appendAPI:"",deleteAPI:a.deleteAPI},actions:a.tableActions,fields:a.tableFields,operation:a.tableOperation}}]}},cSAx:function(e,t,l){"use strict";l.d(t,"a",(function(){return p}));var a=l("q1tI"),n=l("1cYI"),i=l("tONX");function p(e){var t=Object(a["useContext"])(i["a"]),l=t.OnBreadcrumb,p=t.OnBreadcrumbClear;Object(n["useDidMount"])(t=>{l(e)}),Object(n["useWillUnmount"])(e=>{p()})}},cl9M:function(e){e.exports=JSON.parse('{"pageName":{"table":"\u7533\u8ff0\u7ba1\u7406","new":"\u6dfb\u52a0\u7533\u8ff0\u7c7b\u578b","edit":"\u5904\u7406\u7533\u8ff0","view":"\u67e5\u770b\u8be6\u60c5"},"listAPI":"/api/crud/oms/player/players","createAPI":"/api/crud/oms/player/players","getAPI":"/api/crud/oms/player/players/[id]","updateAPI":"/api/crud/oms/player/players/[id]","deleteAPI":"/api/crud/oms/player/players/(id)","columns":1,"createFields":[{"label":"\u7533\u8ff0\u7c7b\u578b","rules":[{"type":"required"}],"props":{"placeholder":"\u8bf7\u8f93\u5165\u7533\u8ff0\u7c7b\u578b"},"type":"input","field":"representationType"}],"updateFields":[{"label":"\u5356\u65b9\u8d26\u53f7","field":"sellerAccount","type":"plain","span":24},{"label":"\u4e70\u65b9\u8d26\u53f7","field":"buyerAccount","type":"plain","span":24},{"label":"\u7533\u8ff0\u7c7b\u578b","field":"representationType","type":"plain","span":24},{"label":"\u7533\u8ff0\u5185\u5bb9","field":"representationInfo","type":"plain","span":24},{"label":"\u5904\u7406","field":"handleResult","type":"text-area","props":{"placeholder":"\u8bf7\u8f93\u5165\u5904\u7406\u5185\u5bb9"},"span":24}],"map":{},"layout":{"table":"Content","form":"TitleContent"},"tableActions":[{"title":"\u6dfb\u52a0\u7c7b\u578b","type":"path","options":{"style":"primary","path":"/representation/representation-add"}}],"tableOperation":[{"title":"\u67e5\u770b\u8be6\u60c5","type":"path","options":{"outside":true,"style":"path","path":"representation/representation-view"},"expect":{"permission":""}},{"title":"\u5904\u7406","type":"path","options":{"outside":true,"style":"path","path":"representation/representation-edit"},"expect":{"permission":""}},{"title":"\u5220\u9664","type":"delete","options":{"outside":false,"API":"/api/crud/oms/wisp/wisps/(id)","method":"delete"},"expect":{"permission":""}}],"searchFields":[{"label":"\u8d26\u53f7","field":"name","type":"input","props":{"placeholder":"\u8bf7\u8f93\u5165\u8d26\u53f7"}},{"label":"\u7533\u8ff0\u72b6\u6001","field":"description","type":"select","options":[{"label":"\u5df2\u5904\u7406"},{"label":"\u672a\u5904\u7406"},{"label":"\u5904\u7406\u4e2d"}],"props":{"placeholder":"\u8bf7\u9009\u62e9"}}],"tableFields":[{"label":"\u5e8f\u53f7","field":"id","align":"center"},{"label":"\u5356\u65b9\u8d26\u53f7","field":"sellerAccount","align":"center"},{"label":"\u4e70\u65b9\u8d26\u53f7","field":"buyerAccount","align":"center"},{"label":"\u7533\u8ff0\u7c7b\u578b","field":"representationType","align":"center"},{"label":"\u7533\u8ff0\u5185\u5bb9","field":"representationInfo","align":"center"},{"label":"\u7533\u8ff0\u72b6\u6001","field":"representationStatus","align":"center"},{"label":"\u5904\u7406\u4eba","field":"handleUser","align":"center"}],"viewConfig":[{"label":"\u5356\u65b9\u8d26\u53f7","field":"sellerAccount","type":"plain","span":24},{"label":"\u4e70\u65b9\u8d26\u53f7","field":"buyerAccount","type":"plain","span":24},{"label":"\u7533\u8ff0\u7c7b\u578b","field":"representationType","type":"plain","span":24},{"label":"\u7533\u8ff0\u5185\u5bb9","field":"representationInfo","type":"plain","span":24},{"label":"\u5904\u7406\u7ed3\u679c","field":"handleResult","type":"plain","span":24}]}')},tONX:function(e,t,l){"use strict";var a=l("q1tI"),n=l.n(a),i=n.a.createContext({});t["a"]=i},z4HB:function(e,t,l){"use strict";l.r(t);var a=l("q1tI"),n=l.n(a),i=l("Pm34"),p=l.n(i),r=l("VwyT"),s=l.n(r),o=l("cSAx");t["default"]=function(){return Object(o["a"])([{title:"\u9996\u9875",path:"/representation"},{title:"\u7533\u8ff0\u7ba1\u7406"}]),n.a.createElement("div",null,n.a.createElement(p.a,{namespace:"representation",config:s.a}))}}}]);