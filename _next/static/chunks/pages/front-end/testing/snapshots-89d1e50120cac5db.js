(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[17],{6307:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/front-end/testing/snapshots",function(){return n(637)}])},637:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return c}});var s=n(3860),a=n(2836),o=n(3797),i=n(3834);n(5524);var r=n(4709);let c=[{depth:2,value:"1. Set up automatically created snapshots",id:"1-set-up-automatically-created-snapshots"},{depth:2,value:"2. Check automatically created snapshot",id:"2-check-automatically-created-snapshot"},{depth:2,value:"3. Disabling automatic creation of the story snapshot",id:"3-disabling-automatic-creation-of-the-story-snapshot"},{depth:2,value:"4. Manual creating of a snapshots with jest",id:"4-manual-creating-of-a-snapshots-with-jest"},{depth:2,value:"5. Snapshot tests maintenance",id:"5-snapshot-tests-maintenance"}];function _createMdxContent(e){let t=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code",span:"span",br:"br",admin:"admin",ol:"ol",li:"li"},(0,r.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{children:"Snapshot testing"}),"\n",(0,s.jsx)(t.p,{children:"A typical snapshot test case renders a UI component, takes a snapshot, then compares it to a reference snapshot file stored alongside the test. The test will fail if the two snapshots do not match: either the change is unexpected, or the reference snapshot needs to be updated to the new version of the UI component."}),"\n",(0,s.jsxs)(t.p,{children:[":::{seealso}\nLearn more about snapshot testing in the ",(0,s.jsx)(t.a,{href:"https://jestjs.io/docs/snapshot-testing",children:"perfect jest snapshot documentation"}),"\n:::"]}),"\n",(0,s.jsxs)(t.p,{children:[":::{note}\nSnapshots are an ideal way to quickly provide ",(0,s.jsx)(t.a,{href:"./coverage",children:"basic test coverage of a component"}),". The more component stories you cover with snapshots, the less you need to ",(0,s.jsx)(t.a,{href:"./writing-tests",children:"write integration tests with Jest"}),"\n:::"]}),"\n",(0,s.jsx)(t.p,{children:"We will use two types of a snapshot test cases: automatically created by storybook and manual."}),"\n",(0,s.jsx)(t.p,{children:"Lets describe the typical flow of a snapshot testing."}),"\n",(0,s.jsx)(t.h2,{id:"1-set-up-automatically-created-snapshots",children:"1. Set up automatically created snapshots"}),"\n",(0,s.jsxs)(t.p,{children:["Since the storybook is a base of all our UI tests, lets use it addon ",(0,s.jsx)(t.a,{href:"https://storybook.js.org/addons/@storybook/addon-storyshots",children:"storyshots"})," to automatically create a snapshot."]}),"\n",(0,s.jsx)(t.pre,{"data-language":"{dropdown}","data-theme":"default",children:(0,s.jsxs)(t.code,{"data-language":"{dropdown}","data-theme":"default",children:[(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:":::{code-block} jsx"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    :linenos:"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    :caption: Setup of a storyshots addon which allows to test asynchronously loaded components"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"import React from 'react';"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"import { act } from 'react-dom/test-utils';"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"import initStoryshots, { Stories2SnapsConverter } from '@storybook/addon-storyshots';"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"import wait from 'waait';"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"import { composeStory } from '@storybook/testing-react';"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"import { render } from '@testing-library/react';"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"initStoryshots({"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    asyncJest: true,"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    test: async ({ story, context, done }) => {"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        try {"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"            const converter = new Stories2SnapsConverter({"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"                snapshotsDirName: './',"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"                snapshotExtension: '.snapshot',"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"            });"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"            const snapshotFilename = converter.getSnapshotFileName(context);"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"            story.story = undefined;"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"            let tree: any;"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"            await act(async () => {"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"                const meta = await import(`${story.fileName}`);"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"                const Story = composeStory(story, meta);"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"                tree = render(<Story />);"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"            });"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"            await act(() => wait(100));"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"            expect(tree?.baseElement).toMatchSpecificSnapshot(snapshotFilename);"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        } catch (e) {"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"            console.log('ERROR TESTING SNAPSHOT', e);"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        } finally {"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"            done?.();"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        }"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    },"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:":::"})})]})}),"\n",(0,s.jsxs)(t.p,{children:["Automatically created snapshot files will be placed in the same folder as a component and named based on the storybook\n:::{code-block}",(0,s.jsx)(t.br,{}),"\n:emphasize-lines: 7\nfront/\n┗ @components/\n┣ EmployeeProfile/\n┃ ┣ index.ts\n┃ ┣ employee-profile.tsx\n┃ ┣ employee-profile.stories.tsx\n┃ ┗ employee-profile.stories.tsx.snap\n┣ ...\n:::"]}),"\n",(0,s.jsx)(t.p,{children:":::{note}\nFor a complex storybook the automatically created snapshot could fail with a timeout or became corrupted. To work around this check the instructions below.\n:::"}),"\n",(0,s.jsx)(t.h2,{id:"2-check-automatically-created-snapshot",children:"2. Check automatically created snapshot"}),"\n",(0,s.jsx)(t.p,{children:"To quickly check if automatic snapshot is ok, run tests specifying snapshots config only"}),"\n",(0,s.jsx)(t.p,{children:":::{code-block} console\nyarn test snapshots.spec.tsx\n:::"}),"\n",(0,s.jsx)(t.p,{children:"If tests are ok, check the snapshot file created in the component's folder. If your story contains some async data loading check that snapshot contains that data."}),"\n",(0,s.jsx)(t.p,{children:"If test fails or a snapshot does not contain mocked data, proceed to the next step."}),"\n",(0,s.jsx)(t.h2,{id:"3-disabling-automatic-creation-of-the-story-snapshot",children:"3. Disabling automatic creation of the story snapshot"}),"\n",(0,s.jsx)(t.p,{children:"In case you are not satisfied with the results of the automatic snapshot creation you can disable it.\nTo do this, add a special parameter to the story"}),"\n",(0,s.jsx)(t.p,{children:":::{code-block} typescript\n:caption: The story with disabled automatic snapshots\n:linenos:"}),"\n",(0,s.jsx)(t.p,{children:"export const Admin: Meta = {\n// ...\nparameters = {\nstoryshots: { disable: true },\n};\n};\n:::"}),"\n",(0,s.jsxs)(t.p,{children:[":::{important}\nBe sure to disable automatic snapshots if you use ",(0,s.jsx)(t.a,{href:"./stories#adding-a-story-with-component-interaction",children:"the play function to interact with the component"}),"\n:::"]}),"\n",(0,s.jsx)(t.h2,{id:"4-manual-creating-of-a-snapshots-with-jest",children:"4. Manual creating of a snapshots with jest"}),"\n",(0,s.jsx)(t.p,{children:"To configure manual snapshot you should create a file for a common jest tests like this"}),"\n",(0,s.jsxs)(t.p,{children:[":::{code-block}",(0,s.jsx)(t.br,{}),"\n:emphasize-lines: 7\nfront/\n┗ @components/\n┣ EmployeeProfile/\n┃ ┣ index.ts\n┃ ┣ employee-profile.tsx\n┃ ┣ employee-profile.stories.tsx\n┃ ┗ employee-profile.spec.tsx\n┣ ...\n:::"]}),"\n",(0,s.jsx)(t.p,{children:"Suppose we have a story that requires special interaction before a snapshot can be taken. In this case, manual snapshots come to the rescue.\nWe can add a new jest based test which will create a manual snapshot for us."}),"\n",(0,s.jsx)(t.p,{children:":::{code-block} typescript\n:caption: The manually created snapshot test with custom logic\n:linenos:\nimport * as stories from './employee-profile.stories';\nconst { Admin } = composeStories(stories);"}),"\n",(0,s.jsxs)(t.p,{children:["describe('Should match snapshot', () => {\ntest('with edit modal opened', async () => {\nconst { container, baseElement } = render(",(0,s.jsx)(t.admin,{children:");\nawait act(() => Admin.play({ canvasElement: container }));"})]}),"\n",(0,s.jsx)(t.pre,{"data-language":"text","data-theme":"default",children:(0,s.jsxs)(t.code,{"data-language":"text","data-theme":"default",children:[(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    await screen.findByText('Edit modal title');"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    expect(baseElement).toMatchSnapshot(Admin.storyName);"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"});"})})]})}),"\n",(0,s.jsx)(t.p,{children:"});\n:::"}),"\n",(0,s.jsx)(t.h2,{id:"5-snapshot-tests-maintenance",children:"5. Snapshot tests maintenance"}),"\n",(0,s.jsxs)(t.p,{children:["It makes no sense to duplicate the ",(0,s.jsx)(t.a,{href:"https://jestjs.io/docs/snapshot-testing",children:"perfect jest snapshot documentation"})]}),"\n",(0,s.jsx)(t.p,{children:"Let's list only the main points about snapshot maintenance:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Treat snapshots as code - commit & review snapshots"}),"\n",(0,s.jsxs)(t.li,{children:["Snapshots should be deterministic - mock any kind of data that can be changed e.x. ",(0,s.jsx)(t.code,{children:"new Date()"})]}),"\n",(0,s.jsx)(t.li,{children:"Update snapshots after changing components"}),"\n",(0,s.jsxs)(t.li,{children:["To update snapshots manually with ",(0,s.jsx)(t.a,{href:"https://jestjs.io/docs/snapshot-testing#interactive-snapshot-mode",children:"interactive snapshot mode"})," run the command\n:::{code-block} console\nyarn test snapshots.spec.tsx --watch\n:::"]}),"\n",(0,s.jsx)(t.li,{children:"Check your snapshots are ok before creating a PR"}),"\n"]})]})}let l={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,r.a)(),e.components);return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/front-end/testing/snapshots.md",route:"/front-end/testing/snapshots",pageMap:[{kind:"Meta",data:{"front-end":{title:"Front End"},about:{title:"About",type:"page"},contact:{title:"Contact ↗",type:"page",href:"https://twitter.com/shuding_",newWindow:!0},advanced:"Advanced",another:"Another",index:"Index"}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"MdxPage",name:"advanced",route:"/advanced"},{kind:"MdxPage",name:"another",route:"/another"},{kind:"Folder",name:"front-end",route:"/front-end",children:[{kind:"Meta",data:{css:{title:"Css",theme:{typesetting:"article"}},react:{title:"React",theme:{typesetting:"article"}},links:"Links",plugins:"Plugins"}},{kind:"Folder",name:"css",route:"/front-end/css",children:[{kind:"MdxPage",name:"stylesheets",route:"/front-end/css/stylesheets"},{kind:"MdxPage",name:"tailwind-css",route:"/front-end/css/tailwind-css"},{kind:"MdxPage",name:"theme",route:"/front-end/css/theme"},{kind:"Meta",data:{stylesheets:"Stylesheets","tailwind-css":"Tailwind CSS",theme:"Theme"}}]},{kind:"MdxPage",name:"css",route:"/front-end/css"},{kind:"Folder",name:"data",route:"/front-end/data",children:[{kind:"Folder",name:"easy-peasy",route:"/front-end/data/easy-peasy",children:[{kind:"MdxPage",name:"best-practices",route:"/front-end/data/easy-peasy/best-practices"},{kind:"MdxPage",name:"data-storing",route:"/front-end/data/easy-peasy/data-storing"},{kind:"MdxPage",name:"index",route:"/front-end/data/easy-peasy"},{kind:"Meta",data:{"best-practices":"Best Practices","data-storing":"Data Storing",index:"Index"}}]},{kind:"MdxPage",name:"index",route:"/front-end/data"},{kind:"Folder",name:"react-query",route:"/front-end/data/react-query",children:[{kind:"MdxPage",name:"data-fetching",route:"/front-end/data/react-query/data-fetching"},{kind:"MdxPage",name:"index",route:"/front-end/data/react-query"},{kind:"MdxPage",name:"optimistic-updates",route:"/front-end/data/react-query/optimistic-updates"},{kind:"Meta",data:{"data-fetching":"Data Fetching",index:"Index","optimistic-updates":"Optimistic Updates"}}]},{kind:"Meta",data:{index:"Index"}}]},{kind:"Folder",name:"forms",route:"/front-end/forms",children:[{kind:"MdxPage",name:"custom-components",route:"/front-end/forms/custom-components"},{kind:"MdxPage",name:"index",route:"/front-end/forms"},{kind:"MdxPage",name:"validation",route:"/front-end/forms/validation"},{kind:"MdxPage",name:"writing-forms",route:"/front-end/forms/writing-forms"},{kind:"Meta",data:{"custom-components":"Custom Components",index:"Index",validation:"Validation","writing-forms":"Writing Forms"}}]},{kind:"MdxPage",name:"links",route:"/front-end/links"},{kind:"Folder",name:"overview",route:"/front-end/overview",children:[{kind:"MdxPage",name:"best-practices",route:"/front-end/overview/best-practices"},{kind:"MdxPage",name:"folder-structure",route:"/front-end/overview/folder-structure"},{kind:"MdxPage",name:"project-setup",route:"/front-end/overview/project-setup"},{kind:"Meta",data:{"best-practices":"Best Practices","folder-structure":"Folder Structure","project-setup":"Project Setup"}}]},{kind:"MdxPage",name:"plugins",route:"/front-end/plugins"},{kind:"Folder",name:"react",route:"/front-end/react",children:[{kind:"Meta",data:{index:"Introduction","best-practices":"Best Practices"}},{kind:"MdxPage",name:"best-practices",route:"/front-end/react/best-practices"},{kind:"MdxPage",name:"index",route:"/front-end/react"}]},{kind:"Folder",name:"testing",route:"/front-end/testing",children:[{kind:"MdxPage",name:"best-practices",route:"/front-end/testing/best-practices"},{kind:"MdxPage",name:"coverage",route:"/front-end/testing/coverage"},{kind:"MdxPage",name:"index",route:"/front-end/testing"},{kind:"MdxPage",name:"links",route:"/front-end/testing/links"},{kind:"MdxPage",name:"mocks",route:"/front-end/testing/mocks"},{kind:"MdxPage",name:"snapshots",route:"/front-end/testing/snapshots"},{kind:"MdxPage",name:"stories",route:"/front-end/testing/stories"},{kind:"MdxPage",name:"storybook",route:"/front-end/testing/storybook"},{kind:"MdxPage",name:"writing-tests",route:"/front-end/testing/writing-tests"},{kind:"Meta",data:{"best-practices":"Best Practices",coverage:"Coverage",index:"Index",links:"Links",mocks:"Mocks",snapshots:"Snapshots",stories:"Stories",storybook:"Storybook","writing-tests":"Writing Tests"}}]},{kind:"Folder",name:"typescript",route:"/front-end/typescript",children:[{kind:"MdxPage",name:"best-practices",route:"/front-end/typescript/best-practices"},{kind:"MdxPage",name:"index",route:"/front-end/typescript"},{kind:"Meta",data:{"best-practices":"Best Practices",index:"Index"}}]}]},{kind:"MdxPage",name:"front-end",route:"/front-end"},{kind:"MdxPage",name:"index",route:"/"}],flexsearch:{codeblocks:!0},title:"Snapshot testing",headings:c},pageNextRoute:"/front-end/testing/snapshots",nextraLayout:o.ZP,themeConfig:i.Z};t.default=(0,a.j)(l)},3834:function(e,t,n){"use strict";var s=n(3860);n(1733);let a={logo:(0,s.jsx)("span",{children:"My Project"}),project:{link:"https://github.com/shuding/nextra-docs-template"},chat:{link:"https://discord.com"},docsRepositoryBase:"https://github.com/shuding/nextra-docs-template",footer:{text:"Nextra Docs Template"}};t.Z=a}},function(e){e.O(0,[774,245,888,179],function(){return e(e.s=6307)}),_N_E=e.O()}]);