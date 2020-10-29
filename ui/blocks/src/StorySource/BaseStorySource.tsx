/* eslint-disable react/jsx-key */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FC, useState } from 'react';
import { Styled } from 'theme-ui';
import { Story, Document, PackageInfo } from '@component-controls/core';
import {
  Source,
  SourceProps,
  ActionItem,
  Tag,
} from '@component-controls/components';
import { repositoryActions } from '../utils/repositoryActions';
import {
  getArgumentsLocations,
  getTagColor,
  findTagLocation,
  tagToValue,
} from './arg-values';

export type ViewStyle = 'tags' | 'values';
const ViewStyleNext: {
  [key in ViewStyle]: ViewStyle;
} = {
  values: 'tags',
  tags: 'values',
};

export interface BaseStorySourceProps {
  story?: Story;
  doc?: Document;
  docPackage?: PackageInfo;
  viewStyle?: ViewStyle;
  actions?: ActionItem[];
  sourceProps?: SourceProps;
}

export const BaseStorySource: FC<BaseStorySourceProps> = ({
  story,
  doc,
  docPackage,
  sourceProps,
  actions,
  viewStyle: initialViewStyle = 'tags',
}) => {
  const [viewStyle, setViewStyle] = useState<ViewStyle>(initialViewStyle);
  const [showFileSource, setShowFileSource] = useState<boolean>(false);

  const onMergeValues = () => setViewStyle(ViewStyleNext[viewStyle]);
  const onShowFileSource = () => setShowFileSource(!showFileSource);

  const { controls } = story || {};
  const allActions: ActionItem[] = [];
  const repositoryItems = repositoryActions(docPackage);
  if (repositoryItems) {
    allActions.push(...repositoryItems);
  }
  if (doc?.source) {
    allActions.push({
      node: showFileSource ? 'story code' : 'file code',
      onClick: onShowFileSource,
    });
  }
  const args = story?.arguments;
  const tags = getArgumentsLocations(controls, args);
  if (args && args.length) {
    if (!showFileSource) {
      allActions.push({
        node: ViewStyleNext[viewStyle],
        onClick: onMergeValues,
      });
    }
  }
  if (actions) {
    allActions.push(...actions);
  }
  let source: string;
  if (!showFileSource) {
    source = story?.source || '';
  } else {
    source = doc?.source || '';
  }
  return (
    <Source
      actions={allActions}
      {...sourceProps}
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
                          <Tag {...getTokenProps({ token, key })} color={color}>
                            {viewStyle === 'values' && param.type === 'usage'
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
};
