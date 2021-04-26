import { AxeResults } from 'axe-core';
import { matchAxeResuls, ResultFilers } from './utils';

export const toHaveNoAxeViolations = (
  received: AxeResults,
  filters?: ResultFilers,
): jest.CustomMatcherResult =>
  matchAxeResuls(received.violations, 'violated', filters);
