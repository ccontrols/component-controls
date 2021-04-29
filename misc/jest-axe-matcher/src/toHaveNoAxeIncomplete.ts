import { AxeResults } from 'axe-core';
import { matchAxeResuls, ResultFilers } from './utils';

export const toHaveNoAxeIncomplete = (
  received: AxeResults,
  filters?: ResultFilers,
): jest.CustomMatcherResult =>
  matchAxeResuls(received.incomplete, 'incomplete', filters);
