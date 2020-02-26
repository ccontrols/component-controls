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
import Highlight, {
  defaultProps,
  PrismTheme,
  Language,
} from 'prism-react-renderer';

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

export interface TaggedSourceProps {
  args?: StoryArguments;
  source: string;
  theme: PrismTheme;
  language: Language;
}
export const TaggedSource: React.FC<TaggedSourceProps> = ({
  args,
  theme,
  source,
  language,
}) => {
  const tags: (ArgumentLocations & { color?: string })[] | undefined = args
    ? getArgumentsLocations(args)
    : undefined;
  if (tags) {
    tags.forEach((tag, index) => {
      const colorIdx = index % (theme.styles.length - 1);
      const style = theme.styles[colorIdx];
      const color: string = style.style.color || theme.plain.color || '#fff';
      tag.color = color;
    });
  }
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={source}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Styled.pre
          className={`${className}`}
          style={{ ...style, padding: '10px 10px 25px 10px', margin: 0 }}
        >
          {tokens.map((line, i) => (
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
                              loc.start.column <= column + token.content.length,
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
      )}
    </Highlight>
  );
};
