import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { Document, PackageInfo } from '@component-controls/core';

export type DocumentAtom = Document & { package?: PackageInfo };

export const documentAtom = atom<DocumentAtom | undefined>({
  key: 'document',
  default: undefined,
});

export const useDocument = (): DocumentAtom | undefined => {
  const doc = useRecoilValue(documentAtom);
  return doc;
};

export const setDocument = (doc: DocumentAtom) =>
  useSetRecoilState(documentAtom)(doc);
