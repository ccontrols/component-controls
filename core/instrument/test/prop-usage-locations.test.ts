import { parseCSF } from '../src/index';

describe('prop-usage-locations', () => {
  it('props argument', async () => {
    expect(
      await parseCSF(
        `
      export const myStory = props => <Story {...props} />;
    `,
        __filename,
      ),
    ).toMatchSnapshot();
  });

  it('adjust lines', async () => {
    expect(
      await parseCSF(
        `
      export default {
        name: 'Hello',
      }

      export const myStory = props => (
        <Story
         {...props}
        />
      );

    `,
        __filename,
      ),
    ).toMatchSnapshot();
  });
  it('two arguments', async () => {
    expect(
      await parseCSF(
        `
      export const myStory = (props, context) => <Story {...props} />;
    `,
        __filename,
      ),
    ).toMatchSnapshot();
  });
  it('two levels sub arguments', async () => {
    expect(
      await parseCSF(
        `
      export const myStory = ({ name, age }) => <Story name={name} age={age} />;
    `,
        __filename,
      ),
    ).toMatchSnapshot();
  });

  it('multiple usage', async () => {
    expect(
      await parseCSF(
        `
      export const myStory = ({ age }) => (
        <>
          <Story name={name} age={age} />
          <Age value={age} />
        </>  
      );
    `,
        __filename,
      ),
    ).toMatchSnapshot();
  });

  it('two levels - alias', async () => {
    expect(
      await parseCSF(
        `
      export const myStory = ({ name: MyName, age }) => <Story name={MyName} age={age} />;
    `,
        __filename,
      ),
    ).toMatchSnapshot();
  });

  it('Three levels - alias', async () => {
    await expect(
      await parseCSF(
        `
      export const myStory = ({ name: { first, last }, age }) => (
        <>
          <Story first={first} last={last} />
          <Age value={age} />
        </>
      );    
    `,
        __filename,
      ),
    ).toMatchSnapshot();
  });

  it('string template', async () => {
    await expect(
      await parseCSF(
        'export const myStory = ({ text }) => `${text}`;',
        __filename,
      ),
    ).toMatchSnapshot();
  });
  it('empty body', async () => {
    await expect(
      await parseCSF('export const story = ({ name }) => name;', __filename),
    ).toMatchSnapshot();
  });

  it('expression usage', async () => {
    await expect(
      await parseCSF(
        'export const selectProp = ({ value }) => <div>{JSON.stringify({ value }, null, 2)}</div>;',
        __filename,
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
        __filename,
      ),
    ).toMatchSnapshot();
  });
});
