(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[38],{"2c0u":function(e,t,l){var i=l("L6c0");e.exports={layout:i.layout.form,title:i.pageName.new,items:[{component:"Form",config:{API:{createAPI:i.createAPI},layout:"Grid",layoutConfig:{value:Array(i.columns).fill(~~(24/i.columns))},fields:i.createFields||i.formFields}}]}},L6c0:function(e){e.exports=JSON.parse('{"pageName":{"table":"\u914d\u7f6e\u9879","new":"\u6dfb\u52a0\u914d\u7f6e","edit":"\u7f16\u8f91\u914d\u7f6e","view":"\u67e5\u770b\u8be6\u60c5"},"listAPI":"/api/adm/config/fields","createAPI":"/api/adm/config/fields","getAPI":"/api/adm/config/fields/[id]","updateAPI":"/api/adm/config/fields/[id]","deleteAPI":"/api/adm/config/fields/(id)","columns":1,"createFields":[{"label":"\u914d\u7f6e\u9879\u540d","props":{"placeholder":"\u8bf7\u8f93\u5165"},"rules":[{"type":"required"}],"type":"input","field":"title","align":"center"},{"label":"\u5b57\u6bb5\u540d","props":{"placeholder":"\u8bf7\u8f93\u5165"},"type":"input","field":"field","align":"center","rules":[{"type":"required"}]},{"label":"\u6570\u636e\u7c7b\u578b","type":"select","props":{"placeholder":"\u8bf7\u9009\u62e9","style":{"width":240}},"options":[{"label":"NUMBER","value":"NUMBER"},{"label":"STRING","value":"STRING"},{"label":"FLOAT","value":"FLOAT"}],"rules":[{"type":"required"}],"field":"dataType"},{"label":"\u63cf\u8ff0","props":{"placeholder":"\u8bf7\u8f93\u5165","autoSize":{"minRows":3},"style":{"width":240}},"type":"text-area","field":"description","align":"center"}],"updateFields":[{"label":"\u914d\u7f6e\u9879\u540d","props":{"placeholder":"\u8bf7\u8f93\u5165"},"rules":[{"type":"required"}],"type":"input","field":"title","align":"center"},{"label":"\u5b57\u6bb5\u540d","props":{"placeholder":"\u8bf7\u8f93\u5165"},"type":"input","field":"field","align":"center","rules":[{"type":"required"}]},{"label":"\u6570\u636e\u7c7b\u578b","type":"select","props":{"placeholder":"\u8bf7\u9009\u62e9","style":{"width":240}},"options":[{"label":"NUMBER","value":"NUMBER"},{"label":"STRING","value":"STRING"},{"label":"FLOAT","value":"FLOAT"}],"rules":[{"type":"required"}],"field":"dataType"},{"label":"\u63cf\u8ff0","props":{"placeholder":"\u8bf7\u8f93\u5165","autoSize":{"minRows":3},"style":{"width":240}},"type":"text-area","field":"description","align":"center"}],"map":{},"layout":{"table":"Content","form":"TitleContent"},"tableActions":[{"title":"\u6dfb\u52a0\u914d\u7f6e","type":"path","options":{"style":"primary","path":"configItems/configItems-add"}}],"tableOperation":[{"title":"\u7f16\u8f91","type":"path","options":{"style":"path","path":"configItems/configItems-edit","outside":true}},{"title":"\u8be6\u60c5","type":"path","options":{"style":"path","path":"configItems/configItems-view","outside":true}},{"title":"\u5220\u9664","type":"delete","options":{"outside":false,"API":"/api/adm/config/fields/(id)","method":"delete"},"expect":{"permission":""}}],"searchFields":[{"label":"\u914d\u7f6e\u9879\u540d","field":"title","type":"input","props":{"placeholder":"\u8bf7\u8f93\u5165"}}],"tableFields":[{"label":"\u5e8f\u53f7","field":"id","align":"center"},{"label":"\u914d\u7f6e\u9879\u540d","field":"title"},{"label":"\u5b57\u6bb5\u540d","field":"field"},{"label":"\u6570\u636e\u7c7b\u578b","field":"dataType","align":"center"},{"label":"\u63cf\u8ff0","field":"description"}],"viewConfig":[{"label":"\u914d\u7f6e\u9879\u540d","field":"title","type":"plain","span":24},{"label":"\u5b57\u6bb5\u540d","field":"field","type":"plain","span":24},{"label":"\u6570\u636e\u7c7b\u578b","field":"dataType","type":"plain","span":24},{"label":"\u63cf\u8ff0","field":"description","type":"plain","span":24}]}')},ViR2:function(e,t,l){"use strict";l.r(t);var i=l("q1tI"),a=l.n(i),p=l("Pm34"),n=l.n(p),d=l("2c0u"),o=l.n(d),r=l("cSAx");t["default"]=function(){return Object(r["a"])([{title:"\u9996\u9875"},{title:"\u914d\u7f6e\u9879",path:"/configItems"},{title:"\u6dfb\u52a0\u914d\u7f6e"}]),a.a.createElement("div",null,a.a.createElement(n.a,{namespace:"configItems_add",config:o.a}))}},cSAx:function(e,t,l){"use strict";l.d(t,"a",(function(){return n}));var i=l("q1tI"),a=l("1cYI"),p=l("tONX");function n(e){var t=Object(i["useContext"])(p["a"]),l=t.OnBreadcrumb,n=t.OnBreadcrumbClear;Object(a["useDidMount"])(t=>{l(e)}),Object(a["useWillUnmount"])(e=>{n()})}},tONX:function(e,t,l){"use strict";var i=l("q1tI"),a=l.n(i),p=a.a.createContext({});t["a"]=p}}]);