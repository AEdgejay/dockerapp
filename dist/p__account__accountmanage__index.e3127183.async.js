(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"Gv+n":function(e,t,i){"use strict";i.r(t);var a=i("cSAx"),l=i("q1tI"),o=i.n(l),r=i("Pm34"),p=i.n(r),d=i("vOKY"),n=i.n(d);t["default"]=function(){return Object(a["a"])([{title:"\u9996\u9875",path:"/account/accountmanage"},{title:"\u8d26\u53f7\u7ba1\u7406"}]),o.a.createElement("div",null,o.a.createElement(p.a,{namespace:"accountmanage",config:n.a}))}},cSAx:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var a=i("q1tI"),l=i("1cYI"),o=i("tONX");function r(e){var t=Object(a["useContext"])(o["a"]),i=t.OnBreadcrumb,r=t.OnBreadcrumbClear;Object(l["useDidMount"])(t=>{i(e)}),Object(l["useWillUnmount"])(e=>{r()})}},kT8H:function(e){e.exports=JSON.parse('{"pageName":{"table":"\u6d41\u7a0b\u7c7b\u522b","new":"\u6dfb\u52a0\u6d41\u7a0b\u7c7b\u522b","edit":"\u7f16\u8f91\u6d41\u7a0b\u7c7b\u522b"},"listAPI":"/api/crud/oms/wisp/wisps","createAPI":"/api/crud/oms/wisp/wisps","getAPI":"/api/crud/oms/wisp/wisps/[id]","updateAPI":"/api/crud/oms/wisp/wisps/[id]","deleteAPI":"/api/crud/oms/wisp/wisps/(id)","columns":1,"tableFields":[{"label":"\u6210\u957f\u5929\u6570","field":"growthDays"},{"label":"\u63cf\u8ff0","field":"description"},{"label":"\u76f4\u63a8\u4eba\u6570","field":"sortorder"},{"label":"\u5f53\u524d\u9886\u517b","width":180,"field":"note"},{"label":"\u603b\u9886\u517b","width":180,"field":"note"},{"label":"\u56e2\u961f\u4eba\u6570","width":180,"field":"note"},{"label":"\u603b\u9886\u517b","width":180,"field":"note"},{"label":"\u72b6\u6001","width":180,"field":"note"}],"tableActions":[{"title":"\u6682\u505c\u81ea\u52a8\u6295\u653e","type":"modal","options":{"style":"primary","modalTitle":"\u6682\u505c\u81ea\u52a8\u6295\u653e","modalWidth":600,"items":[{"component":"Form","config":{"layout":"Grid","layoutConfig":{"value":[24]},"API":{"createAPI":"/api/eav/entities/[id]/attributes"},"fields":[{"label":"\u786e\u5b9a\u8981\u6682\u505c\u81ea\u52a8\u6295\u653e\u4e48?","rules":[{"type":"required"}],"type":"input","field":"attributeName"}]}}]}},{"title":"\u81ea\u52a8\u6295\u653e","type":"modal","options":{"style":"primary","modalTitle":"\u81ea\u52a8\u6295\u653e","modalWidth":600,"items":[{"component":"Form","config":{"layout":"Grid","layoutConfig":{"value":[24]},"API":{"createAPI":"/api/eav/entities/[id]/attributes"},"fields":[{"label":"","rules":[{"type":"required"}],"type":"automaticdelivery","field":"attributeName"}]}}]}},{"title":"\u89e3\u5c01\u8d26\u53f7","type":"modal","options":{"style":"primary","modalTitle":"\u89e3\u5c01\u8d26\u53f7","modalWidth":600,"items":[{"component":"Form","config":{"layout":"Grid","layoutConfig":{"value":[24]},"API":{"createAPI":"/api/eav/entities/[id]/attributes"},"fields":[{"label":"","type":"unseal","field":"attributeName"}]}}]}},{"title":"\u51bb\u7ed3\u8d26\u53f7","type":"modal","options":{"style":"primary","modalTitle":"\u51bb\u7ed3\u8d26\u53f7","modalWidth":600,"items":[{"component":"Form","config":{"layout":"Grid","layoutConfig":{"value":[24]},"API":{"createAPI":"/api/eav/entities/[id]/attributes"},"fields":[{"label":"","props":{"placeholder":"\u8bf7\u8f93\u5165\u51bb\u7ed3\u8d26\u53f7\u539f\u56e0"},"rules":[{"type":"required"}],"type":"text-area","field":"attributeName"}]}}]}},{"title":"\u5ba1\u6838\u4e0d\u901a\u8fc7","type":"modal","options":{"style":"primary","modalTitle":"\u5ba1\u6838\u4e0d\u901a\u8fc7","modalWidth":600,"items":[{"component":"Form","config":{"layout":"Grid","layoutConfig":{"value":[24]},"API":{"createAPI":"/api/eav/entities/[id]/attributes"},"fields":[{"label":"","props":{"placeholder":"\u8bf7\u8f93\u5165\u5ba1\u6838\u4e0d\u901a\u8fc7\u539f\u56e0"},"rules":[{"type":"required"}],"type":"text-area","field":"attributeName"}]}}]}},{"title":"\u5ba1\u6838\u901a\u8fc7","type":"modal","options":{"style":"primary","modalTitle":"\u5ba1\u6838\u901a\u8fc7","modalWidth":600,"items":[{"component":"Form","config":{"layout":"Grid","layoutConfig":{"value":[24]},"API":{"createAPI":"/api/eav/entities/[id]/attributes"},"fields":[{"label":"","rules":[{"type":"required"}],"type":"approved","field":"attributeName"}]}}]}},{"title":"\u67e5\u770b\u8be6\u60c5","type":"path","options":{"outside":true,"style":"primary","path":"/account/accountmanage/accountdetail"}},{"title":"\u4fee\u6539\u8d26\u53f7","type":"path","options":{"outside":true,"style":"primary","path":"/account/accountmanage/editaccount"}},{"title":"\u6dfb\u52a0\u8d26\u53f7","type":"path","options":{"outside":true,"style":"primary","path":"/account/accountmanage/addaccount"}},{"title":"\u53d1\u653e\u7cbe\u7075\u5e01","type":"modal","options":{"style":"primary","modalTitle":"\u53d1\u653e\u7cbe\u7075\u4ee4","modalWidth":600,"items":[{"component":"Form","config":{"layout":"Grid","layoutConfig":{"value":[24]},"API":{"createAPI":"/api/eav/entities/[id]/attributes"},"fields":[{"label":"\u5f53\u524d\u7cbe\u7075\u5e01:","rules":[{"type":"required"}],"props":{"placeholder":"\u8bf7\u8f93\u5165"},"type":"text","field":"attributeName"},{"label":"\u53d1\u653e\u5230\u8d26\u53f7\uff1a","rules":[{"type":"required"}],"props":{"placeholder":"\u8bf7\u8f93\u5165\u8d26\u53f7"},"type":"input","field":"attributeName"},{"label":"\u53d1\u653e\u6570\u91cf:","rules":[{"type":"required"}],"props":{"placeholder":"\u8bf7\u8f93\u5165\u6570\u91cf"},"type":"input","field":"fieldName"},{"label":"\u652f\u4ed8\u5bc6\u7801:","rules":[{"type":"required"}],"props":{"placeholder":"\u8bf7\u8f93\u5165\u652f\u4ed8\u5bc6\u7801"},"type":"input","field":"fieldName"}]}}]}}],"tableOperation":[{"title":"\u7f16\u8f91","type":"modal","options":{"modalTitle":"\u7f16\u8f91\u7c7b\u522b","modalWidth":600,"outside":true,"items":[{"component":"Form","config":{"layout":"Grid","layoutConfig":{"value":[24]},"API":{"getAPI":"/api/categories/(id)","updateAPI":"/api/categories/(id)"},"fields":[{"label":"\u7c7b\u522b\u540d\u79f0","rules":[{"type":"required"}],"props":{"placeholder":"\u8bf7\u8f93\u5165"},"type":"input","field":"name"},{"label":"\u7c7b\u522b\u7f16\u7801","rules":[{"type":"required"}],"type":"input","field":"code"},{"label":"\u7236\u7c7b\u522b","field":"pid","span":24,"type":"modal-radio","props":{},"rules":[],"options":{"title":"\u9009\u62e9\u7236\u7c7b\u522b","label":"name","editLabel":"pName","value":"id","pagination":true,"API":"/api/categories/all/tree?identifier=workflow","fields":[{"label":"\u7c7b\u522b\u540d\u79f0","field":"name","valueType":"ellipsis"},{"label":"\u5907\u6ce8","field":"note","valueType":"ellipsis"}]}},{"label":"\u6392\u5e8f\u53f7","rules":[],"type":"number","field":"sortorder"},{"label":"","type":"hidden","field":"identifier","value":"workflow"}]}}]},"expect":{"permission":""}},{"title":"\u5220\u9664","type":"delete","options":{"outside":false},"expect":{"permission":""}}]}')},tONX:function(e,t,i){"use strict";var a=i("q1tI"),l=i.n(a),o=l.a.createContext({});t["a"]=o},vOKY:function(e,t,i){var a=i("kT8H");e.exports={layout:"Content",title:"\u8d26\u53f7\u7ba1\u7406",items:[{layout:"Empty",component:"Search",config:{type:"default",fields:[{label:"\u540d\u79f0",field:"actionName",type:"search",placeholder:"\u8bf7\u8f93\u5165\u540d\u79f0"},{label:"\u72b6\u6001",field:"actionStatus",type:"search",placeholder:"\u8bf7\u9009\u62e9"}]}},{layout:"Empty",component:"TreeTable",config:{share:"fromCategory",API:{listAPI:a.listAPI,appendAPI:"",deleteAPI:a.deleteAPI},actions:a.tableActions,fields:a.tableFields,operation:a.tableOperation}}]}}}]);