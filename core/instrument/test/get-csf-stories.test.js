import { parseCSF } from '../src/index';

describe('csf-story', () => {
  it('No story', async () => {
    expect(
      await parseCSF(`
      const i = 1;
    `),
    ).toMatchSnapshot();
  });
  it('Named object export', async () => {
    expect(
      await parseCSF(`
      export const myStory = {
        i: 1,
      };
    `),
    ).toMatchSnapshot();
  });
  it('No arguments', async () => {
    expect(
      await parseCSF(`
      export const myStory = () => {};
    `),
    ).toMatchSnapshot();
  });

  it('Props argument', async () => {
    expect(
      await parseCSF(`
      export const myStory = props => {};
    `),
    ).toMatchSnapshot();
  });
  it('Two arguments', async () => {
    expect(
      await parseCSF(`
      export const myStory = (props, context) => {};
    `),
    ).toMatchSnapshot();
  });
  it('Typescript', async () => {
    expect(
      await parseCSF(`
      export const myStory = (props: Properties) => {};
    `),
    ).toMatchSnapshot();
  });

  it('Two levels sub arguments', async () => {
    expect(
      await parseCSF(`
      export const myStory = ({ name, age }) => {};
    `),
    ).toMatchSnapshot();
  });

  it('Two levels - alias', async () => {
    expect(
      await parseCSF(`
      export const myStory = ({ name: MyNam, age }) => {};
    `),
    ).toMatchSnapshot();
  });
  it('Three levels - alias', async () => {
    await expect(
      await parseCSF(`
      export const myStory = ({ name: { first, last }, age }) => {};
    `),
    ).toMatchSnapshot();
  });
});
