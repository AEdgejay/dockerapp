(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[117],{"08Q3":function(e){e.exports=JSON.parse('{"pageName":{"table":"\u83dc\u5355\u7ba1\u7406","new":"\u6dfb\u52a0\u83dc\u5355","edit":"\u7f16\u8f91\u83dc\u5355"},"listAPI":"/api/crud/menu/custom/group","createAPI":"/api/crud/menu/custom/group","getAPI":"/api/crud/menu/custom/group/[id]","updateAPI":"/api/crud/menu/custom/group/[id]","deleteAPI":"api/crud/menu/menus/(id)","columns":1,"createFields":[{"label":"\u83dc\u5355\u540d\u79f0","rules":[{"type":"required"}],"props":{"placeholder":"\u8bf7\u8f93\u5165"},"type":"input","field":"name"}],"updateFields":[{"label":"\u83dc\u5355\u540d\u79f0","rules":[{"type":"required"}],"props":{"placeholder":"\u8bf7\u8f93\u5165"},"type":"input","field":"menuName"}],"map":{},"layout":{"table":"Content","form":"TitleContent"},"tableActions":[{"title":"\u6dfb\u52a0","type":"modal","options":{"style":"primary","modalTitle":"\u6dfb\u52a0\u7c7b\u522b","modalWidth":600,"items":[{"component":"Form","config":{"layout":"Grid","layoutConfig":{"value":[24]},"API":{"createAPI":"/api/crud/menu/menus"},"fields":[{"label":"\u83dc\u5355\u540d\u79f0","rules":[{"type":"required"}],"props":{"placeholder":"\u8bf7\u8f93\u5165"},"type":"input","field":"menuName"},{"label":"\u8def\u5f84","rules":[{"type":"required"}],"props":{"placeholder":"\u8bf7\u8f93\u5165"},"type":"input","field":"component"},{"field":"menuType","label":"\u83dc\u5355\u7c7b\u578b","type":"select","rules":["required"],"options":[{"label":"\u76ee\u5f55","value":"C"},{"label":"\u83dc\u5355","value":"M"},{"label":"\u6309\u94ae","value":"B"}]},{"label":"\u9009\u62e9\u6743\u9650","field":"permId","span":24,"type":"modal-radio","props":{},"rules":[],"options":{"title":"\u9009\u62e9\u6743\u9650","label":"name","editLabel":"perm","value":"id","pagination":true,"API":"/api/adm/perms/group","fields":[{"label":"\u6743\u9650\u540d\u79f0","field":"name","valueType":"ellipsis"}]}},{"label":"\u7236\u7c7b\u522b","field":"pid","span":24,"type":"modal-radio","props":{},"rules":[],"options":{"title":"\u9009\u62e9\u7236\u7c7b\u522b","label":"menuName","editLabel":"pName","value":"id","pagination":true,"API":"/api/crud/menu/custom/group","fields":[{"label":"\u83dc\u5355\u540d\u79f0","field":"menuName","valueType":"ellipsis"},{"label":"\u8def\u5f84","field":"component","valueType":"ellipsis"}]}},{"label":"\u6392\u5e8f\u53f7","rules":[],"type":"number","field":"orderNum"}]}}]},"expect":{"permission":""}}],"tableOperation":[{"title":"\u542f\u7528","type":"request","options":{"method":"put","outside":true,"API":"/api/crud/menu/custom/status/(id)"},"expect":{"field":"status","value":"1"}},{"title":"\u7981\u7528","type":"request","options":{"method":"put","outside":true,"API":"/api/crud/menu/custom/status/(id)"},"expect":{"field":"status","value":"0"}},{"title":"\u7f16\u8f91","type":"modal","options":{"modalTitle":"\u7f16\u8f91\u7c7b\u522b","modalWidth":600,"outside":true,"items":[{"component":"Form","config":{"layout":"Grid","layoutConfig":{"value":[24]},"API":{"getAPI":"/api/crud/menu/menus/(id)","updateAPI":"/api/crud/menu/menus/(id)"},"fields":[{"label":"\u83dc\u5355\u540d\u79f0","rules":[{"type":"required"}],"props":{"placeholder":"\u8bf7\u8f93\u5165"},"type":"input","field":"menuName"},{"label":"\u8def\u5f84","rules":[{"type":"required"}],"props":{"placeholder":"\u8bf7\u8f93\u5165"},"type":"input","field":"component"},{"field":"menuType","label":"\u83dc\u5355\u7c7b\u578b","type":"select","rules":["required"],"options":[{"label":"\u76ee\u5f55","value":"C"},{"label":"\u83dc\u5355","value":"M"},{"label":"\u6309\u94ae","value":"B"}]},{"label":"\u9009\u62e9\u6743\u9650","field":"permId","span":24,"type":"modal-radio","props":{},"rules":[],"options":{"title":"\u9009\u62e9\u6743\u9650","label":"name","editLabel":"perm","value":"id","pagination":true,"API":"/api/adm/perms/group","fields":[{"label":"\u6743\u9650\u540d\u79f0","field":"name","valueType":"ellipsis"}]}},{"label":"\u7236\u7c7b\u522b","field":"pid","span":24,"type":"modal-radio","props":{},"rules":[],"options":{"title":"\u9009\u62e9\u7236\u7c7b\u522b","label":"menuName","editLabel":"pName","value":"id","pagination":true,"API":"/api/crud/menu/custom/group","fields":[{"label":"\u83dc\u5355\u540d\u79f0","field":"menuName","valueType":"ellipsis"},{"label":"\u8def\u5f84","field":"component","valueType":"ellipsis"}]}},{"label":"\u6392\u5e8f\u53f7","rules":[],"type":"number","field":"orderNum"}]}}]},"expect":{"permission":""}},{"title":"\u5220\u9664","type":"delete","options":{"outside":false},"expect":{"permission":""}}],"searchFields":[{"label":"\u83dc\u5355\u540d\u79f0","field":"menuName","type":"input","props":{"placeholder":""}}],"tableFields":[{"label":"\u83dc\u5355\u540d\u79f0","field":"menuName"},{"label":"\u8def\u5f84","field":"component"},{"label":"\u72b6\u6001","field":"status","valueType":"tag","options":{"map":{"0":"\u542f\u7528","1":"\u7981\u7528"},"color":{"0":"#17d349","1":"#bdbdbd"}}}]}')},AyJi:function(e,a,t){"use strict";var l=t("IIKO"),n=t("SIvP"),i=t("k16G"),r=t("q1tI"),c=t.n(r),o=t("uuO6"),m=(t("Mdr6"),o["Flex"].FlexItem),s=function(e){var a=e.title,t=e.children,l=c.a.Children.toArray(t),n=Object(i["a"])(l,2),r=n[0],s=n[1];return c.a.createElement("div",{className:"c-Card"},c.a.createElement(o["Flex"],{className:"content"},c.a.createElement(m,null,c.a.createElement("div",{className:"title"},a)),c.a.createElement("div",{className:"fill"}),c.a.createElement(m,{flex:1},s)),r)},u=t("G1nR"),d=t("GG5U"),p=t("Pm34"),f=t.n(p),b=t("8Skl"),v=(t("T65D"),o["Flex"].FlexItem);function g(e){var a=e.title,t=e.defaultCollapse,l=void 0!==t&&t,n=e.collapseIcon,m=void 0===n||n,s=e.delayed,u=void 0!==s&&s,d=e.children,p=Object(r["useState"])(l),f=Object(i["a"])(p,2),g=f[0],E=f[1],y=Object(r["useReducer"])(e=>e+1,0),I=Object(i["a"])(y,2),O=I[0],A=I[1],N=Object(r["useRef"])(null),j=Object(r["useRef"])(void 0),h=Object(r["useMemo"])(e=>g?[{height:0,padding:0},{transform:"rotate(180deg)"}]:[{height:j.current,padding:void 0},{transform:void 0}],[g,O]),P=Object(i["a"])(h,2),x=P[0],T=P[1];function F(){g||(j.current=N.current.clientHeight),E(!g)}return Object(r["useEffect"])(e=>{g||setTimeout(e=>{j.current=void 0,A()},200)},[g]),c.a.createElement("div",{className:"ZEleA-Panel"},c.a.createElement(o["Flex"],{className:"ZEleA-Panel-title"},m?c.a.createElement(v,{className:"ZEleA-Panel-icon",onClick:F,style:T},c.a.createElement(b["a"],{type:"down"})):null,c.a.createElement(v,{flex:1},c.a.createElement("div",null,a))),c.a.createElement("div",{className:"ZEleA-Panel-content",ref:N,style:x},u?!g&&d:d))}var E=t("sB9r"),y=t("D4a5"),I=o["Flex"].FlexItem,O=function(e){var a=e.data,t=e.indexData,l=e.operation,n=e.format;return c.a.createElement(o["Flex"],null,a.image?c.a.createElement(I,null,c.a.createElement(E["a"],{width:85,height:100,border:!0,value:a.image})):c.a.createElement(c.a.Fragment,null),c.a.createElement(I,{className:"padding-left",flex:1},c.a.createElement("div",{className:"list"},a.imageTitle?c.a.createElement("div",null,c.a.createElement("span",{className:"weight"},a.imageTitle)):c.a.createElement(c.a.Fragment,null),c.a.createElement(y["Render"],{n:"plain",data:t,options:{format:n},handle:{}}))),c.a.createElement(I,null,c.a.createElement("div",null,l)))},A=t("5zUa"),N=t("Nbnn"),j=t("cIDR"),h=o["Flex"].FlexItem,P=function(e){var a=e.data,t=void 0===a?{}:a,l=e.map,n=void 0===l?{}:l,i=e.namespace,m=e.operation,s=e.format,u=e.handle,d=e.index,p=Object(j["useModel"])(i),f=Object(r["useMemo"])(e=>Array.isArray(m)?Object(N["a"])([],m,u,{namespace:i,model:p}).columns[0].render:e=>null,[m]),b={title:Object(A["formatAPI"])(n.title,{namespace:i,data:t}),subTitle:Object(A["formatAPI"])(n.subTitle,{namespace:i,data:t}),image:Object(A["formatAPI"])(n.image,{namespace:i,data:t}),imageTitle:Object(A["formatAPI"])(n.imageTitle,{namespace:i,data:t})};return c.a.createElement(g,{collapseIcon:!1,title:c.a.createElement(o["Flex"],null,c.a.createElement(h,null,b.title),c.a.createElement(h,{flex:1,className:"padding-left weight-400"},b.subTitle))},c.a.createElement(O,{data:b,indexData:{text:"",record:t,index:d,type:""},format:s,operation:f("",d,t)}))};t("qYX+");function x(e){var a=e.data,t=e.field,l=e.map,n=e.namespace,i=e.api,r=e.operation,o=e.format,m={items:[{component:"ItemList",config:{API:{listAPI:i},fields:[]}}]},s=a&&t?a[t]:void 0;return c.a.createElement("div",{className:"c-ImageCardList"},c.a.createElement(f.a,{namespace:n,config:m,operation:r,format:o,map:l,Item:P,data:s,pagination:!Boolean(s)}))}t("T2oS");var T=t("W9HT"),F=t("lIdm"),D=(t("a6mf"),function(e){var a=e.api,t=e.fieldsMap,l=void 0===t?{}:t,n=e.children,o=Object(r["useState"])([]),m=Object(i["a"])(o,2),s=m[0],u=m[1],d=Object(r["useState"])(!1),p=Object(i["a"])(d,2),f=p[0],b=p[1],v=l.status,g=void 0===v?{}:v,E=g.map,y=void 0===E?{}:E;return Object(r["useEffect"])(e=>{b(!0),Object(F["b"])(Object(A["formatAPI"])(a,{})).then(e=>{u(e)}).finally(e=>b(!1))},[a]),c.a.createElement(T["a"],{spinning:f},c.a.createElement("div",{className:"list Details-statusList"},s.map((e,a)=>c.a.createElement("div",{className:"time",key:a},c.a.createElement("div",{className:"label"},y[e.status]||e.status),c.a.createElement("div",{className:"value"},c.a.createElement("pre",null,e.note))))),n)}),w=(t("XEnU"),t("0al3"),t("45dX"));t("LvDl");function q(e){var a=e.namespace,t=e.API,l=e.col,n=void 0===l?2:l,r=(e.data,e.loading,e.label),o=e.span,m=void 0===o?12:o;console.log("preview data = ",e.data);var s=Object(d["a"])(a,t),u=Object(i["a"])(s,2);u[0],u[1];return c.a.createElement(w["Render"],{n:"Grid",value:Array(n).fill(~~(24/n))},c.a.createElement("div",{key:"preview_file_index",span:m,className:"Details-item"},r?c.a.createElement("div",{className:"Details-labelTitle"},r," :"):null,c.a.createElement("div",null,"TODO \u5bf9\u63a5\u9884\u89c8\u7ec4\u4ef6")))}var k=o["Flex"].FlexItem,C={plain:u["a"],cardList:x,statusLog:D,previewFile:q};a["a"]=function(e){var a=e.namespace,t=e.setting,l=e.config,n=Object(d["a"])(a,t.getAPI),r=Object(i["a"])(n,2),m=r[0],s=r[1],u=l.left,p=void 0===u?[]:u,f=l.right,b=void 0===f?[]:f,v={loading:s,fieldsMap:t.map,col:t.columns,data:m};return c.a.createElement(o["Flex"],{align:"flex-start"},p.length>0?c.a.createElement(k,{flex:1},p.map(e=>G(a,e,v)),c.a.createElement("br",null),c.a.createElement("br",null)):c.a.createElement(c.a.Fragment,null),b.length>0?c.a.createElement(k,{className:"Details-other"},b.map(e=>G(a,e,v))):c.a.createElement(c.a.Fragment,null),Array.isArray(l)&&l.length>0?c.a.createElement(k,{flex:1},l.map(e=>(e.fields=m.layoutJson?m.layoutJson:e.fields,G(a,e,v))),c.a.createElement("br",null),c.a.createElement("br",null)):c.a.createElement(c.a.Fragment,null))};function G(e,a,t){var i=a.title,o=a.type,m=Object(n["a"])(a,["title","type"]),u=C[o];return u?c.a.createElement(r["Fragment"],{key:"".concat(i,"-").concat(o)},c.a.createElement(s,{title:i},c.a.createElement(u,Object(l["a"])({},t,m,{namespace:e})))):"\u672a\u77e5\u7684 view type: ".concat(o)}},G1nR:function(e,a,t){"use strict";t.d(a,"a",(function(){return g}));var l=t("XEnU"),n=t("SIvP"),i=(t("T2oS"),t("W9HT")),r=(t("+L6B"),t("2/Rp")),c=t("k16G"),o=t("q1tI"),m=t.n(o),s=(t("Pm34"),t("Rrod")),u=t.n(s),d=t("GG5U"),p=t("0al3"),f=t("45dX"),b=(t("a6mf"),t("LvDl")),v=t.n(b);function g(e){var a=e.namespace,t=e.API,l=e.col,n=void 0===l?2:l,o=e.fields,s=void 0===o?[]:o,p=e.fieldsMap,b=void 0===p?{}:p,v=e.goBack,g=void 0!==v&&v,y=e.data,I=e.loading,O=Object(d["a"])(a,t),A=Object(c["a"])(O,2),N=A[0],j=A[1],h=y||N;return m.a.createElement(i["a"],{spinning:I||j},g&&u.a.goBack?m.a.createElement(m.a.Fragment,null,m.a.createElement(r["a"],{onClick:u.a.goBack},"\u8fd4\u56de")):null,m.a.createElement(f["Render"],{n:"Grid",value:Array(n).fill(~~(24/n))},s.map((e,a)=>{var t=e.label;return m.a.createElement("div",{key:a,span:e.span,className:"Details-item"},t?m.a.createElement("div",{className:"Details-labelTitle"},t," :"):null,E(h,e,b))})))}function E(e,a,t){var i=a.field,r=a.options,c=Object(n["a"])(a,["field","options"]),o=Object(l["a"])(Object(l["a"])({},r),c);return t&&t[i]&&(o.map=t[i].map),m.a.createElement(p["Render"],{n:"plain",className:"Details-valueContainer",options:o,value:v.a.get(e,i),formdata:e})}},GG5U:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var l=t("cIDR"),n=t("1cYI");function i(e,a){var t=Object(l["useModel"])({namespace:e}),i=t.formData,r=void 0===i?{}:i,c=t.loading;function o(){a&&t.fetchOne({API:a})}function m(){}return Object(n["useDidMount"])(o),Object(n["useWillUnmount"])(m),[r,c]}},Mdr6:function(e,a,t){},T65D:function(e,a,t){},a6mf:function(e,a,t){},"qYX+":function(e,a,t){},ywTc:function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),n=t.n(l),i=t("AyJi"),r=t("08Q3");a["default"]=()=>n.a.createElement(i["a"],{namespace:"menuManage_view",setting:r,config:r.viewConfig})}}]);