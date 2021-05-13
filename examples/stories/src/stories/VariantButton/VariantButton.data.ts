import { VariantButtonProps } from './VariantButton';
const data: Record<string, Record<string, VariantButtonProps>> = {
  overview: {
    '0': {
      text: 'Mrs. Berta Runolfsdottir',
      variant: 'disabled',
      fontSize: 20,
      icon: 'down-arrow',
      iconSide: 'left',
      iconSize: 'large',
      padding: 'medium',
    },
    '1': {
      text: 'Darrel Simonis',
      variant: 'primary',
      fontSize: 16,
      icon: 'none',
      iconSide: 'left',
      padding: 'large',
    },
    '2': {
      text: 'Drew Terry',
      fontSize: 18,
      icon: 'search',
      iconSide: 'left',
    },
    '3': {
      text: 'Anahi McLaughlin',
      fontSize: 14,
      icon: 'up-arrow',
      iconSide: 'left',
      iconSize: 'large',
      padding: 'small',
    },
    '4': {
      text: 'Megane Stehr',
      variant: 'error',
      fontSize: 21,
      icon: 'up-arrow',
      iconSide: 'left',
      iconSize: 'large',
      padding: 'medium',
    },
  },
};

export default data;
