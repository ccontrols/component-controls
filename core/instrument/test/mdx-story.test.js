import { parseMDX } from '../src/index';

describe('mdx-stories', () => {
  test('mdx-story', async () => {
    const stories = await parseMDX(`
import { Story, Meta } from '@storybook/addon-docs/blocks';
import Button from '../components/BaseButton';


<Meta title="Storybook/MDX" parameters={{component: Button}} />

<Story name="smart story">
  <Button />
</Story>

  `);
    expect(stories).toMatchSnapshot();
  });

  test('no name', async () => {
    const stories = await parseMDX(`
import { Story, Meta } from '@storybook/addon-docs/blocks';
import Button from '../components/BaseButton';


<Meta title="Storybook/MDX" parameters={{component: Button}} />

<Story>
  <Button />
</Story>

  `);
    expect(stories).toMatchSnapshot();
  });

  test('Props argument', async () => {
    const stories = await parseMDX(`
import { Story, Meta } from '@storybook/addon-docs/blocks';
import Button from '../components/BaseButton';


<Meta title="Storybook/MDX" parameters={{component: Button}} />

<Story name="story-with-props">
  {props => <Button />}
</Story>

  `);
    expect(stories).toMatchSnapshot();
  });

  test('Two arguments', async () => {
    const stories = await parseMDX(`
import { Story, Meta } from '@storybook/addon-docs/blocks';
import Button from '../components/BaseButton';


<Meta title="Storybook/MDX" parameters={{component: Button}} />

<Story name="story-with-props">
  {(props, context) => <Button />}
</Story>

  `);
    expect(stories).toMatchSnapshot();
  });

  test('Two levels sub arguments', async () => {
    const stories = await parseMDX(`
import { Story, Meta } from '@storybook/addon-docs/blocks';
import Button from '../components/BaseButton';


<Meta title="Storybook/MDX" parameters={{component: Button}} />

<Story name="story-with-props">
  {({ name, age }) => <Button />}
</Story>

  `);
    expect(stories).toMatchSnapshot();
  });
  test('Two levels - alias', async () => {
    const stories = await parseMDX(`
import { Story, Meta } from '@storybook/addon-docs/blocks';
import Button from '../components/BaseButton';


<Meta title="Storybook/MDX" parameters={{component: Button}} />

<Story name="story-with-props">
  {({ name: MyName, age }) => <Button />}
</Story>

  `);
    expect(stories).toMatchSnapshot();
  });
  test('Three levels - alias', async () => {
    const stories = await parseMDX(`
import { Story, Meta } from '@storybook/addon-docs/blocks';
import Button from '../components/BaseButton';


<Meta title="Storybook/MDX" parameters={{component: Button}} />

<Story name="story-with-props">
  {({ name: { first, last }, age }) => <Button />}
</Story>

  `);
    expect(stories).toMatchSnapshot();
  });
});
