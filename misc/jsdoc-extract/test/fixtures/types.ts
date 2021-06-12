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

export class ReactGenerics extends React.Component<GreetingProps, any> {
  render() {
    return <span>Hello, {this.props.name}!</span>;
  }
}
