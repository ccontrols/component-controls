import parse from 'color-parse';
import { rgb, rgba, hsl } from 'polished';

/**
 * convert color
 */
export const colorToStr = (color: string): string => {
  const parsed = parse(color);
  switch (parsed.space) {
    case 'hsl':
      return hsl(parsed.values[0], parsed.values[1], parsed.values[2]);
    case 'rgb':
      return rgb(parsed.values[0], parsed.values[1], parsed.values[2]);
    case 'rgbs':
      return rgba(
        parsed.values[0],
        parsed.values[1],
        parsed.values[2],
        parsed.values[3],
      );

    default:
      return color;
  }
};
