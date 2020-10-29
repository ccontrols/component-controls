import React, { FC } from 'react';
import { Component } from '@component-controls/core';
import { usePackage } from '@component-controls/store';
import {
  ActionItem,
  Source,
  SourceProps,
} from '@component-controls/components';
import { useCustomProps } from '../context';
import { repositoryActions } from '../utils/repositoryActions';

export interface BaseComponentSourceOwnProps {
  component: Component;
}
const NAME = 'componentsource';

export type BaseComponentSourceProps = BaseComponentSourceOwnProps &
  SourceProps;

export const BaseComponentSource: FC<BaseComponentSourceProps> = props => {
  const [showFileSource, setShowFileSource] = React.useState<boolean>(false);
  const custom = useCustomProps<BaseComponentSourceProps>(NAME, props);
  const { component, actions, ...rest } = custom;
  let source;
  const componentPackage = usePackage(component?.package);
  const { from, importedName, name: componentName } = component || {};
  const importFrom =
    componentPackage && componentPackage.name ? componentPackage.name : from;
  if (importFrom) {
    source =
      importedName !== 'default' && importedName !== 'namespace'
        ? `import { ${componentName} } from '${importFrom}';`
        : `import ${componentName} from '${importFrom}';`;
  }
  if (!source) {
    return null;
  }

  const onShowFileSource = () => setShowFileSource(!showFileSource);
  const allActions: ActionItem[] = [];

  if (component && component.source) {
    allActions.push({
      node: showFileSource ? 'import' : 'source',
      onClick: onShowFileSource,
    });
  }
  const repositoryItems = component && repositoryActions(componentPackage);
  if (repositoryItems) {
    allActions.push(...repositoryItems);
  }
  if (actions) {
    allActions.push(...actions);
  }
  return (
    <Source data-testid={NAME} {...rest} actions={allActions}>
      {showFileSource ? component?.source ?? '' : source}
    </Source>
  );
};
