/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box, Button } from 'theme-ui';

export interface PanelContainerProps {
  onClose: () => void;
}
export const PanelContainer: FC<PanelContainerProps> = ({
  onClose,
  children,
}) => {
  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ py: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <Button sx={{ py: 0 }} onClick={onClose}>
          close
        </Button>
      </Box>
      {children}
    </Box>
  );
};
