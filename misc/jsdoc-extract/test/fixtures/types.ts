/**
 * print coordinates
 * @param pt object parameter
 */

export function printCoord(pt: {
  /**
   * x coordinate
   */
  x: number;
  /**
   * optional y coordinate
   */
  y?: number;
}): void {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

export function printId(id: number | string): void {
  console.log('Your ID is: ' + id);
}

export function paintHomeyBear({ m, honey = true }: ExtendT): Bear {
  return { honey, m };
}

export function genericFunction<Type>(
  box: GenericInterface<Type>,
  newContents: Type,
): GenericInterface<Type> {
  console.log(newContents);
  return box;
}

export function readOnlyParameters(values: string[]): void {
  console.log(values);
}

export const TypedInitializedFunction: FC<Bear> = props => {};
export interface StringNumberPair {
  /**
   *  specialized properties
   */

  length: 2;
  0: string;
  1: number;

  /**
   *  Other 'Array<string | number>' members...
   */

  slice(start?: number, end?: number): Array<string | number>;
}

export const spreadTupleFunction = (
  ...args: [string, number, ...boolean[]]
): void => {
  const [name, version, ...input] = args;
  console.log(name, version, input);
};

export function distanceFromOrigin([x, y]: [number, number]): number {
  // eslint-disable-next-line no-mixed-operators
  return Math.sqrt(x ** 2 + y ** 2);
}

/**
 * this is a class with two members
 */
export class Point {
  /**
   * COORDINATE X
   */
  x: number;
  /**
   * COORDINATE Y
   */
  y: number;
}

export class ClassWithConstrunctor {
  name: string;

  /**
   * constructor description
   */
  constructor(x?: string) {
    this.name = x;
  }
}
export class GreeterInitializedMembers {
  readonly name: string = 'world';
  err(): void {
    console.log(this.name);
  }
}

export class OverloadConstructor {
  // Overloads
  constructor(x = 0, y = 15) {}
  constructor(s: string) {
    this.s = s;
  }
  constructor(xs: any, y?: any) {}
}

export class ClassGetters {
  /**
   * member description
   */
  _length = 0;
  /**
   * getter description
   */
  get length(): number {
    return this._length;
  }
  /**
   * setter description
   *
   * @param value the new value
   */
  set length(value: number) {
    this._length = value;
  }
}

export class ClassIndexSignature {
  /**
   * class index
   */
  [s: string]: boolean | ((s: string) => boolean);

  /**
   *
   * @param s input string
   * @returns { boolean } returns the chec return value
   */
  check(s: string) {
    return this[s] as boolean;
  }
}

/**
 * class implements an interface
 */
export class ClassImplements implements InterfaceArrayType<string> {
  /**
   * member
   */
  length: number;
  /**
   * pop function
   */
  pop(): string {
    throw new Error('Method not implemented.');
  }
  /**
   * push function
   * @param items those are items
   */
  push(...items: string[]): number {
    throw new Error('Method not implemented.');
  }
}
export class ClassExtends extends ClassImplements {
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log('woof!');
    }
  }
}

export class MemberVisibikity {
  /**
   * a public method
   */
  public method1() {}
  /**
   * a protected method
   */

  protected method2() {}
  /**
   * a private method
   */

  private method3() {}
}

export class ClassStatic {
  static x = 0;
  static printX() {}
}

export class GenericClass<Type> {
  contents: Type;
  /**
   * generic constructor
   * @param value generic type variable
   */
  constructor(value: Type) {
    this.contents = value;
  }
}

export class ArrowFunctionClass {
  /**
   * name value initialzied
   */
  name = 'MyClass';
  /**
   * name accessor
   * @returns a string value
   */
  getName = (): string => {
    return this.name;
  };
}

export class ThisBasedClass {
  isFile(): this is FileRep {
    return this instanceof FileRep;
  }
  isDirectory(): this is Directory {
    return this instanceof Directory;
  }
  isNetworked(): this is Networked & this {
    return this.networked;
  }
  constructor(public path: string, private networked: boolean) {}
}

class FileRep extends ThisBasedClass {
  constructor(path: string, public content: string) {
    super(path, false);
  }
}

class Directory extends ThisBasedClass {
  children: ThisBasedClass[];
}
interface Networked {
  host: string;
}

export class PredicateClass<T> {
  value?: T;

  /**
   * checks if value is not undefined
   * @returns a predicate
   */
  hasValue(): this is { value: T } {
    return this.value !== undefined;
  }
}

/**
 * parameter modifiers
 */
export class ParameterModifiers {
  /**
   * constructor implementation
   * @param x x coordinate
   * @param y y coordinate
   * @param z z coordinate
   */
  constructor(
    public readonly x: number,
    protected y: number,
    private z: number,
  ) {
    // No body necessary
  }
}

export abstract class AbstraclClass {
  abstract getName(): string;
}
export class ComponentGenericsWithDefault<
  Props = React.ReactPropTypes,
  State = unknown
> {
  props: Props;
  state: State;
}

export class ReactComponent extends React.Component {
  render(): React.Node {
    return <span>Hello, {this.props.name}!</span>;
  }
}
export class ReactGenerics extends React.Component<GreetingProps, any> {
  render() {
    return <span>Hello, {this.props.name}!</span>;
  }
}
