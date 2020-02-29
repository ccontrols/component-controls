/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import { jsx } from 'theme-ui';
import React from 'react';
import {
  StoryArguments,
  CodeLocation,
} from '@component-controls/specification';
import { Styled } from 'theme-ui';
import { transparentize } from 'polished';
import { Source, SourceProps } from '../Source';

interface ArgumentLocations {
  name: string;
  locs: CodeLocation[];
}
const getArgumentsLocations = (args: StoryArguments): ArgumentLocations[] => {
  return args.reduce((acc: any, a) => {
    if (Array.isArray(a.value)) {
      return [...acc, ...getArgumentsLocations(a.value)];
    }
    const locs = [];
    if (a.loc) {
      locs.push(a.loc);
    }
    if (a.usage) {
      locs.push(...a.usage.map(u => u.loc));
    }
    return [
      ...acc,
      {
        name: a.value,
        locs,
      },
    ];
  }, []);
};

export type TaggedSourceProps = SourceProps & {
  /**
   * a list of story arguments accepted by Source
   * this is used to syntax-highlight the arguments
   * and their usage
   */
  args?: StoryArguments;
};

export const TaggedSource: React.FC<TaggedSourceProps> = ({
  args,
  theme,
  ...rest
}) => {
  const tags: (ArgumentLocations & { color?: string })[] | undefined = args
    ? getArgumentsLocations(args)
    : undefined;
  return (
    <Source
      theme={theme}
      {...rest}
      renderFn={(
        { className, style, tokens, getLineProps, getTokenProps },
        { theme },
      ) => {
        if (tags) {
          tags.forEach((tag, index) => {
            let color: string;
            const colorIdx = index % (theme.styles.length - 1);
            const style = theme.styles[colorIdx];
            color = style.style.color || theme.plain.color || '#fff';
            tag.color = color;
          });
        }
        return (
          <Styled.pre
            className={`${className}`}
            style={{ ...style, padding: '10px 10px', margin: 0 }}
          >
            {tokens.map((line, i: number) => (
              <div {...getLineProps({ line, key: i })}>
                {(() => {
                  let column = 0;
                  return line.map((token, key) => {
                    const tokenTrim = token.content.trim();
                    const param = tags
                      ? tags.find(tag => {
                          if (tag.name === tokenTrim) {
                            return tag.locs.find(
                              loc =>
                                loc.start.line === i &&
                                loc.start.column >= column &&
                                loc.start.column <=
                                  column + token.content.length,
                            );
                          }
                          return false;
                        })
                      : null;

                    column += token.content.length;
                    if (param) {
                      const splitToken = getTokenProps({
                        token,
                        key,
                      }).children.split(/(\s+)/);

                      return splitToken.map(s =>
                        s.trim().length ? (
                          <span
                            {...getTokenProps({ token, key })}
                            sx={{
                              display: 'inline-block',
                              //@ts-ignore
                              backgroundColor: transparentize(0.8, param.color),
                              paddingLeft: 1,
                              paddingRight: 1,
                              //@ts-ignore
                              border: `1px solid ${param.color}`,
                            }}
                          >
                            {s}
                          </span>
                        ) : (
                          s
                        ),
                      );
                    }
                    return (
                      <span
                        {...getTokenProps({ token, key })}
                        sx={{
                          display: 'inline-block',
                        }}
                      />
                    );
                  });
                })()}
              </div>
            ))}
          </Styled.pre>
        );
      }}
    />
  );
};
