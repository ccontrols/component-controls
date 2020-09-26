/** @jsx jsx */
import { FC, ReactNode, Fragment, useState } from 'react';
import { jsx, Theme } from 'theme-ui';
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
import { FlexContainerProps, FlexContainer } from '../../components';

/**
 * Color item displaying as a row, with color, name, description, var and sas variables and contrast ratio.
 * Design inspired from [Duet](https://www.duetds.com/tokens/#color).
 */

export const DuetColor: FC<ColorBlockProps> = ({ name, color }) => {
  const [hover, setHover] = useState(false);
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
    <div sx={{ display: 'flex', flex: '1' }}>
      <div
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          fontSize: 0,
          bg: hover ? 'gray' : 'background',
        }}
      >
        <div
          sx={{ width: '25%', display: 'flex', flexDirection: 'column', px: 1 }}
        >
          <CopyContainer value={hex} name={colorName}>
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
        </div>
        <div
          sx={{ width: '28%', display: 'flex', flexDirection: 'column', px: 1 }}
        >
          <div sx={{ fontWeight: 'bold', fontSize: 2 }}>{colorName}</div>
          <p> {description}</p>
        </div>
        <div
          sx={{ width: '25%', display: 'flex', flexDirection: 'column', px: 1 }}
        >
          <code sx={{ my: 1, bg: 'gray' }}>{sass}</code>
          <code sx={{ m: 0, bg: 'gray' }}>{varName}</code>
        </div>
        <div sx={{ width: '10%', textAlign: 'center' }}>
          <span sx={{ mr: 1 }}>{`${contrast.toFixed(2)}:1`}</span>
          {contrast < colorContrast.small.ratio ? (
            <XIcon sx={{ color: '#de2362' }} />
          ) : (
            <CheckIcon sx={{ color: '#00875a' }} />
          )}
        </div>
        <div sx={{ width: '7%', textAlign: 'center' }}>
          {statusNode(status)}
        </div>
      </div>
    </div>
  );
};

const HeaderText: FC<{ width: string; children: string }> = ({
  width,
  children,
}) => (
  <div
    sx={{
      width,
      px: 1,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      fontSize: 1,
    }}
  >
    {children}
  </div>
);
/**
 *
 * palette displayed with CedarColor items
 * using a css flex display direction column
 */
export const DuetColorPalette: FC<Omit<
  FlexContainerProps,
  'children' | 'direction'
>> = props => (
  <Fragment>
    <div
      sx={{
        display: 'flex',
        flex: '1',
        flexDirection: 'row',
        bg: 'background',
        borderBottom: (t: Theme) => ` 1px solid  ${t.colors?.shadow}`,
      }}
    >
      <HeaderText width="25%">Example</HeaderText>
      <HeaderText width="28%">Description</HeaderText>
      <HeaderText width="25%">Token</HeaderText>
      <HeaderText width="10%">Contrast</HeaderText>
      <HeaderText width="7%">Status</HeaderText>
    </div>
    <FlexContainer direction="column" {...props}>
      {({ name, value }) => (
        <DuetColor key={`color_item_${name}}`} name={name} color={value} />
      )}
    </FlexContainer>
  </Fragment>
);
