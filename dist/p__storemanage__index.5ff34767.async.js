(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[90],{JlSm:function(e){e.exports=JSON.parse('{"pageName":{"table":"\u5e97\u5c0f\u4e8c\u7ba1\u7406","new":"\u6dfb\u52a0\u5e97\u5c0f\u4e8c","edit":"\u7f16\u8f91\u5143\u7cbe\u7075","view":"\u67e5\u770b\u8be6\u60c5"},"listAPI":"/api/crud/oms/manager/managers","createAPI":"/api/crud/oms/manager/managers","getAPI":"/api/crud/oms/manager/managers","updateAPI":"/api/crud/oms/manager/managers","deleteAPI":"/api/crud/oms/manager/managers","columns":1,"createFields":[{"label":"\u540d\u79f0","type":"input","field":"name","align":"center"},{"label":"\u624b\u673a\u53f7\u7801","type":"input","field":"mobilePhone","align":"center"},{"label":"\u652f\u4ed8\u5bc6\u7801","type":"input","field":"appointment","align":"center"},{"label":"\u9080\u8bf7\u7801","field":"invitationCode","align":"center","type":"input"}],"updateFields":[{"label":"\u7cbe\u7075\u540d\u79f0","rules":[{"type":"required"}],"props":{"placeholder":"\u8bf7\u8f93\u5165"},"type":"input","field":"name"},{"label":"\u7ea7\u522b","type":"input","props":{"suffix":"\u7ea7","style":{"width":240}},"field":"level"},{"label":"\u7cbe\u7075\u63cf\u8ff0","rules":[{"type":"required"}],"props":{"placeholder":"\u8bf7\u8f93\u5165","style":{"width":240}},"type":"text-area","field":"description"},{"label":"\u7cbe\u7075\u56fe\u7247","rules":[{"type":"required"}],"props":{"placeholder":"\u8bf7\u8f93\u5165"},"type":"upload-image","field":"photoUrl"}],"map":{},"layout":{"table":"Content","form":"TitleContent"},"tableActions":[{"title":"\u6dfb\u52a0\u5e97\u5c0f\u4e8c","type":"path","options":{"style":"primary","path":"/storemanage/storemanage-add"}}],"tableOperation":[{"title":"\u7f16\u8f91","type":"path","options":{"style":"path","path":"metaspirit/spirit-edit","outside":true}},{"title":"\u8be6\u60c5","type":"path","options":{"style":"path","path":"metaspirit/spirit-view","outside":true}},{"title":"\u5220\u9664","type":"delete","options":{"outside":false,"API":"/api/crud/oms/wisp/wisps/(id)","method":"delete"},"expect":{"permission":""}}],"searchFields":[{"label":"\u540d\u79f0","field":"name","type":"input","props":{"placeholder":"\u8bf7\u8f93\u5165\u5e97\u5c0f\u4e8c\u540d\u79f0"}}],"tableFields":[{"label":"\u5e8f\u53f7","field":"id","align":"center"},{"label":"\u540d\u79f0","field":"name","align":"center"},{"label":"\u624b\u673a\u53f7\u7801","type":"image","field":"mobilePhone","align":"center"},{"label":"\u652f\u4ed8\u5bc6\u7801","field":"appointment","align":"center"},{"label":"\u9080\u8bf7\u7801","field":"invitationCode","align":"center"}],"viewConfig":[{"label":"\u7cbe\u7075\u540d\u79f0","field":"name","type":"plain","span":24},{"label":"\u7cbe\u7075\u63cf\u8ff0","field":"description","type":"plain","span":24},{"label":"\u7cbe\u7075\u7b49\u7ea7","field":"level","type":"plain","span":24},{"label":"\u7cbe\u7075\u56fe\u7247","field":"photoUrl","type":"image","span":24},{"label":"\u57f9\u517b\u5929\u6570","field":"growthDays","type":"plain","span":24},{"label":"\u57f9\u517b\u4ef7\u503c","field":"growthPercent","type":"plain","span":24},{"label":"\u6700\u4f4e\u4ef7\u503c","field":"minimumValue","type":"plain","span":24},{"label":"\u6700\u9ad8\u4ef7\u503c","field":"maximumValue","type":"plain","span":24},{"label":"\u6d88\u8017\u7cbe\u7075\u4ee4","field":"costWispCoin","type":"plain","span":24},{"label":"\u6d88\u8017\u966a\u4f34\u7cbe\u7075\u6570\u91cf","field":"costAccompanyWisp","type":"plain","span":24}]}')},UTzO:function(e,t,a){var l=a("JlSm");e.exports={layout:l.layout.table,title:l.pageName.table,items:[{component:"Search",config:{fields:l.searchFields}},{component:"Table",config:{API:{listAPI:l.listAPI,appendAPI:"",deleteAPI:l.deleteAPI},actions:l.tableActions,fields:l.tableFields,operation:l.tableOperation}}]}},cSAx:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var l=a("q1tI"),i=a("1cYI"),n=a("tONX");function p(e){var t=Object(l["useContext"])(n["a"]),a=t.OnBreadcrumb,p=t.OnBreadcrumbClear;Object(i["useDidMount"])(t=>{a(e)}),Object(i["useWillUnmount"])(e=>{p()})}},"g+Xw":function(e,t,a){"use strict";a.r(t);var l=a("cSAx"),i=a("q1tI"),n=a.n(i),p=a("Pm34"),r=a.n(p),s=a("UTzO"),o=a.n(s);t["default"]=function(){return Object(l["a"])([{title:"\u9996\u9875",path:"/metaspirit"},{title:"\u914d\u7f6e\u4e2d\u5fc3"},{title:"\u5e97\u5c0f\u4e8c"}]),n.a.createElement("div",null,n.a.createElement(r.a,{namespace:"storemanage",config:o.a}))}},tONX:function(e,t,a){"use strict";var l=a("q1tI"),i=a.n(l),n=i.a.createContext({});t["a"]=n}}]);