(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[155],{"//Na":function(e,l,a){var t=a("drlr");e.exports={layout:"BaseTitle",title:"\u8be6\u60c5",items:[{layout:"Content",component:"Form",config:{layout:"Grid",layoutConfig:{layoutArea:[{layout:"Grid",length:1,value:[24]},{layout:"Grid",length:2,value:[12,12]},{layout:"Grid",length:2,value:[12,12]},{layout:"Grid",length:1,value:[24]},{layout:"Grid",length:1,value:[24]}]},fields:[{label:"\u9879\u76ee",field:"projectId",type:"modal-radio",props:{},rules:["required"],options:{title:"\u9009\u62e9\u9879\u76ee",label:"name",editLabel:"name",value:"projectId",API:"/api/crud/project/projects",fields:[{label:"\u540d\u79f0",field:"name"},{label:"\u72b6\u6001",field:"status"}]}},{label:"\u6d3b\u52a8\u540d\u79f0",field:"name",type:"input",props:{placeholder:"\u8bf7\u8f93\u5165\u2026\u2026"},rules:["required"]},{label:"\u72b6\u6001",field:"status",type:"select",props:{},rules:["required"],options:[{label:"\u7b49\u5f85\u51fa\u5de5",value:1},{label:"\u51fa\u5de5\u5b8c\u6210",value:2},{label:"\u4f5c\u5e9f",value:3}]},{label:"\u51fa\u5de5\u65e5\u671f",field:"createTime",type:"date",props:{placeholder:"\u8bf7\u9009\u62e9\u65e5\u671f"},rules:[]},{label:"\u6700\u540e\u4fee\u6539\u65e5\u671f",field:"updateTime",type:"date",props:{placeholder:"\u8bf7\u9009\u62e9\u65e5\u671f"},rules:[]},{label:"\u5907\u6ce8",field:"note",type:"text-area",props:{placeholder:"\u8bf7\u8f93\u5165\u2026\u2026"},rules:[]}],API:{getAPI:t.getAPI}}},{layout:"Content",component:"ChildrenList",config:{itemsField:"items",oneMany:{tableName:"",field:""},actions:[{title:"\u6dfb\u52a0\u6570\u636e",type:"children-modal-add",options:{modalTitle:"\u6dfb\u52a0\u6570\u636e",modalWidth:1080,items:[{layout:"Empty",component:"ChildrenForm",config:{fields:[{label:"",field:"",type:"modal-radio",options:{title:"\u9009\u62e9\u91c7\u8d2d\u5355",label:"name",editLabel:"name",value:"id",API:"/api/crud/vms/purchaseOrders",fields:[{label:"\u540d\u79f0",field:"name"}],saveData:{requestNumber:"\u91c7\u8d2d\u7533\u8bf7\u6d41\u6c34",vmsOrderNumber:"\u91c7\u8d2d\u5355\u6d41\u6c34\u53f7"}}},{label:"\u540d\u79f0",field:"name",type:"input"},{label:"\u91c7\u8d2d\u5355\u6d41\u6c34\u53f7",field:"vmsOrderNumber",type:"number"},{label:"\u91c7\u8d2d\u7533\u8bf7\u6d41\u6c34",field:"requestNumber",type:"plain"},{label:"\u6536\u8d39",field:"charge",type:"number"},{label:"\u5907\u6ce8",field:"note",type:"plain"}]}}]}}],fields:[{label:"",field:""},{label:"\u540d\u79f0",field:"name"},{label:"\u91c7\u8d2d\u5355\u6d41\u6c34\u53f7",field:"vmsOrderNumber"},{label:"\u91c7\u8d2d\u7533\u8bf7\u6d41\u6c34",field:"requestNumber"},{label:"\u6536\u8d39",field:"charge"},{label:"\u5907\u6ce8",field:"note"}],operation:[{title:"\u7f16\u8f91",type:"childEditModal",options:{outside:!0,modalTitle:"\u7f16\u8f91\u6570\u636e",modalWidth:580,layout:"Content",items:[{layout:"Empty",component:"ChildrenForm",config:{fields:[{label:"",field:"",type:"modal-radio",options:{title:"\u9009\u62e9\u91c7\u8d2d\u5355",label:"name",editLabel:"name",value:"id",API:"/api/crud/vms/purchaseOrders",fields:[{label:"\u540d\u79f0",field:"name"}],saveData:{requestNumber:"\u91c7\u8d2d\u7533\u8bf7\u6d41\u6c34",vmsOrderNumber:"\u91c7\u8d2d\u5355\u6d41\u6c34\u53f7"}}},{label:"\u540d\u79f0",field:"name",type:"input"},{label:"\u91c7\u8d2d\u5355\u6d41\u6c34\u53f7",field:"vmsOrderNumber",type:"number"},{label:"\u91c7\u8d2d\u7533\u8bf7\u6d41\u6c34",field:"requestNumber",type:"plain"},{label:"\u6536\u8d39",field:"charge",type:"number"},{label:"\u5907\u6ce8",field:"note",type:"plain"}]}}]}},{title:"\u79fb\u9664",type:"removeChild",options:{icon:"delete",color:"#f5222d"}}]}}],id:"8lw4lj1f"}},drlr:function(e,l){e.exports={pageName:"\u8868\u5355\u5217\u8868",listAPI:"/api/eav/entities",deleteAPI:"/api/eav/entities/(id)",getAPI:"/api/crud/virtualForm/virtualForms/[id]",createAPI:"/api/crud/virtualForm/virtualForms",updateAPI:"/api/crud/virtualForm/virtualForms/(id)"}},fXP6:function(e,l,a){"use strict";a.r(l);var t=a("q1tI"),i=a.n(t),r=a("Pm34"),d=a.n(r),o=a("//Na"),n=a.n(o);l["default"]=()=>i.a.createElement(d.a,{namespace:"activitiesFR_project",config:n.a})}}]);