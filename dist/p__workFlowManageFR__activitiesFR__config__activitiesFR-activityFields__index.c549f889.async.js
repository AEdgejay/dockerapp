(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[158],{"5KUf":function(e,l,t){"use strict";t.r(l);var i=t("q1tI"),a=t.n(i),d=t("Pm34"),o=t.n(d),p=t("Ou4S"),r=t.n(p);l["default"]=()=>a.a.createElement(o.a,{namespace:"fileManage-activityFields",config:r.a})},Ou4S:function(e,l,t){var i=t("gEOT");e.exports={layout:i.layout.table,title:i.pageName.table,items:[{component:"Table",config:{API:{listAPI:i.listAPI,deleteAPI:i.deleteAPI},actions:i.tableActions,fields:i.tableFields,operation:i.tableOperation}},{component:"LoadHtmlPage",config:{API:{listAPI:i.listAPI}}}]}},gEOT:function(e){e.exports=JSON.parse('{"pageName":"","columns":2,"layout":{"table":"Content","form":"TitleContent"},"map":{},"tableActions":[{"title":"\u6dfb\u52a0","type":"modal","options":{"style":"primary","modalTitle":"\u6253\u5370\u914d\u7f6e","modalWidth":600,"items":[{"component":"activity_fields_form","config":{"layout":"Grid","layoutConfig":{"value":[24]},"API":{"createAPI":"/api/crud/pdfAttribute/pdfAttributes"},"fields":[{"label":"\u7ed1\u5b9a\u5b57\u6bb5","field":"attributeId","type":"modal-radio","props":{},"rules":[{"type":"required"}],"options":{"title":"\u9009\u62e9\u5b57\u6bb5","label":"fieldName","editLabel":"attributeName","value":"id","pagination":true,"API":"/api/eav/entities/[id]/attributes/rmOrg","saveData":{"masterRelations":"value"},"fields":[{"label":"\u6807\u8bc6","field":"fieldName"},{"label":"\u5b57\u6bb5\u540d","field":"attributeName"}]}},{"label":"\u7ed1\u5b9a\u65b9\u6848","field":"bindingMethod","type":"local_radio","options":[{"label":"\u884c\u5217\u5b9a\u4f4d\u65b9\u5f0f\u7d81\u5b9a","value":"1"},{"label":"\u6a21\u677f\u5b57\u6bb5\u65b9\u4f4d\u65b9\u5f0f\u7d81\u5b9a","value":"2"}],"rules":[{"type":"required"}]},{"label":"\u884c","rules":[{"type":"required"}],"props":{"placeholder":"\u8bf7\u8f93\u5165"},"type":"number","field":"line","expect":{"field":"bindingMethod","value":"1"}},{"label":"\u5217","rules":[{"type":"required"}],"props":{"placeholder":"\u8bf7\u8f93\u5165"},"type":"number","field":"column","expect":{"field":"bindingMethod","value":"1"}},{"label":"\u641c\u7d22\u5b57\u6bb5","rules":[{"type":"required"}],"props":{"placeholder":"\u8bf7\u8f93\u5165"},"type":"input","field":"pdfField","expect":{"field":"bindingMethod","value":"2"}},{"label":"\u76f8\u5bf9\u4f4d\u7f6e","field":"location","rules":[{"type":"required"}],"type":"select","options":[{"label":"\u4e0a","value":"top"},{"label":"\u4e0b","value":"bottom"},{"label":"\u5de6","value":"left"},{"label":"\u53f3","value":"right"}],"expect":{"field":"bindingMethod","value":"2"}}]}}]},"expect":{}}],"tableOperation":[{"title":"\u7f16\u8f91","type":"modal","options":{"modalTitle":"\u7f16\u8f91\u5b57\u6bb5","modalWidth":600,"outside":true,"items":[{"component":"activity_fields_form","config":{"layout":"Grid","layoutConfig":{"value":[24]},"API":{"getAPI":"/api/crud/pdfAttribute/pdfAttributes/(id)","updateAPI":"/api/crud/pdfAttribute/pdfAttributes/(id)"},"fields":[{"label":"\u7ed1\u5b9a\u5b57\u6bb5","field":"attributeId","type":"modal-radio","props":{},"rules":[{"type":"required"}],"options":{"title":"\u9009\u62e9\u5b57\u6bb5","label":"fieldName","editLabel":"attributeName","value":"id","pagination":true,"API":"/api/eav/entities/[id]/attributes/rmOrg","saveData":{"masterRelations":"value"},"fields":[{"label":"\u6807\u8bc6","field":"fieldName"},{"label":"\u5b57\u6bb5\u540d","field":"attributeName"}]}},{"label":"\u7ed1\u5b9a\u65b9\u6848","field":"bindingMethod","type":"local_radio","options":[{"label":"\u884c\u5217\u5b9a\u4f4d\u65b9\u5f0f\u7d81\u5b9a","value":"1"},{"label":"\u6a21\u677f\u5b57\u6bb5\u65b9\u4f4d\u65b9\u5f0f\u7d81\u5b9a","value":"2"}],"rules":[{"type":"required"}]},{"label":"\u884c","rules":[{"type":"required"}],"props":{"placeholder":"\u8bf7\u8f93\u5165"},"type":"number","field":"line","expect":{"field":"bindingMethod","value":"1"}},{"label":"\u5217","rules":[{"type":"required"}],"props":{"placeholder":"\u8bf7\u8f93\u5165"},"type":"number","field":"column","expect":{"field":"bindingMethod","value":"1"}},{"label":"\u641c\u7d22\u5b57\u6bb5","rules":[{"type":"required"}],"props":{"placeholder":"\u8bf7\u8f93\u5165"},"type":"input","field":"pdfField","expect":{"field":"bindingMethod","value":"2"}},{"label":"\u76f8\u5bf9\u4f4d\u7f6e","field":"location","rules":[{"type":"required"}],"type":"select","options":[{"label":"\u4e0a","value":"top"},{"label":"\u4e0b","value":"bottom"},{"label":"\u5de6","value":"left"},{"label":"\u53f3","value":"right"}],"expect":{"field":"bindingMethod","value":"2"}}]}}]},"expect":{"permission":""}},{"title":"\u5220\u9664","type":"request","options":{"outside":true,"tips":"\u786e\u5b9a\u8981\u5220\u9664\u5417?","API":"/api/crud/pdfAttribute/pdfAttributes/(id)","method":"delete"}}],"createFields":[{}],"updateFields":[{}],"viewFields":[{}],"listAPI":"/api/crud/pdfAttribute/pdfAttributes/doc?entityId=[id]","createAPI":"/api/[id]","getAPI":"/api/(id)","updateAPI":"/api/(id)","deleteAPI":"/api/(id)","searchFields":[{"field":"search","label":"\u641c\u7d22","type":"input","props":{"placeholder":"\u8bf7\u8f93\u5165..."}}],"tableFields":[{"field":"fieldName","label":"\u8868\u5355\u5b57\u6bb5"},{"field":"line","label":"\u884c"},{"field":"column","label":"\u5217"},{"field":"pdfField","label":"\u6a21\u677f\u5b57\u6bb5"},{"field":"location","label":"\u4fee\u6539\u65b9\u4f4d","valueType":"tag","options":{"map":{"top":"\u4e0a","bottom":"\u4e0b","left":"\u5de6","right":"\u53f3"}}}]}')}}]);