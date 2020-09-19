import tinycolor from 'tinycolor2';

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

export const mostReadable = (color: string) =>
  tinycolor.mostReadable(color, ['#000000', '#ffffff']).toString('hex');
