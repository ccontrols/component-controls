import React, { FC } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { AxeResults } from 'axe-core';
import { Chart } from 'react-google-charts';
import { Flex, Heading, Grid, Label, Checkbox } from 'theme-ui';
import {
  axePasses,
  axeViolations,
  isTagSelected,
  selectionList,
  taggedList,
} from './SelectionContext';

type StatsStatus = 'passes' | 'violations';

const TagSelectionCheckbox: FC<{ tag: string }> = ({ tag }) => {
  const isSelected = useRecoilValue(isTagSelected(tag));
  const tagged = useRecoilValue(taggedList);
  const [selection, setSelection] = useRecoilState(selectionList);
  const toggleTagSelected = (tag: string) => {
    if (tagged[tag]) {
      const wasSelected = tagged[tag].some((s: string) =>
        selection.includes(s),
      );
      setSelection(selection.filter((e: string) => !tagged[tag].includes(e)));
      if (!wasSelected) {
        setSelection([...selection, ...tagged[tag]]);
      }
    }
  };

  return (
    <Flex
      css={{
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Label>
        <Checkbox
          onChange={() => toggleTagSelected(tag)}
          checked={isSelected}
        />
        {isSelected ? 'hide outlines' : 'show errors'}
      </Label>
    </Flex>
  );
};

interface Stats {
  [cat: string]: {
    [key in StatsStatus]: number;
  };
}
const collectStats = (
  results: Pick<AxeResults, 'violations' | 'passes'>,
  status: StatsStatus,
  initial: Stats,
) => {
  const success = results[status].reduce((acc, row) => {
    const cats = row.tags.filter(tag => tag.split('.')[0] === 'cat');
    return cats.reduce((a, cat) => {
      const c = cat.split('.')[1];
      if (a[c] === undefined) {
        a[c] = {
          passes: 0,
          violations: 0,
        };
      }
      return { ...a, [c]: { ...a[c], [status]: a[c][status] + 1 } };
    }, acc);
  }, initial);
  return success;
};
export const AllyDashboard: FC = () => {
  const passes = useRecoilValue(axePasses);
  const violations = useRecoilValue(axeViolations);
  const results = {
    violations,
    passes,
  };
  const stats = collectStats(
    results,
    'violations',
    collectStats(results, 'passes', {}),
  );
  return (
    <Grid gap={2} columns={[3, '1fr 1fr 1fr']}>
      {Object.keys(stats)
        .sort()
        .map(key => {
          const value = stats[key];
          const rate = Math.trunc(
            (100 * (value.passes - value.violations)) /
              (value.passes + value.violations),
          );
          return (
            <Flex
              key={key}
              css={{
                height: 260,
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Heading as="h4">{key}</Heading>
              <Chart
                chartType="Gauge"
                options={{
                  redFrom: -100,
                  redTo: -50,
                  yellowFrom: -50,
                  yellowTo: 50,
                  greenFrom: 50,
                  greenTo: 100,
                  majorTicks: [],
                  minorTicks: 0,
                  min: -100,
                }}
                data={[
                  ['Label', 'Value'],
                  [
                    `${
                      value.violations
                        ? `-${value.violations}${
                            value.passes ? `/+${value.passes}` : ''
                          }`
                        : `+${value.passes}`
                    } rules`,
                    rate,
                  ],
                ]}
              />
              {value.violations ? (
                <TagSelectionCheckbox tag={`cat.${key}`} />
              ) : null}
            </Flex>
          );
        })}
    </Grid>
  );
};
