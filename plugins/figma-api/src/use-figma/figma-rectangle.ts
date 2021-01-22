import { Rectangle, Paint } from 'figma-js';
import {
  FigmaToReactProps,
  arrayLast,
  fillToStyle,
  effectsToStyle,
  strokeToStyle,
  cornerToStyle,
} from './figma-utils';

export const rectangleStyles = (node: Rectangle): FigmaToReactProps => {
  const fillStyle = fillToStyle(arrayLast<Paint>(node.fills));
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
      ...fillStyle,
      ...effectsStyle,
      ...strokeStyle,
      ...cornerStyle,
      ...sizeStyle,
    },
  };
};
