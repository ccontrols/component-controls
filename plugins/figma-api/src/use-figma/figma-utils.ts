import { ReactNode, CSSProperties } from 'react';
import { Color, Component, Paint, Effect, TypeStyle } from 'figma-js';

export type FigmaToReactProps = {
  children?: ReactNode;
  style?: CSSProperties;
};

/**
 * convert figma Color object to css rgba string
 */
export const colorToRGBA = (color?: Color): string =>
  color
    ? `rgba(${Math.round(color.r * 255)}, ${Math.round(
        color.g * 255,
      )}, ${Math.round(color.b * 255)}, ${color.a})`
    : 'black';

const imageURL = (hash?: string): string | undefined => {
  if (hash) {
    const squash = hash.split('-').join('');
    return `url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/${squash.substring(
      0,
      4,
    )}/${squash.substring(4, 8)}/${squash.substring(8)})`;
  }
  return undefined;
};

/**
 * selects last element from an array. Used for figma Paint arrays
 */

export const arrayLast = <T extends unknown>(
  arr?: readonly T[],
): T | undefined => (arr?.length ? arr[arr.length - 1] : undefined);

/**
 * converts figma scaleMode to backgroundSize style
 * @param scaleMode = 'FILL'
 */
const backgroundSize = (scaleMode?: Paint['scaleMode']): string | undefined =>
  scaleMode === 'FILL' ? 'cover' : undefined;

/**
 * converts figma fill into a linear-gradient style
 * @param fill - a Paint object from fills array
 */

const paintToLinearGradient = (fill: Paint): string | undefined => {
  const handles = fill.gradientHandlePositions;
  if (handles && fill.gradientStops) {
    const handle0 = handles[0];
    const handle1 = handles[1];

    const ydiff = handle1.y - handle0.y;
    const xdiff = handle0.x - handle1.x;

    const angle = Math.atan2(-xdiff, -ydiff);
    const stops = fill.gradientStops
      .map(stop => {
        return `${colorToRGBA(stop.color)} ${Math.round(stop.position * 100)}%`;
      })
      .join(', ');
    return `linear-gradient(${angle}rad, ${stops})`;
  }
  return undefined;
};

/**
 * converts figma fill into a radial-gradient style
 * @param fill - a Paint object from fills array
 */

const paintToRadialGradient = (fill: Paint): string | undefined => {
  if (fill.gradientStops) {
    const stops = fill.gradientStops
      .map(stop => {
        return `${colorToRGBA(stop.color)} ${Math.round(stop.position * 60)}%`;
      })
      .join(', ');

    return `radial-gradient(${stops})`;
  }
  return undefined;
};

/**
 * converts figma fill into a background/opacity style
 * @param fill - a Paint object from fills array
 */
export const fillToStyle = (fill?: Paint): CSSProperties => {
  const style: CSSProperties = {};
  if (fill) {
    if (fill.type === 'SOLID') {
      style.backgroundColor = colorToRGBA(fill.color);
      style.opacity = fill.opacity;
    } else if (fill.type === 'IMAGE') {
      style.backgroundImage = imageURL(fill.imageRef);
      style.backgroundSize = backgroundSize(fill.scaleMode);
    } else if (fill.type === 'GRADIENT_LINEAR') {
      style.background = paintToLinearGradient(fill);
    } else if (fill.type === 'GRADIENT_RADIAL') {
      style.background = paintToRadialGradient(fill);
    }
  }
  return style;
};

/**
 * converts figma effect to drop shadow style
 * @param effect type = DROP_SHADOW
 */
const dropShadow = (effect: Effect): string | undefined =>
  effect.offset
    ? `${effect.offset.x}px ${effect.offset.y}px ${
        effect.radius
      }px ${colorToRGBA(effect.color)}`
    : undefined;

/**
 * converts figma effect to inner shadow style
 * @param effect type = INNER_SHADOW
 */

const innerShadow = (effect: Effect): string | undefined =>
  effect.offset
    ? `inset ${effect.offset.x}px ${effect.offset.y}px ${
        effect.radius
      }px ${colorToRGBA(effect.color)}`
    : undefined;

/**
 * converts figma effects to styles
 * @param effects - array of effects
 */
export const effectsToStyle = (
  effects?: Component['effects'],
): CSSProperties | undefined => {
  if (effects) {
    const style: CSSProperties = {};
    for (let i = 0; i < effects.length; i++) {
      const effect = effects[i];
      if (effect.type === 'DROP_SHADOW') {
        style.boxShadow = dropShadow(effect);
      } else if (effect.type === 'INNER_SHADOW') {
        style.boxShadow = innerShadow(effect);
      } else if (effect.type === 'LAYER_BLUR') {
        style.filter = `blur(${effect.radius}px)`;
      }
    }
    return style;
  }
  return undefined;
};

/**
 * converts a figma Paint stroke to style
 * @param stroke - Paint object with type and color
 * @param strokeWeight stroke size in pixels
 */
export const strokeToStyle = (
  stroke?: Paint,
  strokeWeight?: number,
): CSSProperties | undefined => {
  if (stroke && stroke.type === 'SOLID') {
    const weight = strokeWeight || 1;
    return {
      border: `${weight}px solid ${colorToRGBA(stroke.color)}`,
    };
  }
  return undefined;
};

/**
 * converts an array of figma corder radii to style
 * @param cornerRadii - mode.rectangleCornerRadii
 */
export const cornerToStyle = (
  cornerRadii?: Component['rectangleCornerRadii'],
): CSSProperties | undefined => {
  if (
    cornerRadii &&
    cornerRadii.length === 4 &&
    cornerRadii[0] + cornerRadii[1] + cornerRadii[2] + cornerRadii[3] > 0
  ) {
    return {
      borderRadius: `${cornerRadii[0]}px ${cornerRadii[1]}px ${cornerRadii[2]}px ${cornerRadii[3]}px`,
    };
  }
  return undefined;
};

export const fontStyleToStyle = (
  fontStyle?: TypeStyle,
): CSSProperties | undefined => {
  if (fontStyle) {
    return {
      fontSize: fontStyle.fontSize,
      fontWeight: fontStyle.fontWeight,
      fontFamily: fontStyle.fontFamily,
      textAlign: (fontStyle.textAlignHorizontal as unknown) as CSSProperties['textAlign'],
      fontStyle: fontStyle.italic ? 'italic' : 'normal',
      lineHeight: `${fontStyle.lineHeightPercent * 1.25}%`,
      letterSpacing: `${fontStyle.letterSpacing}px`,
    };
  }
  return undefined;
};
