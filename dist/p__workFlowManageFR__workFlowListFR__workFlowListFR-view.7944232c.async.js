(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[179],{AyJi:function(e,a,t){"use strict";var l=t("IIKO"),i=t("SIvP"),n=t("k16G"),r=t("q1tI"),o=t.n(r),s=t("uuO6"),c=(t("Mdr6"),s["Flex"].FlexItem),d=function(e){var a=e.title,t=e.children,l=o.a.Children.toArray(t),i=Object(n["a"])(l,2),r=i[0],d=i[1];return o.a.createElement("div",{className:"c-Card"},o.a.createElement(s["Flex"],{className:"content"},o.a.createElement(c,null,o.a.createElement("div",{className:"title"},a)),o.a.createElement("div",{className:"fill"}),o.a.createElement(c,{flex:1},d)),r)},m=t("G1nR"),p=t("GG5U"),u=t("Pm34"),f=t.n(u),b=t("8Skl"),v=(t("T65D"),s["Flex"].FlexItem);function E(e){var a=e.title,t=e.defaultCollapse,l=void 0!==t&&t,i=e.collapseIcon,c=void 0===i||i,d=e.delayed,m=void 0!==d&&d,p=e.children,u=Object(r["useState"])(l),f=Object(n["a"])(u,2),E=f[0],g=f[1],y=Object(r["useReducer"])(e=>e+1,0),I=Object(n["a"])(y,2),A=I[0],O=I[1],h=Object(r["useRef"])(null),w=Object(r["useRef"])(void 0),j=Object(r["useMemo"])(e=>E?[{height:0,padding:0},{transform:"rotate(180deg)"}]:[{height:w.current,padding:void 0},{transform:void 0}],[E,A]),F=Object(n["a"])(j,2),P=F[0],x=F[1];function N(){E||(w.current=h.current.clientHeight),g(!E)}return Object(r["useEffect"])(e=>{E||setTimeout(e=>{w.current=void 0,O()},200)},[E]),o.a.createElement("div",{className:"ZEleA-Panel"},o.a.createElement(s["Flex"],{className:"ZEleA-Panel-title"},c?o.a.createElement(v,{className:"ZEleA-Panel-icon",onClick:N,style:x},o.a.createElement(b["a"],{type:"down"})):null,o.a.createElement(v,{flex:1},o.a.createElement("div",null,a))),o.a.createElement("div",{className:"ZEleA-Panel-content",ref:h,style:P},m?!E&&p:p))}var g=t("sB9r"),y=t("D4a5"),I=s["Flex"].FlexItem,A=function(e){var a=e.data,t=e.indexData,l=e.operation,i=e.format;return o.a.createElement(s["Flex"],null,a.image?o.a.createElement(I,null,o.a.createElement(g["a"],{width:85,height:100,border:!0,value:a.image})):o.a.createElement(o.a.Fragment,null),o.a.createElement(I,{className:"padding-left",flex:1},o.a.createElement("div",{className:"list"},a.imageTitle?o.a.createElement("div",null,o.a.createElement("span",{className:"weight"},a.imageTitle)):o.a.createElement(o.a.Fragment,null),o.a.createElement(y["Render"],{n:"plain",data:t,options:{format:i},handle:{}}))),o.a.createElement(I,null,o.a.createElement("div",null,l)))},O=t("5zUa"),h=t("Nbnn"),w=t("cIDR"),j=s["Flex"].FlexItem,F=function(e){var a=e.data,t=void 0===a?{}:a,l=e.map,i=void 0===l?{}:l,n=e.namespace,c=e.operation,d=e.format,m=e.handle,p=e.index,u=Object(w["useModel"])(n),f=Object(r["useMemo"])(e=>Array.isArray(c)?Object(h["a"])([],c,m,{namespace:n,model:u}).columns[0].render:e=>null,[c]),b={title:Object(O["formatAPI"])(i.title,{namespace:n,data:t}),subTitle:Object(O["formatAPI"])(i.subTitle,{namespace:n,data:t}),image:Object(O["formatAPI"])(i.image,{namespace:n,data:t}),imageTitle:Object(O["formatAPI"])(i.imageTitle,{namespace:n,data:t})};return o.a.createElement(E,{collapseIcon:!1,title:o.a.createElement(s["Flex"],null,o.a.createElement(j,null,b.title),o.a.createElement(j,{flex:1,className:"padding-left weight-400"},b.subTitle))},o.a.createElement(A,{data:b,indexData:{text:"",record:t,index:p,type:""},format:d,operation:f("",p,t)}))};t("qYX+");function P(e){var a=e.data,t=e.field,l=e.map,i=e.namespace,n=e.api,r=e.operation,s=e.format,c={items:[{component:"ItemList",config:{API:{listAPI:n},fields:[]}}]},d=a&&t?a[t]:void 0;return o.a.createElement("div",{className:"c-ImageCardList"},o.a.createElement(f.a,{namespace:i,config:c,operation:r,format:s,map:l,Item:F,data:d,pagination:!Boolean(d)}))}t("T2oS");var x=t("W9HT"),N=t("lIdm"),D=(t("a6mf"),function(e){var a=e.api,t=e.fieldsMap,l=void 0===t?{}:t,i=e.children,s=Object(r["useState"])([]),c=Object(n["a"])(s,2),d=c[0],m=c[1],p=Object(r["useState"])(!1),u=Object(n["a"])(p,2),f=u[0],b=u[1],v=l.status,E=void 0===v?{}:v,g=E.map,y=void 0===g?{}:g;return Object(r["useEffect"])(e=>{b(!0),Object(N["b"])(Object(O["formatAPI"])(a,{})).then(e=>{m(e)}).finally(e=>b(!1))},[a]),o.a.createElement(x["a"],{spinning:f},o.a.createElement("div",{className:"list Details-statusList"},d.map((e,a)=>o.a.createElement("div",{className:"time",key:a},o.a.createElement("div",{className:"label"},y[e.status]||e.status),o.a.createElement("div",{className:"value"},o.a.createElement("pre",null,e.note))))),i)}),T=(t("XEnU"),t("0al3"),t("45dX"));t("LvDl");function k(e){var a=e.namespace,t=e.API,l=e.col,i=void 0===l?2:l,r=(e.data,e.loading,e.label),s=e.span,c=void 0===s?12:s;console.log("preview data = ",e.data);var d=Object(p["a"])(a,t),m=Object(n["a"])(d,2);m[0],m[1];return o.a.createElement(T["Render"],{n:"Grid",value:Array(i).fill(~~(24/i))},o.a.createElement("div",{key:"preview_file_index",span:c,className:"Details-item"},r?o.a.createElement("div",{className:"Details-labelTitle"},r," :"):null,o.a.createElement("div",null,"TODO \u5bf9\u63a5\u9884\u89c8\u7ec4\u4ef6")))}var L=s["Flex"].FlexItem,q={plain:m["a"],cardList:P,statusLog:D,previewFile:k};a["a"]=function(e){var a=e.namespace,t=e.setting,l=e.config,i=Object(p["a"])(a,t.getAPI),r=Object(n["a"])(i,2),c=r[0],d=r[1],m=l.left,u=void 0===m?[]:m,f=l.right,b=void 0===f?[]:f,v={loading:d,fieldsMap:t.map,col:t.columns,data:c};return o.a.createElement(s["Flex"],{align:"flex-start"},u.length>0?o.a.createElement(L,{flex:1},u.map(e=>R(a,e,v)),o.a.createElement("br",null),o.a.createElement("br",null)):o.a.createElement(o.a.Fragment,null),b.length>0?o.a.createElement(L,{className:"Details-other"},b.map(e=>R(a,e,v))):o.a.createElement(o.a.Fragment,null),Array.isArray(l)&&l.length>0?o.a.createElement(L,{flex:1},l.map(e=>(e.fields=c.layoutJson?c.layoutJson:e.fields,R(a,e,v))),o.a.createElement("br",null),o.a.createElement("br",null)):o.a.createElement(o.a.Fragment,null))};function R(e,a,t){var n=a.title,s=a.type,c=Object(i["a"])(a,["title","type"]),m=q[s];return m?o.a.createElement(r["Fragment"],{key:"".concat(n,"-").concat(s)},o.a.createElement(d,{title:n},o.a.createElement(m,Object(l["a"])({},t,c,{namespace:e})))):"\u672a\u77e5\u7684 view type: ".concat(s)}},G1nR:function(e,a,t){"use strict";t.d(a,"a",(function(){return E}));var l=t("XEnU"),i=t("SIvP"),n=(t("T2oS"),t("W9HT")),r=(t("+L6B"),t("2/Rp")),o=t("k16G"),s=t("q1tI"),c=t.n(s),d=(t("Pm34"),t("Rrod")),m=t.n(d),p=t("GG5U"),u=t("0al3"),f=t("45dX"),b=(t("a6mf"),t("LvDl")),v=t.n(b);function E(e){var a=e.namespace,t=e.API,l=e.col,i=void 0===l?2:l,s=e.fields,d=void 0===s?[]:s,u=e.fieldsMap,b=void 0===u?{}:u,v=e.goBack,E=void 0!==v&&v,y=e.data,I=e.loading,A=Object(p["a"])(a,t),O=Object(o["a"])(A,2),h=O[0],w=O[1],j=y||h;return c.a.createElement(n["a"],{spinning:I||w},E&&m.a.goBack?c.a.createElement(c.a.Fragment,null,c.a.createElement(r["a"],{onClick:m.a.goBack},"\u8fd4\u56de")):null,c.a.createElement(f["Render"],{n:"Grid",value:Array(i).fill(~~(24/i))},d.map((e,a)=>{var t=e.label;return c.a.createElement("div",{key:a,span:e.span,className:"Details-item"},t?c.a.createElement("div",{className:"Details-labelTitle"},t," :"):null,g(j,e,b))})))}function g(e,a,t){var n=a.field,r=a.options,o=Object(i["a"])(a,["field","options"]),s=Object(l["a"])(Object(l["a"])({},r),o);return t&&t[n]&&(s.map=t[n].map),c.a.createElement(u["Render"],{n:"plain",className:"Details-valueContainer",options:s,value:v.a.get(e,n),formdata:e})}},GG5U:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var l=t("cIDR"),i=t("1cYI");function n(e,a){var t=Object(l["useModel"])({namespace:e}),n=t.formData,r=void 0===n?{}:n,o=t.loading;function s(){a&&t.fetchOne({API:a})}function c(){}return Object(i["useDidMount"])(s),Object(i["useWillUnmount"])(c),[r,o]}},Mdr6:function(e,a,t){},T65D:function(e,a,t){},YOS0:function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),i=t.n(l),n=t("AyJi"),r=t("jSQb");a["default"]=()=>i.a.createElement(n["a"],{namespace:"workFlowListFR_view",setting:r,config:r.viewConfig})},a6mf:function(e,a,t){},jSQb:function(e){e.exports=JSON.parse('{"pageName":{"table":"\u6d41\u7a0b\u7ba1\u7406","new":"\u6dfb\u52a0\u6d41\u7a0b","edit":"\u7f16\u8f91\u6d41\u7a0b"},"listAPI":"/api/wf/processes","createAPI":"/api/wf/processes","getAPI":"/api/wf/processes/[id]","updateAPI":"/api/wf/processes/[id]","deleteAPI":"/api/wf/processes/(id)","columns":1,"createFields":[{"label":"\u7c7b\u522b\u540d\u79f0","rules":[{"type":"required"}],"props":{"placeholder":"\u8bf7\u8f93\u5165"},"type":"input","field":"name"},{"label":"\u7c7b\u522b\u7f16\u7801","rules":[{"type":"required"}],"props":{"placeholder":"\u8bf7\u8f93\u5165"},"type":"input","field":"code"},{"label":"","type":"hidden","field":"identifier"}],"updateFields":[{"label":"\u7c7b\u522b\u540d\u79f0","rules":[{"type":"required"}],"props":{"placeholder":"\u8bf7\u8f93\u5165"},"type":"input","field":"name"},{"label":"\u7c7b\u522b\u7f16\u7801","rules":[{"type":"required"}],"props":{"placeholder":"\u8bf7\u8f93\u5165"},"type":"input","field":"code"},{"label":"","type":"hidden","field":"identifier"}],"map":{},"layout":{"table":"Content","form":"TitleContent"},"tableActions":[{"title":"\u6dfb\u52a0","type":"modal","options":{"style":"primary","modalTitle":"\u6dfb\u52a0\u6d41\u7a0b","modalWidth":600,"items":[{"component":"Form","config":{"layout":"Grid","layoutConfig":{"value":[24]},"API":{"createAPI":"/api/wf/processes"},"fields":[{"label":"\u6d41\u7a0b\u540d\u79f0","rules":[{"type":"required"}],"props":{"placeholder":"\u8bf7\u8f93\u5165"},"type":"input","field":"name"},{"field":"formType","label":"\u8868\u5355","type":"modal-radio","props":{},"rules":["required"],"options":{"title":"\u9009\u62e9\u8868\u5355","label":"name","editLabel":"formName","value":"id","pagination":true,"API":"/api/eav/entities","fields":[{"label":"\u8868\u5355\u540d\u79f0","field":"name"},{"label":"\u5907\u6ce8","field":"note"}]}},{"field":"categoryId","label":"\u6d41\u7a0b\u7c7b\u522b","type":"modal-radio","props":{},"rules":["required"],"options":{"title":"\u9009\u62e9\u6d41\u7a0b\u7c7b\u522b","label":"name","editLabel":"categoryName","value":"id","pagination":true,"API":"/api/categories/all/tree?identifier=workflow","fields":[{"label":"\u7c7b\u522b\u540d\u79f0","field":"name"},{"label":"\u7c7b\u522b\u7f16\u7801","field":"code"}]}},{"label":"","type":"hidden","field":"identifier","value":"workflow"}]}}]},"expect":{"permission":""}}],"tableOperation":[{"title":"\u542f\u7528","type":"request","options":{"method":"put","outside":true,"API":"/api/wf/processes/status/(id)"},"expect":{"field":"status","value":"DISABLED"}},{"title":"\u7981\u7528","type":"request","options":{"method":"put","outside":true,"API":"/api/wf/processes/status/(id)"},"expect":{"field":"status","value":"ENABLED"}},{"title":"\u7f16\u8f91","type":"modal","options":{"modalTitle":"\u7f16\u8f91\u6d41\u7a0b","modalWidth":600,"outside":true,"items":[{"component":"Form","config":{"layout":"Grid","layoutConfig":{"value":[24]},"API":{"getAPI":"/api/wf/processes/(id)","updateAPI":"/api/wf/processes/(id)"},"fields":[{"label":"\u7c7b\u522b\u540d\u79f0","rules":[{"type":"required"}],"props":{"placeholder":"\u8bf7\u8f93\u5165"},"type":"input","field":"name"},{"field":"formType","label":"\u8868\u5355","type":"modal-radio","props":{},"rules":["required"],"options":{"title":"\u9009\u62e9\u8868\u5355","label":"name","editLabel":"formName","value":"id","pagination":true,"API":"/api/eav/entities","fields":[{"label":"\u8868\u5355\u540d\u79f0","field":"name"},{"label":"\u5907\u6ce8","field":"note"}]}},{"field":"categoryId","label":"\u6d41\u7a0b\u7c7b\u522b","type":"modal-radio","props":{},"rules":["required"],"options":{"title":"\u9009\u62e9\u6d41\u7a0b\u7c7b\u522b","label":"name","editLabel":"categoryName","value":"id","pagination":true,"API":"/api/categories/all/tree?identifier=workflow","fields":[{"label":"\u7c7b\u522b\u540d\u79f0","field":"name"},{"label":"\u7c7b\u522b\u7f16\u7801","field":"code"}]}},{"label":"","type":"hidden","field":"identifier","value":"workflow"}]}}]},"expect":{"permission":""}},{"title":"\u6d41\u7a0b\u6b65\u9aa4","type":"path","options":{"outside":false,"path":"workFlowListFR/workFlowListFR-step"}},{"title":"\u5220\u9664","type":"delete","options":{"outside":false},"expect":{"permission":""}}],"searchFields":[{"label":"\u6d41\u7a0b\u540d\u79f0","field":"name","type":"input","props":{"placeholder":""}}],"tableFields":[{"label":"\u6d41\u7a0b\u540d\u79f0","width":200,"field":"name"},{"label":"\u4f7f\u7528\u8868\u5355","width":200,"field":"formName"},{"label":"\u72b6\u6001","width":180,"field":"status","valueType":"tag","options":{"map":{"ENABLED":"\u542f\u7528","DISABLED":"\u7981\u7528"},"color":{"ENABLED":"#17d349","DISABLED":"#bdbdbd"}}}]}')},"qYX+":function(e,a,t){}}]);