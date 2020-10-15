import React, { FC } from 'react';
import {
  Description as BaseDescription,
  MarkdownProps,
} from '@component-controls/components';
import { ComponentsContainer } from '../BlockContainer/components/ComponentsContainer';
import {
  useComponents,
  ComponentInputProps,
  useCurrentDocument,
} from '@component-controls/store';

export type DescriptionProps = Omit<MarkdownProps, 'children'> &
  ComponentInputProps;

/**
 * Description component with markdown.
 * The 'of' property can specify which component's description to display.
 */
export const Description: FC<DescriptionProps> = ({ of, ...rest }) => {
  const components = useComponents({ of });
  const doc = useCurrentDocument();
  return (
    <>
      <ComponentsContainer components={components}>
        {component => {
          if (!component || !component.info || !component.info.description) {
            return null;
          }
          return (
            <BaseDescription {...rest}>
              {component.info.description}
            </BaseDescription>
          );
        }}
      </ComponentsContainer>
      {doc && doc.description && (
        <BaseDescription {...rest}>{doc.description}</BaseDescription>
      )}
    </>
  );
};
