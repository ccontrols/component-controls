/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import { jsx } from 'theme-ui';
import { FC, useState, useContext } from 'react';
import { Styled } from 'theme-ui';

import {
  ThemeContext,
  Source,
  SourceProps,
  ActionItem,
  Tag,
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
  tagToValue,
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

        const { story, kind, storyPackage } = context;
        const { controls } = story || {};
        const { dark } = useContext(ThemeContext);
        const allActions: ActionItem[] = [];
        const repositoryItems = repositoryActions(storyPackage);
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
        const tags = getArgumentsLocations(controls, args);
        if (args && args.length) {
          if (!showFileSource) {
            allActions.push({
              title: ViewStyleNext[viewStyle],
              onClick: onMergeValues,
            });
          }
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
                  style={{ ...style, padding: '25px 10px 10px', margin: 0 }}
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

                            return splitToken.map((tokenName: string) =>
                              tokenName.trim().length ? (
                                <Tag
                                  {...getTokenProps({ token, key })}
                                  color={color}
                                >
                                  {viewStyle === 'values' &&
                                  param.type === 'usage'
                                    ? tagToValue(param, tokenName)
                                    : tokenName}
                                </Tag>
                              ) : (
                                tokenName
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
            {source.trim()}
          </Source>
        );
      }}
    </StoryBlockContainer>
  );
};
