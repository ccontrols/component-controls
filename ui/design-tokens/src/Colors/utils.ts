import tinycolor from 'tinycolor2';
import {
  colorContrast,
  ContrastGrades,
  defaultBlackTextColor,
  defaultWhiteTextColor,
} from '../types';
/**
 * convert color
 */
export const colorToStr = (
  color: string,
): {
  hex: string;
  rgba: tinycolor.ColorFormats.RGBA;
} => {
  const parsed = tinycolor(color);
  return {
    hex: parsed.toString('hex'),
    rgba: parsed.toRgb(),
  };
};

export const mostReadable = (
  color: string,
  blackTextColor: string | undefined = defaultBlackTextColor,
  whiteTextColor: string | undefined = defaultWhiteTextColor,
): string =>
  tinycolor
    .mostReadable(color, [whiteTextColor, blackTextColor])
    .toString('hex');

export const contrastGrade = (contrast: number): ContrastGrades => {
  if (contrast >= colorContrast.AAA.ratio) {
    return 'AAA';
  } else if (contrast >= colorContrast.small.ratio) {
    return 'AA';
  } else if (contrast >= colorContrast.large.ratio) {
    return 'AA+';
  } else {
    return 'F';
  }
};
