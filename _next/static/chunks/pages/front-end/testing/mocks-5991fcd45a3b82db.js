(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[753],{9498:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/front-end/testing/mocks",function(){return s(1929)}])},1929:function(e,t,s){"use strict";s.r(t),s.d(t,{__toc:function(){return c}});var n=s(3860),o=s(2836),r=s(3797),a=s(3834);s(5524);var i=s(4709);let c=[{depth:2,value:"API mocks",id:"api-mocks"},{depth:3,value:"1. Collect requests to be mocked",id:"1-collect-requests-to-be-mocked"},{depth:3,value:"2. Check if there is already mocked data prepared",id:"2-check-if-there-is-already-mocked-data-prepared"},{depth:3,value:"3. Prepare new mocked data for api request",id:"3-prepare-new-mocked-data-for-api-request"},{depth:3,value:"4. Use withApi decorator in storybook",id:"4-use-withapi-decorator-in-storybook"},{depth:2,value:"State mocks",id:"state-mocks"},{depth:3,value:"Global state mock",id:"global-state-mock"},{depth:3,value:"Story-specific state mocks",id:"story-specific-state-mocks"},{depth:2,value:"Router mocks",id:"router-mocks"},{depth:2,value:"Component mocks",id:"component-mocks"}];function _createMdxContent(e){let t=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",code:"code",h3:"h3",ul:"ul",li:"li",pre:"pre",span:"span",em:"em",br:"br",routes:"routes",story:"story"},(0,i.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{children:"Mocks"}),"\n",(0,n.jsx)(t.p,{children:"Mock - a way to replace the real dependencies of a component with test dependencies with controllable results."}),"\n",(0,n.jsx)(t.p,{children:"Storybook uses decorators for this purpose. Let's look at the main types of mock decorators"}),"\n",(0,n.jsxs)(t.p,{children:[":::{seealso}\nLearn more about decorators at ",(0,n.jsx)(t.a,{href:"./storybook#storybook-decorators",children:"storybook"})," section\n:::"]}),"\n",(0,n.jsx)(t.h2,{id:"api-mocks",children:"API mocks"}),"\n",(0,n.jsxs)(t.p,{children:["For HTTP requests, mocks are applied using the ",(0,n.jsx)(t.a,{href:"https://mswjs.io/",children:"msw library"})," in the ",(0,n.jsx)(t.code,{children:"msw-storybook-addon"})," variant.\nMsw intercepts REST and GraphQL requests at the serviceWorker level, thus being completely independent of specific HTTP service implementations."]}),"\n",(0,n.jsx)(t.p,{children:"Here are the typical steps to mock a REST request."}),"\n",(0,n.jsx)(t.h3,{id:"1-collect-requests-to-be-mocked",children:"1. Collect requests to be mocked"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"./storybook#running-a-storybook",children:"Run storybook"})}),"\n",(0,n.jsx)(t.li,{children:"Open browser's developer tools & check console output"}),"\n",(0,n.jsx)(t.li,{children:'Check warnings "Warning: captured a request without a matching request handler"'}),"\n",(0,n.jsx)(t.li,{children:"Collect unhandled requests to api"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"2-check-if-there-is-already-mocked-data-prepared",children:"2. Check if there is already mocked data prepared"}),"\n",(0,n.jsx)(t.p,{children:"This is an example of the api mocks folder structure"}),"\n",(0,n.jsx)(t.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsxs)(t.code,{"data-language":"text","data-theme":"default",children:[(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"front/"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"┗ mocks/"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  ┣ Api/"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  ┃ ┣ Facilgo/"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  ┃ ┃ ┣ getWorkOrders.response.mock.ts"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  ┃ ┃ ┗ index.ts"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  ┃ ┣ Resident/"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  ┃ ┃ ┗ index.ts"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  ┃ ┣ Scheduler/"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  ┃ ┃ ┣ getTimeSlots.response.mock.ts"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  ┃ ┃ ┗ index.ts"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  ┃ ┣ Ticket/"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  ┃ ┃ ┗ index.ts"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  ┃ ┣ index.ts"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  ┃ ┗ withApi.tsx"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  ┣ ..."})})]})}),"\n",(0,n.jsxs)(t.p,{children:["Under ",(0,n.jsx)(t.code,{children:"/front/mocks/Api"})," there is a list of folders named by mocked services.\nIn the ",(0,n.jsx)(t.code,{children:"index.ts"})," file of each folder there is an export structure like this one:"]}),"\n",(0,n.jsxs)(t.p,{children:[":::{code-block} typescript\nexport const ResidentApi = {\n['GET:",(0,n.jsxs)(t.em,{children:["/resident']: rest.get(",(0,n.jsx)(t.code,{children:"*/resident"}),", (req, res, ctx) => {\nreturn res(ctx.json({\npropertyCode: '123456789',\npropertyAddress: '5555 Mahogany Run Pl, Las Vegas NV, 12345',\nisActive: true,\n}));\n}),\n['PROPERTY=>GET:"]}),"/resident']: (property: TResidentProperty) => rest.get(",(0,n.jsx)(t.code,{children:"*/resident"}),", (req, res, ctx) => {\nreturn res(ctx.json(property));\n})\n};\n:::"]}),"\n",(0,n.jsxs)(t.p,{children:["Check the structure and go to ",(0,n.jsx)(t.a,{href:"./mocks#use-msw-mock-decorator-in-storybook",children:"step 4"})," if all the requests you need are already listed."]}),"\n",(0,n.jsx)(t.h3,{id:"3-prepare-new-mocked-data-for-api-request",children:"3. Prepare new mocked data for api request"}),"\n",(0,n.jsx)(t.p,{children:"If you need to add a new data set for a request that has not yet been mocked:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Create a new one mock function"}),"\n",(0,n.jsxs)(t.li,{children:["Export it in the structure like ",(0,n.jsx)(t.code,{children:"export const ResidentApi"}),", respecting the existing folder and file structure."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[":::{note}\nNot only objects type of RestHandler can be provided as mock objects to match the request url, as for the ",(0,n.jsx)(t.code,{children:"'GET:*/resident'"})," request in the example above, but also functions like ",(0,n.jsx)(t.code,{children:"(context: StoryContext) => RestHandler"}),".\nThis may be necessary to generate dynamic rest responses based on ",(0,n.jsx)(t.a,{href:"./storybook#storybook-arguments",children:"story arguments"}),".\n:::"]}),"\n",(0,n.jsx)(t.h3,{id:"4-use-withapi-decorator-in-storybook",children:"4. Use withApi decorator in storybook"}),"\n",(0,n.jsx)(t.p,{children:"Now it is simply enough to add a decorator to intercept the needed requests and return the test data prepared in the previous steps."}),"\n",(0,n.jsx)(t.p,{children:":::{code-block} typescript\n:linenos:"}),"\n",(0,n.jsx)(t.p,{children:"import { withApi, ApiMock } from '@mocks';\nconst propertyMock = getStoreMock().property?.property;"}),"\n",(0,n.jsxs)(t.p,{children:["export default {\ndecorators: [\nwithApi([(context) => ApiMock",(0,n.jsx)(t.a,{href:"context.args",children:"'PROPERTY=>GET:*/resident'"}),"]),\n],\n} as Meta;"]}),"\n",(0,n.jsxs)(t.p,{children:["export const Default: Meta = {\nargs: { ...propertyMock },\ndecorators: [withApi([\n(context) => ApiMock['GET:",(0,n.jsxs)(t.em,{children:["/Scheduler/property/:propertyCode/ticket/:ticketId/timeslots'](context.args.propertyCode, ticketId),\n(context) => ApiMock",(0,n.jsx)(t.a,{href:"context.args.propertyCode",children:"'GET:*/facilgo/property/:propertyCode/workorder/history'"}),",\nApiMock['GET:"]}),"/ticket/lastnotscheduled'],\nApiMock['GET:",(0,n.jsx)(t.em,{children:"/Issue/readSkipMarkets'],\nApiMock['GET:"}),"/resident'],\n])],\n};\n:::"]}),"\n",(0,n.jsx)(t.p,{children:":::{note}\nDecorator declared on line 6 will be applied to all the stories in the file, and the others will be applied only to the specific story within which they are declared.\n:::"}),"\n",(0,n.jsx)(t.h2,{id:"state-mocks",children:"State mocks"}),"\n",(0,n.jsx)(t.p,{children:"Consider the structure of helper files used to create the state mocks."}),"\n",(0,n.jsx)(t.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsxs)(t.code,{"data-language":"text","data-theme":"default",children:[(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"front/"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"┗ mocks/"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  ┣ Api/"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  ┃ ..."})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  ┣ Store/"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  ┃ ┣ index.ts"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  ┃ ┣ store.mock.ts"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  ┃ ┣ utils.tsx"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  ┃ ┣ withAuthState.tsx"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  ┃ ┗ withPropertyState.tsx"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"..."})})]})}),"\n",(0,n.jsx)(t.h3,{id:"global-state-mock",children:"Global state mock"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"store.mock.ts"})," file contains default data for every story in project. It is done with the help of the following global state decorator declared in ",(0,n.jsx)(t.code,{children:"utils.tsx"})," and applied in ",(0,n.jsx)(t.code,{children:".storybook/global.config.js "})]}),"\n",(0,n.jsx)(t.p,{children:":::{dropdown} Global state mock decorator\n:::{code-block} jsx\n:linenos:"}),"\n",(0,n.jsx)(t.p,{children:"export function storeDecorator(Story: Story, context: TStorybookContext, stateModifiers?: TStoreStateModifier[], currentState?: TStoreState) {\nlet store: TStore;\nif (!stateModifiers?.length) store = createTestStore(getStoreMock());\nelse {\nconst state = currentState || getStoreMock();"}),"\n",(0,n.jsx)(t.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsxs)(t.code,{"data-language":"text","data-theme":"default",children:[(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    stateModifiers.forEach((modifier) => {"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        modifier(state, context);"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    });"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    store = createTestStore(state);"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"return ("})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    <StoreProvider store={store}>"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        <Story />"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    </StoreProvider>"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:");"})})]})}),"\n",(0,n.jsx)(t.p,{children:"}\n:::"}),"\n",(0,n.jsx)(t.p,{children:":::{note}\nAs with the API decorator, the global state decorator is used for static default values for each story in the project. If you need to override these values or make them dependent on story arguments, use the story-specific decorators described below.\n:::"}),"\n",(0,n.jsx)(t.h3,{id:"story-specific-state-mocks",children:"Story-specific state mocks"}),"\n",(0,n.jsxs)(t.p,{children:["In case of the need to change store state for the specific story, you can use withStore decorator placed in ",(0,n.jsx)(t.code,{children:"front/mocks/Store/utils"})]}),"\n",(0,n.jsx)(t.p,{children:':::{code-block} jsx\n:linenos:\n:caption: "Implementation of the story-specific redux-like store state decorator"\nexport function withStore(stateModifiers?: TStoreStateModifier[]) {\nreturn (story: Story, context: TStorybookContext) => {\nconst state = useStoreState((state: TStoreState) => state);\nreturn storeDecorator(story, context, stateModifiers, state);\n};\n}\n:::'}),"\n",(0,n.jsxs)(t.p,{children:[':::{code-block} jsx\n:linenos:\n:caption: "Usage of the state decorator on the storybook level i.e. for every story in file"\nexport default {',(0,n.jsx)(t.br,{}),"\ndecorators: [\nwithStore([withPropertyState((context) => context.args as TResidentProperty)]),\n],\n} as Meta;\n:::"]}),"\n",(0,n.jsx)(t.p,{children:':::{code-block} jsx\n:linenos:\n:caption: "Usage of the state decorator on the specific story level"\nexport const Agent: Meta = {\ndecorators: [withStore([withAuthState({ role: TUserRole.AGENT })])],\n};\n:::'}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"TStoreStateModifier"})," - the type of array arguments of ",(0,n.jsx)(t.code,{children:"withStore([...])"})," represents a function of type ",(0,n.jsx)(t.code,{children:"(state: TStoreState, context: TStorybookContext) => void"})," which means the implementation should mutate state passed as argument."]}),"\n",(0,n.jsxs)(t.p,{children:["There is also a context type argument, which can be useful if you need to dynamically change state based on ",(0,n.jsx)(t.a,{href:"./storybook#storybook-arguments",children:"story arguments"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Below are the options for implementing state modifiers that use context or static props."}),"\n",(0,n.jsxs)(t.p,{children:[":::{dropdown} State mock decorator based on static override",(0,n.jsx)(t.br,{}),'\n:::{code-block} typescript\n:caption: "Implementation of a state decorator which have a property of a type ',(0,n.jsx)(t.code,{children:"TUser & TResidentAuth"}),' to override corresponding fields in state"\n:linenos:']}),"\n",(0,n.jsx)(t.p,{children:"import { PartialDeep } from 'type-fest/source/partial-deep';\nimport { TResidentAuth, TStoreStateModifier, TUser } from '@types';"}),"\n",(0,n.jsx)(t.p,{children:"export function withAuthState({ role, email, isReadonly }: PartialDeep<TUser & TResidentAuth>): TStoreStateModifier {\nreturn (storeState) => {\nconst userEmail = email ?? storeState.authentication?.user?.email;\nstoreState.authentication = {\n...storeState.authentication,\nuser: {\n...storeState.authentication!.user,\nemail: userEmail,\nrole,\n},\nresident: {\nemail: userEmail,\nisReadonly,\n},\n};\n};\n}\n:::"}),"\n",(0,n.jsxs)(t.p,{children:[':::{dropdown} Dynamic state mock decorator based on story context\n:::{code-block} jsx\n:caption: "Implementation of a state decorator which can use both static ',(0,n.jsx)(t.code,{children:"TResidentProperty"})," property and a factory of ",(0,n.jsx)(t.code,{children:"TResidentProperty"}),' based on story context"\n:linenos:']}),"\n",(0,n.jsx)(t.p,{children:"import { TResidentProperty, TStoreStateModifier, TStorybookContext } from '@types';"}),"\n",(0,n.jsx)(t.p,{children:"export function withPropertyState(property: TResidentProperty | TResidentPropertyFactory): TStoreStateModifier {\nreturn (storeState, context) => {\nif (property instanceof Function) {\nconst newPropertyState = { property: property(context) };\nstoreState.property = { ...storeState.property, ...{ ...newPropertyState } };\n} else {\nstoreState.property = { ...storeState.property, ...{ property } };\n}\n};\n}"}),"\n",(0,n.jsx)(t.p,{children:"type TResidentPropertyFactory = (context: TStorybookContext) => TResidentProperty;\n:::"}),"\n",(0,n.jsxs)(t.p,{children:[":::{note}\nLower-level state decorators do not cancel more global decorators. So you can define a storybook-level state mock for all the stories in a file, and then, for individual stories, augment the effect of that mock by declaring story-specific ",(0,n.jsx)(t.code,{children:"withStore"})," decorator.\n:::"]}),"\n",(0,n.jsx)(t.h2,{id:"router-mocks",children:"Router mocks"}),"\n",(0,n.jsxs)(t.p,{children:["Some components rely on getting data from the current URL route. To mock this data, ",(0,n.jsx)(t.a,{href:"https://reactrouter.com",children:"react-router"})," library provides a ",(0,n.jsx)(t.a,{href:"https://reactrouter.com/docs/en/v6/api#memoryrouter",children:"MemoryRouter"}),' component that keeps the history of "URL" in memory (does not read or write to the address bar).']}),"\n",(0,n.jsxs)(t.p,{children:["Within the storybook we can also use the decorator (located in ",(0,n.jsx)(t.code,{children:"front/mocks/router.mock.tsx"}),") to substitute the real router with the pre-configured MemoryRouter."]}),"\n",(0,n.jsx)(t.p,{children:":::{dropdown} Implementation of the withRoutes decorator using MemoryRouter\n:::{code-block} jsx\n:linenos:"}),"\n",(0,n.jsx)(t.p,{children:"import { MemoryRouter, Routes, Route } from 'react-router-dom';"}),"\n",(0,n.jsx)(t.p,{children:"type TLocationMock = string | ((storyContext: StoryContext) => string);"}),"\n",(0,n.jsxs)(t.p,{children:["const defaultRoutes = ['/summary/:ticketId/scheduler'];\nexport const withRoutes = (historyStack: TLocationMock[] = [], routes: string[] = defaultRoutes) => {\nreturn (Story: Story, storyContext: TStorybookContext) => (\n<MemoryRouter\ninitialEntries={historyStack.map((location) => {\nif (typeof location === 'string') {\nreturn location;\n}\nreturn location(storyContext);\n})}\n>\n",(0,n.jsxs)(t.routes,{children:["\n{routes.map((route: string, index: number) => (\n<Route key={index} path={route} element={",(0,n.jsx)(t.story,{children:"} />\n))}\n"})]}),"\n\n);\n};\n:::"]}),"\n",(0,n.jsx)(t.p,{children:":::{code-block} jsx\n:linenos:\n:caption: \"Usage of the withRoutes decorator on the storybook level i.e. for every story in file\"\nexport default {\ntitle: 'Pages/SchedulerPage',\ncomponent: SchedulerPage,\ndecorators: [\nwithRoutes(['/summary/123/scheduler', '/summary/path-override/:ticketId/scheduler']),\n]\n} as Meta;\n:::"}),"\n",(0,n.jsxs)(t.p,{children:[":::{note}\nMemoryRouter needs a route configuration and an actual location stack. Since the route configuration is stable throughout the application, it is worth declaring it once within the ",(0,n.jsx)(t.code,{children:"withRoutes"})," implementation in the ",(0,n.jsx)(t.code,{children:"defaultRoutes"})," array. If necessary, you can still override the route configuration by passing routes array as the second parameter of the decorator at it is displayed in the example above.\n:::"]}),"\n",(0,n.jsxs)(t.p,{children:["You can also configure ",(0,n.jsx)(t.code,{children:"withRoutes"})," decorator passing dynamic paths based on ",(0,n.jsx)(t.a,{href:"./storybook#storybook-arguments",children:"story arguments"}),"."]}),"\n",(0,n.jsx)(t.p,{children:':::{code-block} jsx\n:linenos:\n:caption: "Usage of the state decorator on the specific story level"\nexport const NotesWithCollectedItems: Meta = {\nargs: { propertyId },\ndecorators: [withRoutes([(context) => `/properties/${context.args.propertyId}\'])],\n};\n:::'}),"\n",(0,n.jsx)(t.h2,{id:"component-mocks",children:"Component mocks"}),"\n",(0,n.jsx)(t.p,{children:"Sometimes, for example when creating a story for an entire application page, it is necessary to replace some components that are not ready for tests with stubs."}),"\n",(0,n.jsx)(t.p,{children:"In such cases the technique of substitution of imported components during webpack building can be useful."}),"\n",(0,n.jsx)(t.pre,{"data-language":"{dropdown}","data-theme":"default",children:(0,n.jsxs)(t.code,{"data-language":"{dropdown}","data-theme":"default",children:[(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"For this purpose, `jest.config.js` has parameters `globalSetup` and `setupFilesAfterEnv`, which define the configuration files that will be connected during the build phase and during the execution of each test, respectively."})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"Based on these files, you can set up the substitution of imported modules with any other by name pattern."})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:":::{code-block} jsx"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    :linenos:"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:'    :caption: "Implementation of searching and replacement of the components to be mocked in the `globalSetup` file" '})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"const path = require('path');"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"const glob = require('glob');"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"module.exports = async () => {"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    const mocksSetups = [];"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    const frontDirPath = path.resolve(__dirname, '../../front/');"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    const srcDirPath = path.resolve(__dirname, '../../front/src/');"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    const mocks = glob.sync(`${frontDirPath}/**/*.mock.tsx`);"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    if (!mocks || !mocks.length) return;"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    console.log('FOUND SOME MOCKS');"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    mocks.forEach((mock) => {"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        const resourceMockName = path.basename(mock);"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        const resourceName = resourceMockName.replace('.mock', '');"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        console.log('TRYING TO FIND MOCKED RESOURCE', `${srcDirPath}/**/${resourceName}`);"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        const resources = glob.sync(`${srcDirPath}/**/${resourceName}`);"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        if (!resources || !resources.length) return;"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        console.log('FOUND RESOURCE TO MOCK GLOBALLY', resources[0]);"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        mocksSetups.push({ resource: resources[0], mock });"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    });"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    process.env = Object.assign(process.env, { MOCKS: JSON.stringify(mocksSetups) });"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:":::"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:":::{code-block} jsx"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    :linenos:"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:'    :caption: "Implementation of loading of mocked components before test execution in the `setupFilesAfterEnv` file" '})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"import '@testing-library/jest-dom/extend-expect';"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"import 'whatwg-fetch';"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"import { configure } from '@testing-library/react';"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"configure({ testIdAttribute: 'data-testid' });"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"function setupMocks() {"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    const mocksSetups = process.env.MOCKS ? JSON.parse(process.env.MOCKS) : [];"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    if (!mocksSetups || !mocksSetups.length) return;"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    mocksSetups.forEach((mockSetup) => {"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        jest.doMock(mockSetup.resource, () => jest.requireActual(mockSetup.mock));"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    });"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"setupMocks();"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:":::"})})]})}),"\n",(0,n.jsxs)(t.p,{children:["To use this technique, the implementation of which is presented above, it is sufficient to create a file ",(0,n.jsx)(t.code,{children:"component.mock.tsx"})," next to the ",(0,n.jsx)(t.code,{children:"component.tsx"})," file from which the component is imported."]}),"\n",(0,n.jsx)(t.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsxs)(t.code,{"data-language":"text","data-theme":"default",children:[(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"front/"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"┗ @components/"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  ┣ MyComponent/"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  ┃ ┣ index.tsx"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  ┃ ┗ MyComponent.mock.tsx"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  ┣ MyComponent2.tsx"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  ┣ MyComponent2.mock.tsx"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"..."})})]})}),"\n",(0,n.jsx)(t.p,{children:"If there is such a mock file for a component, the storybook and tests will use the mock instead of the component."})]})}let l={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,i.a)(),e.components);return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/front-end/testing/mocks.md",route:"/front-end/testing/mocks",pageMap:[{kind:"Meta",data:{"front-end":{title:"Front End"},about:{title:"About",type:"page"},contact:{title:"Contact ↗",type:"page",href:"https://twitter.com/shuding_",newWindow:!0},advanced:"Advanced",another:"Another",index:"Index"}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"MdxPage",name:"advanced",route:"/advanced"},{kind:"MdxPage",name:"another",route:"/another"},{kind:"Folder",name:"front-end",route:"/front-end",children:[{kind:"Meta",data:{css:{title:"Css",theme:{typesetting:"article"}},react:{title:"React",theme:{typesetting:"article"}},links:"Links",plugins:"Plugins"}},{kind:"Folder",name:"css",route:"/front-end/css",children:[{kind:"MdxPage",name:"stylesheets",route:"/front-end/css/stylesheets"},{kind:"MdxPage",name:"tailwind-css",route:"/front-end/css/tailwind-css"},{kind:"MdxPage",name:"theme",route:"/front-end/css/theme"},{kind:"Meta",data:{stylesheets:"Stylesheets","tailwind-css":"Tailwind CSS",theme:"Theme"}}]},{kind:"MdxPage",name:"css",route:"/front-end/css"},{kind:"Folder",name:"data",route:"/front-end/data",children:[{kind:"Folder",name:"easy-peasy",route:"/front-end/data/easy-peasy",children:[{kind:"MdxPage",name:"best-practices",route:"/front-end/data/easy-peasy/best-practices"},{kind:"MdxPage",name:"data-storing",route:"/front-end/data/easy-peasy/data-storing"},{kind:"MdxPage",name:"index",route:"/front-end/data/easy-peasy"},{kind:"Meta",data:{"best-practices":"Best Practices","data-storing":"Data Storing",index:"Index"}}]},{kind:"MdxPage",name:"index",route:"/front-end/data"},{kind:"Folder",name:"react-query",route:"/front-end/data/react-query",children:[{kind:"MdxPage",name:"data-fetching",route:"/front-end/data/react-query/data-fetching"},{kind:"MdxPage",name:"index",route:"/front-end/data/react-query"},{kind:"MdxPage",name:"optimistic-updates",route:"/front-end/data/react-query/optimistic-updates"},{kind:"Meta",data:{"data-fetching":"Data Fetching",index:"Index","optimistic-updates":"Optimistic Updates"}}]},{kind:"Meta",data:{index:"Index"}}]},{kind:"Folder",name:"forms",route:"/front-end/forms",children:[{kind:"MdxPage",name:"custom-components",route:"/front-end/forms/custom-components"},{kind:"MdxPage",name:"index",route:"/front-end/forms"},{kind:"MdxPage",name:"validation",route:"/front-end/forms/validation"},{kind:"MdxPage",name:"writing-forms",route:"/front-end/forms/writing-forms"},{kind:"Meta",data:{"custom-components":"Custom Components",index:"Index",validation:"Validation","writing-forms":"Writing Forms"}}]},{kind:"MdxPage",name:"links",route:"/front-end/links"},{kind:"Folder",name:"overview",route:"/front-end/overview",children:[{kind:"MdxPage",name:"best-practices",route:"/front-end/overview/best-practices"},{kind:"MdxPage",name:"folder-structure",route:"/front-end/overview/folder-structure"},{kind:"MdxPage",name:"project-setup",route:"/front-end/overview/project-setup"},{kind:"Meta",data:{"best-practices":"Best Practices","folder-structure":"Folder Structure","project-setup":"Project Setup"}}]},{kind:"MdxPage",name:"plugins",route:"/front-end/plugins"},{kind:"Folder",name:"react",route:"/front-end/react",children:[{kind:"Meta",data:{index:"Introduction","best-practices":"Best Practices"}},{kind:"MdxPage",name:"best-practices",route:"/front-end/react/best-practices"},{kind:"MdxPage",name:"index",route:"/front-end/react"}]},{kind:"Folder",name:"testing",route:"/front-end/testing",children:[{kind:"MdxPage",name:"best-practices",route:"/front-end/testing/best-practices"},{kind:"MdxPage",name:"coverage",route:"/front-end/testing/coverage"},{kind:"MdxPage",name:"index",route:"/front-end/testing"},{kind:"MdxPage",name:"links",route:"/front-end/testing/links"},{kind:"MdxPage",name:"mocks",route:"/front-end/testing/mocks"},{kind:"MdxPage",name:"snapshots",route:"/front-end/testing/snapshots"},{kind:"MdxPage",name:"stories",route:"/front-end/testing/stories"},{kind:"MdxPage",name:"storybook",route:"/front-end/testing/storybook"},{kind:"MdxPage",name:"writing-tests",route:"/front-end/testing/writing-tests"},{kind:"Meta",data:{"best-practices":"Best Practices",coverage:"Coverage",index:"Index",links:"Links",mocks:"Mocks",snapshots:"Snapshots",stories:"Stories",storybook:"Storybook","writing-tests":"Writing Tests"}}]},{kind:"Folder",name:"typescript",route:"/front-end/typescript",children:[{kind:"MdxPage",name:"best-practices",route:"/front-end/typescript/best-practices"},{kind:"MdxPage",name:"index",route:"/front-end/typescript"},{kind:"Meta",data:{"best-practices":"Best Practices",index:"Index"}}]}]},{kind:"MdxPage",name:"front-end",route:"/front-end"},{kind:"MdxPage",name:"index",route:"/"}],flexsearch:{codeblocks:!0},title:"Mocks",headings:c},pageNextRoute:"/front-end/testing/mocks",nextraLayout:r.ZP,themeConfig:a.Z};t.default=(0,o.j)(l)},3834:function(e,t,s){"use strict";var n=s(3860);s(1733);let o={logo:(0,n.jsx)("span",{children:"My Project"}),project:{link:"https://github.com/shuding/nextra-docs-template"},chat:{link:"https://discord.com"},docsRepositoryBase:"https://github.com/shuding/nextra-docs-template",footer:{text:"Nextra Docs Template"}};t.Z=o}},function(e){e.O(0,[774,245,888,179],function(){return e(e.s=9498)}),_N_E=e.O()}]);