import { parseCSF } from '../src/index';

describe('csf-component', () => {
  it('No import', async () => {
    expect(
      await parseCSF(`
      export default {
        component: Button
      };
    `),
    ).toMatchSnapshot();
  });

  it('default import', async () => {
    expect(
      await parseCSF(`
      import Button from './Button';
      export default {
        component: Button
      };
    `),
    ).toMatchSnapshot();
  });
  it('default alias import', async () => {
    expect(
      await parseCSF(`
        import * as Button from './Button';
        export default {
          component: Button
        };
      `),
    ).toMatchSnapshot();
  });
  it('named import', async () => {
    expect(
      await parseCSF(`
      import { Button } from './Button';
      export default {
        component: Button
      };
    `),
    ).toMatchSnapshot();
  });

  it('parameters component', async () => {
    expect(
      await parseCSF(`
      import { Button } from './Button';
      export default {
        parameters: {
          component: Button
        }  
      };
    `),
    ).toMatchSnapshot();
  });
  it('named alias import', async () => {
    expect(
      await parseCSF(`
      import { Btn as Button } from './Button';
      export default {
        component: Button
      };
    `),
    ).toMatchSnapshot();
  });

  it('story import', async () => {
    expect(
      await parseCSF(`
      import { Btn as Button } from './Button';
      import { Toggle } from './Toggle';
      export default {
        component: Button
      };
      export const story = () => <Toggle />;
      story.story = {
        component: Toggle,
      }
    `),
    ).toMatchSnapshot();
  });
});
