# Snapshot testing

A typical snapshot test case renders a UI component, takes a snapshot, then compares it to a reference snapshot file stored alongside the test. The test will fail if the two snapshots do not match: either the change is unexpected, or the reference snapshot needs to be updated to the new version of the UI component.

:::{seealso}
Learn more about snapshot testing in the [perfect jest snapshot documentation](https://jestjs.io/docs/snapshot-testing)
:::

:::{note}
Snapshots are an ideal way to quickly provide [basic test coverage of a component](./coverage). The more component stories you cover with snapshots, the less you need to [write integration tests with Jest](./writing-tests)
:::

We will use two types of a snapshot test cases: automatically created by storybook and manual.

Lets describe the typical flow of a snapshot testing.

## 1. Set up automatically created snapshots

Since the storybook is a base of all our UI tests, lets use it addon [storyshots](https://storybook.js.org/addons/@storybook/addon-storyshots) to automatically create a snapshot.
```{dropdown} Implementation details of the storyshots addon

:::{code-block} jsx
    :linenos:
    :caption: Setup of a storyshots addon which allows to test asynchronously loaded components

import React from 'react';
import { act } from 'react-dom/test-utils';
import initStoryshots, { Stories2SnapsConverter } from '@storybook/addon-storyshots';
import wait from 'waait';
import { composeStory } from '@storybook/testing-react';
import { render } from '@testing-library/react';

initStoryshots({
    asyncJest: true,
    test: async ({ story, context, done }) => {
        try {
            const converter = new Stories2SnapsConverter({
                snapshotsDirName: './',
                snapshotExtension: '.snapshot',
            });
            const snapshotFilename = converter.getSnapshotFileName(context);

            story.story = undefined;

            let tree: any;
            await act(async () => {
                const meta = await import(`${story.fileName}`);
                const Story = composeStory(story, meta);
                tree = render(<Story />);
            });

            await act(() => wait(100));
            expect(tree?.baseElement).toMatchSpecificSnapshot(snapshotFilename);
        } catch (e) {
            console.log('ERROR TESTING SNAPSHOT', e);
        } finally {
            done?.();
        }
    },
});

:::
```

Automatically created snapshot files will be placed in the same folder as a component and named based on the storybook
:::{code-block}    
   :emphasize-lines: 7
front/
┗ @components/
  ┣ EmployeeProfile/
  ┃ ┣ index.ts
  ┃ ┣ employee-profile.tsx
  ┃ ┣ employee-profile.stories.tsx
  ┃ ┗ employee-profile.stories.tsx.snap
  ┣ ...
:::

:::{note}
For a complex storybook the automatically created snapshot could fail with a timeout or became corrupted. To work around this check the instructions below.
:::

## 2. Check automatically created snapshot

To quickly check if automatic snapshot is ok, run tests specifying snapshots config only

:::{code-block} console
yarn test snapshots.spec.tsx
:::

If tests are ok, check the snapshot file created in the component's folder. If your story contains some async data loading check that snapshot contains that data.

If test fails or a snapshot does not contain mocked data, proceed to the next step.

## 3. Disabling automatic creation of the story snapshot

In case you are not satisfied with the results of the automatic snapshot creation you can disable it.
To do this, add a special parameter to the story

:::{code-block} typescript
    :caption: The story with disabled automatic snapshots
    :linenos:

export const Admin: Meta = {
    // ...
    parameters = {
        storyshots: { disable: true },
    };
};
:::

:::{important}
Be sure to disable automatic snapshots if you use [the play function to interact with the component](./stories#adding-a-story-with-component-interaction)
:::

## 4. Manual creating of a snapshots with jest

To configure manual snapshot you should create a file for a common jest tests like this

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

Suppose we have a story that requires special interaction before a snapshot can be taken. In this case, manual snapshots come to the rescue.
We can add a new jest based test which will create a manual snapshot for us.

:::{code-block} typescript
    :caption: The manually created snapshot test with custom logic
    :linenos:
import * as stories from './employee-profile.stories';
const { Admin } = composeStories(stories);

describe('Should match snapshot', () => {
    test('with edit modal opened', async () => {
        const { container, baseElement } = render(<Admin />);
        await act(() => Admin.play({ canvasElement: container }));

        await screen.findByText('Edit modal title');
        expect(baseElement).toMatchSnapshot(Admin.storyName);
    });
});
:::

## 5. Snapshot tests maintenance

It makes no sense to duplicate the [perfect jest snapshot documentation](https://jestjs.io/docs/snapshot-testing)

Let's list only the main points about snapshot maintenance:
1. Treat snapshots as code - commit & review snapshots
2. Snapshots should be deterministic - mock any kind of data that can be changed e.x. `new Date()`
3. Update snapshots after changing components
4. To update snapshots manually with [interactive snapshot mode](https://jestjs.io/docs/snapshot-testing#interactive-snapshot-mode) run the command
    :::{code-block} console
    yarn test snapshots.spec.tsx --watch
    :::
5. Check your snapshots are ok before creating a PR


