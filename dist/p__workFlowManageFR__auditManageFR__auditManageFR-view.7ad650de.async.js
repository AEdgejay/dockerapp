(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[162],{AyJi:function(e,a,t){"use strict";var l=t("IIKO"),n=t("SIvP"),i=t("k16G"),r=t("q1tI"),c=t.n(r),s=t("uuO6"),d=(t("Mdr6"),s["Flex"].FlexItem),o=function(e){var a=e.title,t=e.children,l=c.a.Children.toArray(t),n=Object(i["a"])(l,2),r=n[0],o=n[1];return c.a.createElement("div",{className:"c-Card"},c.a.createElement(s["Flex"],{className:"content"},c.a.createElement(d,null,c.a.createElement("div",{className:"title"},a)),c.a.createElement("div",{className:"fill"}),c.a.createElement(d,{flex:1},o)),r)},m=t("G1nR"),p=t("GG5U"),u=t("Pm34"),f=t.n(u),E=t("8Skl"),b=(t("T65D"),s["Flex"].FlexItem);function v(e){var a=e.title,t=e.defaultCollapse,l=void 0!==t&&t,n=e.collapseIcon,d=void 0===n||n,o=e.delayed,m=void 0!==o&&o,p=e.children,u=Object(r["useState"])(l),f=Object(i["a"])(u,2),v=f[0],g=f[1],O=Object(r["useReducer"])(e=>e+1,0),I=Object(i["a"])(O,2),y=I[0],A=I[1],h=Object(r["useRef"])(null),j=Object(r["useRef"])(void 0),F=Object(r["useMemo"])(e=>v?[{height:0,padding:0},{transform:"rotate(180deg)"}]:[{height:j.current,padding:void 0},{transform:void 0}],[v,y]),N=Object(i["a"])(F,2),R=N[0],x=N[1];function P(){v||(j.current=h.current.clientHeight),g(!v)}return Object(r["useEffect"])(e=>{v||setTimeout(e=>{j.current=void 0,A()},200)},[v]),c.a.createElement("div",{className:"ZEleA-Panel"},c.a.createElement(s["Flex"],{className:"ZEleA-Panel-title"},d?c.a.createElement(b,{className:"ZEleA-Panel-icon",onClick:P,style:x},c.a.createElement(E["a"],{type:"down"})):null,c.a.createElement(b,{flex:1},c.a.createElement("div",null,a))),c.a.createElement("div",{className:"ZEleA-Panel-content",ref:h,style:R},m?!v&&p:p))}var g=t("sB9r"),O=t("D4a5"),I=s["Flex"].FlexItem,y=function(e){var a=e.data,t=e.indexData,l=e.operation,n=e.format;return c.a.createElement(s["Flex"],null,a.image?c.a.createElement(I,null,c.a.createElement(g["a"],{width:85,height:100,border:!0,value:a.image})):c.a.createElement(c.a.Fragment,null),c.a.createElement(I,{className:"padding-left",flex:1},c.a.createElement("div",{className:"list"},a.imageTitle?c.a.createElement("div",null,c.a.createElement("span",{className:"weight"},a.imageTitle)):c.a.createElement(c.a.Fragment,null),c.a.createElement(O["Render"],{n:"plain",data:t,options:{format:n},handle:{}}))),c.a.createElement(I,null,c.a.createElement("div",null,l)))},A=t("5zUa"),h=t("Nbnn"),j=t("cIDR"),F=s["Flex"].FlexItem,N=function(e){var a=e.data,t=void 0===a?{}:a,l=e.map,n=void 0===l?{}:l,i=e.namespace,d=e.operation,o=e.format,m=e.handle,p=e.index,u=Object(j["useModel"])(i),f=Object(r["useMemo"])(e=>Array.isArray(d)?Object(h["a"])([],d,m,{namespace:i,model:u}).columns[0].render:e=>null,[d]),E={title:Object(A["formatAPI"])(n.title,{namespace:i,data:t}),subTitle:Object(A["formatAPI"])(n.subTitle,{namespace:i,data:t}),image:Object(A["formatAPI"])(n.image,{namespace:i,data:t}),imageTitle:Object(A["formatAPI"])(n.imageTitle,{namespace:i,data:t})};return c.a.createElement(v,{collapseIcon:!1,title:c.a.createElement(s["Flex"],null,c.a.createElement(F,null,E.title),c.a.createElement(F,{flex:1,className:"padding-left weight-400"},E.subTitle))},c.a.createElement(y,{data:E,indexData:{text:"",record:t,index:p,type:""},format:o,operation:f("",p,t)}))};t("qYX+");function R(e){var a=e.data,t=e.field,l=e.map,n=e.namespace,i=e.api,r=e.operation,s=e.format,d={items:[{component:"ItemList",config:{API:{listAPI:i},fields:[]}}]},o=a&&t?a[t]:void 0;return c.a.createElement("div",{className:"c-ImageCardList"},c.a.createElement(f.a,{namespace:n,config:d,operation:r,format:s,map:l,Item:N,data:o,pagination:!Boolean(o)}))}t("T2oS");var x=t("W9HT"),P=t("lIdm"),T=(t("a6mf"),function(e){var a=e.api,t=e.fieldsMap,l=void 0===t?{}:t,n=e.children,s=Object(r["useState"])([]),d=Object(i["a"])(s,2),o=d[0],m=d[1],p=Object(r["useState"])(!1),u=Object(i["a"])(p,2),f=u[0],E=u[1],b=l.status,v=void 0===b?{}:b,g=v.map,O=void 0===g?{}:g;return Object(r["useEffect"])(e=>{E(!0),Object(P["b"])(Object(A["formatAPI"])(a,{})).then(e=>{m(e)}).finally(e=>E(!1))},[a]),c.a.createElement(x["a"],{spinning:f},c.a.createElement("div",{className:"list Details-statusList"},o.map((e,a)=>c.a.createElement("div",{className:"time",key:a},c.a.createElement("div",{className:"label"},O[e.status]||e.status),c.a.createElement("div",{className:"value"},c.a.createElement("pre",null,e.note))))),n)}),D=(t("XEnU"),t("0al3"),t("45dX"));t("LvDl");function w(e){var a=e.namespace,t=e.API,l=e.col,n=void 0===l?2:l,r=(e.data,e.loading,e.label),s=e.span,d=void 0===s?12:s;console.log("preview data = ",e.data);var o=Object(p["a"])(a,t),m=Object(i["a"])(o,2);m[0],m[1];return c.a.createElement(D["Render"],{n:"Grid",value:Array(n).fill(~~(24/n))},c.a.createElement("div",{key:"preview_file_index",span:d,className:"Details-item"},r?c.a.createElement("div",{className:"Details-labelTitle"},r," :"):null,c.a.createElement("div",null,"TODO \u5bf9\u63a5\u9884\u89c8\u7ec4\u4ef6")))}var C=s["Flex"].FlexItem,S={plain:m["a"],cardList:R,statusLog:T,previewFile:w};a["a"]=function(e){var a=e.namespace,t=e.setting,l=e.config,n=Object(p["a"])(a,t.getAPI),r=Object(i["a"])(n,2),d=r[0],o=r[1],m=l.left,u=void 0===m?[]:m,f=l.right,E=void 0===f?[]:f,b={loading:o,fieldsMap:t.map,col:t.columns,data:d};return c.a.createElement(s["Flex"],{align:"flex-start"},u.length>0?c.a.createElement(C,{flex:1},u.map(e=>k(a,e,b)),c.a.createElement("br",null),c.a.createElement("br",null)):c.a.createElement(c.a.Fragment,null),E.length>0?c.a.createElement(C,{className:"Details-other"},E.map(e=>k(a,e,b))):c.a.createElement(c.a.Fragment,null),Array.isArray(l)&&l.length>0?c.a.createElement(C,{flex:1},l.map(e=>(e.fields=d.layoutJson?d.layoutJson:e.fields,k(a,e,b))),c.a.createElement("br",null),c.a.createElement("br",null)):c.a.createElement(c.a.Fragment,null))};function k(e,a,t){var i=a.title,s=a.type,d=Object(n["a"])(a,["title","type"]),m=S[s];return m?c.a.createElement(r["Fragment"],{key:"".concat(i,"-").concat(s)},c.a.createElement(o,{title:i},c.a.createElement(m,Object(l["a"])({},t,d,{namespace:e})))):"\u672a\u77e5\u7684 view type: ".concat(s)}},G1nR:function(e,a,t){"use strict";t.d(a,"a",(function(){return v}));var l=t("XEnU"),n=t("SIvP"),i=(t("T2oS"),t("W9HT")),r=(t("+L6B"),t("2/Rp")),c=t("k16G"),s=t("q1tI"),d=t.n(s),o=(t("Pm34"),t("Rrod")),m=t.n(o),p=t("GG5U"),u=t("0al3"),f=t("45dX"),E=(t("a6mf"),t("LvDl")),b=t.n(E);function v(e){var a=e.namespace,t=e.API,l=e.col,n=void 0===l?2:l,s=e.fields,o=void 0===s?[]:s,u=e.fieldsMap,E=void 0===u?{}:u,b=e.goBack,v=void 0!==b&&b,O=e.data,I=e.loading,y=Object(p["a"])(a,t),A=Object(c["a"])(y,2),h=A[0],j=A[1],F=O||h;return d.a.createElement(i["a"],{spinning:I||j},v&&m.a.goBack?d.a.createElement(d.a.Fragment,null,d.a.createElement(r["a"],{onClick:m.a.goBack},"\u8fd4\u56de")):null,d.a.createElement(f["Render"],{n:"Grid",value:Array(n).fill(~~(24/n))},o.map((e,a)=>{var t=e.label;return d.a.createElement("div",{key:a,span:e.span,className:"Details-item"},t?d.a.createElement("div",{className:"Details-labelTitle"},t," :"):null,g(F,e,E))})))}function g(e,a,t){var i=a.field,r=a.options,c=Object(n["a"])(a,["field","options"]),s=Object(l["a"])(Object(l["a"])({},r),c);return t&&t[i]&&(s.map=t[i].map),d.a.createElement(u["Render"],{n:"plain",className:"Details-valueContainer",options:s,value:b.a.get(e,i),formdata:e})}},GG5U:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var l=t("cIDR"),n=t("1cYI");function i(e,a){var t=Object(l["useModel"])({namespace:e}),i=t.formData,r=void 0===i?{}:i,c=t.loading;function s(){a&&t.fetchOne({API:a})}function d(){}return Object(n["useDidMount"])(s),Object(n["useWillUnmount"])(d),[r,c]}},Mdr6:function(e,a,t){},Qx8l:function(e){e.exports=JSON.parse('{"pageName":{"table":"\u5f85\u529e\u4e8b\u9879","new":"","edit":""},"listAPI":"/api/wf/instances/skipFilter","createAPI":"","getAPI":"/api/wf/instanceAndForm/byTableJSON/[id]","updateAPI":"","deleteAPI":"/api/wf/instances/(id)","updateApplyAPI":{"approveUrl":"/api/wf/instances/(id)/approve","rollbackUrl":"/api/wf/instances/(id)/rollback","rejectUrl":"/api/wf/instances/(id)/reject"},"getApplyHistoryAPI":"/api/wf/histories","columns":1,"createFields":[{"label":"\u7c7b\u522b\u540d\u79f0","rules":[{"type":"required"}],"props":{"placeholder":"\u8bf7\u8f93\u5165"},"type":"input","field":"name"},{"label":"\u7c7b\u522b\u7f16\u7801","rules":[{"type":"required"}],"props":{"placeholder":"\u8bf7\u8f93\u5165"},"type":"input","field":"code"},{"label":"","type":"hidden","field":"identifier"}],"updateFields":[{"label":"\u7c7b\u522b\u540d\u79f0","rules":[{"type":"required"}],"props":{"placeholder":"\u8bf7\u8f93\u5165"},"type":"input","field":"name"},{"label":"\u7c7b\u522b\u7f16\u7801","rules":[{"type":"required"}],"props":{"placeholder":"\u8bf7\u8f93\u5165"},"type":"input","field":"code"},{"label":"","type":"hidden","field":"identifier"}],"map":{},"layout":{"table":"Content","form":"TitleContent"},"tableActions":[],"tableOperation":[{"title":"\u5ba1\u6838","type":"path","options":{"outside":true,"path":"auditManageFR/auditManageFR-edit"},"expect":{"permission":"","field":"status","value":"/(START|VERIFYING)/"}},{"title":"\u67e5\u770b","type":"path","options":{"outside":true,"path":"auditManageFR/auditManageFR-edit"},"expect":{"permission":"","field":"status","value":"/(CLOSE_REJECTED|CLOSE_APPROVED)/"}},{"title":"\u64a4\u9500\u7533\u8bf7","type":"delete","options":{"method":"post","outside":false},"expect":{"permission":"","field":"status","value":"/(START|VERIFYING)/"}}],"searchFields":[{"label":"\u6d41\u7a0b\u540d\u79f0","field":"name","type":"input","props":{"placeholder":"\u8bf7\u8f93\u5165"}},{"field":"status","label":"\u7533\u8bf7\u72b6\u6001","type":"select","options":[{"label":"\u5f00\u59cb","value":"START"},{"label":"\u5ba1\u6838\u4e2d","value":"VERIFYING"},{"label":"\u5df2\u62d2\u7edd","value":"CLOSE_REJECTED"},{"label":"\u5df2\u7ed3\u675f","value":"CLOSE_APPROVED"}]}],"tableFields":[{"label":"\u6d41\u7a0b\u540d\u79f0","field":"name"},{"label":"\u7533\u8bf7\u4eba","field":"creator"},{"label":"\u5ba1\u6279\u4eba","field":"currentUserName"},{"label":"\u5f53\u524d\u6b65\u9aa4","field":"currentStepName"},{"label":"\u72b6\u6001","field":"status","valueType":"tag","options":{"map":{"START":"\u5f00\u59cb","VERIFYING":"\u5ba1\u6838\u4e2d","CLOSE_REJECTED":"\u5df2\u62d2\u7edd","CLOSE_APPROVED":"\u5df2\u7ed3\u675f"},"color":{"ENABLED":"#17d349","VERIFYING":"#DDAF5B","CLOSE_REJECTED":"#bdbdbd","CLOSE_APPROVED":"#bdbdbd"}}},{"label":"\u7533\u8bf7\u65f6\u95f4","field":"createTime"}],"viewConfig":[{"title":"\u8be6\u60c5","type":"plain","fields":[{"label":"\u5fae\u670d\u52a1\u540d","field":"service_name","placeholder":"12345"},{"label":"appid","field":"\u9879\u76eeid"},{"label":"\u6743\u9650","field":"permission"},{"label":"\u63a5\u53e3id","field":"apiid"},{"label":"\u8bf7\u6c42\u8def\u5f84","field":"api_url"},{"label":"\u8bf7\u6c42\u65b9\u5f0f","field":"api_method"}]}]}')},T65D:function(e,a,t){},a6mf:function(e,a,t){},br1c:function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),n=t.n(l),i=t("AyJi"),r=t("Qx8l");a["default"]=()=>n.a.createElement(i["a"],{namespace:"auditManageFR_view",setting:r,config:r.viewConfig})},"qYX+":function(e,a,t){}}]);