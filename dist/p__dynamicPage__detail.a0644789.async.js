(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[43],{"5FMc":function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),n=t.n(l),i=t("AyJi"),r=t("fdHK");a["default"]=()=>n.a.createElement(i["a"],{namespace:"dynamicPage_detail",setting:r,config:r.viewConfig})},AyJi:function(e,a,t){"use strict";var l=t("IIKO"),n=t("SIvP"),i=t("k16G"),r=t("q1tI"),c=t.n(r),s=t("uuO6"),m=(t("Mdr6"),s["Flex"].FlexItem),o=function(e){var a=e.title,t=e.children,l=c.a.Children.toArray(t),n=Object(i["a"])(l,2),r=n[0],o=n[1];return c.a.createElement("div",{className:"c-Card"},c.a.createElement(s["Flex"],{className:"content"},c.a.createElement(m,null,c.a.createElement("div",{className:"title"},a)),c.a.createElement("div",{className:"fill"}),c.a.createElement(m,{flex:1},o)),r)},d=t("G1nR"),u=t("GG5U"),p=t("Pm34"),f=t.n(p),v=t("8Skl"),E=(t("T65D"),s["Flex"].FlexItem);function b(e){var a=e.title,t=e.defaultCollapse,l=void 0!==t&&t,n=e.collapseIcon,m=void 0===n||n,o=e.delayed,d=void 0!==o&&o,u=e.children,p=Object(r["useState"])(l),f=Object(i["a"])(p,2),b=f[0],g=f[1],O=Object(r["useReducer"])(e=>e+1,0),j=Object(i["a"])(O,2),I=j[0],P=j[1],A=Object(r["useRef"])(null),x=Object(r["useRef"])(void 0),F=Object(r["useMemo"])(e=>b?[{height:0,padding:0},{transform:"rotate(180deg)"}]:[{height:x.current,padding:void 0},{transform:void 0}],[b,I]),y=Object(i["a"])(F,2),h=y[0],N=y[1];function D(){b||(x.current=A.current.clientHeight),g(!b)}return Object(r["useEffect"])(e=>{b||setTimeout(e=>{x.current=void 0,P()},200)},[b]),c.a.createElement("div",{className:"ZEleA-Panel"},c.a.createElement(s["Flex"],{className:"ZEleA-Panel-title"},m?c.a.createElement(E,{className:"ZEleA-Panel-icon",onClick:D,style:N},c.a.createElement(v["a"],{type:"down"})):null,c.a.createElement(E,{flex:1},c.a.createElement("div",null,a))),c.a.createElement("div",{className:"ZEleA-Panel-content",ref:A,style:h},d?!b&&u:u))}var g=t("sB9r"),O=t("D4a5"),j=s["Flex"].FlexItem,I=function(e){var a=e.data,t=e.indexData,l=e.operation,n=e.format;return c.a.createElement(s["Flex"],null,a.image?c.a.createElement(j,null,c.a.createElement(g["a"],{width:85,height:100,border:!0,value:a.image})):c.a.createElement(c.a.Fragment,null),c.a.createElement(j,{className:"padding-left",flex:1},c.a.createElement("div",{className:"list"},a.imageTitle?c.a.createElement("div",null,c.a.createElement("span",{className:"weight"},a.imageTitle)):c.a.createElement(c.a.Fragment,null),c.a.createElement(O["Render"],{n:"plain",data:t,options:{format:n},handle:{}}))),c.a.createElement(j,null,c.a.createElement("div",null,l)))},P=t("5zUa"),A=t("Nbnn"),x=t("cIDR"),F=s["Flex"].FlexItem,y=function(e){var a=e.data,t=void 0===a?{}:a,l=e.map,n=void 0===l?{}:l,i=e.namespace,m=e.operation,o=e.format,d=e.handle,u=e.index,p=Object(x["useModel"])(i),f=Object(r["useMemo"])(e=>Array.isArray(m)?Object(A["a"])([],m,d,{namespace:i,model:p}).columns[0].render:e=>null,[m]),v={title:Object(P["formatAPI"])(n.title,{namespace:i,data:t}),subTitle:Object(P["formatAPI"])(n.subTitle,{namespace:i,data:t}),image:Object(P["formatAPI"])(n.image,{namespace:i,data:t}),imageTitle:Object(P["formatAPI"])(n.imageTitle,{namespace:i,data:t})};return c.a.createElement(b,{collapseIcon:!1,title:c.a.createElement(s["Flex"],null,c.a.createElement(F,null,v.title),c.a.createElement(F,{flex:1,className:"padding-left weight-400"},v.subTitle))},c.a.createElement(I,{data:v,indexData:{text:"",record:t,index:u,type:""},format:o,operation:f("",u,t)}))};t("qYX+");function h(e){var a=e.data,t=e.field,l=e.map,n=e.namespace,i=e.api,r=e.operation,s=e.format,m={items:[{component:"ItemList",config:{API:{listAPI:i},fields:[]}}]},o=a&&t?a[t]:void 0;return c.a.createElement("div",{className:"c-ImageCardList"},c.a.createElement(f.a,{namespace:n,config:m,operation:r,format:s,map:l,Item:y,data:o,pagination:!Boolean(o)}))}t("T2oS");var N=t("W9HT"),D=t("lIdm"),w=(t("a6mf"),function(e){var a=e.api,t=e.fieldsMap,l=void 0===t?{}:t,n=e.children,s=Object(r["useState"])([]),m=Object(i["a"])(s,2),o=m[0],d=m[1],u=Object(r["useState"])(!1),p=Object(i["a"])(u,2),f=p[0],v=p[1],E=l.status,b=void 0===E?{}:E,g=b.map,O=void 0===g?{}:g;return Object(r["useEffect"])(e=>{v(!0),Object(D["b"])(Object(P["formatAPI"])(a,{})).then(e=>{d(e)}).finally(e=>v(!1))},[a]),c.a.createElement(N["a"],{spinning:f},c.a.createElement("div",{className:"list Details-statusList"},o.map((e,a)=>c.a.createElement("div",{className:"time",key:a},c.a.createElement("div",{className:"label"},O[e.status]||e.status),c.a.createElement("div",{className:"value"},c.a.createElement("pre",null,e.note))))),n)}),T=(t("XEnU"),t("0al3"),t("45dX"));t("LvDl");function k(e){var a=e.namespace,t=e.API,l=e.col,n=void 0===l?2:l,r=(e.data,e.loading,e.label),s=e.span,m=void 0===s?12:s;console.log("preview data = ",e.data);var o=Object(u["a"])(a,t),d=Object(i["a"])(o,2);d[0],d[1];return c.a.createElement(T["Render"],{n:"Grid",value:Array(n).fill(~~(24/n))},c.a.createElement("div",{key:"preview_file_index",span:m,className:"Details-item"},r?c.a.createElement("div",{className:"Details-labelTitle"},r," :"):null,c.a.createElement("div",null,"TODO \u5bf9\u63a5\u9884\u89c8\u7ec4\u4ef6")))}var R=s["Flex"].FlexItem,G={plain:d["a"],cardList:h,statusLog:w,previewFile:k};a["a"]=function(e){var a=e.namespace,t=e.setting,l=e.config,n=Object(u["a"])(a,t.getAPI),r=Object(i["a"])(n,2),m=r[0],o=r[1],d=l.left,p=void 0===d?[]:d,f=l.right,v=void 0===f?[]:f,E={loading:o,fieldsMap:t.map,col:t.columns,data:m};return c.a.createElement(s["Flex"],{align:"flex-start"},p.length>0?c.a.createElement(R,{flex:1},p.map(e=>C(a,e,E)),c.a.createElement("br",null),c.a.createElement("br",null)):c.a.createElement(c.a.Fragment,null),v.length>0?c.a.createElement(R,{className:"Details-other"},v.map(e=>C(a,e,E))):c.a.createElement(c.a.Fragment,null),Array.isArray(l)&&l.length>0?c.a.createElement(R,{flex:1},l.map(e=>(e.fields=m.layoutJson?m.layoutJson:e.fields,C(a,e,E))),c.a.createElement("br",null),c.a.createElement("br",null)):c.a.createElement(c.a.Fragment,null))};function C(e,a,t){var i=a.title,s=a.type,m=Object(n["a"])(a,["title","type"]),d=G[s];return d?c.a.createElement(r["Fragment"],{key:"".concat(i,"-").concat(s)},c.a.createElement(o,{title:i},c.a.createElement(d,Object(l["a"])({},t,m,{namespace:e})))):"\u672a\u77e5\u7684 view type: ".concat(s)}},G1nR:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var l=t("XEnU"),n=t("SIvP"),i=(t("T2oS"),t("W9HT")),r=(t("+L6B"),t("2/Rp")),c=t("k16G"),s=t("q1tI"),m=t.n(s),o=(t("Pm34"),t("Rrod")),d=t.n(o),u=t("GG5U"),p=t("0al3"),f=t("45dX"),v=(t("a6mf"),t("LvDl")),E=t.n(v);function b(e){var a=e.namespace,t=e.API,l=e.col,n=void 0===l?2:l,s=e.fields,o=void 0===s?[]:s,p=e.fieldsMap,v=void 0===p?{}:p,E=e.goBack,b=void 0!==E&&E,O=e.data,j=e.loading,I=Object(u["a"])(a,t),P=Object(c["a"])(I,2),A=P[0],x=P[1],F=O||A;return m.a.createElement(i["a"],{spinning:j||x},b&&d.a.goBack?m.a.createElement(m.a.Fragment,null,m.a.createElement(r["a"],{onClick:d.a.goBack},"\u8fd4\u56de")):null,m.a.createElement(f["Render"],{n:"Grid",value:Array(n).fill(~~(24/n))},o.map((e,a)=>{var t=e.label;return m.a.createElement("div",{key:a,span:e.span,className:"Details-item"},t?m.a.createElement("div",{className:"Details-labelTitle"},t," :"):null,g(F,e,v))})))}function g(e,a,t){var i=a.field,r=a.options,c=Object(n["a"])(a,["field","options"]),s=Object(l["a"])(Object(l["a"])({},r),c);return t&&t[i]&&(s.map=t[i].map),m.a.createElement(p["Render"],{n:"plain",className:"Details-valueContainer",options:s,value:E.a.get(e,i),formdata:e})}},GG5U:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var l=t("cIDR"),n=t("1cYI");function i(e,a){var t=Object(l["useModel"])({namespace:e}),i=t.formData,r=void 0===i?{}:i,c=t.loading;function s(){a&&t.fetchOne({API:a})}function m(){}return Object(n["useDidMount"])(s),Object(n["useWillUnmount"])(m),[r,c]}},Mdr6:function(e,a,t){},T65D:function(e,a,t){},a6mf:function(e,a,t){},fdHK:function(e){e.exports=JSON.parse('{"pageName":{"table":"\u914d\u7f6e\u5217\u8868","new":"\u6dfb\u52a0","edit":"\u7f16\u8f91","view":"\u914d\u7f6e\u8be6\u60c5"},"listAPI":"/api/crud/appPermission/appPermissions","createAPI":"/api/crud/appPermission/appPermissions","getAPI":"/api/crud/appPermission/appPermissions/[id]","updateAPI":"/api/crud/appPermission/appPermissions/[id]","deleteAPI":"/api/crud/appPermission/appPermissions/(id)","columns":2,"createFields":[],"updateFields":[],"map":{},"layout":{"table":"Content","form":"TitleContent"},"tableActions":[],"tableOperation":[],"searchFields":[],"tableFields":[],"viewConfig":{"left":[{"title":"\u914d\u7f6e\u8be6\u60c5","type":"plain","fields":[{"label":"\u5fae\u670d\u52a1\u540d","field":"service_name"},{"label":"appid","field":"\u9879\u76eeid"},{"label":"\u6743\u9650","field":"permission"},{"label":"\u63a5\u53e3id","field":"apiid"},{"label":"\u8bf7\u6c42\u8def\u5f84","field":"api_url"},{"label":"\u8bf7\u6c42\u65b9\u5f0f","field":"api_method"}]}]}}')},"qYX+":function(e,a,t){}}]);