import React from 'react';
import { PackageInfo } from '@component-controls/specification';
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
          title: (
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
          title: (
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
          title: (
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
