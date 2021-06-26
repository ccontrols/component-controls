/** @jsx jsx */
import { FC, useEffect, useState } from 'react';
import { jsx, Theme } from 'theme-ui';
import Split from 'react-split';
import { getUrlParams, getUpdatedUrlParams } from '@component-controls/blocks';
import { Editor } from './editor';
import { TypeViewer } from './type-viewer';

export const Playground: FC = () => {
  const [sizes, setSizes] = useState<number[]>([70, 30]);
  const [code, setCode] = useState('');
  useEffect(() => {
    const storeSizes = localStorage.getItem('split-size');
    if (storeSizes) {
      setSizes(JSON.parse(storeSizes));
    }
    const urlCode = getUrlParams('code');
    if (urlCode) {
      setCode(urlCode);
    }
  }, []);
  const onChangeCode = (value: string): void => {
    const newUrl = getUpdatedUrlParams('code', value);
    if (newUrl && window.location.href !== newUrl) {
      window.history.replaceState(null, '', newUrl);
    }
    setCode(value);
  };

  return (
    <Split
      sizes={sizes}
      minSize={20}
      snapOffset={30}
      expandToMin={false}
      dragInterval={1}
      direction="horizontal"
      cursor="col-resize"
      onDragEnd={(sizes: number[]) => {
        localStorage.setItem('split-size', JSON.stringify(sizes));
      }}
      sx={{
        flex: 1,
        display: 'flex',
        border: (t: Theme) => `1px solid ${t.colors?.muted}`,
        '.gutter': {
          border: (t: Theme) => `1px solid ${t.colors?.muted}`,
          cursor: 'col-resize',
        },
      }}
    >
      <Editor onChange={onChangeCode} value={code} />
      <TypeViewer code={code} />
    </Split>
  );
};
