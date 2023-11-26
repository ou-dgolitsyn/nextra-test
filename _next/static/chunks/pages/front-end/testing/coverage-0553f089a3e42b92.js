(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[658],{834:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/front-end/testing/coverage",function(){return n(5257)}])},5257:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return d}});var a=n(3860),r=n(2836),o=n(5010),i=n(3834);n(5524);var s=n(4709);let d=[{depth:2,value:"How to read coverage report",id:"how-to-read-coverage-report"}];function _createMdxContent(e){let t=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",code:"code"},(0,s.a)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{children:"Collecting coverage"}),"\n",(0,a.jsx)(t.p,{children:"Code coverage tells you which code has been executed during a test and how many times. Targeting for 100% code coverage is often a mistake as it will take a lot of time (to get there and to maintain), and it can lead to problematic testing practices. Having a high percentage of coverage does not necessarily increase the quality, bugs will always pop up."}),"\n",(0,a.jsx)(t.p,{children:"We use code coverage as a tool, as a last check to verify that the code is ready. It can discover edge cases we haven't thought of and it can make poorly written code visible. Coverage analysis is optional, but useful."}),"\n",(0,a.jsx)(t.p,{children:":::{important}\nWe will aim for 70% line coverage for all files that have changed in the current feature branch compared to dev.\n:::"}),"\n",(0,a.jsxs)(t.p,{children:[":::{note}\n",(0,a.jsx)(t.a,{href:"./snapshots",children:"Snapshots"})," contribute significantly to UI test coverage. Create at least one snapshot for each storybook, and you will provide a significant portion of the required coverage.\n:::"]}),"\n",(0,a.jsx)(t.h2,{id:"how-to-read-coverage-report",children:"How to read coverage report"}),"\n",(0,a.jsx)(t.p,{children:"Let's put this in to practice. As a test we're going to take a look at the code coverage of a fizz buzz function. FizzBuzz is a small function that, depending on the input will return a different output. If the input value:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"is divisible by three it returns Fizz, e.g. 6"}),"\n",(0,a.jsx)(t.li,{children:"is divisible by five, it returns Buzz, e.g. 20"}),"\n",(0,a.jsx)(t.li,{children:"is divisible both three and five it returns FizzBuzz, e.g. 15"}),"\n",(0,a.jsx)(t.li,{children:"otherwise it returns the input value, e.g. 7"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"A possible solution of the fizz buzz function looks a follows:\n:::{code-block} typescript\nfunction fizzBuzz(value) {\nlet output = ''\nif (value % 3 == 0) output += 'Fizz'\nif (value % 5 == 0) output += 'Buss'\nreturn output || value.toString()\n}\n:::"}),"\n",(0,a.jsx)(t.p,{children:"As our first test we're covering the easiest case, an input that is not divisible and simply returns the input value:\n:::{code-block} typescript\ndescribe('Returns the input', () => {\nit('if it is not divisible by three or five', () => {\nexpect(fizzbuzz(7)).toBe('7')\n})\n})\n:::"}),"\n",(0,a.jsx)(t.p,{children:"If we now generate the code coverage we see a coverage report directly in the CLI:"}),"\n",(0,a.jsx)(t.p,{children:":::{thumbnail} ../../../assets/jest-coverage-1.png\n:title: An image that shows the coverage in the CLI\n:show_caption: 'True'\n:::"}),"\n",(0,a.jsx)(t.p,{children:"A coverage report that can be opened in the browser by running a command\n:::{code-block} console\nhttp-server ./coverage/lcov-report\n:::"}),"\n",(0,a.jsxs)(t.p,{children:["Or just by opening the ",(0,a.jsx)(t.code,{children:"./coverage/lcov-report/index.html"})]}),"\n",(0,a.jsx)(t.p,{children:":::{thumbnail} ../../../assets/jest-coverage-2.png\n:title: An image that shows the coverage in the browser\n:show_caption: 'True'\n:::"}),"\n",(0,a.jsx)(t.p,{children:"It's even possible to click on the files to have a view to see which lines are covered, and which are not:"}),"\n",(0,a.jsx)(t.p,{children:":::{thumbnail} ../../../assets/jest-coverage-3.png\n:title: An image that shows the coverage in the browser for a specific file\n:show_caption: 'True'\n:::"}),"\n",(0,a.jsx)(t.p,{children:"In all of the screenshots above, you have four different percentages to look at:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Statement coverage – Has each statement in the program been executed?"}),"\n",(0,a.jsx)(t.li,{children:"Branch coverage – Has each branch (also called DD-path) of each control structure (such as in if and case statements) been executed? For example, given an if statement, have both the true and false branches been executed? Notice that this one is a subset of Edge coverage."}),"\n",(0,a.jsx)(t.li,{children:"Function coverage – Has each function (or subroutine) in the program been called?"}),"\n",(0,a.jsx)(t.li,{children:"Line coverage has each executable line in the source file been executed?"}),"\n"]})]})}let c={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,s.a)(),e.components);return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/front-end/testing/coverage.md",route:"/front-end/testing/coverage",pageMap:[{kind:"Meta",data:{"front-end":"Front End","back-end":"Back End",changelog:"Changelog",about:"About",index:"Index"}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"back-end",route:"/back-end",children:[{kind:"MdxPage",name:"entity-framework",route:"/back-end/entity-framework"},{kind:"Meta",data:{"entity-framework":"Entity Framework"}}]},{kind:"MdxPage",name:"back-end",route:"/back-end"},{kind:"Folder",name:"front-end",route:"/front-end",children:[{kind:"Meta",data:{overview:"Overview",react:"React",data:"Data",forms:"Forms",testing:"Testing",css:"CSS",typescript:"TypeScript",links:"Links",plugins:"Plugins"}},{kind:"Folder",name:"css",route:"/front-end/css",children:[{kind:"MdxPage",name:"stylesheets",route:"/front-end/css/stylesheets"},{kind:"MdxPage",name:"tailwind-css",route:"/front-end/css/tailwind-css"},{kind:"MdxPage",name:"theme",route:"/front-end/css/theme"},{kind:"Meta",data:{stylesheets:"Stylesheets","tailwind-css":"Tailwind CSS",theme:"Theme"}}]},{kind:"MdxPage",name:"css",route:"/front-end/css"},{kind:"Folder",name:"data",route:"/front-end/data",children:[{kind:"Folder",name:"easy-peasy",route:"/front-end/data/easy-peasy",children:[{kind:"MdxPage",name:"best-practices",route:"/front-end/data/easy-peasy/best-practices"},{kind:"MdxPage",name:"data-storing",route:"/front-end/data/easy-peasy/data-storing"},{kind:"MdxPage",name:"index",route:"/front-end/data/easy-peasy"},{kind:"Meta",data:{"best-practices":"Best Practices","data-storing":"Data Storing",index:"Index"}}]},{kind:"MdxPage",name:"index",route:"/front-end/data"},{kind:"Folder",name:"react-query",route:"/front-end/data/react-query",children:[{kind:"MdxPage",name:"data-fetching",route:"/front-end/data/react-query/data-fetching"},{kind:"MdxPage",name:"index",route:"/front-end/data/react-query"},{kind:"MdxPage",name:"optimistic-updates",route:"/front-end/data/react-query/optimistic-updates"},{kind:"Meta",data:{"data-fetching":"Data Fetching",index:"Index","optimistic-updates":"Optimistic Updates"}}]},{kind:"Meta",data:{index:"Index"}}]},{kind:"Folder",name:"forms",route:"/front-end/forms",children:[{kind:"MdxPage",name:"custom-components",route:"/front-end/forms/custom-components"},{kind:"MdxPage",name:"index",route:"/front-end/forms"},{kind:"MdxPage",name:"validation",route:"/front-end/forms/validation"},{kind:"MdxPage",name:"writing-forms",route:"/front-end/forms/writing-forms"},{kind:"Meta",data:{"custom-components":"Custom Components",index:"Index",validation:"Validation","writing-forms":"Writing Forms"}}]},{kind:"MdxPage",name:"links",route:"/front-end/links"},{kind:"Folder",name:"overview",route:"/front-end/overview",children:[{kind:"MdxPage",name:"best-practices",route:"/front-end/overview/best-practices"},{kind:"MdxPage",name:"folder-structure",route:"/front-end/overview/folder-structure"},{kind:"MdxPage",name:"project-setup",route:"/front-end/overview/project-setup"},{kind:"Meta",data:{"best-practices":"Best Practices","folder-structure":"Folder Structure","project-setup":"Project Setup"}}]},{kind:"MdxPage",name:"plugins",route:"/front-end/plugins"},{kind:"Folder",name:"react",route:"/front-end/react",children:[{kind:"Meta",data:{index:"Introduction","best-practices":"Best Practices"}},{kind:"MdxPage",name:"best-practices",route:"/front-end/react/best-practices"},{kind:"MdxPage",name:"index",route:"/front-end/react"}]},{kind:"Folder",name:"testing",route:"/front-end/testing",children:[{kind:"MdxPage",name:"best-practices",route:"/front-end/testing/best-practices"},{kind:"MdxPage",name:"coverage",route:"/front-end/testing/coverage"},{kind:"MdxPage",name:"links",route:"/front-end/testing/links"},{kind:"MdxPage",name:"mocks",route:"/front-end/testing/mocks"},{kind:"MdxPage",name:"snapshots",route:"/front-end/testing/snapshots"},{kind:"MdxPage",name:"stories",route:"/front-end/testing/stories"},{kind:"MdxPage",name:"storybook",route:"/front-end/testing/storybook"},{kind:"MdxPage",name:"writing-tests",route:"/front-end/testing/writing-tests"},{kind:"Meta",data:{"best-practices":"Best Practices",coverage:"Coverage",links:"Links",mocks:"Mocks",snapshots:"Snapshots",stories:"Stories",storybook:"Storybook","writing-tests":"Writing Tests"}}]},{kind:"MdxPage",name:"testing",route:"/front-end/testing"},{kind:"MdxPage",name:"typescript",route:"/front-end/typescript"}]},{kind:"MdxPage",name:"front-end",route:"/front-end"},{kind:"MdxPage",name:"index",route:"/"}],flexsearch:{codeblocks:!0},title:"Collecting coverage",headings:d},pageNextRoute:"/front-end/testing/coverage",nextraLayout:o.ZP,themeConfig:i.Z};t.default=(0,r.j)(c)},3834:function(e,t,n){"use strict";var a=n(3860);n(1733);let r={logo:(0,a.jsx)("span",{children:"My Project"}),project:{link:"https://github.com/shuding/nextra-docs-template"},chat:{link:"https://discord.com"},docsRepositoryBase:"https://github.com/shuding/nextra-docs-template",footer:{text:"Nextra Docs Template"}};t.Z=r}},function(e){e.O(0,[774,616,888,179],function(){return e(e.s=834)}),_N_E=e.O()}]);