import { Example, FrameworkRenderFn } from '@component-controls/core';
import { render as jsonRender } from '@component-controls/render/json';
import { sum } from './sum';

const doc = {
  title: 'Library/api/sum',
  order: 3,
  component: sum,
  renderFn: jsonRender,
};

export const overview: Example<{ a: number; b: number }> = ({ a, b }) => {
  return sum(a, b);
};
overview.controls = {
  a: 1,
  b: 2,
};

export default doc;
