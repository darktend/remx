(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{53:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return g})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return s}));var n=t(2),o=t(6),a=(t(0),t(75)),g={id:"registerLoggerForDebug",title:"registerLoggerForDebug",sidebar_label:"registerLoggerForDebug",slug:"/api/registerLoggerForDebug"},i={unversionedId:"registerLoggerForDebug",id:"registerLoggerForDebug",isDocsHomePage:!1,title:"registerLoggerForDebug",description:"remx.registerLoggerForDebug(loggerFunc)",source:"@site/docs/registerLoggerForDebug.md",slug:"/api/registerLoggerForDebug",permalink:"/remx/docs/api/registerLoggerForDebug",editUrl:"https://github.com/wix/remx/edit/master/website/docs/registerLoggerForDebug.md",version:"current",sidebar_label:"registerLoggerForDebug",sidebar:"someSidebar",previous:{title:"useConnect",permalink:"/remx/docs/api/useConnect"}},c=[{value:"<code>remx.registerLoggerForDebug(loggerFunc)</code>",id:"remxregisterloggerfordebugloggerfunc",children:[]}],u={rightToc:c};function s(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"remxregisterloggerfordebugloggerfunc"},Object(a.b)("inlineCode",{parentName:"h3"},"remx.registerLoggerForDebug(loggerFunc)")),Object(a.b)("p",null,"Takes a logger and call it on the following actions:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'import {registerLoggerForDebug} from \'remx\';\nregisterLoggerForDebug(console.log); //will log all remx actions:\n//on setter call: {action: "setter", name: "someSetterName", args: ["arg1", "arg2"])}\n//on getter call: {action: "getter", name: "someGetterName", args: ["arg1", "arg2"])}\n//on mapsStateToProps: \n/*   \n     {\n      "action":"mapStateToProps",\n      "connectedComponentName":"SomeComponent",\n      "returnValue":{},\n      "triggeredEvents":[] // an arry of actions that have been triggered during the run of mapStateToProps\n      } \n*/   \n\n//on component re-rendered: {action: "componentRender", name: "SomeComponent"}\n\n')))}s.isMDXComponent=!0},75:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function g(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?g(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),s=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,g=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=s(t),m=n,b=l["".concat(g,".").concat(m)]||l[m]||p[m]||a;return t?o.a.createElement(b,i(i({ref:r},u),{},{components:t})):o.a.createElement(b,i({ref:r},u))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,g=new Array(a);g[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,g[1]=i;for(var u=2;u<a;u++)g[u]=t[u];return o.a.createElement.apply(null,g)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);