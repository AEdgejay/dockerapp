(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[113],{"5Xo6":function(e,a,n){"use strict";var t=n("q1tI"),l=n.n(t);a["a"]=e=>{var a=e.children;return l.a.createElement("div",{className:"ZEleA-Layout-Content"},a)}},"9i9R":function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return o}));n("tU7J");var t=n("wFql"),l=n("q1tI"),i=n.n(l),c=n("G1nR"),r=n("5Xo6");function o(e){return i.a.createElement(r["a"],null,i.a.createElement(c["a"],{goBack:!0,namespace:"logs",API:"/api/logs/[id]",col:1,fields:[{label:"\u64cd\u4f5c\u6a21\u5757",field:"module"},{label:"\u64cd\u4f5c\u65b9\u6cd5",field:"method"},{label:"\u64cd\u4f5c\u4eba\u5458",field:"userName"},{label:"\u64cd\u4f5c\u65f6\u95f4",field:"createTime"},{label:"\u64cd\u4f5c\u5185\u5bb9",field:"logName"},{type:"group",value:"\u54cd\u5e94\u6570\u636e",span:24},{label:"",field:"message",span:24,render:e=>i.a.createElement(t["a"],{code:!0},e)}]}))}},G1nR:function(e,a,n){"use strict";n.d(a,"a",(function(){return g}));var t=n("XEnU"),l=n("SIvP"),i=(n("T2oS"),n("W9HT")),c=(n("+L6B"),n("2/Rp")),r=n("k16G"),o=n("q1tI"),u=n.n(o),s=(n("Pm34"),n("Rrod")),d=n.n(s),m=n("GG5U"),f=n("0al3"),p=n("45dX"),v=(n("a6mf"),n("LvDl")),b=n.n(v);function g(e){var a=e.namespace,n=e.API,t=e.col,l=void 0===t?2:t,o=e.fields,s=void 0===o?[]:o,f=e.fieldsMap,v=void 0===f?{}:f,b=e.goBack,g=void 0!==b&&b,k=e.data,I=e.loading,O=Object(m["a"])(a,n),j=Object(r["a"])(O,2),G=j[0],R=j[1],w=k||G;return u.a.createElement(i["a"],{spinning:I||R},g&&d.a.goBack?u.a.createElement(u.a.Fragment,null,u.a.createElement(c["a"],{onClick:d.a.goBack},"\u8fd4\u56de")):null,u.a.createElement(p["Render"],{n:"Grid",value:Array(l).fill(~~(24/l))},s.map((e,a)=>{var n=e.label;return u.a.createElement("div",{key:a,span:e.span,className:"Details-item"},n?u.a.createElement("div",{className:"Details-labelTitle"},n," :"):null,E(w,e,v))})))}function E(e,a,n){var i=a.field,c=a.options,r=Object(l["a"])(a,["field","options"]),o=Object(t["a"])(Object(t["a"])({},c),r);return n&&n[i]&&(o.map=n[i].map),u.a.createElement(f["Render"],{n:"plain",className:"Details-valueContainer",options:o,value:b.a.get(e,i),formdata:e})}},GG5U:function(e,a,n){"use strict";n.d(a,"a",(function(){return i}));var t=n("cIDR"),l=n("1cYI");function i(e,a){var n=Object(t["useModel"])({namespace:e}),i=n.formData,c=void 0===i?{}:i,r=n.loading;function o(){a&&n.fetchOne({API:a})}function u(){}return Object(l["useDidMount"])(o),Object(l["useWillUnmount"])(u),[c,r]}},a6mf:function(e,a,n){}}]);