# Storybook

Storybook is a tool for UI development. It makes development faster and easier by isolating components. 

<video autoplay loop muted playsinline alt="Demo video"><source src="/storybook.mp4" type="video/mp4"></video>

We will use storybook as the base for our UI tests.
You can read more about storybook on [official site](https://storybook.js.org/docs/react/get-started/introduction)

## The idea

Storybook is a sandbox where any UI component can be created separately without any backend resources with all dependencies mocked.

At the heart of a Storybook lies the idea of building an application's [design-system](https://www.designbetter.co/design-systems-handbook/introducing-design-systems) based on the conception of the [component driven design](https://www.componentdriven.org/). Starting with smallest components, composing them up to fully functional application pages.

## File structure

For a single component, the Storybook is a file `component-name.stories.tsx` placed in the component's folder.

The structure of the file itself is created according to the rules of [Component Story Format (CSF) 3.0](https://storybook.js.org/blog/component-story-format-3-0/)

Let's look at an example of a typical storybook

:::{code-block} typescript
    :linenos:

export default {
    title: 'Components/PropertyInformation',
    component: PropertyInformation,
    decorators: [
        withApi([(context) => ApiMock['PROPERTY=>GET:*/resident'](context.args)]),
        withStore([withPropertyState((context) => context.args as TResidentProperty)]),
    ],
} as Meta;

export const Default: Meta = {
    args: { ...propertyMock },
    decorators: [withStore([withAuthState({ role: TUserRole.AGENT })])],
};
:::

These are parts that every storybook file should have:
- {guilabel}`line 1` Default export
- {guilabel}`line 2` Title bar, which is split by / to create subfolders in components tree
- {guilabel}`line 3` The component that needs to be mapped. Can be a test wrapper around a real component
- {guilabel}`line 8` {code}`as Meta` - is needed for typescript to export stories properly
- {guilabel}`line 10` {code}`export const ComponentName: Meta` - a story definition. Should have at least one.

Optional attributes include:
- {guilabel}`line 4-7` Common decorators for all stories
- {guilabel}`line 12` Decorators for specific story
- {guilabel}`line 12` Arguments of a story that will be passed to component and will be controllable via storybook controls 

## Storybook arguments

Arguments can be used to dynamically change props, slots, styles, inputs, etc. It allows Storybook and its addons to live edit components.

To read more about arguments see this [documentation](https://storybook.js.org/docs/react/writing-stories/args)

## Storybook decorators

When writing stories, decorators are typically used to wrap stories with extra markup or context mocking. 

Decorator is a function of the form 
:::{code-block} jsx
(Story: Story, storyContext: StoryContext) => <AnyWrapperComponent><Story /></AnyWrapperComponent>
:::

AnyWrapperComponent can be a provider of any context or an arbitrary component.

However, it is assumed that the decorator does not affect the rendering of the story. To make changes to the DOM of a particular story, the **render** function must be declared explicitly see [CSF3 definition](https://storybook.js.org/blog/component-story-format-3-0/). 

Decorators can be declared at three levels:
- At the configuration level, in `global.config.js` (by default in `preview.js`). Such decorators will be applied to all stories. 
- At the storybook level. 
:::{code-block} typescript
    :caption: "Rest API & Redux store mock decorators declared at the storybook level" 
    :emphasize-lines: 2
export default {
    decorators: [
        withApi([(context) => ApiMock['PROPERTY=>GET:*/resident'](context.args)]),
        withStore([withPropertyState((context) => context.args as TResidentProperty)]),
    ],
} as Meta;
:::
- At the story level
:::{code-block} typescript
    :caption: "Redux store mock decorator declared at the story level" 
    :emphasize-lines: 3
export const Default: Meta = {
    args: { ...propertyMock },
    decorators: [withStore([withAuthState({ role: TUserRole.AGENT })])],
};
:::

At the story level, decorators of all levels will merge their behavior, unless they are specifically configured to override parent's level behavior.

You can read more about decorators in the [documentation](https://storybook.js.org/docs/react/writing-stories/decorators)

We will also take a closer look at the use of specific decorators in [mocks](./mocks.md) section.

## Running a storybook

Storybook is a typical static web-application built & run via webpack.
Storybook's special `webpack.config.js` is placed under `.storybook/webpack.config.js`

To start storybook locally run the script

> yarn storybook



