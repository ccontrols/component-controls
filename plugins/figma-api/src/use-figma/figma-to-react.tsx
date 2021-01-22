/**
 * code inspired by https://github.com/figma/figma-api-demo/blob/master/figma-to-react/lib/figma.js
 */
import React, { ReactNode } from 'react';
import { Component, Node } from 'figma-js';
import { FigmaToReactProps } from './figma-utils';
import { componentStyles } from './figma-component';
import { rectangleStyles } from './figma-rectangle';
import { textStyles } from './figma-text';

export const figmaToStyles = (node: Node): FigmaToReactProps => {
  switch (node.type) {
    case 'FRAME':
    case 'COMPONENT':
    case 'INSTANCE':
      return componentStyles(node);
    case 'RECTANGLE':
      return rectangleStyles(node);
    case 'TEXT':
      return textStyles(node);
    default:
      return {};
  }
};

export const figmaToReact = (node: Node): ReactNode => {
  const reactProps = figmaToStyles(node);
  return (
    <div style={reactProps.style}>
      {node.hasOwnProperty('children') &&
        (node as Component).children.map(child => figmaToReact(child))}
    </div>
  );
};
