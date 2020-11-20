(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{55:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return a})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return u}));var r=t(2),o=t(6),c=(t(0),t(75)),s={id:"useConnect",title:"useConnect",sidebar_label:"useConnect",slug:"/api/useConnect"},a={unversionedId:"useConnect",id:"useConnect",isDocsHomePage:!1,title:"useConnect",description:"remx.useConnect(fn, arguments)",source:"@site/docs/useConnect.md",slug:"/api/useConnect",permalink:"/remx/docs/api/useConnect",editUrl:"https://github.com/wix/remx/edit/master/website/docs/useConnect.md",version:"current",sidebar_label:"useConnect",sidebar:"someSidebar",previous:{title:"connect",permalink:"/remx/docs/api/connect"},next:{title:"registerLoggerForDebug",permalink:"/remx/docs/api/registerLoggerForDebug"}},i=[{value:"<code>remx.useConnect(fn, arguments)</code>",id:"remxuseconnectfn-arguments",children:[]}],p={rightToc:i};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"remxuseconnectfn-arguments"},Object(c.b)("inlineCode",{parentName:"h3"},"remx.useConnect(fn, arguments)")),Object(c.b)("p",null,"Hook-style alternative to remx.connect.\nIt makes sure, the component is re-rendered on observable values change.\nSecond argument (optional) is array of arguments that will be passed to the provided function."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import React, { PureComponent } from 'react';\nimport { useConnect } from 'remx';\nimport { store } from './someStore';\n\nconst SomeComponent = (props) => {\n  const {selectedPostTitle} = useSomeComponentConnect(props);\n\n  return (\n    <div>{selectedPostTitle}</div>\n  );\n};\n\nconst useSomeComponentConnect = (props) => useConnect(() => ({\n  selectedPostTitle: store.getPostById(props.selectedPostId);\n}));\n\nexport default SomeComponent;\n")),Object(c.b)("p",null,"Alternative style:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const SomeComponent = (props) => {\n  const selectedPostTitle = useConnect(store.getPostById, [props.selectedPostId]);\n\n  return (\n    <div>{selectedPostTitle}</div>\n  );\n};\n")),Object(c.b)("p",null,"Note that accessing props outside of mapStateToProps won't be tracked and may cause issues with\ncomponents not being updated."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// Bad (product.price accessing is not tracked):\nconst ProductPriceComponent = (props) => {\n  const {product} = useConnect(() => ({\n    product: store.getters.getProduct(),\n  }));\n\n  return (\n    <div>Price: {product.price} USD</div>\n  );\n};\n\n// Good:\nconst ProductPriceComponent = (props) => {\n  const {price} = useConnect(() => ({\n    price: store.getters.getProduct().price\n  }));\n\n  return (\n    <div>Price: {price} USD</div>\n  );\n};\n")))}u.isMDXComponent=!0},75:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(t),m=r,b=l["".concat(s,".").concat(m)]||l[m]||d[m]||c;return t?o.a.createElement(b,a(a({ref:n},p),{},{components:t})):o.a.createElement(b,a({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,s=new Array(c);s[0]=m;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var p=2;p<c;p++)s[p]=t[p];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);