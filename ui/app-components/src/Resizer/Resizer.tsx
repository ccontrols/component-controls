/** @jsx jsx */
import { Children, FC } from 'react';
import { jsx } from 'theme-ui';
import {
  Container,
  ContainerProps,
  Section,
  SectionProps,
  Bar,
  BarProps,
} from 'react-simple-resizer';

export interface ResizerProps {
  /**
   * contaoner props
   */
  containerProps?: ContainerProps;
  /**
   * section 1 props
   */
  sectionOneProps?: SectionProps;
  /**
   * section 2 props
   */
  sectionTwoProps?: SectionProps;

  /**
   * bar props
   */
  barProps?: BarProps;
}

/**
 * resizing screen areas component
 */
export const Resizer: FC<ResizerProps> = ({
  children,
  containerProps,
  sectionOneProps,
  sectionTwoProps,
  barProps,
}) => {
  const childArr = Children.toArray(children);
  if (childArr.length !== 2) {
    throw new Error('Resizer should have exactly two children');
  }
  return (
    <Container {...containerProps}>
      <Section {...sectionOneProps}>{childArr[0]}</Section>
      <Bar
        size={5}
        sx={{ backgroundColor: 'transparent', cursor: 'col-resize' }}
        {...barProps}
      />
      <Section {...sectionTwoProps}>{childArr[1]}</Section>
    </Container>
  );
};
