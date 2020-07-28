import React, { FC, useMemo } from 'react';
import { Component, defaultExport } from '@component-controls/core';
import { usePackage } from '@component-controls/store';
import { Dependencies } from './Dependencies';

export interface BaseComponentDepsProps {
  component?: Component;
}

/**
 * base component dependencies
 */

export const BaseComponentDeps: FC<BaseComponentDepsProps> = ({
  component,
}) => {
  const componentPackage = usePackage(component?.package);
  const { dependencies = {}, devDependencies = {}, peerDependencies = {} } =
    componentPackage || {};
  const { imports } = component || {};
  const rows = useMemo(() => {
    const dependenciesKeys = Object.keys(dependencies);
    const devDependenciesKeys = Object.keys(devDependencies);
    const peerDependenciesKeys =
      peerDependencies && Object.keys(peerDependencies);
    const importObj = imports || {};
    return Object.keys(importObj)
      .map(name => {
        const packageName: string | undefined =
          (dependenciesKeys &&
            dependenciesKeys.find(packageName =>
              name.startsWith(packageName),
            )) ||
          (devDependenciesKeys &&
            devDependenciesKeys.find(packageName =>
              name.startsWith(packageName),
            ));
        return {
          name,
          imports: [...importObj[name]].sort((a, b) => {
            if (a.importedName === defaultExport) {
              return -1;
            } else if (b.importedName === defaultExport) {
              return 1;
            }
            if (a.importedName > b.importedName) {
              return -1;
            } else if (a.importedName < b.importedName) {
              return 1;
            }
            return 0;
          }),
          packageName,
          peer: packageName
            ? peerDependenciesKeys.includes(packageName)
            : false,
          version: packageName
            ? dependencies[packageName] || devDependencies[packageName]
            : undefined,
        };
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [dependencies, devDependencies, imports, peerDependencies]);
  if (!imports) {
    return null;
  }

  return <Dependencies dependencies={rows} />;
};
