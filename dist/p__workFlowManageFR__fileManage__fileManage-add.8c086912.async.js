(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[167],{"034Z":function(e){e.exports=JSON.parse('{"pageName":{"table":"\u8868\u5355\u6a21\u677f\u7ba1\u7406","new":"","edit":""},"listAPI":"/api/doc","createAPI":"/api/doc","getAPI":"/api/doc/[id]","updateAPI":"/api/doc/[id]","deleteAPI":"/api/doc/(id)","getApplyHistoryAPI":"/api/wf/histories","columns":1,"createFields":[{"label":"\u4e0a\u4f20\u6587\u4ef6","span":16,"rules":[{"type":"required"}],"field":"urlList","type":"upload_file_single","options":{"title":"\u70b9\u51fb\u4e0a\u4f20","API":"/api/fs/uploadfile","acceptType":".docx"},"expect":{}}],"updateFields":[{"field":"entityId","label":"\u8868\u5355","type":"modal-radio","props":{},"rules":[],"options":{"title":"\u9009\u62e9\u8868\u5355","label":"name","editLabel":"entityName","value":"id","pagination":true,"API":"/api/eav/entities","fields":[{"label":"\u8868\u5355\u540d\u79f0","field":"name"},{"label":"\u5907\u6ce8","field":"note"}]}},{"label":"\u4e0a\u4f20\u6587\u4ef6","rules":[{"type":"required"}],"field":"urlList","span":16,"type":"upload_file_single","options":{"title":"\u70b9\u51fb\u4e0a\u4f20","API":"/api/fs/uploadfile","acceptType":".docx"},"expect":{}}],"map":{},"layout":{"table":"Content","form":"TitleContent"},"tableActions":[{"title":"\u65b0\u589e\u6253\u5370\u6a21\u677f","type":"modal","options":{"style":"primary","modalTitle":"\u6dfb\u52a0\u7c7b\u522b","modalWidth":600,"items":[{"component":"Form","config":{"layout":"Grid","layoutConfig":{"value":[24]},"API":{"createAPI":"/api/doc"},"fields":[{"label":"\u4e0a\u4f20\u6587\u4ef6","span":16,"rules":[{"type":"required"}],"field":"urlList","type":"upload_file_single","options":{"title":"\u70b9\u51fb\u4e0a\u4f20","API":"/api/fs/uploadfile","acceptType":".docx, .doc"},"expect":{}}]}}]}}],"tableOperation":[{"title":"\u4e0a\u4f20pdf","type":"modal","options":{"outside":true,"style":"primary","modalTitle":"\u4e0a\u4f20pdf","modalWidth":600,"items":[{"component":"Form","config":{"layout":"Grid","layoutConfig":{"value":[24]},"API":{"getAPI":"/api/doc/(id)","updateAPI":"/api/doc/(id)"},"fields":[{"label":"\u4e0a\u4f20\u6587\u4ef6","span":16,"rules":[{"type":"required"}],"field":"pdfUrl","type":"upload_file_single","options":{"title":"\u70b9\u51fb\u4e0a\u4f20","type":"string","API":"/api/fs/uploadfile","acceptType":".pdf"},"expect":{}}]}}]}},{"title":"\u66f4\u65b0\u6587\u6863","type":"modal","options":{"outside":true,"style":"primary","modalTitle":"\u66f4\u65b0\u6587\u6863","modalWidth":600,"items":[{"component":"Form","config":{"layout":"Grid","layoutConfig":{"value":[24]},"API":{"getAPI":"/api/doc/(id)","updateAPI":"/api/doc/(id)"},"fields":[{"label":"\u6587\u6863\u540d","field":"name","rules":[{"type":"required"}],"type":"input"},{"label":"\u4e0a\u4f20\u6587\u4ef6","span":16,"rules":[],"field":"urlList","type":"upload_file_single","options":{"title":"\u70b9\u51fb\u4e0a\u4f20","API":"/api/fs/uploadfile","acceptType":".docx, .doc"},"expect":{}}]}}]}},{"title":"\u4e0b\u8f7d","type":"modal","options":{"outside":true,"modalTitle":"\u4e0b\u8f7d\u6587\u4ef6","modalWidth":400,"layout":"Empty","items":[{"component":"print_config_form","config":{"API":{"getAPI":"/api/doc/(id)"},"fields":[{"field":"downloadFile","label":"\u4e0b\u8f7d","type":"normal_download_file","options":{"title":"\u70b9\u51fb\u4e0b\u8f7d"}}],"otherProps":{"footerButton":false}}}]}},{"title":"\u8be6\u60c5","type":"path","options":{"outside":true,"path":"fileManage/fileManage-view"}},{"title":"\u5220\u9664","type":"delete","options":{"outside":false},"expect":{"permission":""}}],"searchFields":[{"label":"\u6587\u6863\u540d","field":"name","type":"input","props":{"placeholder":""}}],"tableFields":[{"label":"\u6587\u6863\u540d","field":"name"},{"label":"\u6587\u4ef6\u7248\u672c","field":"version"}],"viewConfig":[{"title":"\u8be6\u60c5","type":"plain","fields":[{"label":"\u6587\u6863\u540d","field":"name"},{"label":"\u4e0b\u8f7d\u5730\u5740","field":"url"},{"label":"\u5f53\u524d\u7248\u672c\u53f7","field":"version"}]},{"title":"\u5386\u53f2\u7248\u672c","type":"cardList","api":"/api/doc/versionList/[id]","map":{"title":"","subTitle":false,"image":false,"imageTitle":false},"format":["\u6587\u6863\u540d: <title>","\u4e0b\u8f7d\u5730\u5740: <url>","\u66f4\u65b0\u65f6\u95f4: <uploadTime>","\u6587\u4ef6\u7248\u672c: <versionCode>"]}]}')},lEFY:function(e,i,t){"use strict";t.r(i);var l=t("q1tI"),a=t.n(l),o=t("Pm34"),p=t.n(o),d=t("nAAA"),n=t.n(d);i["default"]=()=>a.a.createElement(p.a,{namespace:"fileManage_add",config:n.a})},nAAA:function(e,i,t){var l=t("034Z");e.exports={layout:l.layout.form,title:l.pageName.new,items:[{component:"Form",config:{API:{createAPI:l.createAPI},layout:"Grid",layoutConfig:{value:Array(l.columns).fill(~~(24/l.columns))},fields:l.createFields||l.formFields}}]}}}]);