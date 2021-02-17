/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box } from 'theme-ui';
import { PackageDependencies } from '@component-controls/core';
import { ExternalLink, Tag } from '@component-controls/components';

export interface PackageLinkProps {
  /**
   * package name
   */
  name: string;
  /**
   * optional version - if not provided will be lookup into dependencies
   */
  version?: string;
  /**
   * package dependencies
   */
  dependencies?: PackageDependencies;
  /**
   * package devDependencies
   */
  devDependencies?: PackageDependencies;
}
/**
 *
 * displays a package npm link and version
 */
export const PackageLink: FC<PackageLinkProps> = ({
  name,
  dependencies = {},
  devDependencies = {},
  version,
}) => {
  const dependenciesKeys = Object.keys(dependencies);
  const devDependenciesKeys = Object.keys(devDependencies);
  const packageName: string | undefined =
    (dependenciesKeys &&
      dependenciesKeys.find(packageName => name.startsWith(packageName))) ||
    (devDependenciesKeys &&
      devDependenciesKeys.find(packageName => name.startsWith(packageName))) ||
    name;
  const packageVersion =
    version ||
    (packageName
      ? dependencies[packageName] || devDependencies[packageName]
      : '');
  const el = <Box sx={{ whiteSpace: 'nowrap' }}>{name}</Box>;
  if (!packageName || !packageVersion) {
    return el;
  }
  const baseVersion = packageVersion.replace(/[\^=~]/, '');
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        my: 1,
      }}
    >
      <ExternalLink
        href={`https://npmjs.com/package/${packageName}/v/${baseVersion}`}
      >
        {el}
      </ExternalLink>
      <Tag variant="tag.small" sx={{ ml: 2 }} color="lightblue" borderSize={1}>
        {packageVersion}
      </Tag>
    </Box>
  );
};
