(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[103,101],{LlZd:function(t,e,i){"use strict";i.r(e);var a=i("q1tI"),n=i.n(a),o=i("rXZv");e["default"]=t=>n.a.createElement(o["default"],null)},rXZv:function(t,e,i){"use strict";i.r(e);var a=i("q1tI"),n=i.n(a),o=i("Pm34"),p=i.n(o),s=i("yMok"),l=i.n(s);e["default"]=()=>n.a.createElement(p.a,{namespace:"activitiesCustom",config:l.a})},yMok:function(t,e){t.exports={layout:"Content",title:"\u6570\u636e\u670d\u52a1",items:[{component:"Search",config:{fields:[{field:"name",label:"\u8868\u5355\u540d\u79f0",type:"input",props:{placeholder:"\u8bf7\u8f93\u5165"}}]}},{component:"TreeList",config:{API:{listAPI:"/api/crud/eavEntityType/eavEntityTypes/entity?entityType=CRUD_FORM&typeId=<id>",deleteAPI:"/api/eav/entities/(id)"},tree:{API:{initAPI:"/api/crud/eavEntityType/eavEntityTypes/groupType",appendAPI:void 0}},actions:[{title:"\u65b0\u589e",type:"path",options:{style:"primary",path:"activitiesCustom/activitiesCustom-add"}}],fields:[{field:"name",label:"\u8868\u5355\u540d\u79f0"},{field:"note",label:"\u5907\u6ce8"}],operation:[{title:"\u6570\u636e\u7ba1\u7406",type:"path",options:{outside:!0,path:"activitiesCustom/activitiesCustom-dataManage"}},{title:"\u8bbe\u8ba1",type:"path",options:{outside:!0,path:"activitiesCustom/activitiesCustom-design"}},{title:"\u7f16\u8f91",type:"path",options:{outside:!0,path:"activitiesCustom/activitiesCustom-edit"}},{title:"\u5220\u9664",type:"delete"}]}}]}}}]);