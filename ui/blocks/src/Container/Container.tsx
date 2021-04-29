/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { FC, ReactNode } from 'react';
import { dateToLocalString, CURRENT_STORY } from '@component-controls/core';
import { Value } from '@component-controls/components';
import {
  useCurrentDocument,
  useStoryComponent,
} from '@component-controls/store';
import { Title } from '../Title';
import { Subtitle } from '../Subtitle';
import { EditPage } from '../EditPage';
import { ComponentStats } from '../ComponentStats';

export interface ContainerProps {
  author?: ReactNode;
  secondRow?: ReactNode;
}
/**
 * page inner container. will display a like to edit the page and a last updated date.
 */
export const Container: FC<ContainerProps> = ({
  children,
  author,
  secondRow,
}) => {
  const doc = useCurrentDocument();
  const component = useStoryComponent({ id: CURRENT_STORY });
  return (
    <Box variant="blockpagecontainer.container">
      <Box variant="blockpagecontainer.inforow">
        <EditPage />
        <Box variant="blockpagecontainer.createdbox.container">
          {doc?.date && (
            <Value label="created:" value={dateToLocalString(doc.date)} />
          )}
          {doc?.dateModified && (
            <Value
              label="updated:"
              value={dateToLocalString(doc.dateModified)}
              sx={{ ml: 2 }}
            />
          )}
          {author}
        </Box>
      </Box>
      <div sx={{ pt: 2 }}>
        <ComponentStats component={component} />
      </div>
      {secondRow && (
        <Box variant="blockpagecontainer.secondrow">{secondRow}</Box>
      )}
      <Box variant="blockpagecontainer.titlerow">
        <Title sx={{ pb: 0 }} />
      </Box>
      <Subtitle />

      {children}
    </Box>
  );
};
