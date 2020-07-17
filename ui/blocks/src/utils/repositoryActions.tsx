import React from 'react';
import { PackageInfo } from '@component-controls/core';
import { ActionItem, ExternalLink } from '@component-controls/components';

export const repositoryActions = (
  packageInfo?: PackageInfo,
): ActionItem[] | undefined => {
  if (packageInfo) {
    const { browse, docs, issues } = packageInfo.repository || {};
    if (browse || docs || issues) {
      const actions: ActionItem[] = [];
      if (browse) {
        actions.push({
          node: (
            <ExternalLink href={browse} aria-label="browse repository">
              browse
            </ExternalLink>
          ),
          group: 'repository',
          id: 'browse',
        });
      }
      if (docs) {
        actions.push({
          node: (
            <ExternalLink href={docs} aria-label="browse readme documentation">
              docs
            </ExternalLink>
          ),
          group: 'repository',
          id: 'docs',
        });
      }
      if (issues) {
        actions.push({
          node: (
            <ExternalLink href={issues} aria-label="browse filed issues">
              issues
            </ExternalLink>
          ),
          group: 'repository',
          id: 'issues',
        });
      }
      return actions;
    }
  }
  return undefined;
};
