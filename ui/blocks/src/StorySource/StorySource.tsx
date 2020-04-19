/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import { jsx } from 'theme-ui';
import { FC, useState, useContext } from 'react';
import { getControlValue } from '@component-controls/core';
import { Styled } from 'theme-ui';
import { transparentize } from 'polished';
import {
  ThemeContext,
  Source,
  SourceProps,
  ActionItem,
} from '@component-controls/components';
import { repositoryActions } from '../utils/repositoryActions';
import {
  StoryBlockContainer,
  StoryBlockContainerProps,
} from '../BlockContainer/story';
import {
  getArgumentsLocations,
  getTagColor,
  findTagLocation,
} from './arg-values';

type ViewStyle = 'tags' | 'values';

export interface StorySourceOwnProps {
  /**
   * initial view mode
   */
  viewStype?: ViewStyle;
}
export type StorySourceProps = StorySourceOwnProps &
  StoryBlockContainerProps &
  SourceProps;

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
export const StorySource: FC<StorySourceProps> = ({
  viewStype = 'tags',
  ...props
}) => {
  const [viewStyle, setViewStyle] = useState<ViewStyle>(viewStype);
  const [showFileSource, setShowFileSource] = useState<boolean>(false);

  return (
    <StoryBlockContainer {...props}>
      {(context, { actions, ...rest }: SourceProps) => {
        const onMergeValues = () => setViewStyle(ViewStyleNext[viewStyle]);
        const onShowFileSource = () => setShowFileSource(!showFileSource);

        const { story, kind } = context;
        const { controls } = story || {};
        const { dark } = useContext(ThemeContext);
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
        const tags = getArgumentsLocations(args);
        if (args && args.length && !showFileSource) {
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
          source = story?.source || '';
        } else {
          source = kind?.source || '';
        }
        return (
          <Source
            actions={allActions}
            dark={dark}
            {...rest}
            renderFn={(
              { className, style, tokens, getLineProps, getTokenProps }: any,
              { theme }: any,
            ) => {
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
                            ? findTagLocation(tags, tokenTrim, i, column)
                            : null;

                          column += token.content.length;
                          if (param) {
                            const color = getTagColor(param, theme);
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
                                    backgroundColor: transparentize(0.8, color),
                                    paddingLeft: 1,
                                    paddingRight: 1,
                                    //@ts-ignore
                                    border: `1px solid ${color}`,
                                  }}
                                >
                                  {controls &&
                                  viewStyle === 'values' &&
                                  param.type === 'usage'
                                    ? getControlValue(controls, s) || s
                                    : s}
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
};
