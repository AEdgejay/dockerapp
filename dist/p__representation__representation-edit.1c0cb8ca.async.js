(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[66],{DLi7:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),i=a.n(l),n=a("Pm34"),p=a.n(n),r=a("ZHV7"),s=a.n(r),o=a("cSAx");t["default"]=function(){return Object(o["a"])([{title:"\u9996\u9875"},{title:"\u7533\u8ff0\u7ba1\u7406",path:"/representation"},{title:"\u5904\u7406\u7533\u8ff0"}]),i.a.createElement("div",null,i.a.createElement(p.a,{namespace:"representation-edit",config:s.a}))}},ZHV7:function(e,t,a){var l=a("r6W7");e.exports={layout:l.layout.form,title:l.pageName.edit,items:[{component:"Form",config:{API:{getAPI:l.getAPI,updateAPI:l.updateAPI},layout:"Grid",layoutConfig:{value:Array(l.columns).fill(~~(24/l.columns))},fields:l.updateFields||l.formFields}}]}},cSAx:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var l=a("q1tI"),i=a("1cYI"),n=a("tONX");function p(e){var t=Object(l["useContext"])(n["a"]),a=t.OnBreadcrumb,p=t.OnBreadcrumbClear;Object(i["useDidMount"])(t=>{a(e)}),Object(i["useWillUnmount"])(e=>{p()})}},r6W7:function(e){e.exports=JSON.parse('{"pageName":{"table":"\u7533\u8ff0\u7ba1\u7406","new":"\u6dfb\u52a0\u7533\u8ff0\u7c7b\u578b","edit":"\u5904\u7406\u7533\u8ff0","view":"\u67e5\u770b\u8be6\u60c5"},"listAPI":"/api/crud/oms/player/players","createAPI":"/api/crud/oms/player/players","getAPI":"/api/crud/oms/player/players/[id]","updateAPI":"/api/crud/oms/player/players/[id]","deleteAPI":"/api/crud/oms/player/players/(id)","columns":1,"createFields":[{"label":"\u7533\u8ff0\u7c7b\u578b","rules":[{"type":"required"}],"props":{"placeholder":"\u8bf7\u8f93\u5165\u7533\u8ff0\u7c7b\u578b"},"type":"input","field":"name"}],"updateFields":[{"label":"\u5356\u65b9\u8d26\u53f7","field":"name","type":"plain","span":24},{"label":"\u4e70\u65b9\u8d26\u53f7","field":"name","type":"plain","span":24},{"label":"\u7533\u8ff0\u7c7b\u578b","field":"name","type":"plain","span":24},{"label":"\u7533\u8ff0\u5185\u5bb9","field":"name","type":"plain","span":24},{"label":"\u5904\u7406","field":"name","type":"text-area","span":24}],"map":{},"layout":{"table":"Content","form":"TitleContent"},"tableActions":[{"title":"\u6dfb\u52a0\u7c7b\u578b","type":"path","options":{"style":"primary","path":"/representation/representation-add"}}],"tableOperation":[{"title":"\u67e5\u770b\u8be6\u60c5","type":"path","options":{"outside":true,"style":"path","path":"representation/representation-view"},"expect":{"permission":""}},{"title":"\u5904\u7406","type":"path","options":{"outside":true,"style":"path","path":"representation/representation-edit"},"expect":{"permission":""}}],"searchFields":[{"label":"\u8d26\u53f7","field":"name","type":"input","props":{"placeholder":"\u8bf7\u8f93\u5165\u8d26\u53f7"}},{"label":"\u7533\u8ff0\u72b6\u6001","field":"description","type":"select","options":[{"label":"\u5df2\u5904\u7406"},{"label":"\u672a\u5904\u7406"},{"label":"\u5904\u7406\u4e2d"}],"props":{"placeholder":"\u8bf7\u9009\u62e9"}}],"tableFields":[{"label":"\u5e8f\u53f7","field":"id"},{"label":"\u5356\u65b9\u8d26\u53f7","field":"name"},{"label":"\u4e70\u65b9\u8d26\u53f7","field":"recommendCount"},{"label":"\u7533\u8ff0\u7c7b\u578b","field":"adoptWisp"},{"label":"\u7533\u8ff0\u5185\u5bb9","field":"adoptWispCount"},{"label":"\u7533\u8ff0\u72b6\u6001","field":"teamSize"},{"label":"\u5904\u7406\u4eba","field":"status"}],"viewConfig":[{"label":"\u5356\u65b9\u8d26\u53f7","field":"name","type":"plain","span":24},{"label":"\u4e70\u65b9\u8d26\u53f7","field":"name","type":"plain","span":24},{"label":"\u7533\u8ff0\u7c7b\u578b","field":"name","type":"plain","span":24},{"label":"\u7533\u8ff0\u5185\u5bb9","field":"name","type":"plain","span":24},{"label":"\u5904\u7406\u7ed3\u679c","field":"name","type":"plain","span":24}]}')},tONX:function(e,t,a){"use strict";var l=a("q1tI"),i=a.n(l),n=i.a.createContext({});t["a"]=n}}]);