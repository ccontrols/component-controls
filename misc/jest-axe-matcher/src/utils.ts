import { Result } from 'axe-core';
import {
  printReceived,
  matcherHint,
  DIM_COLOR,
  BOLD_WEIGHT,
  INVERTED_COLOR,
} from 'jest-matcher-utils';

export type ResultFiler = { rule: string; exclude?: boolean } | string;

export type ResultFilers = {
  id?: ResultFiler[];
  impact?: ResultFiler[];
};

const filterResults = (results: Result[], filters?: ResultFilers): Result[] => {
  let filtered = results;
  if (filters) {
    Object.keys(filters).forEach(key => {
      const id = key as keyof ResultFilers;
      const filter = filters[id] || [];
      const normalized = filter.map(f =>
        typeof f === 'string' ? { rule: f, exclude: false } : f,
      );
      filtered = filtered.filter(f =>
        normalized.find(n => (n.exclude ? n.rule !== f[id] : n.rule === f[id])),
      );
    });
  }
  return filtered;
};
export const matchAxeResuls = (
  results: Result[],
  category: string,
  filters?: ResultFilers,
): jest.CustomMatcherResult => {
  const filered = filterResults(results, filters);
  const pass = !filered?.length;

  const message: () => string = () => {
    return [
      matcherHint(
        `${!pass ? '' : '.not'}.toHaveNoAxeViolations`,
        'axeresults',
        '',
      ),
      '',
      ...filered.map(result => {
        const v = result.nodes.length > 1 ? 'are' : 'is';
        return (
          `${
            result.impact ? `${INVERTED_COLOR(result.impact)} ` : ''
          }${printReceived(result.description)}" (${result.id}) ${
            pass ? `${v} not` : v
          } ${category}:` +
          `${result.nodes
            .map(
              node =>
                `\n${BOLD_WEIGHT(node.target.join(', '))}` +
                `\n${INVERTED_COLOR(node.html)}` +
                `${
                  node.failureSummary
                    ? `\n${DIM_COLOR(node.failureSummary)}`
                    : ''
                }`,
            )
            .join('\n')}` +
          `\nmore info at: ${result.helpUrl}` +
          '\n\n'
        );
      }),
    ].join('\n');
  };
  return {
    message,
    pass,
  };
};
