(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[35],{"B+vS":function(e,t,l){"use strict";l.r(t);var i=l("q1tI"),a=l.n(i),p=l("Pm34"),o=l.n(p),n=l("bqtl"),r=l.n(n),s=l("cSAx");t["default"]=function(){return Object(s["a"])([{title:"\u9996\u9875"},{title:"\u914d\u7f6e\u5206\u7ec4",path:"/configGroups"},{title:"\u7f16\u8f91\u5206\u7ec4"}]),a.a.createElement("div",null,a.a.createElement(o.a,{namespace:"configItems_edit",config:r.a}))}},bqtl:function(e,t,l){var i=l("rYxW");e.exports={layout:i.layout.form,title:i.pageName.edit,items:[{component:"Form",config:{API:{getAPI:i.getAPI,updateAPI:i.updateAPI},layout:"Grid",layoutConfig:{value:Array(i.columns).fill(~~(24/i.columns))},fields:i.updateFields||i.formFields}}]}},cSAx:function(e,t,l){"use strict";l.d(t,"a",(function(){return o}));var i=l("q1tI"),a=l("1cYI"),p=l("tONX");function o(e){var t=Object(i["useContext"])(p["a"]),l=t.OnBreadcrumb,o=t.OnBreadcrumbClear;Object(a["useDidMount"])(t=>{l(e)}),Object(a["useWillUnmount"])(e=>{o()})}},rYxW:function(e){e.exports=JSON.parse('{"pageName":{"table":"\u914d\u7f6e\u5206\u7ec4","new":"\u6dfb\u52a0\u5206\u7ec4","edit":"\u7f16\u8f91\u5206\u7ec4","view":"\u67e5\u770b\u8be6\u60c5"},"listAPI":"/api/adm/config/groups","createAPI":"/api/adm/config/groups","getAPI":"/api/adm/config/groups/[id]","updateAPI":"/api/adm/config/groups/[id]","deleteAPI":"/api/adm/config/groups/(id)","columns":1,"createFields":[{"label":"\u5206\u7ec4\u540d\u79f0","props":{"placeholder":"\u8bf7\u8f93\u5165"},"rules":[{"type":"required"}],"type":"input","field":"title","align":"center"},{"label":"\u7c7b\u578b","type":"select","props":{"placeholder":"\u8bf7\u9009\u62e9","style":{"width":240}},"options":[{"label":"OPTION","value":"OPTION"},{"label":"CONFIG","value":"CONFIG"}],"rules":[{"type":"required"}],"field":"type"}],"updateFields":[{"label":"\u5206\u7ec4\u540d\u79f0","props":{"placeholder":"\u8bf7\u8f93\u5165"},"rules":[{"type":"required"}],"type":"input","field":"title","align":"center"},{"label":"\u7c7b\u578b","type":"select","props":{"placeholder":"\u8bf7\u9009\u62e9","style":{"width":240}},"options":[{"label":"OPTION","value":"OPTION"},{"label":"CONFIG","value":"CONFIG"}],"rules":[{"type":"required"}],"field":"type"}],"map":{},"layout":{"table":"Content","form":"TitleContent"},"tableActions":[{"title":"\u6dfb\u52a0\u5206\u7ec4","type":"path","options":{"style":"primary","path":"configGroups/configGroups-add"}}],"tableOperation":[{"title":"\u7f16\u8f91","type":"path","options":{"style":"path","path":"configGroups/configGroups-edit","outside":true}},{"title":"\u8be6\u60c5","type":"path","options":{"style":"path","path":"configGroups/configGroups-view","outside":true}},{"title":"\u5220\u9664","type":"delete","options":{"outside":false,"API":"/api/crud/oms/wisp/wisps/(id)","method":"delete"},"expect":{"permission":""}}],"searchFields":[{"label":"\u5206\u7ec4\u540d\u79f0","field":"title","type":"input","props":{"placeholder":"\u8bf7\u8f93\u5165"}}],"tableFields":[{"label":"\u5e8f\u53f7","field":"id","align":"center"},{"label":"\u5206\u7ec4\u540d\u79f0","field":"title"},{"label":"\u7c7b\u578b","field":"type","align":"center"}],"viewConfig":[{"label":"\u573a\u6b21\u53f7","field":"title","type":"plain","span":24},{"label":"\u573a\u6b21\u540d\u79f0","field":"type","type":"plain","span":24}]}')},tONX:function(e,t,l){"use strict";var i=l("q1tI"),a=l.n(i),p=a.a.createContext({});t["a"]=p}}]);