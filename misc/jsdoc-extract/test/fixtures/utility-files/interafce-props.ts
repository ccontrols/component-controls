import { BaseHTMLAttributes } from 'react';

export interface InterfaceProps {
  /** stringProp description */
  stringProp?: string;
  /** numberProp description */
  numberProp: number;
  /**
   * function props description
   */
  fnProp: () => void;

  /**
   * unionProp description
   * @deprecated since version 1.0
   */
  unionProp: 'option1' | 'option2' | 'option3';
}
