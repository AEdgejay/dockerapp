(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[49],{NiO2:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return m}));t("J+/v");var n=t("MoRW"),r=(t("B9cy"),t("Ol7k")),u=t("q1tI"),o=t.n(u),c=t("1cYI"),s=t("Vx04"),i=t("9kvl"),l=t("ZY0R");function v(){var e=["/api/adm/users/userInfo","/api/u/crud/accounts/userInfo"];return Object(l["b"])(e[0]).then(e=>{Object(s["saveToken"])({userName:e.name,avatar:e.avatar,avatar:e.avatar,extra:e.name,remember:!0})})}var b=r["a"].Content;function m(e){var a=e.location,t=a.query,r=useModel("global");return Object(c["useWillMount"])(e=>{var a=t.accessToken;a?(Object(s["saveToken"])({token:a,remember:!0}),v().then(e=>{r.queryPerm(!0),i["a"].push("/")})):i["a"].push("/login/oauthErr")}),o.a.createElement(b,{style:{background:"#fff"}},o.a.createElement(n["a"],{title:"\u83b7\u53d6\u6388\u6743\u4e2d"}))}}}]);