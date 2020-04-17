import React, { FC } from 'react';
import {
  PageContainer as BlockPageContainer,
  PageContainerProps,
} from '@component-controls/blocks';
import { useStoryId } from '@component-controls/storybook-custom-docs';
import { useIsDark } from '../context/useIsDark';

export const PageContextContainer: FC<PageContainerProps> = ({
  children,
  storyId: defaultStoryId,
}) => {
  const storyId = useStoryId(defaultStoryId);
  const isDark = useIsDark();

  return (
    <BlockPageContainer dark={isDark} storyId={storyId}>
      {children}
    </BlockPageContainer>
  );
};

export const PageContainer: FC<PageContainerProps & { active: boolean }> = ({
  children,
  active,
  storyId,
}) =>
  active ? (
    <PageContextContainer storyId={storyId}>{children}</PageContextContainer>
  ) : null;
