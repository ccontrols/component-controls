import { parseMDX } from '../src/index';

describe('mdx-component', () => {
  it('component parameter', async () => {
    expect(
      await parseMDX(`
import { Meta } from '@storybook/addon-docs/blocks';
import { Button } from './Button';
<Meta title="Storybook/MDX" component={Button} />
      `),
    ).toMatchSnapshot();
  });

  it('named alias import', async () => {
    expect(
      await parseMDX(`
import { Meta } from '@storybook/addon-docs/blocks';
import { Btn as Button } from './Button';
<Meta title="Storybook/MDX" component={Button} />
      `),
    ).toMatchSnapshot();
  });

  it('story import', async () => {
    expect(
      await parseMDX(`
import { Meta, Story } from '@storybook/addon-docs/blocks';
import { Btn as Button } from './Button';
import { Toggle } from './Toggle';

<Meta title="Storybook/MDX" component={Button} />

<Story name="my-story" component={Toggle} />
      `),
    ).toMatchSnapshot();
  });
});
