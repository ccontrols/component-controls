import React, { FC } from 'react';
import {
  PageContainer as BlockPageContainer,
  BlockContextProvider,
} from '@component-controls/blocks';
import { ThemeProvider } from '@component-controls/blocks';
import {
  useCurrentData,
  getGlobalOptions,
} from '@component-controls/storybook-custom-docs';
import { store } from '@component-controls/store/live_store';

export const PageContextContainer: FC = ({ children }) => {
  const options = React.useMemo(() => getGlobalOptions(), []);
  const { storyId, docId } = useCurrentData();
  return (
    <BlockContextProvider
      storyId={storyId}
      store={store}
      docId={docId}
      options={options}
    >
      <ThemeProvider>
        <BlockPageContainer variant="pagecontainer.storybook">
          {children}
        </BlockPageContainer>
      </ThemeProvider>
    </BlockContextProvider>
  );
};

export const DocsContainer: FC<{
  active?: boolean;
}> = ({ children, active = true }) =>
  active ? <PageContextContainer>{children}</PageContextContainer> : null;
