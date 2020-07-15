/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { FC, ReactNode, Fragment } from 'react';
import { dateToLocalString } from '@component-controls/core';
import { Value } from '@component-controls/components';
import { Title } from '../Title';
import { Subtitle } from '../Subtitle';
import { EditPage } from '../EditPage';

import { useDocContext } from '../context';

export interface ContainerProps {
  author?: ReactNode;
}
/**
 * page inner container. will display a like to edit the page and a last updated date.
 */
export const Container: FC<ContainerProps> = ({ children, author }) => {
  const { doc } = useDocContext();
  return (
    <Box variant="blockpagecontainer.container">
      <Box variant="blockpagecontainer.inforow">
        <EditPage />
        <Box variant="blockpagecontainer.createdbox.container">
          {doc?.date && (
            <Fragment>
              <Value label="created:" value={dateToLocalString(doc.date)} />
              {doc?.dateModified && (
                <Text variant="blockpagecontainer.createdbox.separator">,</Text>
              )}
            </Fragment>
          )}
          {doc?.dateModified && (
            <Value
              label="updated:"
              value={dateToLocalString(doc.dateModified)}
            />
          )}
          {author}
        </Box>
      </Box>
      <Box variant="blockpagecontainer.titlerow">
        <Title sx={{ paddingBottom: 0 }} />
      </Box>
      <Subtitle />

      {children}
    </Box>
  );
};
