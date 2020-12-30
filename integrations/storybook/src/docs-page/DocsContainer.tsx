import React, { FC, useMemo } from 'react';
import {
  PageContainer as BlockPageContainer,
  BlockContextProvider,
} from '@component-controls/blocks';
import {
  useCurrentData,
  getGlobalOptions,
} from '@component-controls/storybook-custom-docs';
import { store } from '@component-controls/store/live_store';

export const PageContextContainer: FC = ({ children }) => {
  const globOptions = useMemo(() => {
    const o = getGlobalOptions();
    if (o && Array.isArray(o.decorators)) {
      o.decorators = o.decorators.filter(
        (d: { name: string }) => !d.name || !d.name.startsWith('with'),
      );
    }
    return o || {};
  }, []);
  const { storyId, docId, parameters } = useCurrentData();

  return (
    <BlockContextProvider
      storyId={storyId}
      store={store}
      docId={docId}
      options={{
        ...globOptions,
        parameters: globOptions.parameters
          ? { ...globOptions.parameters, ...parameters }
          : parameters,
      }}
    >
      <BlockPageContainer variant="pagecontainer.storybook">
        {children}
      </BlockPageContainer>
    </BlockContextProvider>
  );
};

export const DocsContainer: FC<{
  active?: boolean;
}> = ({ children, active = true }) =>
  active ? <PageContextContainer>{children}</PageContextContainer> : null;
