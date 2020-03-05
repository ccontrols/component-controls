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
          title: <ExternalLink href={browse}>browse</ExternalLink>,
        });
      }
      if (docs) {
        actions.push({
          title: <ExternalLink href={docs}>docs</ExternalLink>,
        });
      }
      if (issues) {
        actions.push({
          title: <ExternalLink href={issues}>issues</ExternalLink>,
        });
      }
      return actions;
    }
  }
  return undefined;
};
