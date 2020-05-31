import React, { FC } from 'react';
import { Theme } from 'theme-ui';
import { PageContainer as BlockPageContainer } from '@component-controls/blocks';
import { ThemeProvider } from '@component-controls/components';
import {
  useStoryId,
  getGlobalOptions,
} from '@component-controls/storybook-custom-docs';
import { store } from '@component-controls/store/live_store';
import { useIsDark } from '../context/useIsDark';

interface DocsContainerProps {
  theme?: Theme;
}
export const PageContextContainer: FC<DocsContainerProps> = ({
  children,
  theme,
}) => {
  const options = React.useMemo(() => getGlobalOptions(), []);
  const storyId = useStoryId();
  const isDark = useIsDark();
  return (
    <ThemeProvider theme={theme} dark={isDark}>
      <BlockPageContainer
        maxWidth="1000px"
        store={store}
        storyId={storyId}
        options={options}
      >
        {children}
      </BlockPageContainer>
    </ThemeProvider>
  );
};

export const DocsContainer: FC<DocsContainerProps & {
  active?: boolean;
}> = ({ children, active = true }) =>
  active ? <PageContextContainer>{children}</PageContextContainer> : null;
