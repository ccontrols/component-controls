import { AxeResults } from 'axe-core';
import { matchAxeResuls, ResultFilers } from './utils';

export const toHaveNoAxePasses = (
  received: AxeResults,
  filters?: ResultFilers,
): jest.CustomMatcherResult =>
  matchAxeResuls(received.passes, 'passed', filters);
