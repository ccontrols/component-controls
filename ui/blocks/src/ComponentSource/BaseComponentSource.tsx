/** @jsx jsx */
import { FC, useState } from 'react';
import { jsx } from 'theme-ui';
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

type ShowType = 'import' | 'source';

const getNextState = (current: ShowType, component: Component): ShowType => {
  switch (current) {
    case 'import':
      return component.source ? 'source' : 'import';
    case 'source':
      return 'import';
    default:
      return 'import';
  }
};
export const BaseComponentSource: FC<BaseComponentSourceProps> = props => {
  const [showType, setShowType] = useState<ShowType>('import');
  const custom = useCustomProps<BaseComponentSourceProps>(NAME, props);
  const { component, actions, ...rest } = custom;
  const componentPackage = usePackage(component?.package);
  if (!component) {
    return null;
  }
  let source;
  const { from, importedName, name: componentName } = component;
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

  const onShowClick = () => {
    setShowType(getNextState(showType, component));
  };
  const allActions: ActionItem[] = [];

  if (component.source) {
    allActions.push({
      node: getNextState(showType, component),
      'aria-label': `view ${component.name} ${getNextState(
        showType,
        component,
      )}`,
      onClick: onShowClick,
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
      {showType === 'source' ? component?.source ?? '' : source}
    </Source>
  );
};
