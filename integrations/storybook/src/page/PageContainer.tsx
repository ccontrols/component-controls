import React, { FC } from 'react';
import { ThemeProvider, BlockContextProvider } from '../context';

interface PageContainerProps {
  active?: boolean;
}

export const PageContainer: FC<PageContainerProps> = ({ children, active }) =>
  active ? (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '4rem 20px',
      }}
    >
      <div style={{ maxWidth: '1000px', width: '100%' }}>
        {' '}
        <ThemeProvider>
          <BlockContextProvider id="components-actionbar--overview">
            {children}
          </BlockContextProvider>
        </ThemeProvider>
      </div>
    </div>
  ) : null;
