import { parseCSF } from '../src/index';

describe('csf-toggle', () => {
  it('Toggle story', async () => {
    const stories = await parseCSF(
      `
    import React from 'react';
    import { Toggle } from './Toggle';
    
    export default {
      title: 'Components/Toggle',
      component: Toggle,
    };
    
    export const allToggles = () => {
      const [checked, setChecked] = React.useState(false);
      return (
        <div>
          <p>Default toggle</p>
          <Toggle checked={checked} onChange={check => setChecked(check)} />
          <br />
          <p>Custom labels</p>
          <Toggle
            checked={checked}
            labels={{
              true: 'YES',
              false: 'NO!',
            }}
            onChange={check => setChecked(check)}
          />
          <br />
        </div>
      );
    };      
  `,
      __filename,
    );
    expect(stories).toMatchSnapshot();
  });
});
