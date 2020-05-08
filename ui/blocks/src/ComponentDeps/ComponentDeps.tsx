import React, { FC, useMemo } from 'react';

import {
  ComponentsBlockContainer,
  ComponentsBlockContainerProps,
} from '../BlockContainer/components/ComponentsBlockContainer';
import { Dependencies } from './Dependencies';

export type ComponentDepsProps = Omit<
  ComponentsBlockContainerProps,
  'children'
>;
/**
 * Displays external dependencies for a component
 */

export const ComponentDeps: FC<ComponentDepsProps> = ({ ...rest }) => {
  return (
    <ComponentsBlockContainer {...rest}>
      {(component, props) => {
        const { componentPackage } = props;
        const {
          dependencies = {},
          devDependencies = {},
          peerDependencies = {},
        } = componentPackage || {};
        const { imports } = component || {};
        if (!imports) {
          return null;
        }
        const rows = useMemo(() => {
          const dependenciesKeys = Object.keys(dependencies);
          const devDependenciesKeys = Object.keys(devDependencies);
          const peerDependenciesKeys =
            peerDependencies && Object.keys(peerDependencies);

          return Object.keys(imports)
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
                imports: imports[name],
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
        }, [component]);
        return <Dependencies dependencies={rows} />;
      }}
    </ComponentsBlockContainer>
  );
};
