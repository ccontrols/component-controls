import React, { useMemo, MouseEvent } from 'react';
import { window } from 'global';
import copy from 'copy-to-clipboard';
import queryString from 'query-string';
import {
  resetControlValues,
  getControlValues,
  randomizeData,
  ComponentControls,
  SetControlValueFn,
  canRandomizeControl,
  canResetControl,
} from '@component-controls/core';
import { getURL } from '../utils/url';

export interface UseControlsActionsProps {
  controls?: ComponentControls;
  storyId?: string;
  setControlValue?: SetControlValueFn;
}
export const useControlsActions = (
  props: UseControlsActionsProps,
): {
  node: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  group: string;
  id: string;
  'aria-label': string;
}[] => {
  const { controls, setControlValue, storyId } = props;
  const [copied, setCopied] = React.useState(false);
  const [urlCopied, setURLCopied] = React.useState(false);
  const { hasControls, canReset, canRandomize } = useMemo(() => {
    const keys = controls ? Object.keys(controls) : [];
    const canRandomize =
      controls &&
      keys.some(key => {
        const control = controls[key];
        return canRandomizeControl(control);
      });
    const canReset =
      controls &&
      keys.some(key => {
        const control = controls[key];
        return canResetControl(control);
      });
    return { hasControls: keys.length, canRandomize, canReset };
  }, [controls]);
  if (!hasControls) {
    return [];
  }
  const onReset = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (setControlValue && storyId && controls) {
      const values = resetControlValues(controls);
      setControlValue(storyId, undefined, values);
    }
  };
  const onCopy = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const values = getControlValues(controls);

    copy(JSON.stringify(values, null, 2));
    if (typeof window !== 'undefined') {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    }
  };
  const actions = [
    {
      node: copied ? 'values copied' : 'copy values',
      onClick: onCopy,
      group: 'controls',
      id: 'copy_controls',
      'aria-label': 'copy control values',
    },
  ];
  if (canRandomize) {
    actions.push({
      node: 'randomize',
      group: 'controls',
      onClick: () => {
        if (setControlValue && controls && storyId) {
          setControlValue(storyId, undefined, randomizeData(controls));
        }
      },
      id: 'randomize',
      'aria-label': 'generate random values for the component controls',
    });
    actions.push({
      node: urlCopied ? 'url copied' : 'share',
      group: 'controls',
      onClick: () => {
        if (controls) {
          const url = getURL();
          if (url) {
            const parsedParams = queryString.parse(url.search);
            const values = getControlValues(controls);
            parsedParams.controls = JSON.stringify(values);
            const strValues = queryString.stringify(parsedParams);
            const copyURL = `${url.protocol}//${url.host}${url.pathname}${
              strValues ? `?${strValues}` : ''
            }${url.hash ? `#${url.hash}` : ''}`;
            copy(copyURL);
            if (typeof window !== 'undefined') {
              setURLCopied(true);
              window.setTimeout(() => setURLCopied(false), 1500);
            }
          }
        }
      },
      id: 'share_controls',
      'aria-label': 'copy the control values as url search params',
    });
  }
  if (canReset) {
    actions.push({
      node: 'reset',
      onClick: onReset,
      group: 'controls',
      id: 'reset',
      'aria-label': 'reset control values to their initial value',
    });
  }
  return actions;
};
