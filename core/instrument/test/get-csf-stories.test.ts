import { parseCSF } from '../src/index';

describe('csf-story', () => {
  it('No story', async () => {
    expect(
      await parseCSF(
        `
      const i = 1;
    `,
        __filename,
      ),
    ).toMatchSnapshot();
  });
  it('Named object export', async () => {
    expect(
      await parseCSF(
        `
      export const myStory = {
        i: 1,
      };
    `,
        __filename,
      ),
    ).toMatchSnapshot();
  });
  it('No arguments', async () => {
    expect(
      await parseCSF(
        `
      export const myStory = () => {};
    `,
        __filename,
      ),
    ).toMatchSnapshot();
  });

  it('Props argument', async () => {
    expect(
      await parseCSF(
        `
      export const myStory = props => {};
    `,
        __filename,
      ),
    ).toMatchSnapshot();
  });
  it('Two arguments', async () => {
    expect(
      await parseCSF(
        `
      export const myStory = (props, context) => {};
    `,
        __filename,
      ),
    ).toMatchSnapshot();
  });
  it('Typescript', async () => {
    expect(
      await parseCSF(
        `
      export const myStory = (props: Properties) => {};
    `,
        __filename,
      ),
    ).toMatchSnapshot();
  });

  it('Two levels sub arguments', async () => {
    expect(
      await parseCSF(
        `
      export const myStory = ({ name, age }) => {};
    `,
        __filename,
      ),
    ).toMatchSnapshot();
  });

  it('Two levels - alias', async () => {
    expect(
      await parseCSF(
        `
      export const myStory = ({ name: MyNam, age }) => {};
    `,
        __filename,
      ),
    ).toMatchSnapshot();
  });
  it('Three levels - alias', async () => {
    await expect(
      await parseCSF(
        `
      export const myStory = ({ name: { first, last }, age }) => {};
    `,
        __filename,
      ),
    ).toMatchSnapshot();
  });
});
