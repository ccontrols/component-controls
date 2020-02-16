import { parseCSF } from '../src/index';

describe('csf-story', () => {
  it('No story', () => {
    expect(
      parseCSF(`
      const i = 1;
    `),
    ).toMatchSnapshot();
  });
  it('Named object export', () => {
    expect(
      parseCSF(`
      export const myStory = {
        i: 1,
      };
    `),
    ).toMatchSnapshot();
  });
  it('No arguments', () => {
    expect(
      parseCSF(`
      export const myStory = () => {};
    `),
    ).toMatchSnapshot();
  });

  it('Props argument', () => {
    expect(
      parseCSF(`
      export const myStory = props => {};
    `),
    ).toMatchSnapshot();
  });
  it('Two arguments', () => {
    expect(
      parseCSF(`
      export const myStory = (props, context) => {};
    `),
    ).toMatchSnapshot();
  });
  it('Typescript', () => {
    expect(
      parseCSF(`
      export const myStory = (props: Properties) => {};
    `),
    ).toMatchSnapshot();
  });

  it('Two levels sub arguments', () => {
    expect(
      parseCSF(`
      export const myStory = ({ name, age }) => {};
    `),
    ).toMatchSnapshot();
  });

  it('Two levels - alias', () => {
    expect(
      parseCSF(`
      export const myStory = ({ name: MyNam, age }) => {};
    `),
    ).toMatchSnapshot();
  });
  it('Three levels - alias', () => {
    expect(
      parseCSF(`
      export const myStory = ({ name: { first, last }, age }) => {};
    `),
    ).toMatchSnapshot();
  });
});
