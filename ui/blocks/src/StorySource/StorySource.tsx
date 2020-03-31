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
import {
  ThemeContext,
  Source,
  SourceProps,
  ActionItem,
} from '@component-controls/components';
import { repositoryActions } from '../utils/repositoryActions';
import { mergeControlValues } from './argument-utils';
import {
  StoryBlockContainer,
  StoryBlockContainerProps,
} from '../BlockContainer/story';

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

export type StorySourceProps = Omit<StoryBlockContainerProps, 'children'> &
  Omit<SourceProps, 'children'>;

type ViewStyle = 'tags' | 'values';

const ViewStyleNext: {
  [key in ViewStyle]: ViewStyle;
} = {
  values: 'tags',
  tags: 'values',
};
/**
 * Display source code of a story.
 * If controls are used, all story arguments will be highlighted.
 * Additional commands are made available if the repository data of the story is available.
 */
export const StorySource: React.FC<StorySourceProps> = (
  props: StorySourceProps,
) => (
  <StoryBlockContainer {...props}>
    {(context, { actions, ...rest }: SourceProps) => {
      const [viewStyle, setViewStyle] = React.useState<ViewStyle>('tags');
      const [showFileSource, setShowFileSource] = React.useState<boolean>(
        false,
      );

      const onMergeValues = () => setViewStyle(ViewStyleNext[viewStyle]);
      const onShowFileSource = () => setShowFileSource(!showFileSource);

      const { story, kind } = context;
      const { controls } = story || {};
      const { dark } = React.useContext(ThemeContext);
      const allActions: ActionItem[] = [];
      const repositoryItems = kind && repositoryActions(kind?.repository);
      if (repositoryItems) {
        allActions.push.apply(allActions, repositoryItems);
      }
      if (kind?.source) {
        allActions.push({
          title: showFileSource ? 'story code' : 'file code',
          onClick: onShowFileSource,
        });
      }
      const args = story?.arguments;
      if (args && args.length) {
        allActions.push({
          title: ViewStyleNext[viewStyle],
          onClick: onMergeValues,
        });
      }
      if (actions) {
        allActions.push.apply(allActions, actions);
      }
      let source: string;
      if (!showFileSource) {
        if (viewStyle === 'values' && args && controls) {
          source = mergeControlValues(story?.source || '', args, controls);
        } else {
          source = story?.source || '';
        }
      } else {
        source = kind?.source || '';
      }

      const tags: (ArgumentLocations & { color?: string })[] | undefined = args
        ? getArgumentsLocations(args)
        : undefined;
      return (
        <Source
          actions={allActions}
          dark={dark}
          {...rest}
          renderFn={(
            { className, style, tokens, getLineProps, getTokenProps }: any,
            { theme }: any,
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
                style={{ ...style, padding: '0 10px 10px', margin: 0 }}
              >
                {tokens.map((line: any, i: number) => (
                  <div {...getLineProps({ line, key: i })}>
                    {(() => {
                      let column = 0;
                      return line.map((token: any, key: string) => {
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

                          return splitToken.map((s: string) =>
                            s.trim().length ? (
                              <span
                                {...getTokenProps({ token, key })}
                                sx={{
                                  display: 'inline-block',
                                  //@ts-ignore
                                  backgroundColor: transparentize(
                                    0.8,
                                    param.color || 'white',
                                  ),
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
        >
          {source}
        </Source>
      );
    }}
  </StoryBlockContainer>
);
