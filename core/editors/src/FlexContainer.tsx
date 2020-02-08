import { styled } from '@storybook/theming';

export interface FlexContainerProps {
  align?: string;
}
export const FlexContainer = styled.div<FlexContainerProps>(
  ({ align = 'center' }) => ({
    display: 'flex',
    alignItems: align,
    justifyContent: align,
    flexDirection: 'column',
    flexBasis: '100%',
  }),
);
