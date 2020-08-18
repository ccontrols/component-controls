/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import { jsx } from 'theme-ui';
import { FC } from 'react';
import { Tag } from '@component-controls/components';
import { useComponent, usePackage } from '@component-controls/store';

/**
 * Display a label with the component's package version.
 * extracted from package.json
 */
export const PackageVersion: FC = () => {
  const component = useComponent({ of: '.' });
  const componentPackage = usePackage(component?.package);
  return componentPackage && componentPackage.version ? (
    <Tag color="lightgrey">{`${componentPackage.name}: ${componentPackage.version}`}</Tag>
  ) : null;
};
