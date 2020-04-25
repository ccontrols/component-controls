import React, { FC } from 'react';
import {
  PageContainer as BlockPageContainer,
  PageContainerProps,
} from '@component-controls/blocks';
import {
  useStoryId,
  getGlobalOptions,
} from '@component-controls/storybook-custom-docs';
import { useIsDark } from '../context/useIsDark';

export const PageContextContainer: FC<PageContainerProps> = ({ children }) => {
  const options = React.useMemo(() => getGlobalOptions(), []);
  const storyId = useStoryId();
  const isDark = useIsDark();
  return (
    <BlockPageContainer dark={isDark} storyId={storyId} options={options}>
      {children}
    </BlockPageContainer>
  );
};

export const DocsContainer: FC<PageContainerProps & { active?: boolean }> = ({
  children,
  active = true,
}) => (active ? <PageContextContainer>{children}</PageContextContainer> : null);
