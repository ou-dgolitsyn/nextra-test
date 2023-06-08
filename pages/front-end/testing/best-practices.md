# Best practices

This section contains useful tips for applying the testing techniques described in this chapter.

## Storybook

### Use typed stories

:::{code-block} typescript
    :linenos:
    :caption: "✅ Inherit default export & each story from `Meta` type from `@storybook/react`" 
import { Meta } from '@storybook/react';

export default {
    title: 'Pages/ActiveProperties/ActivePropertiesFilters',
    component: ActivePropertiesFilters,
    decorators: [
        withApi([
            ApiMock['/api/acquire/companytitles'],
            ApiMock['/api/acquire/users'],
        ]),
    ],
} as Meta;

export const ActivePropertiesDefault: Meta = {
    args: { ...defaultArgs },
};
:::

Using typed stories will allow you to use the full power of the Typescript inside the Storybook. In particular, it will help you find typos.

## Tests

:::{note}
First of all please check this great guide from Kent C. Odds [Common mistakes with React Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
:::

### Prefer using methods from React Testing Library not from Jest

:::{code-block} typescript
    :caption: "❌ Not: use jest methods for direct access DOM nodes" 
const myElement = screen.getByTestId('my-element');
const [anchorTag] = myElement.getElementsByTagName('a');
expect(anchorTag?.getAttribute('href')).toBe('https://www.expected.com');
:::

:::{code-block} typescript
    :caption: "✅ Prefer to use methods from `React Testing Library`" 
const anchorTag = screen.getByText('Expected text');
expect(myElement).toBeInTheDocument();
:::

The Testing Library offers more advanced methods for finding elements that are resistant to changes in markup. Check this [ESLint rule](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-node-access.md)

### Avoid querying of testing elements by data-testid or any other attributes invisible to user

:::{code-block} typescript
    :caption: "❌ Not: use data-testid attributes to find an element" 
const myElement = screen.getByTestId('my-element');
expect(myElement).toHaveTextContent('Expected text');
:::

:::{code-block} typescript
    :caption: "✅ Prefer to find by displayed text or label" 
const myElement = screen.getByText('Expected text');
expect(myElement).toBeInTheDocument();
:::

Based on the [Guiding Principles](https://testing-library.com/docs/queries/about/#priority), your test should resemble how users interact with your code (component, page, etc.) as much as possible. 

### For asynchronously loaded items, use the async methods from `Testing Library`

:::{code-block} typescript
    :caption: "❌ Not: use synchronous methods when dealing with data loaded asynchronously" 
const myAsyncElement = screen.getByText('Expected text');
expect(myAsyncElement).toBeInTheDocument();
:::

:::{code-block} typescript
    :caption: "✅ Await asynchronous findBy* methods to avoid the races between test assert and data loading" 
const myAsyncElement = await screen.findByText('Expected text');
expect(myAsyncElement).toBeInTheDocument();
:::

Suppose that the element "Expected text" appears on the screen with a delay after loading data from the mocked REST Api. Even a small delay in this case will be enough for the synchronous test to start behaving unpredictably - sometimes to find the element and sometimes not.