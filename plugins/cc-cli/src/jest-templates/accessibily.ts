import { TeplateFormats } from '../types';
import { getTemplate } from '../templating/resolve-template';

export const accessibilityTemplate = (
  format: TeplateFormats,
  ally: boolean = true,
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
