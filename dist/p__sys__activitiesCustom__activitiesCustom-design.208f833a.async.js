(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[94,154],{"4wX6":function(t,e,a){"use strict";a.r(e);var c=a("q1tI"),n=a.n(c),i=a("YNnG"),s=a("cSAx");e["default"]=t=>(Object(s["a"])([{title:"\u9996\u9875",path:"/"},{title:"\u7cfb\u7edf\u7ba1\u7406",path:"/sys"},{title:"\u81ea\u5b9a\u4e49\u8868\u5355",path:"/sys/activitiesCustom"},{title:"\u53ef\u89c6\u5316\u8bbe\u8ba1"}]),n.a.createElement(i["default"],null))},YNnG:function(t,e,a){"use strict";a.r(e);a("h7lp");var c=a("bf48"),n=a("XEnU"),i=a("k16G"),s=a("q1tI"),u=a.n(s),o=a("5YzW"),r=a("N4YQ"),b=a("sHPV");e["default"]=t=>{var e=t.api,a=void 0===e?"/api/ali/byTableJSON":e,l=a,O=Object(s["useState"])(""),d=Object(i["a"])(O,2),f=d[0],j=d[1],p=Object(s["useState"])(""),v=Object(i["a"])(p,2),w=v[0],h=v[1];function m(){Object(r["a"])(l,{},{}).then(t=>{t&&200===t.code?h(t.data):console.warn("\u83b7\u53d6\u6570\u636e\u5931\u8d25 = ",t.message)})}Object(s["useEffect"])(()=>{var t=location.search.split("="),e=t[1];e&&(l="".concat(Object(b["get"])()).concat(l,"/").concat(e),j(e),m(l))},[]);var I={subData:Object(n["a"])(Object(n["a"])({},w),{},{API:{updateAPI:"".concat(l,"/(id)")},custActivityId:f})};return u.a.createElement(c["a"],{title:"\u53ef\u89c6\u5316\u8bbe\u8ba1",ghost:!1,onBack:()=>window.history.back()},u.a.createElement(o["a"],I))}},cSAx:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var c=a("q1tI"),n=a("1cYI"),i=a("tONX");function s(t){var e=Object(c["useContext"])(i["a"]),a=e.OnBreadcrumb,s=e.OnBreadcrumbClear;Object(n["useDidMount"])(e=>{a(t)}),Object(n["useWillUnmount"])(t=>{s()})}},tONX:function(t,e,a){"use strict";var c=a("q1tI"),n=a.n(c),i=n.a.createContext({});e["a"]=i}}]);