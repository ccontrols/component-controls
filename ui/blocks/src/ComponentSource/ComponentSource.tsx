import React, { FC } from 'react';
import { ActionItem } from '@component-controls/components';
import { Source, SourceProps } from '@component-controls/components';
import {
  ComponentsBlockContainer,
  ComponentsBlockContainerProps,
} from '../BlockContainer/components/ComponentsBlockContainer';
import { useCustomProps } from '../context';
import { repositoryActions } from '../utils/repositoryActions';

export type ComponentSourceProps = Omit<
  ComponentsBlockContainerProps,
  'children'
> &
  Omit<SourceProps, 'children'>;

const NAME = 'componentsource';
/**
 * Displays import statement for a component as well as the component file source code
 * Optionally also displays some repository information from the component's package.json
 */

export const ComponentSource: FC<ComponentSourceProps> = props => {
  const [showFileSource, setShowFileSource] = React.useState<boolean>(false);
  const custom = useCustomProps<ComponentSourceProps>(NAME, props);
  const { actions, ...rest } = custom;
  return (
    <ComponentsBlockContainer visibility="info" {...rest}>
      {(component, props, sourceProps) => {
        let source;
        const { componentPackage } = props;
        const { from, importedName, name: componentName } = component || {};
        const importFrom =
          componentPackage && componentPackage.name
            ? componentPackage.name
            : from;
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
        const repositoryItems =
          component && repositoryActions(componentPackage);
        if (repositoryItems) {
          allActions.push.apply(allActions, repositoryItems);
        }
        if (actions) {
          allActions.push.apply(allActions, actions);
        }
        return (
          <Source data-testid={NAME} {...sourceProps} actions={allActions}>
            {showFileSource ? component?.source ?? '' : source}
          </Source>
        );
      }}
    </ComponentsBlockContainer>
  );
};
