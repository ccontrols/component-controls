import { useMemo, useEffect } from 'react';

import Analytics from 'analytics';
import googleAnalytics from '@analytics/google-analytics';
import { useConfig } from '@component-controls/store';

export const useAnalytics = (): void => {
  const config = useConfig();
  const analytics = useMemo(() => {
    const options = config.analytics;
    if (options) {
      if (typeof options === 'string') {
        return Analytics({
          app: config.siteTitle,
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
    return undefined;
  }, [config]);
  useEffect(() => {
    if (analytics) {
      analytics.page();
    }
  }, [analytics]);
};
