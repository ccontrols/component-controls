/** @jsx jsx */
import { FC, Fragment } from 'react';
import { jsx, BoxProps, Box } from 'theme-ui';
import { Component, CoverageKind } from '@component-controls/core';
import { Shield } from '@component-controls/components';

export const ComponentStats: FC<{
  component?: Component;
} & BoxProps> = ({ component, ...rest }) => {
  if (!component) {
    return null;
  }

  const stats = component.fileInfo?.sloc;

  const statsNode = stats && (
    <Fragment>
      <Shield title={`total lines of code`} label="loc" value={stats.source} />
      <Shield
        label="comments"
        title={`percentage comments to lines of code`}
        value={
          stats.source ? Math.round((100 * stats.comment) / stats.source) : 0
        }
        percent
      />
      {!!stats.todo && (
        <Shield
          title={`total todo comments`}
          label="todos"
          value={stats.todo}
        />
      )}
    </Fragment>
  );
  const jest = component.jest;
  let jestNode;
  if (jest) {
    const minCovField: { field: CoverageKind; pct: number } = Object.values(
      jest.coverage,
    ).reduce(
      (acc: { field: CoverageKind; pct: number }, cov) => {
        Object.keys(cov).forEach(key => {
          const kind = key as CoverageKind;
          if (acc.pct > cov[kind].pct) {
            acc = { field: kind, pct: cov[kind].pct };
          }
        });
        return acc;
      },
      { field: 'lines', pct: 101 },
    );
    const coverage = Object.values(jest.coverage).reduce(
      (acc, cov) => ({
        total: acc.total + cov[minCovField.field].total,
        covered: acc.covered + cov[minCovField.field].covered,
      }),
      { total: 0, covered: 0 },
    );
    const tests = jest.results.reduce(
      (acc: { passed: number; failed: number }, result) => ({
        passed:
          acc.passed +
          result.testResults.filter(r => r.status === 'passed').length,
        failed:
          acc.failed +
          result.testResults.filter(r => r.status === 'failed').length,
      }),
      { passed: 0, failed: 0 },
    );
    jestNode = (
      <Fragment>
        {!!tests.passed && (
          <Shield
            label="passed"
            title={`number of passed tests`}
            value={tests.passed}
            color="status_passed"
          />
        )}
        {!!tests.failed && (
          <Shield
            label="failed"
            title={`number of failed tests`}
            value={tests.failed}
            color="status_failed"
          />
        )}
        <Shield
          label="coverage"
          title={`tests coverage by ${minCovField.field}`}
          value={
            coverage.total
              ? (100 * (coverage.covered / coverage.total)).toFixed(0)
              : ''
          }
          percent
        />
      </Fragment>
    );
  }
  return statsNode || jestNode ? (
    <Box variant={`componentstats.container`} {...rest}>
      {statsNode}
      {jestNode}
    </Box>
  ) : null;
};
