(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[53],{ITvK:function(e,a,t){e.exports={logo:"logo___3tfTW",bigLogo:"bigLogo___OLYjb",Form:"Form___2URax",forgot:"forgot___He8-N",Button:"Button___218S4",loginBG:"loginBG___2d4TR",formContainer:"formContainer___mQJ81",options:"options___NZvQR",regGuided:"regGuided___1itgl"}},gMHI:function(e,a,t){"use strict";t.r(a);t("2qtc");var n=t("kLXV"),l=(t("+L6B"),t("2/Rp")),r=t("IIKO"),c=(t("miYZ"),t("tsqr")),o=t("k16G"),s=(t("B9cy"),t("Ol7k")),i=t("q1tI"),m=t.n(i),u=t("9kvl"),p=t("WHYC"),d=t("Vx04"),h=(t("sHPV"),t("ymSw")),g=t.n(h),E=(t("sRBo"),t("kaz8")),b=(t("y8nQ"),t("Vl3Y")),f=(t("5NDa"),t("5rEg")),y=t("cJ7L"),v=t("FY4R"),O=t("uuO6"),w=(t("gCt9"),t("7qOG"),t("ITvK")),C=t.n(w),j=O["Flex"].FlexItem;function F(e){var a=e.className,t=e.onRePW,n=e.onSubmit,r=e.loading;Object(i["useRef"])();return m.a.createElement(b["a"],{className:a,onFinish:n},m.a.createElement(b["a"].Item,{name:"account",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"}]},m.a.createElement(f["a"],{prefix:m.a.createElement(y["a"],{style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u7528\u6237\u540d/\u624b\u673a\u53f7"})),m.a.createElement(b["a"].Item,{name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"}]},m.a.createElement(f["a"],{prefix:m.a.createElement(v["a"],{style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"\u5bc6\u7801"})),m.a.createElement(O["Flex"],null,m.a.createElement(j,null,m.a.createElement(b["a"].Item,{name:"remember",valuePropName:"checked",initialValue:!0},m.a.createElement(E["a"],null,"\u81ea\u52a8\u767b\u5f55"))),m.a.createElement(j,null,m.a.createElement(l["a"],{type:"link",className:C.a.forgot,onClick:t},"\u5fd8\u8bb0\u5bc6\u7801"))),m.a.createElement(l["a"],{type:"primary",htmlType:"submit",className:C.a.Button,loading:r},"\u767b\u9646"))}var R=t("y0hu"),I=t("eSWB"),_=t("ZY0R"),S=t("mxu5"),x=f["a"].Group;class N extends i["Component"]{constructor(){super(...arguments),this.state={text:"\u83b7\u53d6",cd:!1,count:60},this.type={email:"EmailValidate",phone:"PhoneValidate"},this.getCaptcha=()=>{var e=this.props.type;this.setState({cd:!0}),I["LS"].set("captcha",+new Date+6e4),this.setTimerStart(),"email"===e?this.sendVerificationEmail():this.sendCaptcha()},this.setTimerStart=()=>{var e=setInterval(()=>{this.setState(e=>{var a=e.count;return{count:a-1}},()=>{var a=this.state.count;a<=0&&(clearInterval(e),this.setState({count:60,cd:!1}))})},1e3)},this.sendCaptcha=()=>{Object(_["b"])("/api/sys/oauth/verificationCode/".concat(this.props.receiver))},this.sendVerificationEmail=()=>{Object(_["b"])("/api/sys/oauth/sendVerificationEmail?email=".concat(this.props.receiver),{})}}componentDidMount(){var e=I["LS"].get("captcha");if(e){var a=Number(e);a>+new Date&&(this.setState({cd:!0,count:~~((a-new Date)/1e3)}),this.setTimerStart())}}render(){var e=this.props,a=(e.receiver,e.onChange),t=this.state,n=t.text,r=t.cd,c=t.count;return m.a.createElement(x,{compact:!0},m.a.createElement(f["a"],{style:{width:"70%"},prefix:m.a.createElement(S["a"],{style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u9a8c\u8bc1\u7801",onChange:a}),m.a.createElement(l["a"],{style:{width:"30%"},disabled:r,onClick:this.getCaptcha},r?c:n))}}function k(e){var a=e.onReg,t=e.loading,n=Object(i["useState"])(),r=Object(o["a"])(n,2),c=(r[0],r[1]);function s(e){c(e.email)}return m.a.createElement(b["a"],{onFinish:a,className:C.a.Form,onValuesChange:s},m.a.createElement(b["a"].Item,{name:"email",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u90ae\u7bb1"}]},m.a.createElement(f["a"],{prefix:m.a.createElement(R["a"],{style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u90ae\u7bb1"})),m.a.createElement(b["a"].Item,{name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"}]},m.a.createElement(f["a"],{prefix:m.a.createElement(v["a"],{style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"\u5bc6\u7801"})),m.a.createElement(b["a"].Item,null,m.a.createElement(l["a"],{type:"primary",htmlType:"submit",className:C.a.Button,loading:t},"\u6ce8\u518c")))}var P=t("pW6+");function q(e){var a=e.onReg,t=e.loading,n=Object(i["useState"])(),r=Object(o["a"])(n,2),c=r[0],s=r[1];function u(e){s(e.phone)}return m.a.createElement(b["a"],{onFinish:a,className:C.a.Form,onValuesChange:u},m.a.createElement(b["a"].Item,{name:"phone",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7"}]},m.a.createElement(f["a"],{prefix:m.a.createElement(P["a"],{style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u624b\u673a\u53f7"})),m.a.createElement(b["a"].Item,{name:"validateCode",rules:[{required:!1,message:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"}]},m.a.createElement(N,{type:"phone",receiver:c})),m.a.createElement(b["a"].Item,null,m.a.createElement(l["a"],{type:"primary",htmlType:"submit",className:C.a.Button,loading:t},"\u6ce8\u518c")))}function T(e){var a=e.onCaptchaLogin,t=e.loading,n=Object(i["useState"])(),r=Object(o["a"])(n,2),c=r[0],s=r[1];function u(e){s(e.account)}return m.a.createElement(b["a"],{onFinish:a,className:C.a.Form,onValuesChange:u},m.a.createElement(b["a"].Item,{name:"account",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7"}]},m.a.createElement(f["a"],{prefix:m.a.createElement(P["a"],{style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u624b\u673a\u53f7"})),m.a.createElement(b["a"].Item,{name:"validateCode",rules:[{required:!1,message:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"}]},m.a.createElement(N,{type:"phone",receiver:c})),m.a.createElement(b["a"].Item,null,m.a.createElement(l["a"],{type:"primary",htmlType:"submit",className:C.a.Button,loading:t},"\u767b\u5f55")))}function V(e){var a=e.loading,t=e.onReFEmial;return m.a.createElement(b["a"],{onFinish:t,className:C.a.Form},m.a.createElement(b["a"].Item,{name:"email",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u90ae\u7bb1"}]},m.a.createElement(f["a"],{prefix:m.a.createElement(R["a"],{style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u90ae\u7bb1"})),m.a.createElement(b["a"].Item,null,m.a.createElement(l["a"],{type:"primary",htmlType:"submit",className:C.a.Button,loading:a},"\u627e\u56de\u5bc6\u7801")))}function B(e){var a=e.loading,t=e.onReFPhone,n=Object(i["useState"])(),r=Object(o["a"])(n,2),c=r[0],s=r[1];function u(e,a){s(a.phone)}return m.a.createElement(b["a"],{onFinish:t,className:C.a.Form,onValuesChange:u},m.a.createElement(b["a"].Item,{name:"phone",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7"}]},m.a.createElement(f["a"],{prefix:m.a.createElement(P["a"],{style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u624b\u673a\u53f7\u7801"})),m.a.createElement(b["a"].Item,{name:"validateCode",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u77ed\u4fe1\u9a8c\u8bc1\u7801"}]},m.a.createElement(N,{type:"phone",receiver:c})),m.a.createElement(b["a"].Item,{name:"newPassword",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u65b0\u5bc6\u7801"}]},m.a.createElement(f["a"],{prefix:m.a.createElement(S["a"],{style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u65b0\u5bc6\u7801"})),m.a.createElement(b["a"].Item,null,m.a.createElement(l["a"],{type:"primary",htmlType:"submit",className:C.a.Button,loading:a},"\u91cd\u7f6e\u5bc6\u7801")))}var L=t("ZGKy"),G=t.n(L),D=t("cIDR"),W=t("Pm34"),Y=t.n(W),Z=s["a"].Content,z={account:F,mailReg:k,phoneReg:q,RFE:V,RFP:B,captchaLogin:T};function H(e){var a=Object(i["useState"])("account"),t=Object(o["a"])(a,2),s=t[0],h=t[1],E=Object(i["useState"])(!1),b=Object(o["a"])(E,2),f=b[0],y=b[1],v=Object(i["useState"])(!1),O=Object(o["a"])(v,2),w=O[0],j=O[1],F=Object(i["useRef"])(),R=Object(i["useState"])(""),I=Object(o["a"])(R,2),S=I[0],x=(I[1],Object(D["useModel"])("global"));function N(e){y(!0),Object(_["a"])("/api/sys/oauth/login",e,{message:null}).then(a=>{Object(d["saveToken"])({userName:a.name,token:a.accessToken,avatar:a.avatar,remember:e.remember,extra:e.account}),x.queryPerm(!0),k(a)}).finally(e=>{y(!1)})}function k(){G.a.ZEle.indexPage?u["a"].push(G.a.ZEle.indexPage):u["a"].push("/")}function P(e){y(!0),Object(_["a"])("/api/sys/oauth/register",e,{message:null}).then(a=>{c["default"].success("\u6ce8\u518c\u6210\u529f"),q("account"),e.email&&Z(e.email)}).finally(e=>{y(!1)})}function q(e){h(e)}function T(){q("RFP")}function V(e){y(!0),Object(_["b"])("/api/pub/password/normal/sendResetEmail",e).then(()=>{c["default"].success("\u91cd\u7f6e\u90ae\u4ef6\u53d1\u9001\u6210\u529f"),e.email&&this.handleChangeFormType("account")}).finally(e=>{y(!1)})}function B(e){y(!0),Object(_["a"])("/api/sys/oauth/resetPassword",e).then(()=>{c["default"].success("\u5bc6\u7801\u91cd\u7f6e\u6210\u529f"),e.phone&&this.handleChangeFormType("account")}).finally(e=>{y(!1)})}function L(){F.current.submit()}function W(){var e=F.current.getFieldsValue();y(!0),Object(_["a"])("/api/sys/oauth/resetPassword",e).then(e=>{c["default"].success("\u5bc6\u7801\u5df2\u91cd\u7f6e"),j(!1),k()}).finally(e=>{y(!1)})}function Z(e){Object(_["b"])("/api/sys/oauth/sendVerificationEmail?email=".concat(e),{})}Object(i["useEffect"])(e=>{new g.a.particle("#loginBG",{color:"#25bfff",lineShape:"cube",range:2e3,proximity:100})},[]);var H=z[s];return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:C.a.formContainer},m.a.createElement("div",{className:C.a.logo},"\u767b\u5f55\u6807\u9898"),m.a.createElement(H,Object(r["a"])({},e,{className:C.a.Form,onSubmit:N,onReg:P,onRePW:T,onReFEmial:V,onReFPhone:B,onCaptchaLogin:N,loading:f})),m.a.createElement("div",{className:C.a.options}),m.a.createElement("div",{className:C.a.regGuided},"account"!==s?m.a.createElement(l["a"],{type:"link",size:"small",onClick:q.bind(null,"account")},"\u8d26\u53f7\u767b\u5f55"):null,"phoneReg"!==s?m.a.createElement(l["a"],{type:"link",size:"small",onClick:q.bind(null,"phoneReg")},"\u624b\u673a\u6ce8\u518c"):null,"phoneReg"===s?m.a.createElement(l["a"],{type:"link",size:"small",onClick:q.bind(null,"mailReg")},"\u90ae\u7bb1\u6ce8\u518c"):null)),m.a.createElement(n["a"],{title:"\u91cd\u7f6e\u5bc6\u7801\u4ee5\u7ee7\u7eed",visible:w,closable:!1,maskClosable:!1,keyboard:!1,confirmLoading:f,footer:m.a.createElement(m.a.Fragment,null,m.a.createElement(l["a"],{type:"primary",onClick:L},"\u91cd\u7f6e\u5bc6\u7801"))},m.a.createElement(Y.a,{namespace:"resetPassword",config:J,footer:null,formRef:F,onSubmit:W})),S?m.a.createElement(p["d"],{component:()=>(window.location.href="".concat(S),null)}):null)}a["default"]=e=>m.a.createElement(s["a"],null,m.a.createElement(Z,null,m.a.createElement(H,null)));var J={title:"",items:[{component:"Form",config:{goBack:!1,API:{},fields:[{field:"newPassword",label:"\u65b0\u5bc6\u7801",type:"password",rules:["required"]},{field:"repeatpPassword",label:"\u91cd\u590d\u65b0\u5bc6\u7801",type:"password",rules:["required",{type:"password",field:"newPassword"}],expect:{field:"newPassword",value:"IS_RESOLVE"}}]}}]}}}]);