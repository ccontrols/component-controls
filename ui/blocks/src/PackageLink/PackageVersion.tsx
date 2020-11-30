/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import { jsx } from 'theme-ui';
import { FC } from 'react';
import {
  useComponent,
  usePackage,
  ComponentInputProps,
} from '@component-controls/store';
import { PackageLink } from './PackageLink';

/**
 * Display a label with the component's package version.
 * extracted from package.json
 */
export const PackageVersion: FC<ComponentInputProps> = props => {
  const component = useComponent(props);
  const componentPackage = usePackage(component?.package);
  return componentPackage?.name ? (
    <PackageLink
      name={componentPackage.name}
      version={componentPackage.version}
    />
  ) : null;
};
