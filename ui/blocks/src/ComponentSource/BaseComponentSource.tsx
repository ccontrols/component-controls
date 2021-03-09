/** @jsx jsx */
import { FC, useState } from 'react';
import { jsx } from 'theme-ui';
import { Component } from '@component-controls/core';
import { usePackage } from '@component-controls/store';
import {
  ActionContainer,
  ActionItem,
  Source,
  SourceProps,
} from '@component-controls/components';
import { useCustomProps } from '../context';
import { repositoryActions } from '../utils/repositoryActions';
import { ComponentStats } from '../ComponentStats';

export interface BaseComponentSourceOwnProps {
  component: Component;
}
const NAME = 'componentsource';

export type BaseComponentSourceProps = BaseComponentSourceOwnProps &
  SourceProps;

type ShowType = 'import' | 'source' | 'stats';

const getNextState = (current: ShowType, component: Component): ShowType => {
  switch (current) {
    case 'import':
      return component.source
        ? 'source'
        : component.fileInfo?.sloc
        ? 'stats'
        : 'import';
    case 'source':
      return component.fileInfo?.sloc ? 'stats' : 'import';
    case 'stats':
    default:
      return 'import';
  }
};
export const BaseComponentSource: FC<BaseComponentSourceProps> = props => {
  const [showType, setShowType] = useState<ShowType>('import');
  const custom = useCustomProps<BaseComponentSourceProps>(NAME, props);
  const { component, actions, ...rest } = custom;
  if (!component) {
    return null;
  }
  let source;
  const componentPackage = usePackage(component.package);
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

  if (component.source || component.fileInfo?.sloc) {
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
  return showType === 'stats' ? (
    <ActionContainer actions={allActions}>
      <ComponentStats sx={{ mt: 4, p: 2 }} component={component} />
    </ActionContainer>
  ) : (
    <Source data-testid={NAME} {...rest} actions={allActions}>
      {showType === 'source' ? component?.source ?? '' : source}
    </Source>
  );
};
