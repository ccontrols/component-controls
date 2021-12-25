/** @jsx jsx */
import { FC } from 'react';
import { jsx, Theme } from 'theme-ui';
import { CopyContainer, Popover } from '@component-controls/components';
import { colorToStr } from '../utils';
import { ColorBlockProps, ColorValue } from '../../types';
import { FlexContainerProps, FlexContainer } from '../../containers';

/**
 * Color item displaying the color as a row with a color circle with CSS var name and on click popup.
 * Design inspired by [PatternFly](https://www.patternfly.org/v4/guidelines/colors/).
 */

export const PatternFlyColor: FC<ColorBlockProps> = ({ name, color }) => {
  const colorObj: ColorValue =
    typeof color === 'string' ? { value: color } : color;
  const { value: colorValue, css, description, name: colorName } = colorObj;

  const { hex } = colorToStr(colorValue);
  const cssNode = (
    <div
      sx={{
        bg: 'gray',
        px: 1,
        fontSize: 0,
        border: `1px solid grey`,
      }}
    >
      {css}
    </div>
  );
  return (
    <div sx={{ display: 'flex', flex: '1' }}>
      <div
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          fontSize: 0,
          p: 2,
        }}
      >
        <Popover
          sx={{
            cursor: 'pointer',
          }}
          trigger="click"
          placement="right-end"
          tooltip={() => (
            <div
              sx={{
                p: 2,
                fontSize: 1,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div sx={{ fontWeight: 'bold', mt: 3 }}>Global CSS variable</div>
              {cssNode}
              <div sx={{ fontWeight: 'bold', mt: 3 }}>Hex value</div>
              <CopyContainer value={hex} name={name}>
                {hex}
              </CopyContainer>
              <div sx={{ fontWeight: 'bold', mt: 3 }}>Usage</div>
              <p sx={{ maxWidth: 300, my: 1, fontSize: 0 }}>{description}</p>
            </div>
          )}
        >
          <div
            sx={{
              width: 45,
              height: 45,
              borderRadius: '50%',
              bg: colorValue,
              mr: 3,
              ':hover': {
                boxShadow: (t: Theme) => `4px 4px ${t.colors?.shadow}`,
              },
            }}
          />
        </Popover>

        <div
          sx={{
            justifyContent: 'space-between',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div sx={{ fontWeight: 'bold' }}>{`${hex || colorName}${
            colorName && hex ? ` (${colorName})` : ''
          }`}</div>
          {cssNode}
        </div>
      </div>
    </div>
  );
};

/**
 *
 * palette displayed with PatternFlyColor items
 * using a css flex display direction column
 */
export const PatternFlyColorPalette: FC<
  Omit<FlexContainerProps, 'children' | 'direction'>
> = props => (
  <FlexContainer direction="column" {...props}>
    {({ name, value }) => (
      <PatternFlyColor key={`color_item_${name}}`} name={name} color={value} />
    )}
  </FlexContainer>
);
