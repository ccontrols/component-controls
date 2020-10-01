/** @jsx jsx */
import { FC, useState, useMemo } from 'react';
import { jsx } from 'theme-ui';
import tinycolor from 'tinycolor2';
import { CopyContainer } from '@component-controls/components';
import { colorToStr, mostReadable, contrastGrade } from '../utils';
import { ColorBlockProps } from '../../types';
import { FlexContainerProps, FlexContainer } from '../../components';

/**
 * Color item displaying the color as a table row, expanding on hover to display the contrast and passing level.
 * Design inspired by GitLab's [Pajamas](https://design.gitlab.com/product-foundations/colors/).
 */

export const PajamasColor: FC<ColorBlockProps> = ({ name, color, hover }) => {
  const [hoverMe, setHoverMe] = useState(false);
  const colorValue = typeof color === 'string' ? color : color.value;
  const { hex } = colorToStr(colorValue);
  const textColor = mostReadable(hex);
  const onMouseEvents = useMemo(
    () => ({
      onMouseOver: () => setHoverMe(true),
      onMouseLeave: () => setHoverMe(false),
    }),
    [],
  );
  const contrastWhite = tinycolor.readability(hex, '#ffffff');
  const contrastGradeWhite = contrastGrade(contrastWhite);
  const contrastBlack = tinycolor.readability(hex, '#000000');
  const contrastGradeBlack = contrastGrade(contrastBlack);
  return (
    <div sx={{ display: 'flex', flex: '1' }}>
      <div
        {...onMouseEvents}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          fontSize: 0,
          transition: 'all .2s',
          width: '100%',
          border: `1px solid  ${colorValue}`,
        }}
      >
        <CopyContainer value={hex} name={name}>
          <div
            sx={{
              minWidth: '100%',
              display: 'flex',
              flexDirection: 'row',
              bg: colorValue,
              color: textColor,
              height: 35,
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: 0,
              transition: 'all .2s',
              mr: hoverMe ? -3 : 0,
              px: 3,
            }}
          >
            <div
              sx={{
                fontWeight: hoverMe ? 'bold' : 'normal',
              }}
            >
              {name || hex}
            </div>
            <div
              sx={{
                ...(hover || hoverMe ? {} : { visibility: 'hidden', width: 0 }),
              }}
            >
              {hex}
            </div>
          </div>
        </CopyContainer>
        {hoverMe && (
          <div
            sx={{
              bg: 'background',
              color: 'text',
              display: 'flex',
              flexDirection: 'column',
              px: 3,
              py: 4,
              fontSize: 1,
            }}
          >
            <div sx={{ fontWeight: 'bold' }}>
              Passing level and contrast ratio
            </div>
            <div
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <div
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  mr: 3,
                }}
              >
                <div sx={{ bg: colorValue, color: 'black', px: 1, mr: 2 }}>
                  Text
                </div>
                <div
                  sx={{
                    px: 1,
                    border: `1px solid ${colorValue}`,
                    color: contrastGradeBlack === 'F' ? '#c91c00' : 'text',
                  }}
                >
                  {`${contrastGradeBlack} (${contrastBlack.toFixed(1)})`}
                </div>
              </div>
              <div
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <div sx={{ bg: colorValue, color: 'white', px: 1 }}>Text</div>
                <div
                  sx={{
                    px: 1,
                    border: `1px solid ${colorValue}`,
                    color: contrastGradeWhite === 'F' ? '#c91c00' : 'text',
                  }}
                >
                  {`${contrastGradeWhite} (${contrastWhite.toFixed(1)})`}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/**
 *
 * palette displayed with PajamasColor items
 * using a css flex display direction column
 */
export const PajamasColorPalette: FC<Omit<
  FlexContainerProps,
  'children' | 'direction'
>> = props => (
  <FlexContainer direction="column" sx={{ width: 360 }} {...props}>
    {({ name, value, hover }) => (
      <PajamasColor
        key={`color_item_${name}}`}
        name={name}
        color={value}
        hover={hover}
      />
    )}
  </FlexContainer>
);
