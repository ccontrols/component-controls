import * as parser from '@babel/parser';
import traverse from '@babel/traverse';
import { extractCSFStories } from './babel-traverse/get-csf-stories';
export * from './types';

describe('Extract CSF stories', () => {
  const traverseStories = (code: string) => {
    const ast = parser.parse(code, {
      sourceType: 'module',
      plugins: ['jsx', 'typescript'],
    });
    const stories = {};
    traverse(ast, extractCSFStories(stories));
    return stories;
  };
  it('No parameters', () => {
    expect(
      traverseStories(`
      export const myStory = () => {};
    `),
    ).toMatchSnapshot();
  });

  it('Props parameters', () => {
    expect(
      traverseStories(`
      export const myStory = props => {};
    `),
    ).toMatchSnapshot();
  });
  it('Two parameters', () => {
    expect(
      traverseStories(`
      export const myStory = (props, context) => {};
    `),
    ).toMatchSnapshot();
  });
  it('Typescript', () => {
    expect(
      traverseStories(`
      export const myStory = (props: Properties) => {};
    `),
    ).toMatchSnapshot();
  });

  it('Two levels sub parameters', () => {
    expect(
      traverseStories(`
      export const myStory = ({ name, age }) => {};
    `),
    ).toMatchSnapshot();
  });

  it('Two levels - alias', () => {
    expect(
      traverseStories(`
      export const myStory = ({ name: MyNam, age }) => {};
    `),
    ).toMatchSnapshot();
  });
  it('Three levels - alias', () => {
    expect(
      traverseStories(`
      export const myStory = ({ name: { first, last }, age }) => {};
    `),
    ).toMatchSnapshot();
  });
});
