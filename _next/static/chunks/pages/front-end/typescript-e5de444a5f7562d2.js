(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[802],{5765:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/front-end/typescript",function(){return n(636)}])},636:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return l}});var t=n(3860),r=n(2836),o=n(5010),i=n(3834);n(5524);var a=n(4709);let l=[{depth:2,value:"Enums",id:"enums"},{depth:2,value:"Meaningless function names",id:"meaningless-function-names"}];function _createMdxContent(e){let s=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",pre:"pre",code:"code",span:"span",ol:"ol",li:"li"},(0,a.a)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{children:"Typescript best practices"}),"\n",(0,t.jsx)(s.h2,{id:"enums",children:"Enums"}),"\n",(0,t.jsx)(s.p,{children:"Enums are typescript types, named with a capital T without a plural"}),"\n",(0,t.jsxs)(s.p,{children:["❌ ",(0,t.jsx)(s.strong,{children:"Not:"})]}),"\n",(0,t.jsx)(s.pre,{"data-language":"ts","data-theme":"default",children:(0,t.jsxs)(s.code,{"data-language":"ts","data-theme":"default",children:[(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"type"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"MyStatuses"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  NEW "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'New'"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  ASSIGNED "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Assigned'"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,t.jsxs)(s.p,{children:["✅ ",(0,t.jsx)(s.strong,{children:"Do:"})]}),"\n",(0,t.jsx)(s.pre,{"data-language":"ts","data-theme":"default",children:(0,t.jsxs)(s.code,{"data-language":"ts","data-theme":"default",children:[(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"type"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"TStatus"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  NEW "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'New'"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  ASSIGNED "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Assigned'"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,t.jsx)(s.h2,{id:"meaningless-function-names",children:"Meaningless function names"}),"\n",(0,t.jsxs)(s.p,{children:["❌ ",(0,t.jsx)(s.strong,{children:"Not: name function like check, perform, process"})]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Function does not check status, but validates selectedPropertiesData"}),"\n",(0,t.jsx)(s.li,{children:"Until you read function's code you cannot guess if true means valid or not"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{"data-language":"ts","data-theme":"default",children:(0,t.jsxs)(s.code,{"data-language":"ts","data-theme":"default",children:[(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"checkStatus"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"isEmpty"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(selectedPropertiesData) "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"||"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"!"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"selectedPropertiesData"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".every"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"((prop"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"any"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"prop"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".status "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" selectedPropertiesData["}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"].status);)"})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,t.jsxs)(s.p,{children:["✅ ",(0,t.jsx)(s.strong,{children:"Do: prefer to name functions like getSomething"})]}),"\n",(0,t.jsx)(s.p,{children:"Function name is self explanatory"}),"\n",(0,t.jsx)(s.pre,{"data-language":"ts","data-theme":"default",children:(0,t.jsxs)(s.code,{"data-language":"ts","data-theme":"default",children:[(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"getIsReadyForStatusUpdate"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// Allow to update status if there are selected properties"})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"!"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"isEmpty"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(selectedPropertiesData)) "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:" "}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// And all selected properties are in the same status"})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"selectedPropertiesData"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".every"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"((prop"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"any"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"prop"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".status "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" selectedPropertiesData["}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"].status);"})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})})]})}let c={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,a.a)(),e.components);return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/front-end/typescript.md",route:"/front-end/typescript",pageMap:[{kind:"Meta",data:{"front-end":"Front End","back-end":"Back End",changelog:"Changelog",about:"About",index:"Index"}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"back-end",route:"/back-end",children:[{kind:"MdxPage",name:"entity-framework",route:"/back-end/entity-framework"},{kind:"Meta",data:{"entity-framework":"Entity Framework"}}]},{kind:"MdxPage",name:"back-end",route:"/back-end"},{kind:"Folder",name:"front-end",route:"/front-end",children:[{kind:"Meta",data:{overview:"Overview",react:"React",data:"Data",forms:"Forms",testing:"Testing",css:"CSS",typescript:"TypeScript",links:"Links",plugins:"Plugins"}},{kind:"Folder",name:"css",route:"/front-end/css",children:[{kind:"MdxPage",name:"stylesheets",route:"/front-end/css/stylesheets"},{kind:"MdxPage",name:"tailwind-css",route:"/front-end/css/tailwind-css"},{kind:"MdxPage",name:"theme",route:"/front-end/css/theme"},{kind:"Meta",data:{stylesheets:"Stylesheets","tailwind-css":"Tailwind CSS",theme:"Theme"}}]},{kind:"MdxPage",name:"css",route:"/front-end/css"},{kind:"Folder",name:"data",route:"/front-end/data",children:[{kind:"Folder",name:"easy-peasy",route:"/front-end/data/easy-peasy",children:[{kind:"MdxPage",name:"best-practices",route:"/front-end/data/easy-peasy/best-practices"},{kind:"MdxPage",name:"data-storing",route:"/front-end/data/easy-peasy/data-storing"},{kind:"MdxPage",name:"index",route:"/front-end/data/easy-peasy"},{kind:"Meta",data:{"best-practices":"Best Practices","data-storing":"Data Storing",index:"Index"}}]},{kind:"MdxPage",name:"index",route:"/front-end/data"},{kind:"Folder",name:"react-query",route:"/front-end/data/react-query",children:[{kind:"MdxPage",name:"data-fetching",route:"/front-end/data/react-query/data-fetching"},{kind:"MdxPage",name:"index",route:"/front-end/data/react-query"},{kind:"MdxPage",name:"optimistic-updates",route:"/front-end/data/react-query/optimistic-updates"},{kind:"Meta",data:{"data-fetching":"Data Fetching",index:"Index","optimistic-updates":"Optimistic Updates"}}]},{kind:"Meta",data:{index:"Index"}}]},{kind:"Folder",name:"forms",route:"/front-end/forms",children:[{kind:"MdxPage",name:"custom-components",route:"/front-end/forms/custom-components"},{kind:"MdxPage",name:"index",route:"/front-end/forms"},{kind:"MdxPage",name:"validation",route:"/front-end/forms/validation"},{kind:"MdxPage",name:"writing-forms",route:"/front-end/forms/writing-forms"},{kind:"Meta",data:{"custom-components":"Custom Components",index:"Index",validation:"Validation","writing-forms":"Writing Forms"}}]},{kind:"MdxPage",name:"links",route:"/front-end/links"},{kind:"Folder",name:"overview",route:"/front-end/overview",children:[{kind:"MdxPage",name:"best-practices",route:"/front-end/overview/best-practices"},{kind:"MdxPage",name:"folder-structure",route:"/front-end/overview/folder-structure"},{kind:"MdxPage",name:"project-setup",route:"/front-end/overview/project-setup"},{kind:"Meta",data:{"best-practices":"Best Practices","folder-structure":"Folder Structure","project-setup":"Project Setup"}}]},{kind:"MdxPage",name:"plugins",route:"/front-end/plugins"},{kind:"Folder",name:"react",route:"/front-end/react",children:[{kind:"Meta",data:{index:"Introduction","best-practices":"Best Practices"}},{kind:"MdxPage",name:"best-practices",route:"/front-end/react/best-practices"},{kind:"MdxPage",name:"index",route:"/front-end/react"}]},{kind:"Folder",name:"testing",route:"/front-end/testing",children:[{kind:"MdxPage",name:"best-practices",route:"/front-end/testing/best-practices"},{kind:"MdxPage",name:"coverage",route:"/front-end/testing/coverage"},{kind:"MdxPage",name:"links",route:"/front-end/testing/links"},{kind:"MdxPage",name:"mocks",route:"/front-end/testing/mocks"},{kind:"MdxPage",name:"snapshots",route:"/front-end/testing/snapshots"},{kind:"MdxPage",name:"stories",route:"/front-end/testing/stories"},{kind:"MdxPage",name:"storybook",route:"/front-end/testing/storybook"},{kind:"MdxPage",name:"writing-tests",route:"/front-end/testing/writing-tests"},{kind:"Meta",data:{"best-practices":"Best Practices",coverage:"Coverage",links:"Links",mocks:"Mocks",snapshots:"Snapshots",stories:"Stories",storybook:"Storybook","writing-tests":"Writing Tests"}}]},{kind:"MdxPage",name:"testing",route:"/front-end/testing"},{kind:"MdxPage",name:"typescript",route:"/front-end/typescript"}]},{kind:"MdxPage",name:"front-end",route:"/front-end"},{kind:"MdxPage",name:"index",route:"/"}],flexsearch:{codeblocks:!0},title:"Typescript best practices",headings:l},pageNextRoute:"/front-end/typescript",nextraLayout:o.ZP,themeConfig:i.Z};s.default=(0,r.j)(c)},3834:function(e,s,n){"use strict";var t=n(3860);n(1733);let r={logo:(0,t.jsx)("span",{children:"My Project"}),project:{link:"https://github.com/shuding/nextra-docs-template"},chat:{link:"https://discord.com"},docsRepositoryBase:"https://github.com/shuding/nextra-docs-template",footer:{text:"Nextra Docs Template"}};s.Z=r}},function(e){e.O(0,[774,616,888,179],function(){return e(e.s=5765)}),_N_E=e.O()}]);