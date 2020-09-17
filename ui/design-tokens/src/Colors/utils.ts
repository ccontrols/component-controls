import parse from 'color-parse';
import { rgba } from 'polished';
import { RgbaColor } from 'polished/lib/types/color';

/**
 * convert color
 */
export const colorToStr = (
  color: string,
): {
  hex: string;
  rgba: RgbaColor;
} => {
  const parsed = parse(color);
  switch (parsed.space) {
    case 'hsl':
      return {
        hex: rgba(
          parsed.values[0],
          parsed.values[1],
          parsed.values[2],
          parsed.alpha,
        ),
        rgba: {
          red: parsed.values[0],
          green: parsed.values[1],
          blue: parsed.values[2],
          alpha: parsed.alpha,
        },
      };

    case 'rgb':
      return {
        hex: rgba(
          parsed.values[0],
          parsed.values[1],
          parsed.values[2],
          parsed.alpha,
        ),
        rgba: {
          red: parsed.values[0],
          green: parsed.values[1],
          blue: parsed.values[2],
          alpha: parsed.alpha,
        },
      };

    default:
      return {
        hex: color,
        rgba: {
          red: 0,
          green: 0,
          blue: 0,
          alpha: 1,
        },
      };
  }
};
