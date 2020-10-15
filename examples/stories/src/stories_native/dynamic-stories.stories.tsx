/* eslint-disable react/display-name */
/** @jsx jsx */
import { jsx, Button } from 'theme-ui';
import { theme } from '@component-controls/components';

export default {
  title: 'Introduction/Dynamic stories',
  author: 'atanasster',
  description:
    "ESM story file to demostrate creating 'dynamic' stories at run-time. Creates a story iterating through each theme color",
};

export const buttonColors = () => {
  return Object.keys(theme.colors)
    .filter(color => typeof theme.colors[color] === 'string')
    .map(color => {
      return {
        name: color,
        source: `<Button sx={{ bg: '${color}'}}>Color ${color}: ${theme.colors[color]}</Button>`,
        renderFn: () => (
          <Button
            sx={{ bg: color }}
          >{`Color ${color}: ${theme.colors[color]}`}</Button>
        ),
      };
    });
};

buttonColors.dynamic = true;
