import { parseCSF } from '../src/index';

describe('prop-usage-locations', () => {
  it('props argument', async () => {
    expect(
      await parseCSF(`
      export const myStory = props => <Story {...props} />;
    `),
    ).toMatchSnapshot();
  });

  it('adjust lines', async () => {
    expect(
      await parseCSF(`
      export default {
        name: 'Hello',
      }

      export const myStory = props => (
        <Story
         {...props}
        />
      );

    `),
    ).toMatchSnapshot();
  });
  it('two arguments', async () => {
    expect(
      await parseCSF(`
      export const myStory = (props, context) => <Story {...props} />;
    `),
    ).toMatchSnapshot();
  });
  it('two levels sub arguments', async () => {
    expect(
      await parseCSF(`
      export const myStory = ({ name, age }) => <Story name={name} age={age} />;
    `),
    ).toMatchSnapshot();
  });

  it('multiple usage', async () => {
    expect(
      await parseCSF(`
      export const myStory = ({ age }) => (
        <>
          <Story name={name} age={age} />
          <Age value={age} />
        </>  
      );
    `),
    ).toMatchSnapshot();
  });

  it('two levels - alias', async () => {
    expect(
      await parseCSF(`
      export const myStory = ({ name: MyName, age }) => <Story name={MyName} age={age} />;
    `),
    ).toMatchSnapshot();
  });

  it('Three levels - alias', async () => {
    await expect(
      await parseCSF(`
      export const myStory = ({ name: { first, last }, age }) => (
        <>
          <Story first={first} last={last} />
          <Age value={age} />
        </>
      );    
    `),
    ).toMatchSnapshot();
  });

  it('string template', async () => {
    await expect(
      await parseCSF('export const myStory = ({ text }) => `${text}`;'),
    ).toMatchSnapshot();
  });
  it('empty body', async () => {
    await expect(
      await parseCSF('export const story = ({ name }) => name;'),
    ).toMatchSnapshot();
  });

  it('expression usage', async () => {
    await expect(
      await parseCSF(
        'export const selectProp = ({ value }) => <div>{JSON.stringify({ value }, null, 2)}</div>;',
      ),
    ).toMatchSnapshot();
  });

  it('nested arguments', async () => {
    await expect(
      await parseCSF(
        `
export const story = ({ height, weight, style: { border, color } }) => (
  <div height={height} weight={weight} border={border} color={color} />
);`,
      ),
    ).toMatchSnapshot();
  });
});
