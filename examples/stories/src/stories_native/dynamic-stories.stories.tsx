/* eslint-disable react/display-name */
/** @jsx jsx */
import { jsx, Button } from 'theme-ui';
import { DynamicExamples } from '@component-controls/core';
import { theme } from '@component-controls/components';

export default {
  title: 'ESM/Dynamic stories',
  author: 'atanasster',
  order: 11,
  description:
    "You can create 'dynamic' stories - below are created separate stories for each theme color.",
};

export const buttonColors = (): DynamicExamples => {
  const colors = theme.colors;
  return colors
    ? Object.keys(colors)
        .filter(color => typeof colors[color] === 'string')
        .map(color => {
          return {
            name: color,
            description: `theme.colors.${color}: **${colors[color]}**`,
            source: `<Button sx={{ bg: '${color}'}}>Color ${colors[color]}</Button>`,
            renderFn: () => (
              <Button sx={{ bg: color }}>{`Color ${colors[color]}`}</Button>
            ),
          };
        })
    : [];
};

buttonColors.dynamic = true;
