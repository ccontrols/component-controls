import React, { FC } from 'react';
import { STORY_CHANGED } from '@storybook/core-events';
import { addons } from '@storybook/addons';
import { ThemeProvider, BlockContextProvider } from '../context';

interface PageContainerProps {
  active?: boolean;
  storyId: string;
}

export const PageContextContainer: FC<PageContainerProps> = ({
  children,
  storyId: defaultStoryId,
}) => {
  const [storyId, setStoryId] = React.useState<string | undefined>(
    defaultStoryId,
  );
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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '4rem 20px',
      }}
    >
      <div style={{ maxWidth: '1000px', width: '100%' }}>
        {' '}
        <ThemeProvider>
          <BlockContextProvider id={storyId}>{children}</BlockContextProvider>
        </ThemeProvider>
      </div>
    </div>
  );
};

export const PageContainer: FC<PageContainerProps> = ({
  children,
  active,
  storyId,
}) =>
  active ? (
    <PageContextContainer storyId={storyId}>{children}</PageContextContainer>
  ) : null;
