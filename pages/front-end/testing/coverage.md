# Collecting coverage

Code coverage tells you which code has been executed during a test and how many times. Targeting for 100% code coverage is often a mistake as it will take a lot of time (to get there and to maintain), and it can lead to problematic testing practices. Having a high percentage of coverage does not necessarily increase the quality, bugs will always pop up.

We use code coverage as a tool, as a last check to verify that the code is ready. It can discover edge cases we haven't thought of and it can make poorly written code visible. Coverage analysis is optional, but useful. 

:::{important}
We will aim for 70% line coverage for all files that have changed in the current feature branch compared to dev.
:::

:::{note}
[Snapshots](./snapshots) contribute significantly to UI test coverage. Create at least one snapshot for each storybook, and you will provide a significant portion of the required coverage.
:::

## How to read coverage report

Let's put this in to practice. As a test we're going to take a look at the code coverage of a fizz buzz function. FizzBuzz is a small function that, depending on the input will return a different output. If the input value:

- is divisible by three it returns Fizz, e.g. 6
- is divisible by five, it returns Buzz, e.g. 20
- is divisible both three and five it returns FizzBuzz, e.g. 15 
- otherwise it returns the input value, e.g. 7

A possible solution of the fizz buzz function looks a follows:
:::{code-block} typescript
function fizzBuzz(value) {
  let output = ''
  if (value % 3 == 0) output += 'Fizz'
  if (value % 5 == 0) output += 'Buss'
  return output || value.toString()
}
:::

As our first test we're covering the easiest case, an input that is not divisible and simply returns the input value:
:::{code-block} typescript
describe('Returns the input', () => {
  it('if it is not divisible by three or five', () => {
    expect(fizzbuzz(7)).toBe('7')
  })
})
:::

If we now generate the code coverage we see a coverage report directly in the CLI:

:::{thumbnail} ../../../assets/jest-coverage-1.png
    :title: An image that shows the coverage in the CLI
    :show_caption: 'True'
:::

A coverage report that can be opened in the browser by running a command
:::{code-block} console
http-server ./coverage/lcov-report 
:::

Or just by opening the `./coverage/lcov-report/index.html`

:::{thumbnail} ../../../assets/jest-coverage-2.png
    :title: An image that shows the coverage in the browser
    :show_caption: 'True'
:::

It's even possible to click on the files to have a view to see which lines are covered, and which are not:

:::{thumbnail} ../../../assets/jest-coverage-3.png
    :title: An image that shows the coverage in the browser for a specific file
    :show_caption: 'True'
:::

In all of the screenshots above, you have four different percentages to look at:
- Statement coverage – Has each statement in the program been executed?
- Branch coverage – Has each branch (also called DD-path) of each control structure (such as in if and case statements) been executed? For example, given an if statement, have both the true and false branches been executed? Notice that this one is a subset of Edge coverage.
- Function coverage – Has each function (or subroutine) in the program been called?
- Line coverage has each executable line in the source file been executed?