(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[88],{"JH/D":function(e,l,t){var i=t("NaN6");e.exports={layout:i.layout.form,title:i.pageName.view,items:[{component:"Form",config:{API:{getAPI:i.getAPI},layout:"Grid",layoutConfig:{value:Array(i.columns).fill(~~(24/i.columns))},fields:i.viewConfig||i.formFields,otherProps:{footerButton:!1}}}]}},NaN6:function(e){e.exports=JSON.parse('{"pageName":{"table":"\u7cbe\u7075\u7ba1\u7406","new":"\u6dfb\u52a0\u7cbe\u7075","edit":"\u7f16\u8f91\u7cbe\u7075","view":"\u67e5\u770b\u8be6\u60c5"},"listAPI":"/api/crud/oms/wisp/wisps","createAPI":"/api/crud/oms/wisp/wisps","getAPI":"/api/crud/oms/wisp/wisps/[id]","updateAPI":"/api/crud/oms/wisp/wisps/[id]","deleteAPI":"/api/crud/oms/wisp/wisps/(id)","columns":1,"createFields":[{"label":"\u5143\u7cbe\u7075\u9009\u62e9","type":"select-fetch","props":{"style":{"width":240}},"rules":[{"type":"required"}],"options":{"API":"/api/crud/oms/wispMeta/wispMetas","label":"name","value":"id"},"field":"metaId"},{"label":"\u7cbe\u7075\u540d\u79f0","type":"input","field":"name","rules":[{"type":"required"}]},{"label":"\u7cbe\u7075\u63cf\u8ff0","type":"text-area","field":"description","props":{"style":{"width":240}}},{"label":"\u7ed1\u5b9a\u573a\u6b21","type":"select-fetch","props":{"style":{"width":240}},"rules":[{"type":"required"}],"options":{"API":"/api/crud/oms/marketingSession/marketingSessions","label":"title","value":"id"},"field":"sessionId"},{"label":"\u7cbe\u7075\u56fe\u7247","props":{"placeholder":"\u8bf7\u8f93\u5165"},"rules":[{"type":"required"}],"type":"upload-image","field":"previewPhotoUrl"},{"label":"\u7ea7\u522b","type":"select","props":{"style":{"width":240}},"rules":[{"type":"required"}],"options":[{"label":"v1","value":1},{"label":"v2","value":2},{"label":"v3","value":3},{"label":"v4","value":4},{"label":"v5","value":5}],"field":"level"},{"label":"\u6700\u5c0f\u4ef7\u503c","rules":[{"type":"required"}],"options":{"map":{"int":"\u6b63\u5e38\u6574\u6570\u503c"}},"type":"number","field":"minimumValue","props":{"style":{"width":240},"min":0},"addonAfter":"\u7cbe\u7075\u4ee4"},{"label":"\u6700\u5927\u4ef7\u503c","rules":[{"type":"required"}],"type":"number","field":"maximumValue","props":{"style":{"width":240},"min":0},"addonAfter":"\u7cbe\u7075\u4ee4"},{"label":"\u57f9\u517b\u5468\u671f","rules":[{"type":"required"}],"type":"number","field":"growthDays","props":{"style":{"width":240},"min":0},"addonAfter":"\u5929"},{"label":"\u57f9\u517b\u4ef7\u503c","rules":[{"type":"required"}],"props":{"style":{"width":240},"min":0,"max":100},"type":"number","field":"growthPercent","addonAfter":"%"},{"label":"\u6d88\u8017\u7cbe\u7075\u4ee4","rules":[{"type":"required"}],"props":{"style":{"width":240},"min":0},"type":"number","field":"costWispCoin","addonAfter":"\u4e2a"},{"label":"\u9884\u7ea6\u6d88\u8017\u966a\u4f34\u7cbe\u7075\u6570\u91cf","rules":[{"type":"required"}],"props":{"style":{"width":240},"min":0},"type":"number","field":"costAccompanyWisp","addonAfter":"\u53ea"},{"label":"\u7b49\u5f85\u5339\u914d\u65f6\u95f4","rules":[{"type":"required"}],"props":{"style":{"width":240},"min":0},"type":"number","field":"waitingMatchMinute","addonAfter":"\u5206\u949f"}],"updateFields":[{"label":"\u5143\u7cbe\u7075\u9009\u62e9","type":"select-fetch","props":{"style":{"width":240}},"rules":[{"type":"required"}],"options":{"API":"/api/crud/oms/wispMeta/wispMetas","label":"name","value":"id"},"field":"metaId"},{"label":"\u7cbe\u7075\u540d\u79f0","type":"input","field":"name","rules":[{"type":"required"}]},{"label":"\u7ed1\u5b9a\u573a\u6b21","type":"select-fetch","props":{"style":{"width":240}},"rules":[{"type":"required"}],"options":{"API":"/api/crud/oms/marketingSession/marketingSessions","label":"title","value":"sessionId"},"field":"sessionId"},{"label":"\u7ed1\u5b9a\u573a\u6b21","field":"sessionId","type":"select","options":[{"label":"level1","value":1},{"label":"level1","value":2},{"label":"level3","value":3},{"label":"level4","value":4},{"label":"level5","value":5}],"props":{"placeholder":"\u8bf7\u9009\u62e9","style":{"width":240}}},{"label":"\u7cbe\u7075\u56fe\u7247","props":{"placeholder":"\u8bf7\u8f93\u5165"},"type":"upload-image","field":"previewPhotoUrl"},{"label":"\u7ea7\u522b","type":"select","props":{"style":{"width":240}},"rules":[{"type":"required"}],"options":[{"label":"v1","value":1},{"label":"v2","value":2},{"label":"v3","value":3},{"label":"v4","value":4},{"label":"v5","value":5}],"field":"level"},{"label":"\u6700\u5c0f\u4ef7\u503c","rules":[{"type":"required"}],"options":{"map":{"int":"\u6b63\u5e38\u6574\u6570\u503c"}},"type":"number","field":"minimumValue","props":{"style":{"width":240},"min":0},"addonAfter":"\u7cbe\u7075\u4ee4"},{"label":"\u6700\u5927\u4ef7\u503c","rules":[{"type":"required"}],"type":"number","field":"maximumValue","props":{"style":{"width":240},"min":0},"addonAfter":"\u7cbe\u7075\u4ee4"},{"label":"\u57f9\u517b\u5468\u671f","rules":[{"type":"required"}],"type":"number","field":"growthDays","props":{"style":{"width":240},"min":0},"addonAfter":"\u5929"},{"label":"\u57f9\u517b\u4ef7\u503c","rules":[{"type":"required"}],"props":{"style":{"width":240},"min":0,"max":100},"type":"number","field":"growthPercent","addonAfter":"%"},{"label":"\u9884\u7ea6\u6d88\u8017\u966a\u4f34\u7cbe\u7075\u6570\u91cf","rules":[{"type":"required"}],"props":{"style":{"width":240},"min":0},"type":"number","field":"costAccompanyWisp","addonAfter":"\u53ea"}],"map":{},"layout":{"table":"Content","form":"TitleContent"},"tableActions":[{"title":"\u6dfb\u52a0\u7cbe\u7075","type":"path","options":{"style":"primary","path":"/spirits/spirit/spirit-add"}}],"tableOperation":[{"title":"\u7f16\u8f91","type":"path","options":{"style":"path","path":"spirit/spirit-edit","outside":true}},{"title":"\u8be6\u60c5","type":"path","options":{"style":"path","path":"spirit/spirit-view","outside":true}},{"title":"\u5220\u9664","type":"delete","options":{"outside":false,"API":"/api/crud/oms/wisp/wisps/(id)","method":"delete"},"expect":{"permission":""}}],"searchFields":[{"label":"\u540d\u79f0","field":"name","type":"input","props":{"placeholder":"\u8bf7\u8f93\u5165\u7cbe\u7075\u540d\u79f0"}}],"tableFields":[{"label":"\u5e8f\u53f7","field":"id","align":"center"},{"label":"\u7cbe\u7075\u540d\u79f0","field":"name","align":"center"},{"label":"\u7cbe\u7075\u56fe\u7247","valueType":"image","field":"previewPhotoUrl","align":"center"},{"label":"\u7ea7\u522b","field":"level","align":"center","valueType":"tag","options":{"map":{"0":"v0","1":"v1","2":"v2","3":"v3","4":"v4","5":"v5"},"chy":{"0":"blue","1":"cyan","2":"purple","3":"purple-dark","4":"orange","5":"gray"}},"theme":"option","type":"default"},{"label":"\u6302\u552e\u573a\u6b21","field":"marketingSession","align":"center","valueType":"getvalue","options":{"useField":"title"}},{"label":"\u6700\u4f4e\u4ef7\u503c","field":"minimumValue","align":"center"},{"label":"\u6700\u9ad8\u4ef7\u503c","field":"maximumValue","align":"center"},{"label":"\u57f9\u517b\u5929\u6570","field":"growthDays","align":"center"},{"label":"\u57f9\u517b\u4ef7\u503c","field":"growthPercent","valueType":"percentage","align":"center"},{"label":"\u6d88\u8017\u7684\u7cbe\u7075\u4ee4","field":"costWispCoin","align":"center"},{"label":"\u6d88\u8017\u7684\u7cbe\u7075\u6570\u91cf","field":"costAccompanyWisp","align":"center"}],"viewConfig":[{"label":"\u7cbe\u7075\u540d\u79f0","field":"name","type":"plain","span":24},{"label":"\u7cbe\u7075\u63cf\u8ff0","field":"description","type":"plain","span":24},{"label":"\u7cbe\u7075\u7b49\u7ea7","field":"level","type":"plain","span":24},{"label":"\u6302\u552e\u573a\u6b21","field":"marketingSession","type":"plain","span":24},{"label":"\u7cbe\u7075\u56fe\u7247","field":"previewPhotoUrl","type":"image","span":24},{"label":"\u57f9\u517b\u5468\u671f","field":"growthDays","type":"plain","span":24},{"label":"\u57f9\u517b\u4ef7\u503c","field":"growthPercent","type":"plain","span":24},{"label":"\u6700\u5c0f\u4ef7\u503c","field":"minimumValue","type":"plain","span":24},{"label":"\u6700\u5927\u4ef7\u503c","field":"maximumValue","type":"plain","span":24},{"label":"\u5339\u914d\u65f6\u95f4\u5f00\u59cb","field":"startMatchTime","type":"plain","span":24},{"label":"\u5339\u914d\u65f6\u95f4\u7ed3\u675f","field":"endMatchTime","type":"plain","span":24},{"label":"\u6d88\u8017\u7cbe\u7075\u4ee4","field":"costWispCoin","type":"plain","span":24},{"label":"\u9884\u7ea6\u966a\u4f34\u6d88\u8017\u7cbe\u7075\u6570\u91cf","field":"costAccompanyWisp","type":"plain","span":24}]}')},cSAx:function(e,l,t){"use strict";t.d(l,"a",(function(){return s}));var i=t("q1tI"),a=t("1cYI"),p=t("tONX");function s(e){var l=Object(i["useContext"])(p["a"]),t=l.OnBreadcrumb,s=l.OnBreadcrumbClear;Object(a["useDidMount"])(l=>{t(e)}),Object(a["useWillUnmount"])(e=>{s()})}},sLNW:function(e,l,t){"use strict";t.r(l);var i=t("q1tI"),a=t.n(i),p=t("Pm34"),s=t.n(p),r=t("JH/D"),n=t.n(r),d=t("cSAx");l["default"]=function(){return Object(d["a"])([{title:"\u9996\u9875"},{title:"\u7cbe\u7075\u7ba1\u7406",path:"/spirit"},{title:"\u67e5\u770b\u8be6\u60c5"}]),a.a.createElement("div",null,a.a.createElement(s.a,{namespace:"spirit_view",config:n.a}))}},tONX:function(e,l,t){"use strict";var i=t("q1tI"),a=t.n(i),p=a.a.createContext({});l["a"]=p}}]);