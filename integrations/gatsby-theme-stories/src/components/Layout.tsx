/** @jsx jsx */
import { FC, useMemo } from 'react';
import { jsx } from 'theme-ui';
import { ThemeProvider } from '@component-controls/components';
import { App } from '@component-controls/app';
import {
  SidebarContextProvider,
  LinkContextProvider,
} from '@component-controls/app-components';
import { BlockContextProvider } from '@component-controls/blocks';
import { loadStoryStore, Store } from '@component-controls/store';
const bundle = require('@component-controls/webpack-compile/bundle');
import { GatsbyLink } from './GatsbyLink';

interface LayoutProps {
  docId?: string;
}

export const Layout: FC<LayoutProps> = ({ docId, children }) => {
  const storyStore = useMemo(
    () =>
      new Store({
        store: loadStoryStore(bundle),
        updateLocalStorage: false,
      }),
    [],
  );

  return (
    <ThemeProvider>
      <BlockContextProvider docId={docId} store={storyStore}>
        <SidebarContextProvider>
          <LinkContextProvider linkClass={GatsbyLink}>
            <App title={docId}>{children}</App>
          </LinkContextProvider>
        </SidebarContextProvider>
      </BlockContextProvider>
    </ThemeProvider>
  );
};
