import React, { FC, useContext } from 'react';
import styled from '@emotion/styled';
import { SelectionContext, Selection } from '../state/context';

export interface StyledContainerProps {
  selection: Selection;
}
const HighlightNode = styled.div<StyledContainerProps>`
  ${({ selection }) => {
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
    if (!selectors.length) {
      return '';
    }
    const styles = `${selectors.join(', \n')}
      {
        outline: 3px dotted red;
        outline-offset: 3px;
      };
      `;
    return styles;
  }}
`;

export const HighlightSelector: FC = ({ children }) => {
  const { selection } = useContext(SelectionContext);
  return <HighlightNode selection={selection}>{children}</HighlightNode>;
};
