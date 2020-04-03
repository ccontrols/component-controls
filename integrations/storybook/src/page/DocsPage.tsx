import React, { FC } from 'react';

import {
  ControlsTable,
  Title,
  Subtitle,
  Story,
  Playground,
  Stories,
  Description,
  ComponentSource,
  PropsTable,
} from '@component-controls/blocks';
import { ThemeProvider, BlockContextProvider } from '../context';

interface DocsPageProps {
  active?: boolean;
}
export const DocsPage: FC<DocsPageProps> = ({ active }) => {
  if (!active) {
    return null;
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '4rem 20px',
      }}
    >
      <div style={{ maxWidth: '1000px', width: '100%' }}>
        <ThemeProvider>
          <BlockContextProvider id="components-actionbar--overview">
            <Title />
            <Subtitle />
            <Description />
            <ComponentSource id="." title="Component" />
            <Playground openTab="source" title=".">
              <Story id="." />
            </Playground>
            <ControlsTable id="." />
            <PropsTable of="." />
            <Stories dark={true} />
          </BlockContextProvider>
        </ThemeProvider>
      </div>
    </div>
  );
};
