/** @jsx jsx */
import { FC, ReactNode } from 'react';
import { jsx } from 'theme-ui';
import { CopyContainer } from '@component-controls/components';
import tinycolor from 'tinycolor2';
import {
  CheckIcon,
  XIcon,
  CheckCircleFillIcon,
  AlertIcon,
  XCircleFillIcon,
} from '@primer/octicons-react';
import { colorToStr } from '../utils';
import {
  ColorBlockProps,
  ColorValue,
  colorContrast,
  TokenStatus,
} from '../../types';
import { TableContainerProps, TableContainer } from '../../components';

/**
 * Color item displaying as a row, with color, name, description, var, and sass variables as well as the contrast ratio ad status.
 * Design inspired by [Duet](https://www.duetds.com/tokens/#color).
 */

export const DuetColor: FC<ColorBlockProps> = props => (
  <table>
    <tbody>
      <BaseDuetColor {...props} />
    </tbody>
  </table>
);

const BaseDuetColor: FC<ColorBlockProps> = ({ name, color }) => {
  const colorObj: ColorValue =
    typeof color === 'string' ? { value: color } : color;
  const {
    value: colorValue,
    name: colorName = name,
    description,
    sass,
    varName,
    status,
  } = colorObj;
  const statusNode = (s?: TokenStatus): ReactNode => {
    switch (s) {
      case 'ok':
        return <CheckCircleFillIcon sx={{ color: '#00875a' }} />;
      case 'error':
        return <XCircleFillIcon sx={{ color: '#de2362' }} />;
      case 'warning':
        return <AlertIcon sx={{ color: '#e9c46a' }} />;
      default:
        return null;
    }
  };
  const { hex, rgba } = colorToStr(colorValue);
  const contrast = tinycolor.readability(hex, '#ffffff');
  return (
    <tr>
      <td>
        <CopyContainer value={hex} name={colorName} sx={{ width: '100%' }}>
          <div
            sx={{
              height: 50,
              bg: colorValue,
              mr: 3,
            }}
          />
        </CopyContainer>
        <div sx={{ mr: 3 }}>{hex}</div>
        <div sx={{ mr: 3 }}>{`rgb${rgba.a !== 1 ? 'a' : ''}(${rgba.r}, ${
          rgba.g
        }, ${rgba.b}${rgba.a !== 1 ? `, ${rgba.a}` : ''})`}</div>
      </td>
      <td>
        <div sx={{ fontWeight: 'bold', fontSize: 2 }}>{colorName}</div>
        <p> {description}</p>
      </td>
      <td>
        <code sx={{ my: 1, bg: 'gray' }}>{sass}</code>
        <code sx={{ m: 0, bg: 'gray' }}>{varName}</code>
      </td>
      <td sx={{ textAlign: 'center' }}>
        <span sx={{ mr: 1 }}>{`${contrast.toFixed(2)}:1`}</span>
        {contrast < colorContrast.small.ratio ? (
          <XIcon sx={{ color: '#de2362' }} />
        ) : (
          <CheckIcon sx={{ color: '#00875a' }} />
        )}
      </td>
      <td sx={{ textAlign: 'center' }}>{statusNode(status)}</td>
    </tr>
  );
};

/**
 *
 * palette displayed with DuetColor items
 * using a css flex display direction column
 */
export const DuetColorPalette: FC<Omit<
  TableContainerProps,
  'children' | 'columns'
>> = props => (
  <TableContainer
    columns={[
      { title: 'Example', sx: { width: '25%' } },
      { title: 'Description', sx: { width: '28%' } },
      { title: 'Token', sx: { width: '25%' } },
      { title: 'Contrast', sx: { width: '10%' } },
      { title: 'Status', sx: { width: '7%' } },
    ]}
    sx={{
      border: 'none',
      '& > tbody > tr': {
        fontSize: 0,
        transition: 'background .3s ease',
        ':hover': {
          bg: 'gray',
        },
      },
      '& > thead > tr > th': {
        textAlign: 'left',
        fontSize: 2,
        fontWeight: 'normal',
        pb: 2,
      },
    }}
    {...props}
  >
    {({ name, value }) => (
      <BaseDuetColor key={`color_item_${name}}`} name={name} color={value} />
    )}
  </TableContainer>
);
