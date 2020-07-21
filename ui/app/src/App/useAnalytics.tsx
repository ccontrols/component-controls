import { useMemo, useEffect } from 'react';

import Analytics from 'analytics';
import googleAnalytics from '@analytics/google-analytics';

import { StoryStore } from '@component-controls/store';

export const useAnalytics = (store: StoryStore) => {
  const analytics = useMemo(() => {
    if (store) {
      const options = store.config?.analytics;
      if (options) {
        if (typeof options === 'string') {
          return Analytics({
            app: store.config?.siteTitle,
            plugins: [
              googleAnalytics({
                trackingId: options,
              }),
            ],
          });
        } else {
          return Analytics(options);
        }
      }
    }
    return undefined;
  }, [store]);
  useEffect(() => {
    if (analytics) {
      analytics.page();
    }
  }, [analytics]);
};
