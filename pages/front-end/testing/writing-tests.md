# Writing tests with Jest

:::{important}
Try to transfer as much testing as possible to snapshots. There is no need to manually create jest tests on hundreds of lines to make sure that after loading the data the component will display all the required fields. Such tests are replaced by a single snapshot that includes everything needed.
:::

We only need jest tests if we want to test the component dynamically. Set the initial conditions, interact with the component, find out that the necessary changes were made after the interaction.

To achieve this we will use [Jest](https://jestjs.io/docs/getting-started), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and [storybook interactions](./stories#adding-a-story-with-component-interaction).

Let's describe the typical functional integration test using the familiar EmployeeProfile component, [the stories for which we created in the last chapter](./stories.md).

Let's assume that after the user with admin privileges pressed the "Edit" button, a modal window for editing the profile is displayed, with an input with the name "position" and a "Save" button. 
Let's write a test to check that after changing the "position" value in the modal and pressing the "Save" button, the EmployeeProfile component will immediately start displaying the new position value.

## 1. Preparing a story with input conditions for the test

:::{important}
Try to transfer as much logic as possible from the tests to the stories, because the latter are much easier to debug visually.
:::

To prepare the component for testing, let's create a story in which the data we need is passed to the component. In our case this is the TUserRole.ADMIN user role.
Let's also prepare the interaction with the play history function, which will wait for the "Edit" button to appear and press this button to call the modal window. This part is described in the chapter [Writing stories](./stories#adding-a-story-with-component-interaction).

## 2. Creating a test with a story rendered

Now create our test by placing it next to the component under test
:::{code-block}    
   :emphasize-lines: 7
front/
┗ @components/
  ┣ EmployeeProfile/
  ┃ ┣ index.ts
  ┃ ┣ employee-profile.tsx
  ┃ ┣ employee-profile.stories.tsx
  ┃ ┗ employee-profile.spec.tsx
  ┣ ...
:::

Storybook allows us to render the story as a test component. 
In doing so, we can read its parameters, pass properties to it, and call its play function to initiate a pre-prepared interaction.

:::{code-block} typescript
    :caption: Interaction test around component's story calling play function to interact with underlying component
    :linenos:
import * as stories from './employee-profile.stories';
const { Admin } = composeStories(stories);

describe('Should match snapshot', () => {
    test('with edit modal opened', async () => {
        // render component's story         
        const { container, baseElement } = render(<Admin />);
        
        // perform interaction with testing component
        await act(() => Admin.play({ canvasElement: container }));

        // use React Testing Library to access visible DOM elements
        await screen.findByText('Edit modal title');

        // some test logic to be here
    });
});
:::

## 3. Write test logic

Now using all the power of [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) we can find in our modal window input "position", enter data, close the window by clicking "Save" button and make sure that the component displays the new value of the position.

:::{code-block} typescript
    :caption: Interaction test around component's story calling play function to interact with underlying component
    :linenos:

import {render, fireEvent} from '@testing-library/react'
import * as stories from './employee-profile.stories';
const { Admin } = composeStories(stories);

describe('Should match snapshot', () => {
    test('with edit modal opened', async () => {
        // render component's story         
        const { container, baseElement, getByLabelText } = render(<Admin />);
        
        // perform interaction with testing component
        act(() => await Admin.play({ canvasElement: container }));

        // use React Testing Library to access visible DOM elements
        await screen.findByText('Edit modal title');

        // find the "position" input in the modal window
        const input = getByLabelText('Position');

        fireEvent.change(input, {target: {value: 'Senior Fullstack Developer'}})
        
        // find the "save" button in the modal window 
        const saveButton = getByText('Save');
        
        // and click it
        act(() => {
            await userEvent.click(saveButton);
        });

        // check that modal window disappeared
        await waitFor(() => {
            expect(queryByText('Edit modal title')).not.toBeInTheDocument()
        })

        // and finally check that the new value displayed
        expect(screen.getByText('Senior Fullstack Developer')).toBeInTheDocument();
    });
});
:::

## 4. Check and debug the test

To quickly run test separately specify the test filename calling test script

:::{code-block} console
yarn test employee-profile.spec.tsx
:::

:::{seealso}
- [React Testing Library debugging](https://testing-library.com/docs/dom-testing-library/api-debugging/)
- [Jest troubleshooting](https://jestjs.io/docs/troubleshooting)
:::