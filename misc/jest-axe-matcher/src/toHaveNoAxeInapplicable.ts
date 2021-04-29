import { AxeResults } from 'axe-core';
import { matchAxeResuls, ResultFilers } from './utils';

export const toHaveNoAxeInapplicable = (
  received: AxeResults,
  filters?: ResultFilers,
): jest.CustomMatcherResult =>
  matchAxeResuls(received.inapplicable, 'inapplicable', filters);
