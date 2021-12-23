import { TeplateFormats } from '../utils';
import { getTemplate } from '../resolve-template';

export const accessibilityTemplate = (
  format: TeplateFormats,
  ally = true,
): {
  allyimports: string;
  allytest: string;
} => {
  if (!ally) {
    return {
      allyimports: '',
      allytest: '',
    };
  }
  return {
    allyimports: getTemplate(`accessibility/import/import`, format),
    allytest: getTemplate(`accessibility/test/test`, format),
  };
};
