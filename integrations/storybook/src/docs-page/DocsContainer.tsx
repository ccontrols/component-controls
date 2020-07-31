import React, { FC } from 'react';
import {
  PageContainer as BlockPageContainer,
  BlockContextProvider,
} from '@component-controls/blocks';
import { ThemeProvider } from '@component-controls/components';
import {
  useCurrentData,
  getGlobalOptions,
} from '@component-controls/storybook-custom-docs';
import { store } from '@component-controls/store/live_store';

export const PageContextContainer: FC = ({ children }) => {
  const options = React.useMemo(() => getGlobalOptions(), []);
  const { storyId, docId } = useCurrentData();
  return (
    <ThemeProvider theme={store.config.theme}>
      <BlockContextProvider
        storyId={storyId}
        store={store}
        docId={docId}
        options={options}
      >
        <BlockPageContainer variant="pagecontainer.storybook">
          {children}
        </BlockPageContainer>
      </BlockContextProvider>
    </ThemeProvider>
  );
};

export const DocsContainer: FC<{
  active?: boolean;
}> = ({ children, active = true }) =>
  active ? <PageContextContainer>{children}</PageContextContainer> : null;
