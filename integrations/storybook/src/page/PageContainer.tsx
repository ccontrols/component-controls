import React, { FC } from 'react';
import { addons } from '@storybook/addons';
import { STORY_CHANGED } from '@storybook/core-events';
import {
  PageContainer as BlockPageContainer,
  PageContainerProps,
} from '@component-controls/blocks';
import { useIsDark } from '../context/useIsDark';

export const PageContextContainer: FC<PageContainerProps> = ({
  children,
  storyId: defaultStoryId,
}) => {
  const [storyId, setStoryId] = React.useState<string | undefined>(
    defaultStoryId,
  );
  const isDark = useIsDark();
  const channel = React.useMemo(() => addons.getChannel(), []);

  React.useEffect(() => {
    const onStoryChange = (id: string) => {
      setStoryId(id);
    };

    channel.on(STORY_CHANGED, onStoryChange);
    return () => {
      channel.off(STORY_CHANGED, onStoryChange);
    };
  }, []);
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
