import React, { FC } from 'react';
import { ActionItem } from '@component-controls/components';
import { useControlsContext, ComponentInputProps } from '../BlocksContext';
import {
  ThemeContext,
  Source as SourceBlock,
  SourceProps,
} from '@component-controls/components';
import { repositoryActions } from '../utils/repositoryActions';

export type ComponentSourceProps = ComponentInputProps & SourceProps;

export const ComponentSource: FC<ComponentSourceProps> = ({
  of,
  actions,
  ...rest
}) => {
  const { component } = useControlsContext({
    of,
  });
  let source;
  const { from, importedName, name: componentName } = component || {};
  if (from) {
    source =
      importedName !== 'default' && importedName !== 'namespace'
        ? `import { ${componentName} } from '${from}';`
        : `import ${componentName} from '${from}';`;
  }

  if (!source) {
    return null;
  }
  const { dark } = React.useContext(ThemeContext);
  const [showFileSource, setShowFileSource] = React.useState<boolean>(false);

  const onShowFileSource = () => setShowFileSource(!showFileSource);
  const allActions: ActionItem[] = [];

  if (component && component.source) {
    allActions.push({
      title: showFileSource ? 'import' : 'component',
      onClick: onShowFileSource,
    });
  }
  const repositoryItems = component && repositoryActions(component?.repository);
  if (repositoryItems) {
    allActions.push.apply(allActions, repositoryItems);
  }
  if (actions) {
    allActions.push.apply(allActions, actions);
  }
  return (
    <SourceBlock dark={dark} {...rest} actions={allActions}>
      {showFileSource ? component?.source : source}
    </SourceBlock>
  );
};
