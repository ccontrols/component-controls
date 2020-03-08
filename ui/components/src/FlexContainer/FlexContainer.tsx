import React, { FC } from 'react';
import { Flex } from 'theme-ui';

export interface FlexContainerProps {
  align?: string;
}
export const FlexContainer: FC<FlexContainerProps> = ({
  align = 'center',
  children,
}) => (
  <Flex
    css={{
      alignItems: align,
      justifyContent: align,
      flexDirection: 'column',
      flexBasis: '100%',
    }}
  >
    {children}
  </Flex>
);
