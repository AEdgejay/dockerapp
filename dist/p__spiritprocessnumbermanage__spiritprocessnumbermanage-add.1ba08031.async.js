(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[78],{"8rww":function(e,t,i){var n=i("lkS6");e.exports={layout:n.layout.form,title:n.pageName.new,items:[{component:"Form",config:{API:{createAPI:n.createAPI},layout:"Grid",layoutConfig:{value:Array(n.columns).fill(~~(24/n.columns))},fields:n.createFields||n.formFields}}]}},cSAx:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var n=i("q1tI"),a=i("1cYI"),l=i("tONX");function r(e){var t=Object(n["useContext"])(l["a"]),i=t.OnBreadcrumb,r=t.OnBreadcrumbClear;Object(a["useDidMount"])(t=>{i(e)}),Object(a["useWillUnmount"])(e=>{r()})}},lkS6:function(e){e.exports=JSON.parse('{"pageName":{"table":"\u573a\u6b21\u7ba1\u7406","new":"\u6dfb\u52a0\u573a\u6b21","edit":"\u7f16\u8f91\u573a\u6b21","view":"\u67e5\u770b\u8be6\u60c5"},"listAPI":"/api/crud/oms/marketingSession/marketingSessions","createAPI":"/api/crud/oms/marketingSession/marketingSessions","getAPI":"/api/crud/oms/marketingSession/marketingSessions/[id]","updateAPI":"/api/crud/oms/marketingSession/marketingSessions/[id]","deleteAPI":"/api/crud/oms/marketingSession/marketingSessions/(id)","columns":1,"createFields":[{"label":"\u573a\u6b21\u53f7","props":{"placeholder":"\u8bf7\u8f93\u5165\u573a\u6b21\u53f7"},"rules":[{"type":"required"}],"type":"input","field":"number","align":"center"},{"label":"\u573a\u6b21\u540d\u79f0","props":{"placeholder":"\u8bf7\u8f93\u5165\u573a\u6b21\u540d\u79f0"},"type":"input","field":"title","align":"center","rules":[{"type":"required"}]},{"label":"\u5f00\u59cb\u65f6\u95f4","type":"timeinput","field":"startTime","align":"center","rules":[{"type":"required"}]},{"label":"\u7ed3\u675f\u65f6\u95f4","field":"endTime","type":"timeinput","align":"center","rules":[{"type":"required"}]}],"updateFields":[{"label":"\u573a\u6b21\u53f7","props":{"placeholder":"\u8bf7\u8f93\u5165\u573a\u6b21\u53f7"},"rules":[{"type":"required"}],"type":"input","field":"number","align":"center"},{"label":"\u573a\u6b21\u540d\u79f0","type":"input","field":"title","align":"center","rules":[{"type":"required"}],"props":{"placeholder":"\u8bf7\u8f93\u5165\u573a\u6b21\u53f7"}},{"label":"\u5f00\u59cb\u65f6\u95f4","type":"timeinput","field":"startTime","align":"center","rules":[{"type":"required"}],"options":{"placeholder":"\u8bf7\u8f93\u5165\u573a\u6b21\u53f7"}},{"label":"\u7ed3\u675f\u65f6\u95f4","field":"endTime","type":"timeinput","align":"center","rules":[{"type":"required"}]}],"map":{},"layout":{"table":"Content","form":"TitleContent"},"tableActions":[{"title":"\u6dfb\u52a0\u573a\u6b21","type":"path","options":{"style":"primary","path":"/spiritprocessnumbermanage/spiritprocessnumbermanage-add"}}],"tableOperation":[{"title":"\u7f16\u8f91","type":"path","options":{"style":"path","path":"spiritprocessnumbermanage/spiritprocessnumbermanage-edit","outside":true}},{"title":"\u8be6\u60c5","type":"path","options":{"style":"path","path":"spiritprocessnumbermanage/spiritprocessnumbermanage-view","outside":true}},{"title":"\u5220\u9664","type":"delete","options":{"outside":false,"API":"/api/crud/oms/wisp/wisps/(id)","method":"delete"},"expect":{"permission":""}}],"searchFields":[{"label":"\u540d\u79f0","field":"title","type":"input","props":{"placeholder":"\u8bf7\u8f93\u5165\u573a\u6b21\u540d\u79f0"}}],"tableFields":[{"label":"\u5e8f\u53f7","field":"id","align":"center"},{"label":"\u573a\u6b21\u53f7","field":"number","align":"center"},{"label":"\u573a\u6b21\u540d\u79f0","field":"title","align":"center"},{"label":"\u5f00\u59cb\u65f6\u95f4","field":"startTime","align":"center"},{"label":"\u7ed3\u675f\u65f6\u95f4","field":"endTime","align":"center"}],"viewConfig":[{"label":"\u573a\u6b21\u53f7","field":"number","type":"plain","span":24},{"label":"\u573a\u6b21\u540d\u79f0","field":"title","type":"plain","span":24},{"label":"\u5f00\u59cb\u65f6\u95f4","field":"startTime","type":"timeinput","span":24},{"label":"\u7ed3\u675f\u65f6\u95f4","field":"endTime","type":"timeinput","span":24}]}')},tONX:function(e,t,i){"use strict";var n=i("q1tI"),a=i.n(n),l=a.a.createContext({});t["a"]=l},vq8Q:function(e,t,i){"use strict";i.r(t);var n=i("q1tI"),a=i.n(n),l=i("Pm34"),r=i.n(l),s=i("8rww"),p=i.n(s),o=i("cSAx");t["default"]=function(){return Object(o["a"])([{title:"\u9996\u9875"},{title:"\u573a\u6b21\u7ba1\u7406",path:"/spiritprocessnumbermanage"},{title:"\u6dfb\u52a0\u573a\u6b21"}]),a.a.createElement("div",null,a.a.createElement(r.a,{namespace:"spiritprocessnumbermanage_add",config:p.a}))}}}]);