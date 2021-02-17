import React, { FC } from 'react';

class Message {}
interface MyComponentProps {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  optionalArray?: any[];
  optionalBool?: boolean;
  optionalFunc?: (args: any) => any;
  optionalNumber?: number;
  optionalObject?: object;
  optionalString?: string;
  optionalSymbol?: symbol;

  // Anything that can be rendered: numbers, strings, elements or an array
  // (or fragment) containing these types.
  optionalNode?: React.ReactNode;

  // A React element (ie. <MyComponent />).
  optionalElement?: React.ReactElement;

  // A React element type (ie. MyComponent).
  optionalElementType?: JSX.Element;

  // You can also declare that a prop is an instance of a class. This uses
  // JS's instanceof operator.
  optionalMessage?: Message;

  // You can ensure that your prop is limited to specific values by treating
  // it as an enum.
  optionalEnum?: 'News' | 'Photos';

  // An object that could be one of many types
  optionalUnion?: string | number | Message;

  // An array of a certain type
  optionalArrayOf?: number[];

  // An object with property values of a certain type
  optionalObjectOf?: {
    [key: string]: number;
  };

  // You can chain any of the above with `isRequired` to make sure a warning
  // is shown if the prop isn't provided.

  // An object taking on a particular shape
  optionalObjectWithShape?: {
    optionalProperty?: string;
    requiredProperty: number;
  };

  // An object with warnings on extra properties
  optionalObjectWithStrictShape?: {
    optionalProperty?: string;
    requiredProperty: number;
  };

  requiredFunc: (prop: any) => any;

  // A value of any data type
  requiredAny: any;

  /**
   * boolean switch - obsolete depracated property
   * @type React.ReactElement
   * @deprecated since version 1.0
   */
  isObsolete?: boolean;
}

/**
 * General component description.
 */
const MyComponent: FC<MyComponentProps> = () => null;

MyComponent.defaultProps = {
  optionalNumber: 21,
};
export default MyComponent;
