(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[76],{"2qVr":function(e){e.exports=JSON.parse('{"pageName":{"table":"\u573a\u6b21","new":"\u6dfb\u52a0\u7cbe\u7075","edit":"\u7f16\u8f91\u7cbe\u7075"},"listAPI":"/api/crud/oms/marketingSession/marketingSessions","createAPI":"/api/crud/oms/marketingSession/marketingSessions","getAPI":"/api/crud/oms/marketingSession/marketingSessions/[id]","updateAPI":"/api/crud/oms/marketingSession/marketingSessions/[id]","deleteAPI":"/api/crud/oms/marketingSession/marketingSessions/(id)","columns":1,"createFields":[],"updateFields":[],"map":{},"layout":{"table":"Content","form":"TitleContent"},"tableActions":[],"tableOperation":[],"searchFields":[{"label":"\u540d\u79f0","field":"title","type":"input","props":{"placeholder":"\u8bf7\u8f93\u5165\u573a\u6b21\u540d\u79f0"}}],"tableFields":[{"label":"\u5e8f\u53f7","field":"id","align":"center"},{"label":"\u573a\u6b21\u53f7","field":"number","align":"center"},{"label":"\u573a\u6b21\u540d\u79f0","field":"title","align":"center"},{"label":"\u5f00\u59cb\u65f6\u95f4","field":"startTime","align":"center"},{"label":"\u7ed3\u675f\u65f6\u95f4","field":"endTime","align":"center"}]}')},UqU8:function(e,t,i){var n=i("2qVr");e.exports={layout:n.layout.table,title:n.pageName.table,items:[{component:"Search",config:{fields:n.searchFields}},{component:"Table",config:{API:{listAPI:n.listAPI,appendAPI:"",deleteAPI:n.deleteAPI},actions:n.tableActions,fields:n.tableFields,operation:n.tableOperation}}]}},cSAx:function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var n=i("q1tI"),a=i("1cYI"),s=i("tONX");function l(e){var t=Object(n["useContext"])(s["a"]),i=t.OnBreadcrumb,l=t.OnBreadcrumbClear;Object(a["useDidMount"])(t=>{i(e)}),Object(a["useWillUnmount"])(e=>{l()})}},l65V:function(e,t,i){"use strict";i.r(t);var n=i("cSAx"),a=i("q1tI"),s=i.n(a),l=i("Pm34"),r=i.n(l),o=i("UqU8"),c=i.n(o);t["default"]=function(){return Object(n["a"])([{title:"\u9996\u9875"},{title:"\u7cbe\u7075\u5904\u7406"},{title:"\u573a\u6b21",path:"/spiritprocessnumber"}]),s.a.createElement("div",null,s.a.createElement(r.a,{namespace:"spiritprocessnumber",config:c.a}))}},tONX:function(e,t,i){"use strict";var n=i("q1tI"),a=i.n(n),s=a.a.createContext({});t["a"]=s}}]);