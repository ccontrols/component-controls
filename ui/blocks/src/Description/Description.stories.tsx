import React from 'react';
import { Description } from './Description';
import { BlockContext } from '../BlocksContext';

const MockContext: React.FC = ({ children }) => (
  <BlockContext.Provider
    value={{
      currentId: 'blocks-core-description--simple',
      storyStore: {
        fromId: () => ({
          parameters: {
            component: Description,
          },
        }),
      },
    }}
  >
    {children}
  </BlockContext.Provider>
);
export default {
  title: 'Blocks/Core/Description',
  component: Description,
};

export const simple = () => (
  <MockContext>
    <Description of={Description} />
  </MockContext>
);
