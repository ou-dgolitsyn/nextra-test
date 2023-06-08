# Writing stories

Story - is a part of storybook file describing some behavior of testable component. 
Think of a storybook like of a components and stories like this component's modes.
Lets describe it on an example.

## Creating a storybook

As the story is a part of storybook lets create it first.
As you `already aware` storybook is a .tsx file written in `CSF 3.0 storybook format`.

Assume that we want to create a component for viewing employee profile.
1. This displays an employee data taken from REST API by id from the URL
2. Shows loading indicator while profile data is fetching from the UI
3. If authenticated user role is administrator, the component shows an 'Edit' button opening profile data editing modal window


So, lets create a storybook file. 
:::{code-block}    
   :emphasize-lines: 6
front/
┗ @components/
  ┣ EmployeeProfile/
  ┃ ┣ index.ts
  ┃ ┣ employee-profile.tsx
  ┃ ┗ employee-profile.stories.tsx
  ┣ ...
:::

:::{seealso}
Learn more about [folder structure best practices](../overview/folder-structure)
:::

:::{code-block} typescript
    :caption: The contents of the `employee-profile.stories.tsx`
    :linenos:
    
import { EmployeeProfile } from './';

export default {
    title: 'Components/EmployeeProfile',
    component: EmployeeProfile,
    decorators: [
        withRoutes(['/employee/123/scheduler', '/employee/:employeeId']),
        withApi([ApiMock['api/employee/:employeeId']]),
        withStore([withStore([withAuthState({ role: TUserRole.USER })])]),
    ],
} as Meta;

export const Default: Meta = {};
:::

This is the minimum set up of our story. Check [storybook](./storybook) chapter for the deep explanation of the file's structure.

Now the most interesting line for us is 13: `export const Default: Meta = {};`
It is default story. It is mandatory to have at least on named export from a storybook file for a default component view.

At this step we already have our `EmployeeProfile` component displayed in the storybook and we can continue it's development right there - inside a sandbox without need of a backend.

But lets write a few more meaningful stories to cover base functionality of the component.

## Adding a story with Rest API mock override

Assuming that we have this kind of api mock setup
:::{code-block} typescript
    :caption: Rest api mock returning an employee profile data or waiting forever based on parameter
export const ResidentApi = {
    ['api/employee/:employeeId']: ({ isLoading }) => rest.get(`api/employee/:employeeId`, (req, res, ctx) => {
        return isLoading ? res(ctx.delay('infinite'))) : res(ctx.json({
            name: 'John Smith',
            position: 'Senior Web Developer',
            department: 'R&D'
        }));
    })
};
:::

Lets write a story to check if our component displays the loading indicator properly

:::{code-block} typescript
    :caption: The story overrides the default api mock
    :linenos:

export const Loading: Meta = {
    decorators: [
        withApi([() => ApiMock['api/employee/:employeeId']({ isLoading: true })]),
    ],
};
:::

That simple! We only need to cover parameters that differs from the default configuration. 

## Adding a story with component interaction

Lets create a story for displaying employee's profile data for the administrator with possibility to open profile data editing modal by pressing a button 'Edit'

:::{code-block} typescript
    :caption: The story for the user 'admin'. Changing the redux state storing the user's role and implementing play function for component interaction
    :linenos:

export const Admin: Meta = {
    decorators: [
        withStore([withStore([withAuthState({ role: TUserRole.ADMIN })])]),
    ],
    play: ({ canvasElement }: { canvasElement: HTMLElement }) => {
        const canvas = within(canvasElement);
        const editButton = await canvas.findByText('Edit');
        await userEvent.click(editButton);
    }
};
:::

Now opening the storybook and navigating to the Components/EmployeeProfile folder we should have these three stories:
1. The Default one. Displaying employee's profile data for user authenticated with role TUserRole.USER
2. Loading. Displaying infinite animated loading indicator
3. Admin. Displaying and clicking 'Edit' button in addition to the employee's profile for user authenticated with role TUserRole.ADMIN

This is the very basic functional of the stories. But it is enough for developing and testing purposes.

:::{seealso}
To check more please visit [official docs](https://storybook.js.org/docs/react/writing-stories/introduction) page
:::

