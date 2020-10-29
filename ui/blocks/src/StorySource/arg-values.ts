import {
  StoryArguments,
  CodeLocation,
  ComponentControls,
  getControlValue,
  getControlValues,
} from '@component-controls/core';
import stringifyObject from 'stringify-object';
import { PrismTheme } from 'prism-react-renderer';

type ArgType = 'loc' | 'usage';
type ArgumentLocs = { type: ArgType; shorthand?: boolean } & CodeLocation;
interface ArgumentLocations {
  name: string;
  index: number;
  locs: ArgumentLocs[];
  controls: ComponentControls;
}

interface ArgLocation {
  name: string;
  index: number;
  type: ArgType;
  controls: ComponentControls;
  shorthand?: boolean;
}
export const getArgumentsLocations = (
  controls: ComponentControls = {},
  args?: StoryArguments,
): ArgumentLocations[] =>
  args
    ? args.reduce((acc: any, a, index) => {
        if (Array.isArray(a.value)) {
          return [
            ...acc,
            ...getArgumentsLocations(
              a.name ? (controls[a.name].value as ComponentControls) : controls,
              a.value,
            ),
          ];
        }
        const locs: ArgumentLocs[] = [];
        if (a.loc) {
          locs.push({
            type: 'loc',
            ...a.loc,
          });
        }
        if (a.usage) {
          const usageLocs: ArgumentLocs[] = a.usage.map(u => ({
            type: 'usage',
            ...u.loc,
            shorthand: u.shorthand,
          }));
          locs.push(...usageLocs);
        }

        return [
          ...acc,
          {
            name: a.value,
            controls,
            index,
            locs,
          },
        ];
      }, [])
    : undefined;

export const getTagColor = (tag: ArgLocation, theme: PrismTheme): string => {
  const colorIdx = tag.index % (theme.styles.length - 1);
  const style = theme.styles[colorIdx];
  return style.style.color || theme.plain.color || '#fff';
};

export const findTagLocation = (
  tags: ArgumentLocations[],
  token: string,
  line: number,
  column: number,
): ArgLocation | undefined => {
  if (tags) {
    for (const tag of tags) {
      if (tag.name === token) {
        const loc = tag.locs.find(loc => {
          return (
            loc.start.line === line &&
            loc.start.column >= column &&
            loc.start.column <= column + token.length
          );
        });
        if (loc) {
          return {
            name: tag.name,
            index: tag.index,
            controls: tag.controls,
            type: loc.type,
            shorthand: loc.shorthand,
          };
        }
      }
    }
  }
  return undefined;
};

export const tagToValue = (param: ArgLocation, name: string): any => {
  const value =
    getControlValue(param.controls[name]) ?? getControlValues(param.controls);
  let retValue: any;
  if (Array.isArray(value) || typeof value === 'object') {
    retValue = stringifyObject(value, {
      indent: '  ',
      inlineCharacterLimit: 80,
    });
  } else {
    retValue = value ?? name;
    retValue =
      typeof retValue === 'string'
        ? `"${retValue}"`
        : retValue.toString
        ? retValue.toString()
        : retValue;
  }
  return param.shorthand ? `${param.name}: ${retValue}` : retValue;
};
