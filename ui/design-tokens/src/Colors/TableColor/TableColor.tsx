/** @jsx jsx */
import { FC, Fragment } from 'react';
import { jsx, Theme } from 'theme-ui';
import tinycolor from 'tinycolor2';
import { CopyContainer, ExternalLink } from '@component-controls/components';
import { colorToStr, mostReadable, contrastGrade } from '../utils';
import {
  ColorBlockProps,
  ColorValue,
  defaultWhiteTextColor,
  defaultBlackTextColor,
  colorContrast,
  ThemeColorProps,
} from '../../types';
import {
  TableContainerProps,
  TableContainer,
  TableRowContainer,
  TableContainerHeaderProps,
  TableColumn,
} from '../../containers';

/**
 * Color item displaying as a table row, with support for dark mode colors and AA accessibility tests. Design created to accomodate [theme-ui](https://theme-ui.com/home)-type color palettes.
 * Custom design created by component-controls.
 */
export const TableColor: FC<ColorBlockProps> = props => (
  <TableRowContainer>
    <BaseTableColor {...props} />
  </TableRowContainer>
);

const ColorBox: FC<{ color: string; name?: string }> = ({ color, name }) => {
  const textColor = mostReadable(color);
  const colorValue = color.toUpperCase();
  return (
    <CopyContainer
      value={colorValue}
      name={name}
      sx={{
        height: 35,
        minWidth: 65,
        mr: 2,
        bg: color,
        color: textColor,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 0,
        fontWeight: 'body',
        px: 1,
        border: (t: Theme) => `1px solid ${t.colors?.shadow}`,
      }}
    >
      <div
        sx={{
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        {colorValue}
      </div>
    </CopyContainer>
  );
};

const ColorContrastBox: FC<{ color: string; bg: string }> = ({ color, bg }) => {
  const contrast = tinycolor.readability(bg, color);
  const grade = contrastGrade(contrast);
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        px: 1,
      }}
    >
      <div
        sx={{
          bg: () => {
            switch (grade) {
              case 'F':
                return '#f44336';
              default:
                return bg;
            }
          },
          color: () => {
            switch (grade) {
              case 'F':
                return '#ffffff';
              default:
                return color;
            }
          },
          width: 38,
          textAlign: 'center',
        }}
      >
        {grade}
      </div>
    </div>
  );
};
const BaseTableColor: FC<ColorBlockProps & { hasDark?: boolean }> = ({
  name,
  color,
  blackTextColor = defaultBlackTextColor,
  whiteTextColor = defaultWhiteTextColor,
  hasDark,
}) => {
  const colorObj: ColorValue =
    typeof color === 'string' ? { value: color, name } : color;
  const { value: colorValue, name: colorName = name, dark } = colorObj;
  const darkColorObj: ColorValue | undefined =
    typeof dark === 'string' ? { value: dark } : dark;
  const { value: darkColor } = darkColorObj || {};
  const { hex } = colorToStr(colorValue);
  return (
    <tr>
      <td>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <ColorBox color={colorValue} name={colorName} />
          {darkColor && (
            <ColorBox
              color={darkColor}
              name={colorName ? `${colorName} (dark)` : undefined}
            />
          )}
        </div>
      </td>
      <td>
        <div sx={{ pl: 2 }}>{colorName}</div>
      </td>
      <td>
        <ColorContrastBox bg={hex} color={blackTextColor} />
      </td>
      <td
        sx={{
          borderRight: (t: Theme) =>
            hasDark ? `1px solid  ${t.colors?.shadow}` : undefined,
        }}
      >
        <ColorContrastBox bg={hex} color={whiteTextColor} />
      </td>
      {(hasDark || darkColor) && (
        <Fragment>
          <td>
            {darkColor && (
              <ColorContrastBox bg={darkColor} color={whiteTextColor} />
            )}
          </td>
          <td>
            {darkColor && (
              <ColorContrastBox bg={darkColor} color={blackTextColor} />
            )}
          </td>
        </Fragment>
      )}
    </tr>
  );
};

export const ColorAALegend: FC = () => (
  <table>
    <thead>
      <tr
        sx={{
          '& > th': {
            borderBottom: (t: Theme) => `1px solid  ${t.colors?.shadow}`,
            fontSize: 2,
            fontWeight: 400,
            px: 2,
          },
        }}
      >
        <th>Score</th>
        <th>Contrast ratio</th>
        <th>Result</th>
      </tr>
    </thead>
    <tbody
      sx={{
        '& > tr > td': {
          px: 2,
        },
      }}
    >
      <tr>
        <td>
          <ColorContrastBox bg="lightgray" color="black" />
        </td>
        <td>{`>= ${colorContrast.AAA.ratio.toFixed(1)}:1`}</td>
        <td>
          Passes{' '}
          <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_customize&versions=2.0">
            WCAG 2.0
          </ExternalLink>{' '}
          AAA
        </td>
      </tr>
      <tr>
        <td>
          <ColorContrastBox bg="#027AC5" color="black" />
        </td>
        <td>{`>= ${colorContrast.small.ratio.toFixed(1)}:1`}</td>
        <td>
          Passes{' '}
          <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_customize&versions=2.0">
            WCAG 2.0
          </ExternalLink>{' '}
          AA
        </td>
      </tr>
      <tr>
        <td>
          <ColorContrastBox bg="#5C6AC4" color="black" />
        </td>
        <td>{`>= ${colorContrast.large.ratio.toFixed(1)}:1`}</td>
        <td>
          Passes{' '}
          <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_customize&versions=2.0">
            WCAG 2.0
          </ExternalLink>{' '}
          Large Text AA
        </td>
      </tr>
      <tr>
        <td>
          <ColorContrastBox bg="black" color="black" />
        </td>
        <td>{`< ${colorContrast.large.ratio.toFixed(1)}:1`}</td>
        <td>AA Test failed</td>
      </tr>
    </tbody>
  </table>
);

const TableColorPaletteHeader: FC<TableContainerHeaderProps &
  Required<ThemeColorProps>> = ({
  columns,
  whiteTextColor,
  blackTextColor,
}) => (
  <thead>
    <tr>
      {columns.map((column, index) => (
        <th
          key={`table_${
            typeof column.title === 'string' ? column.title : ''
          }_${index}`}
          sx={{
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            textAlign: 'left',
            fontSize: 2,
            fontWeight: 300,
            py: 2,
            px: 2,
            ...column.sx,
          }}
          {...column.props}
        >
          {column.props?.colSpan ? column.title : null}
        </th>
      ))}
    </tr>
    <tr>
      {columns.map((column, index) =>
        column.props?.colSpan ? (
          <Fragment
            key={`table_header${
              typeof column.title === 'string' ? column.title : ''
            }_${index}`}
          >
            <th sx={{ width: '65px' }}>
              <ColorBox color={whiteTextColor} />
            </th>
            <th sx={{ width: '65px' }}>
              <ColorBox color={blackTextColor} />
            </th>
          </Fragment>
        ) : (
          <th
            key={`table_header${
              typeof column.title === 'string' ? column.title : ''
            }_${index}`}
            sx={{
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              textAlign: 'left',
              fontSize: 2,
              fontWeight: 300,
              py: 2,
              px: 2,
              ...column.sx,
            }}
            {...column.props}
          >
            {column.title}
          </th>
        ),
      )}
    </tr>
  </thead>
);
/**
 *
 * palette displayed with TableColor items
 * using a css flex display direction column
 */
export const TableColorPalette: FC<ThemeColorProps &
  Omit<TableContainerProps, 'children' | 'columns'>> = props => {
  const {
    blackTextColor = defaultBlackTextColor,
    whiteTextColor = defaultWhiteTextColor,
    ...rest
  } = props;
  const { palette } = rest;
  const hasDark = Object.keys(palette).some(key => {
    const color = palette[key];
    return typeof color === 'object' && typeof color.dark !== 'undefined';
  });
  const columns: TableColumn[] = [
    {
      title: hasDark ? 'color / dark' : 'color',
      sx: { pl: hasDark ? 4 : 2, width: hasDark ? 200 : 140 },
    },
    {
      title: 'name',
    },
    {
      title: 'AA color',
      props: { colSpan: 2 },
      sx: {
        width: '140px',
        textAlign: 'center',
      },
    },
    ...(hasDark
      ? [
          {
            title: 'AA dark',
            props: { colSpan: 2 },
            sx: {
              width: '140px',
              textAlign: 'center',
            },
          } as TableColumn,
        ]
      : []),
  ];
  return (
    <TableContainer
      columns={columns}
      sx={{
        borderLeft: (t: Theme) => `1px solid  ${t.colors?.shadow}`,
        borderRight: (t: Theme) => `1px solid  ${t.colors?.shadow}`,
        '& > tbody > tr > td': {
          py: 2,
        },
      }}
      header={
        <TableColorPaletteHeader
          columns={columns}
          blackTextColor={blackTextColor}
          whiteTextColor={whiteTextColor}
        />
      }
      {...rest}
    >
      {({ name, value }) => (
        <BaseTableColor
          key={`color_item_${name}}`}
          name={name}
          color={value}
          hasDark={hasDark}
          blackTextColor={blackTextColor}
          whiteTextColor={whiteTextColor}
        />
      )}
    </TableContainer>
  );
};
