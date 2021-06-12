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
