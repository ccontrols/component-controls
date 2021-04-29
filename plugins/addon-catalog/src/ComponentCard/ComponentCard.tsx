/** @jsx jsx */
import { FC } from 'react';
import { jsx, Card, BoxProps } from 'theme-ui';
import { format } from 'timeago.js';
import { Markdown, Link, Value } from '@component-controls/components';
import {
  StoryRender,
  PackageLink,
  ComponentContributors,
  ComponentStats,
  CommitsPopover,
  getStoryTitle,
} from '@component-controls/blocks';
import {
  useStore,
  useStory,
  useStoryComponent,
  useStoryPath,
} from '@component-controls/store';

export type ComponentCardProps = {
  /**
   * story id
   */

  id: string;
};

/**
 * Table to display the components usage, with a % progress indicator
 */
export const ComponentCard: FC<ComponentCardProps & BoxProps> = ({
  id,
  ...rest
}) => {
  const href = useStoryPath(id);
  const store = useStore();
  const story = useStory({ id });
  const component = useStoryComponent({ id });
  if (!component) {
    return null;
  }
  const doc = story?.doc ? store.docs[story.doc] : undefined;
  const pckg = component.package
    ? store.packages[component.package]
    : undefined;
  const title = getStoryTitle(doc, component);
  const description = component.info?.description || story?.description;
  return (
    <Card {...rest}>
      <div
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Link href={href}>
          <div sx={{ fontSize: 4, fontWeight: 'bold' }}>{title}</div>
        </Link>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <ComponentContributors component={component} />
        </div>
      </div>
      <div
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {pckg && pckg.privateNpm !== true ? (
          <PackageLink name={pckg.name as string} version={pckg.version} />
        ) : (
          <div />
        )}
        <CommitsPopover component={component} />
      </div>
      {component.fileInfo && (
        <div
          sx={{
            display: 'flex',
            flexDirection: 'row',
            my: 1,
            justifyContent: 'space-between',
          }}
        >
          <Value
            label="created:"
            value={
              component.fileInfo.dateCreated
                ? format(component.fileInfo.dateCreated)
                : 'N/A'
            }
          />
          <Value
            label="updated:"
            value={
              component.fileInfo.dateModified
                ? format(component.fileInfo.dateModified)
                : 'N/A'
            }
          />
        </div>
      )}
      <ComponentStats component={component} />
      <div sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.125)', my: 2 }} />
      {description && <Markdown>{description}</Markdown>}
      {store.stories[id] && (
        <div sx={{ flex: 1 }}>
          <StoryRender
            story={store.stories[id]}
            sx={{
              px: 0,
              display: 'flex',
              width: '100%',
              maxHeight: '420px',
              flexDirection: 'column',
              '.story-render-container': {
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                overflowX: 'auto',
                overflowY: 'hidden',
              },
            }}
          />
        </div>
      )}
    </Card>
  );
};
