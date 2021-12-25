/** @jsx jsx */
import { FC, useState, Fragment } from 'react';
import { jsx } from 'theme-ui';
import tinycolor from 'tinycolor2';
import { CircleSlashIcon } from '@primer/octicons-react';
import copy from 'copy-to-clipboard';
import { colorToStr, mostReadable } from '../utils';
import {
  ColorBlockProps,
  ColorValue,
  colorContrast,
  defaultWhiteTextColor,
  ThemeColorProps,
} from '../../types';
import { GridContainerProps, GridContainer } from '../../containers';

const CopyItem: FC<{ name: string; value?: string }> = ({ name, value }) => {
  const [hover, setHover] = useState(false);
  const [copied, setCopied] = useState(false);
  return value ? (
    <div
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        copy(value);
        setCopied(true);
      }}
      sx={{
        cursor: 'pointer',
        flex: '1 1 0px',
        p: 2,
        borderRight: 'solid 2px rgba(255,255,255,0.5)',
        bg: hover ? 'rgba(255,255,255,0.2)' : 'transparent',
      }}
    >
      {copied ? (
        <div>Copied</div>
      ) : (
        <Fragment>
          <div>Copy</div>
          <div>{name}</div>
        </Fragment>
      )}
    </div>
  ) : null;
};
/**
 * Color item displaying the color as a block with values for hex, class, and sass can be copied to clipboard on hover.
 * Design inspired by [E-Trade Design System](https://docs.etrade.design/colors).
 */
export const ETradeColor: FC<ColorBlockProps> = ({
  name,
  color,
  blackTextColor = defaultWhiteTextColor,
}) => {
  const [hover, setHover] = useState(false);
  const colorObj: ColorValue =
    typeof color === 'string' ? { value: color } : color;
  const {
    value: colorValue,
    name: colorName,
    sass,
    css,
    description,
  } = colorObj;

  const { hex } = colorToStr(colorValue);
  const contrastColor = mostReadable(hex);
  const contrast = tinycolor.readability(hex, blackTextColor);
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        bg: 'background',
        width: 210,
        fontSize: 0,
      }}
    >
      <div
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        sx={{
          bg: colorValue,
          color: contrastColor,
          height: 85,
          position: 'relative',
        }}
      >
        <div
          sx={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            lineHeight: 1.4,
            p: 2,
          }}
        >
          <div sx={{ fontWeight: 'bold' }}>{name}</div>
          <div>{hex}</div>
          <div>{css}</div>

          <div>{sass}</div>
        </div>
        {hover && (
          <div
            sx={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              zIndex: 1,
              bg: colorValue,
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <CopyItem name="hex" value={hex} />
            <CopyItem name="class" value={css} />
            <CopyItem name="SASS" value={sass} />
          </div>
        )}
      </div>
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 2,
        }}
      >
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div>{colorName}</div>
          <div sx={{ lineHeight: 1.4 }}>{description}</div>
          {contrast < colorContrast.small.ratio && (
            <div sx={{ fontWeight: 'bold' }}>
              <CircleSlashIcon
                sx={{ color: '#c00', mr: 1, width: 12, height: 12 }}
              />
              Not for text
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/**
 *
 * palette displayed with ETradeColor items
 * using a css grid for the dsplay
 */
export const ETradeColorPalette: FC<
  ThemeColorProps & Omit<GridContainerProps, 'children'>
> = props => {
  const { blackTextColor, ...rest } = props;
  return (
    <GridContainer width={210} gap={2} {...rest}>
      {({ name, value }) => (
        <ETradeColor
          key={`color_item_${name}}`}
          name={name}
          color={value}
          blackTextColor={blackTextColor}
        />
      )}
    </GridContainer>
  );
};
