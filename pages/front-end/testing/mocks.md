# Mocks

Mock - a way to replace the real dependencies of a component with test dependencies with controllable results. 

Storybook uses decorators for this purpose. Let's look at the main types of mock decorators

:::{seealso}
Learn more about decorators at [storybook](./storybook#storybook-decorators) section
:::

## API mocks

For HTTP requests, mocks are applied using the [msw library](https://mswjs.io/) in the `msw-storybook-addon` variant.
Msw intercepts REST and GraphQL requests at the serviceWorker level, thus being completely independent of specific HTTP service implementations.

Here are the typical steps to mock a REST request.

### 1. Collect requests to be mocked

- [Run storybook](./storybook#running-a-storybook)
- Open browser's developer tools & check console output
- Check warnings "Warning: captured a request without a matching request handler"
- Collect unhandled requests to api

### 2. Check if there is already mocked data prepared 

This is an example of the api mocks folder structure

```
front/
┗ mocks/
  ┣ Api/
  ┃ ┣ Facilgo/
  ┃ ┃ ┣ getWorkOrders.response.mock.ts
  ┃ ┃ ┗ index.ts
  ┃ ┣ Resident/
  ┃ ┃ ┗ index.ts
  ┃ ┣ Scheduler/
  ┃ ┃ ┣ getTimeSlots.response.mock.ts
  ┃ ┃ ┗ index.ts
  ┃ ┣ Ticket/
  ┃ ┃ ┗ index.ts
  ┃ ┣ index.ts
  ┃ ┗ withApi.tsx
  ┣ ...
```

Under `/front/mocks/Api` there is a list of folders named by mocked services.
In the `index.ts` file of each folder there is an export structure like this one:

:::{code-block} typescript
export const ResidentApi = {
    ['GET:*/resident']: rest.get(`*/resident`, (req, res, ctx) => {
        return res(ctx.json({
            propertyCode: '123456789',
            propertyAddress: '5555 Mahogany Run Pl, Las Vegas NV, 12345',
            isActive: true,
        }));
    }),
    ['PROPERTY=>GET:*/resident']: (property: TResidentProperty) => rest.get(`*/resident`, (req, res, ctx) => {
        return res(ctx.json(property));
    })
};
:::

Check the structure and go to [step 4](./mocks#use-msw-mock-decorator-in-storybook) if all the requests you need are already listed.

### 3. Prepare new mocked data for api request

If you need to add a new data set for a request that has not yet been mocked:
- Create a new one mock function 
- Export it in the structure like `export const ResidentApi`, respecting the existing folder and file structure. 

:::{note}
Not only objects type of RestHandler can be provided as mock objects to match the request url, as for the `'GET:*/resident'` request in the example above, but also functions like `(context: StoryContext) => RestHandler`.
This may be necessary to generate dynamic rest responses based on [story arguments](./storybook#storybook-arguments).
:::

### 4. Use withApi decorator in storybook

Now it is simply enough to add a decorator to intercept the needed requests and return the test data prepared in the previous steps.

:::{code-block} typescript
    :linenos:

import { withApi, ApiMock } from '@mocks';
const propertyMock = getStoreMock().property?.property;

export default {
    decorators: [
        withApi([(context) => ApiMock['PROPERTY=>GET:*/resident'](context.args)]),
    ],
} as Meta;

export const Default: Meta = {
    args: { ...propertyMock },
    decorators: [withApi([
            (context) => ApiMock['GET:*/Scheduler/property/:propertyCode/ticket/:ticketId/timeslots'](context.args.propertyCode, ticketId),
            (context) => ApiMock['GET:*/facilgo/property/:propertyCode/workorder/history'](context.args.propertyCode),
            ApiMock['GET:*/ticket/lastnotscheduled'],
            ApiMock['GET:*/Issue/readSkipMarkets'],
            ApiMock['GET:*/resident'],
        ])],
};
:::

:::{note}
Decorator declared on line 6 will be applied to all the stories in the file, and the others will be applied only to the specific story within which they are declared.
:::

## State mocks

Consider the structure of helper files used to create the state mocks.

```
front/
┗ mocks/
  ┣ Api/
  ┃ ...
  ┣ Store/
  ┃ ┣ index.ts
  ┃ ┣ store.mock.ts
  ┃ ┣ utils.tsx
  ┃ ┣ withAuthState.tsx
  ┃ ┗ withPropertyState.tsx
...
```

### Global state mock

The `store.mock.ts` file contains default data for every story in project. It is done with the help of the following global state decorator declared in `utils.tsx` and applied in `.storybook/global.config.js `

:::{dropdown} Global state mock decorator
:::{code-block} jsx
    :linenos:

export function storeDecorator(Story: Story, context: TStorybookContext, stateModifiers?: TStoreStateModifier[], currentState?: TStoreState) {
    let store: TStore;
    if (!stateModifiers?.length) store = createTestStore(getStoreMock());
    else {
        const state = currentState || getStoreMock();

        stateModifiers.forEach((modifier) => {
            modifier(state, context);
        });

        store = createTestStore(state);
    }
    return (
        <StoreProvider store={store}>
            <Story />
        </StoreProvider>
    );
}
:::

:::{note}
As with the API decorator, the global state decorator is used for static default values for each story in the project. If you need to override these values or make them dependent on story arguments, use the story-specific decorators described below.
:::

### Story-specific state mocks

In case of the need to change store state for the specific story, you can use withStore decorator placed in `front/mocks/Store/utils`

:::{code-block} jsx
    :linenos:
    :caption: "Implementation of the story-specific redux-like store state decorator" 
export function withStore(stateModifiers?: TStoreStateModifier[]) {
    return (story: Story, context: TStorybookContext) => {
        const state = useStoreState((state: TStoreState) => state);
        return storeDecorator(story, context, stateModifiers, state);
    };
}
:::

:::{code-block} jsx
    :linenos:
    :caption: "Usage of the state decorator on the storybook level i.e. for every story in file" 
export default {    
    decorators: [
        withStore([withPropertyState((context) => context.args as TResidentProperty)]),
    ],
} as Meta;
:::

:::{code-block} jsx
    :linenos:
    :caption: "Usage of the state decorator on the specific story level" 
export const Agent: Meta = {
    decorators: [withStore([withAuthState({ role: TUserRole.AGENT })])],
};
:::

`TStoreStateModifier` - the type of array arguments of `withStore([...])` represents a function of type `(state: TStoreState, context: TStorybookContext) => void` which means the implementation should mutate state passed as argument.

There is also a context type argument, which can be useful if you need to dynamically change state based on [story arguments](./storybook#storybook-arguments).

Below are the options for implementing state modifiers that use context or static props. 

:::{dropdown} State mock decorator based on static override    
:::{code-block} typescript
    :caption: "Implementation of a state decorator which have a property of a type `TUser & TResidentAuth` to override corresponding fields in state" 
    :linenos:

import { PartialDeep } from 'type-fest/source/partial-deep';
import { TResidentAuth, TStoreStateModifier, TUser } from '@types';

export function withAuthState({ role, email, isReadonly }: PartialDeep<TUser & TResidentAuth>): TStoreStateModifier {
    return (storeState) => {
        const userEmail = email ?? storeState.authentication?.user?.email;
        storeState.authentication = {
            ...storeState.authentication,
            user: {
                ...storeState.authentication!.user,
                email: userEmail,
                role,
            },
            resident: {
                email: userEmail,
                isReadonly,
            },
        };
    };
}
:::

:::{dropdown} Dynamic state mock decorator based on story context
:::{code-block} jsx
    :caption: "Implementation of a state decorator which can use both static `TResidentProperty` property and a factory of `TResidentProperty` based on story context" 
    :linenos:

import { TResidentProperty, TStoreStateModifier, TStorybookContext } from '@types';

export function withPropertyState(property: TResidentProperty | TResidentPropertyFactory): TStoreStateModifier {
    return (storeState, context) => {
        if (property instanceof Function) {
            const newPropertyState = { property: property(context) };
            storeState.property = { ...storeState.property, ...{ ...newPropertyState } };
        } else {
            storeState.property = { ...storeState.property, ...{ property } };
        }
    };
}

type TResidentPropertyFactory = (context: TStorybookContext) => TResidentProperty;
:::

:::{note}
Lower-level state decorators do not cancel more global decorators. So you can define a storybook-level state mock for all the stories in a file, and then, for individual stories, augment the effect of that mock by declaring story-specific `withStore` decorator.
:::

## Router mocks

Some components rely on getting data from the current URL route. To mock this data, [react-router](https://reactrouter.com) library provides a [MemoryRouter](https://reactrouter.com/docs/en/v6/api#memoryrouter) component that keeps the history of "URL" in memory (does not read or write to the address bar). 

Within the storybook we can also use the decorator (located in `front/mocks/router.mock.tsx`) to substitute the real router with the pre-configured MemoryRouter.

:::{dropdown} Implementation of the withRoutes decorator using MemoryRouter
:::{code-block} jsx
    :linenos:

import { MemoryRouter, Routes, Route } from 'react-router-dom';

type TLocationMock = string | ((storyContext: StoryContext) => string);

const defaultRoutes = ['/summary/:ticketId/scheduler'];
export const withRoutes = (historyStack: TLocationMock[] = [], routes: string[] = defaultRoutes) => {
    return (Story: Story, storyContext: TStorybookContext) => (
        <MemoryRouter
            initialEntries={historyStack.map((location) => {
                if (typeof location === 'string') {
                    return location;
                }
                return location(storyContext);
            })}
        >
            <Routes>
                {routes.map((route: string, index: number) => (
                    <Route key={index} path={route} element={<Story />} />
                ))}
            </Routes>
        </MemoryRouter>
    );
};
:::

:::{code-block} jsx
    :linenos:
    :caption: "Usage of the withRoutes decorator on the storybook level i.e. for every story in file" 
export default {
    title: 'Pages/SchedulerPage',
    component: SchedulerPage,
    decorators: [
        withRoutes(['/summary/123/scheduler', '/summary/path-override/:ticketId/scheduler']),
    ]
} as Meta;
:::

:::{note}
MemoryRouter needs a route configuration and an actual location stack. Since the route configuration is stable throughout the application, it is worth declaring it once within the `withRoutes` implementation in the `defaultRoutes` array. If necessary, you can still override the route configuration by passing routes array as the second parameter of the decorator at it is displayed in the example above. 
:::

You can also configure `withRoutes` decorator passing dynamic paths based on [story arguments](./storybook#storybook-arguments).

:::{code-block} jsx
    :linenos:
    :caption: "Usage of the state decorator on the specific story level" 
export const NotesWithCollectedItems: Meta = {
    args: { propertyId },
    decorators: [withRoutes([(context) => `/properties/${context.args.propertyId}'])],
};
:::

## Component mocks

Sometimes, for example when creating a story for an entire application page, it is necessary to replace some components that are not ready for tests with stubs.

In such cases the technique of substitution of imported components during webpack building can be useful.

```{dropdown} Implementation details of the component mocking technique

For this purpose, `jest.config.js` has parameters `globalSetup` and `setupFilesAfterEnv`, which define the configuration files that will be connected during the build phase and during the execution of each test, respectively.

Based on these files, you can set up the substitution of imported modules with any other by name pattern.

:::{code-block} jsx
    :linenos:
    :caption: "Implementation of searching and replacement of the components to be mocked in the `globalSetup` file" 

const path = require('path');
const glob = require('glob');

module.exports = async () => {
    const mocksSetups = [];
    const frontDirPath = path.resolve(__dirname, '../../front/');
    const srcDirPath = path.resolve(__dirname, '../../front/src/');

    const mocks = glob.sync(`${frontDirPath}/**/*.mock.tsx`);
    if (!mocks || !mocks.length) return;

    console.log('FOUND SOME MOCKS');
    mocks.forEach((mock) => {
        const resourceMockName = path.basename(mock);
        const resourceName = resourceMockName.replace('.mock', '');

        console.log('TRYING TO FIND MOCKED RESOURCE', `${srcDirPath}/**/${resourceName}`);
        const resources = glob.sync(`${srcDirPath}/**/${resourceName}`);

        if (!resources || !resources.length) return;
        console.log('FOUND RESOURCE TO MOCK GLOBALLY', resources[0]);

        mocksSetups.push({ resource: resources[0], mock });
    });
    process.env = Object.assign(process.env, { MOCKS: JSON.stringify(mocksSetups) });
};
:::

:::{code-block} jsx
    :linenos:
    :caption: "Implementation of loading of mocked components before test execution in the `setupFilesAfterEnv` file" 

import '@testing-library/jest-dom/extend-expect';
import 'whatwg-fetch';
import { configure } from '@testing-library/react';

configure({ testIdAttribute: 'data-testid' });

function setupMocks() {
    const mocksSetups = process.env.MOCKS ? JSON.parse(process.env.MOCKS) : [];
    if (!mocksSetups || !mocksSetups.length) return;

    mocksSetups.forEach((mockSetup) => {
        jest.doMock(mockSetup.resource, () => jest.requireActual(mockSetup.mock));
    });
}
setupMocks();
:::
```

To use this technique, the implementation of which is presented above, it is sufficient to create a file `component.mock.tsx` next to the `component.tsx` file from which the component is imported.

```
front/
┗ @components/
  ┣ MyComponent/
  ┃ ┣ index.tsx
  ┃ ┗ MyComponent.mock.tsx
  ┣ MyComponent2.tsx
  ┣ MyComponent2.mock.tsx
...
```

If there is such a mock file for a component, the storybook and tests will use the mock instead of the component.