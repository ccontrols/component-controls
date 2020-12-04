/** @jsx jsx */
import { FC, useContext, useMemo } from 'react';
import { jsx, ThemeUICSSObject, Box, BoxProps } from 'theme-ui';
import { SelectionContext, Selection } from '../state/context';

export interface StyledContainerProps {
  selection: Selection;
}
const HighlightNode: FC<StyledContainerProps & BoxProps> = ({
  selection,
  ...rest
}) => {
  const styles: ThemeUICSSObject | undefined = useMemo(() => {
    const selectors = selection.map(c => {
      const style = c.split('.story-render-container');
      let selector: string;
      if (style.length >= 2) {
        selector = `.story-render-container${
          style[style.length - 1] ? style[style.length - 1] : ':first-child'
        }`;
      } else if (c === ':root') {
        selector = '.story-render-container > * ';
      } else {
        selector = c;
      }
      return `${selector}`;
    });
    return selectors.length
      ? {
          [`${selectors.join(', ')}`]: {
            outline: '3px dotted red',
            outlineOffset: '3px',
          },
        }
      : undefined;
  }, [selection]);
  return <Box sx={styles} {...rest} />;
};

export const HighlightSelector: FC = ({ children }) => {
  const { selection } = useContext(SelectionContext);
  return <HighlightNode selection={selection}>{children}</HighlightNode>;
};
