/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { FC, ReactNode } from 'react';
import { EditPage } from '../EditPage';
import { LastEdited } from '../LastEdited';
import { Title } from '../Title';

export interface ContainerProps {
  infoRow?: ReactNode;
}
/**
 * page inner container. will display a like to edit the page and a last updated date.
 */
export const Container: FC<ContainerProps> = ({ children, infoRow }) => {
  return (
    <Box variant="blockpagecontainer.container">
      <Box variant="blockpagecontainer.editrow">
        <EditPage />
        <LastEdited />
      </Box>
      {infoRow && <Box variant="blockpagecontainer.inforow">{infoRow}</Box>}
      <Box variant="blockpagecontainer.titlerow">
        <Title sx={{ paddingBottom: 0 }} />
      </Box>

      {children}
    </Box>
  );
};
