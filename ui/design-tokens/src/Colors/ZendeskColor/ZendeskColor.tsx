/** @jsx jsx */
import { FC } from 'react';
import { jsx, Theme } from 'theme-ui';
import { CopyContainer } from '@component-controls/components';
import { colorToStr } from '../utils';
import { ColorBlockProps } from '../../types';
import { GridContainerProps, GridContainer } from '../../containers';

/**
 * Color item displaying the color as a small block with the color name and hex value.
 * Design inspired by [Zendesk Garden](https://zendeskgarden.github.io/react-components/theming/#!/PALETTE).
 */
export const ZendeskColor: FC<ColorBlockProps> = ({ name, color }) => {
  const colorValue = typeof color === 'string' ? color : color.value;
  const { hex } = colorToStr(colorValue);
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        bg: 'background',
        minWidth: 70,
        fontSize: 0,
        maxWidth: 120,
        border: (t: Theme) => `1px solid ${t.colors?.shadow}`,
        borderRadius: 1,
        boxShadow: (t: Theme) => `0px 8px 12px 0px ${t.colors?.shadow}`,
      }}
    >
      <CopyContainer value={hex} name={name}>
        <div
          sx={{
            bg: colorValue,
            ':after': {
              content: '""',
              display: 'block',
              paddingBottom: '100%',
            },
          }}
        />
      </CopyContainer>
      <div sx={{ p: 1, display: 'flex', flexDirection: 'column' }}>
        <div sx={{ fontWeight: 'heading' }}>{name}</div>
        <div>{hex}</div>
      </div>
    </div>
  );
};

/**
 *
 * palette displayed with ZendeskColor items
 * using a css grid for the dsplay
 */
export const ZendeskColorPalette: FC<
  Omit<GridContainerProps, 'children'>
> = props => (
  <GridContainer width={80} gap={2} {...props}>
    {({ name, value }) => (
      <ZendeskColor key={`color_item_${name}}`} name={name} color={value} />
    )}
  </GridContainer>
);
