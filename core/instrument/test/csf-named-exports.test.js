import { parseCSF } from '../src/index';

describe('csf-named-exports', () => {
  it('story propery name', async () => {
    expect(
      await parseCSF(`
const myStory = () => {};
myStory.story = {
 name: 'Custom story name',
}

export { myStory }
    `),
    ).toMatchSnapshot();
  });

  it('exported alias name', async () => {
    expect(
      await parseCSF(`
const myStory = () => {};
myStory.story = {
 name: 'Custom story name',
}

export { myStory as exportedStory}
    `),
    ).toMatchSnapshot();
  });

  it('re-exported name', async () => {
    expect(
      await parseCSF(`
import { myStory } from 'stories.tsx';
myStory.story = {
  name: 'Custom story name',
};

export { myStory };
    
    `),
    ).toMatchSnapshot();
  });
});
