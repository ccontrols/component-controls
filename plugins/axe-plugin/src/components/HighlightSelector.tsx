import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import styled from '@emotion/styled';
import { selectionList, Selection } from './SelectionContext';

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
        outline: 2px dotted red;
        outline-offset: 2px;
      };
      `;
    return styles;
  }}
`;

export const HighlightSelector: FC = ({ children }) => {
  const selection = useRecoilValue(selectionList);
  return <HighlightNode selection={selection}>{children}</HighlightNode>;
};
