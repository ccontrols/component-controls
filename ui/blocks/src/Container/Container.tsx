/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { FC } from 'react';
import { EditPage } from '../EditPage';
import { LastEdited } from '../LastEdited';

/**
 * page inner container. will display a like to edit the page and a last updated date.
 */
export const Container: FC = ({ children }) => {
  return (
    <Box variant="blockpagecontainer.container">
      <Box variant="blockpagecontainer.editrow">
        <EditPage />
        <LastEdited />
      </Box>
      {children}
    </Box>
  );
};
