(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[156],{L6eW:function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),l=a.n(i),r=a("Pm34"),p=a.n(r),o=a("YC0Q"),n=a.n(o);t["default"]=()=>l.a.createElement(p.a,{namespace:"activitiesFR_edit",config:n.a})},YC0Q:function(e,t,a){var i=a("drlr");e.exports={layout:"BaseTitle",title:"\u7f16\u8f91",items:[{layout:"Content",component:"custom_form_fr",config:{layout:"Grid",layoutConfig:{value:[12,12]},fields:[{label:"\u8868\u5355\u6807\u8bc6",field:"entityName",type:"input",props:{placeholder:"\u8bf7\u8f93\u5165\u2026\u2026"},rules:["required"]},{label:"\u8868\u5355\u540d\u79f0",field:"name",type:"input",props:{placeholder:"\u8bf7\u8f93\u5165\u2026\u2026"},rules:["required"],span:24},{label:"\u7c7b\u522b",field:"typeId",span:24,type:"modal-radio",props:{},rules:["required"],options:{title:"\u9009\u62e9\u7c7b\u522b",label:"typeName",editLabel:"typeName",value:"id",pagination:!0,API:"/api/crud/eavEntityType/eavEntityTypes",fields:[{label:"\u540d\u79f0",field:"name",valueType:"ellipsis"},{label:"\u5907\u6ce8",field:"note",valueType:"ellipsis"}]}},{label:"\u5907\u6ce8",field:"note",type:"text-area",props:{placeholder:"\u8bf7\u8f93\u5165\u2026\u2026"},rules:[],span:12}],API:{getAPI:i.getAPI,updateAPI:i.updateAPI},otherProps:{nextBtn:"\u4e0b\u4e00\u6b65",nextPageUrl:"/workFlowManageFR/activitiesFR/activitiesFR-schema"}}}],id:"8lw4lj1f"}},drlr:function(e,t){e.exports={pageName:"\u8868\u5355\u5217\u8868",listAPI:"/api/eav/entities",deleteAPI:"/api/eav/entities/(id)",getAPI:"/api/crud/virtualForm/virtualForms/[id]",createAPI:"/api/crud/virtualForm/virtualForms",updateAPI:"/api/crud/virtualForm/virtualForms/(id)"}}}]);