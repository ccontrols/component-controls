import React, { FC } from 'react';
import { ActionItem } from '@component-controls/components';
import {
  ThemeContext,
  Source,
  SourceProps,
} from '@component-controls/components';
import {
  ComponentsBlockContainer,
  ComponentsBlockContainerProps,
} from '../BlockContainer/components/ComponentsBlockContainer';
import { repositoryActions } from '../utils/repositoryActions';

export type ComponentSourceProps = Omit<
  ComponentsBlockContainerProps,
  'children'
> &
  Omit<SourceProps, 'children'>;

/**
 * Displays import statement for a component as well as the component file source code
 * Optionally also displays some repository information from the component's package.json
 */

export const ComponentSource: FC<ComponentSourceProps> = ({
  actions,
  ...rest
}) => {
  const [showFileSource, setShowFileSource] = React.useState<boolean>(false);
  const { dark } = React.useContext(ThemeContext);
  return (
    <ComponentsBlockContainer {...rest}>
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
            title: showFileSource ? 'import' : 'source',
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
          <Source dark={dark} {...sourceProps} actions={allActions}>
            {showFileSource ? component?.source ?? '' : source}
          </Source>
        );
      }}
    </ComponentsBlockContainer>
  );
};
