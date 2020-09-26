/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import { CopyContainer } from '@component-controls/components';
import tinycolor from 'tinycolor2';
import { CheckCircleFillIcon, XCircleFillIcon } from '@primer/octicons-react';
import { colorToStr, mostReadable } from '../utils';
import { ColorBlockProps, ColorValue, colorContrast } from '../../types';
import { GridContainerProps, GridContainer } from '../../components';

const PassFail: FC<{ status: 'pass' | 'fail' }> = ({ status }) => (
  <div
    sx={{
      bg: 'lightgrey',
      display: 'inline-block',
      borderRadius: 4,
    }}
  >
    <div sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      {status}
      {status === 'fail' ? (
        <XCircleFillIcon sx={{ pl: 1, color: '#b42818' }} />
      ) : (
        <CheckCircleFillIcon sx={{ pl: 1, color: '#357e38' }} />
      )}
    </div>
  </div>
);
const ContrastTest: FC<{
  bg: string;
  color: string;
}> = ({ bg, color }) => {
  const contrast = tinycolor.readability(bg, color);

  return (
    <tr>
      <td sx={{ color }}>{`${color} (${contrast.toFixed(2)})`}</td>
      <td sx={{ textAlign: 'right', py: 1 }}>
        <PassFail
          status={contrast >= colorContrast.large.ratio ? 'pass' : 'fail'}
        />
      </td>
      <td sx={{ textAlign: 'right', py: 1 }}>
        <PassFail
          status={contrast >= colorContrast.small.ratio ? 'pass' : 'fail'}
        />
      </td>
    </tr>
  );
};
/**
 * Color item displaying the color as a block with [AA](https://www.w3.org/TR/WCAG/) color contrast tests.
 * Design inspired from [Bolt](https://boltdesignsystem.com/pattern-lab/?p=visual-styles-color-system).
 */
export const BoltColor: FC<ColorBlockProps> = ({ name, color }) => {
  const colorObj: ColorValue =
    typeof color === 'string' ? { value: color } : color;
  const { value: colorValue, varName } = colorObj;

  const { hex } = colorToStr(colorValue);
  const textColor = mostReadable(hex);
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <CopyContainer value={hex} name={name}>
        <div
          sx={{
            bg: colorValue,
            borderRadius: '.75em',
            boxShadow: '0 1px 2px 1px rgba(6,10,36,.08)',
            height: 180,
            position: 'relative',
          }}
        >
          <div
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: 3,
              fontWeight: 'bold',
              color: textColor,
              px: 2,
              pt: 2,
            }}
          >
            <div>{name}</div>
            <div>{hex}</div>
          </div>
          <div
            sx={{
              position: 'absolute',
              left: 10,
              bottom: 1,
              right: 10,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}
          >
            <table
              sx={{
                width: '100%',
                fontSize: [1, 1, 0],
                borderSpacing: 0,
                td: { borderTop: `1px solid ${textColor}` },
              }}
            >
              <colgroup>
                <col span={1} />
                <col span={1} sx={{ width: '30%' }} />
                <col span={1} sx={{ width: '30%' }} />
              </colgroup>
              <tbody>
                <tr sx={{ color: textColor }}>
                  <td colSpan={3}>{varName}</td>
                </tr>
                <tr sx={{ color: textColor }}>
                  <td>Text size</td>
                  <td
                    sx={{
                      textAlign: 'right',
                      fontSize: colorContrast.large.fontSize,
                    }}
                  >
                    Aa
                  </td>
                  <td
                    sx={{
                      textAlign: 'right',
                      fontSize: colorContrast.small.fontSize,
                    }}
                  >
                    Aa
                  </td>
                </tr>
                <ContrastTest bg={colorValue} color="#fff" />
                <ContrastTest bg={colorValue} color="#000" />
              </tbody>
            </table>
          </div>
        </div>
      </CopyContainer>
    </div>
  );
};

/**
 *
 * palette displayed with BoltColor items
 * using a css grid for the dsplay
 */
export const BoltColorPalette: FC<Omit<
  GridContainerProps,
  'children'
>> = props => (
  <GridContainer {...props}>
    {({ name, value }) => (
      <BoltColor key={`color_item_${name}}`} name={name} color={value} />
    )}
  </GridContainer>
);
