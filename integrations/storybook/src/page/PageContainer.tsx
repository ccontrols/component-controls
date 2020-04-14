import React, { FC } from 'react';
import { getLuminance } from 'polished';
import { ThemeContext, Theme } from '@storybook/theming';
import { addons } from '@storybook/addons';
import { STORY_CHANGED } from '@storybook/core-events';
import {
  PageContainer as BlockPageContainer,
  PageContainerProps,
} from '@component-controls/blocks';

export const PageContextContainer: FC<PageContainerProps> = ({
  children,
  storyId: defaultStoryId,
}) => {
  const [storyId, setStoryId] = React.useState<string | undefined>(
    defaultStoryId,
  );
  const channel = React.useMemo(() => addons.getChannel(), []);
  const { background: { content = '#ffffff' } = {} } = React.useContext<Theme>(
    ThemeContext as any,
  );

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
    <BlockPageContainer dark={getLuminance(content) < 0.5} storyId={storyId}>
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
