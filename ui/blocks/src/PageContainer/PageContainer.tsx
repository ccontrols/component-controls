import React, { FC } from 'react';
import { ThemeProvider } from '@component-controls/components';
import { BlockContextProvider, StoryContextConsumer } from '../context';

export interface PageContainerProps {
  /**
   * story to display in the page
   */
  storyId?: string;
  /**
   * dark/light theme for the page
   */
  dark?: boolean;
  /**
   * components to customize the markdown display.
   */
  components?: any;
}

/**
 *
 * Page container.
 * if an MDX page, will display the MDX components
 * otherwise, the page elemenst are passed as children
 */
export const PageContainer: FC<PageContainerProps> = ({
  children,
  dark,
  storyId,
}) => {
  return storyId ? (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '4rem 20px',
      }}
    >
      <div style={{ maxWidth: '1000px', width: '100%' }}>
        <ThemeProvider dark={dark}>
          <BlockContextProvider storyId={storyId}>
            <StoryContextConsumer id={storyId}>
              {({ kind }) => {
                const { MDXPage } = kind || {};
                return MDXPage ? <MDXPage /> : children;
              }}
            </StoryContextConsumer>
          </BlockContextProvider>
        </ThemeProvider>
      </div>
    </div>
  ) : null;
};
