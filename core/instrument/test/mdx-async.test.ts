import { fixtureToTest, TestCallback } from './loadTestFiles';

const createTest = (fileName: string, callback: TestCallback) =>
  fixtureToTest(['mdx', 'async'], fileName, callback);

describe('mdx-async', () => {
  createTest('arrow-function.mdx', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        storyWithProps: {
          name: 'story-with-props',
          mdxType: 'Story',
          id: 'storyWithProps',
          arguments: [
            {
              value: 'props',
              name: 'props',
            },
          ],
          source: 'async props => <Button />',
        },
      },
    });
  });
});
