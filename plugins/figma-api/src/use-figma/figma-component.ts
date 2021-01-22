import { CSSProperties } from 'react';
import { Component, Frame, Instance } from 'figma-js';
import {
  FigmaToReactProps,
  arrayLast,
  colorToRGBA,
  effectsToStyle,
  strokeToStyle,
  cornerToStyle,
} from './figma-utils';

export const componentStyles = (
  node: Component | Frame | Instance,
): FigmaToReactProps => {
  const style: CSSProperties = {
    backgroundColor: colorToRGBA(node.backgroundColor),
  };
  if (node.clipsContent) {
    style.overflow = 'hidden';
  }
  const effectsStyle = effectsToStyle(node.effects);
  const stroke = arrayLast(node.strokes);
  const strokeStyle = strokeToStyle(stroke, node.strokeWeight);
  const cornerStyle = cornerToStyle(node.rectangleCornerRadii);
  const sizeStyle = {
    x: node.absoluteBoundingBox.x,
    y: node.absoluteBoundingBox.y,
    height: node.absoluteBoundingBox.height,
    width: node.absoluteBoundingBox.width,
  };

  return {
    style: {
      ...style,
      ...effectsStyle,
      ...strokeStyle,
      ...cornerStyle,
      ...sizeStyle,
    },
  };
};
