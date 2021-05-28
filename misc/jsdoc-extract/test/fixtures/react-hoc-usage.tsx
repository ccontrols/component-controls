import * as React from 'react';

/**
 * Column properties.
 */
export interface ColumnProps {
  /** prop1 description */
  prop1: string;
}

/**
 * Form column.
 */
export class Column extends React.Component<ColumnProps, {}> {
  public static defaultProps: Partial<ColumnProps> = {
    prop1: 'prop1',
  };

  public render() {
    const { prop1 } = this.props;
    return <div>{prop1}</div>;
  }
}
