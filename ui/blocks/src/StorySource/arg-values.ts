import {
  StoryArguments,
  CodeLocation,
} from '@component-controls/specification';
import { PrismTheme } from 'prism-react-renderer';

type ArgType = 'loc' | 'usage';
type ArgumentLocs = { type: ArgType } & CodeLocation;
interface ArgumentLocations {
  name: string;
  index: number;
  locs: ArgumentLocs[];
}

interface ArgLocation {
  name: string;
  index: number;
  type: ArgType;
}
export const getArgumentsLocations = (
  args?: StoryArguments,
): ArgumentLocations[] =>
  args
    ? args.reduce((acc: any, a, index) => {
        if (Array.isArray(a.value)) {
          return [...acc, ...getArgumentsLocations(a.value)];
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
          }));
          locs.push(...usageLocs);
        }

        return [
          ...acc,
          {
            name: a.value,
            index,
            locs,
          },
        ];
      }, [])
    : undefined;

export const getTagColor = (tag: ArgLocation, theme: PrismTheme) => {
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
            type: loc.type,
          };
        }
      }
    }
  }
  return undefined;
};
