(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[102],{EW3A:function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),l=a.n(i),d=a("Pm34"),o=a.n(d),n=a("WPHb"),p=a.n(n);t["default"]=()=>l.a.createElement(o.a,{namespace:"activitiesCustom-dataManage",config:p.a})},WPHb:function(e,t,a){var i=a("sZeE");e.exports={layout:i.layout.table,title:i.pageName.table,items:[{component:"Table",config:{API:{listAPI:i.listAPI,deleteAPI:i.deleteAPI},actions:i.tableActions,fields:i.tableFields,operation:i.tableOperation}}]}},sZeE:function(e){e.exports=JSON.parse('{"pageName":{"table":"\u6570\u636e\u7ba1\u7406"},"columns":2,"layout":{"table":"Content","form":"TitleContent"},"map":{},"tableActions":[{"title":"\u6dfb\u52a0","type":"modal","options":{"style":"primary","modalTitle":"\u6dfb\u52a0","modalWidth":600,"items":[{"component":"data_manage_form_add","config":{"layout":"Grid","layoutConfig":{"value":[24]},"API":{"getAPI":"/api/ali/byTableJSON/(id)","createAPI":"/api/eav/entities/newValue/(id)"},"fields":[]}}]},"expect":{}}],"tableOperation":[{"title":"\u7f16\u8f91","type":"modal","options":{"modalTitle":"\u7f16\u8f91","modalWidth":600,"outside":true,"items":[{"component":"data_manage_form_add","config":{"layout":"Grid","layoutConfig":{"value":[24]},"API":{"getAPI":"/api/ali/byTableJSON/value/(id)","updateAPI":"/api/eav/entities/editValue/(id)"},"fields":[]}}]},"expect":{"permission":""}},{"title":"\u5220\u9664","type":"request","options":{"outside":true,"tips":"\u786e\u5b9a\u8981\u5220\u9664\u5417?","API":"/api/crud/eav/dataService/(id)","method":"delete"}}],"createFields":[{}],"updateFields":[{}],"viewFields":[{}],"listAPI":"/api/crud/eav/dataService/[id]","createAPI":"/api/[id]","getAPI":"/api/crud/eav/dataService/detail/(id)","updateAPI":"/api/(id)","deleteAPI":"/api/(id)","searchFields":[{"field":"search","label":"\u641c\u7d22","type":"input","props":{"placeholder":"\u8bf7\u8f93\u5165..."}}],"tableFields":[],"viewConfig":[{"title":"\u8be6\u60c5","type":"plain","fields":[{"label":"\u540d\u5b57","field":"name"}]}]}')}}]);