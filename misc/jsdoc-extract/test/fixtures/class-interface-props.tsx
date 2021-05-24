import * as React from 'react';

/**
 * Column properties.
 */
export interface IColumnProps {
  /** stringProp description */
  stringProp?: string;
  /** numberProp description */
  numberProp: number;
  /**
   * function props description
   */
  fnProp: () => void;
  /** unionProp description */
  unionProp: 'option1' | 'option2' | 'option3';
}

/**
 * Column description
 */
export class Column extends React.Component<
  IColumnProps,
  Record<string, unknown>
> {
  public static defaultProps: Partial<IColumnProps> = {
    stringProp: 'prop1',
  };

  public render(): React.ReactNode {
    const { stringProp } = this.props;
    return <div>{stringProp}</div>;
  }
}

export default Column;
