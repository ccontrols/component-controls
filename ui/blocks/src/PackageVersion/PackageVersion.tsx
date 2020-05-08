/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import { jsx } from 'theme-ui';
import { FC } from 'react';
import { Tag } from '@component-controls/components';
import { useComponentsContext } from '../context';

/**
 * Display a label with the component's package version.
 * extracted from package.json
 */
export const PackageVersion: FC = () => {
  const { componentPackage } = useComponentsContext({ of: '.' });
  return componentPackage && componentPackage.version ? (
    <Tag color="lightgrey">{`${componentPackage.name}: ${componentPackage.version}`}</Tag>
  ) : null;
};
