/* eslint-disable @typescript-eslint/no-namespace */
import * as extensions from './matchers';
import { ResultFilers } from './utils';

export { extensions };

expect.extend(extensions);

declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveNoAxeViolations(filters?: ResultFilers): R;
      toHaveNoAxeIncomplete(filters?: ResultFilers): R;
      toHaveNoAxeInapplicable(filters?: ResultFilers): R;
      toHaveNoAxePasses(filters?: ResultFilers): R;
    }
  }
}
