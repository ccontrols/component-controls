import { CSSProperties } from 'react';
import { Text } from 'figma-js';
import {
  FigmaToReactProps,
  arrayLast,
  colorToRGBA,
  fontStyleToStyle,
} from './figma-utils';

export const textStyles = (node: Text): FigmaToReactProps => {
  const style: CSSProperties = {};
  const fill = arrayLast(node.fills);
  if (fill) {
    style.color = colorToRGBA(fill.color);
  }
  const stroke = arrayLast(node.strokes);
  if (stroke) {
    const weight = node.strokeWeight || 1;
    style.WebkitTextStroke = `${weight}px ${colorToRGBA(stroke.color)}`;
  }
  const fontStyle = fontStyleToStyle(node.style);

  return {
    style: {
      ...style,
      ...fontStyle,
    },
  };
};
