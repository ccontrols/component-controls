import React from 'react';
import { Repository } from '@component-controls/specification';
import { ActionItem, ExternalLink } from '@component-controls/components';

export const repositoryActions = (
  repository?: Repository,
): ActionItem[] | undefined => {
  if (repository) {
    const { browse, docs, issues } = repository;
    if (browse || docs || issues) {
      const actions: ActionItem[] = [];
      if (browse) {
        actions.push({
          title: (
            <ExternalLink href={browse} aria-label="browse repository">
              browse
            </ExternalLink>
          ),
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
          id: 'issues',
        });
      }
      return actions;
    }
  }
  return undefined;
};
