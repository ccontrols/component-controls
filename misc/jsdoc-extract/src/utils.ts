import * as ts from 'typescript';

export type ParseOptions = {
  tsOptions?: ts.CompilerOptions;
};
export interface JSDocTypeTag {
  type?: string;
  description?: string;
}

export interface JSDocExample {
  caption?: string;
  content?: string;
}
export type JSImport = {
  name?: string;
  module: string;
  namedImports?: Record<string, string>;
};

export type JSImports = JSImport[];

export enum PropKind {
  Object = 0,
  String = 1,
  Number = 2,
  Boolean = 3,
  Union = 4,
  Enum = 5,
  Tuple = 6,
  Rest = 7,
  Undefined = 8,
  Unknown = 9,
  Null = 10,
  Function = 11,
  Void = 12,
  Class = 13,
  Interface = 14,
  Type = 15,
  Array = 16,
  Any = 17,
  Reference = 18,
  Predicate = 19,
  Index = 20,
  Constructor = 21,
  Getter = 22,
  Setter = 23,
}

export interface PropType {
  /**
   * generic properties
   */
  kind?: PropKind;
  displayName?: string;
  parent?: PropType;
  optional?: boolean;
  readonly?: boolean;
  abstract?: boolean;
  visibility?: 'private' | 'protected' | 'public';
  static?: boolean;
  type?: PropType | string;
  /**
   * jsdoc comments parsing
   */
  description?: string;
  fires?: { data: string }[];
  see?: string[];
  examples?: JSDocExample[];
  deprecated?: string;
}

export interface ObjectProp extends PropType {
  reference?: PropType;
  properties?: PropType[];
  value?: PropType[];
}

export const isObjectProp = (prop: PropType): prop is ObjectProp => {
  return prop.kind === PropKind.Object;
};

export interface StringProp extends PropType {
  value?: string;
}

export const isStringProp = (prop: PropType): prop is StringProp => {
  return prop.kind === PropKind.String;
};

export interface NumberProp extends PropType {
  value?: number;
}

export const isNumberProp = (prop: PropType): prop is NumberProp => {
  return prop.kind === PropKind.Number;
};

export interface BooleanProp extends PropType {
  value?: boolean;
}

export const isBooleanProp = (prop: PropType): prop is BooleanProp => {
  return prop.kind === PropKind.Boolean;
};

export interface UnionProp extends PropType {
  properties?: PropType[];
}

export const isUnionProp = (prop: PropType): prop is UnionProp => {
  return prop.kind === PropKind.Union;
};

export interface EnumProp extends PropType {
  properties?: PropType[];
}

export const isEnumProp = (prop: PropType): prop is EnumProp => {
  return prop.kind === PropKind.Enum;
};

export interface RestProp extends PropType {
  type?: PropType;
}

export const isRestProp = (prop: PropType): prop is RestProp => {
  return prop.kind === PropKind.Rest;
};

export interface TupleProp extends PropType {
  properties?: PropType[];
}

export const isTupleProp = (prop: PropType): prop is TupleProp => {
  return prop.kind === PropKind.Tuple;
};

export interface UndefinedProp extends PropType {
  value?: undefined;
}

export const isUndefinedProp = (prop: PropType): prop is UndefinedProp => {
  return prop.kind === PropKind.Undefined;
};

export interface UnknownProp extends PropType {
  value?: unknown;
}

export const isUnknownProp = (prop: PropType): prop is UnknownProp => {
  return prop.kind === PropKind.Unknown;
};

export interface NullProp extends PropType {
  value?: null;
}

export const isNullProp = (prop: PropType): prop is NullProp => {
  return prop.kind === PropKind.Null;
};

export interface FunctionProp extends PropType {
  parameters?: PropType[];
  returns?: PropType;
  types?: PropType[];
}

export type ConstructorProp = FunctionProp;

export type GetterProp = FunctionProp;
export type SetterProp = FunctionProp;

export type PredicateProp = FunctionProp;

export const isFunctionProp = (prop: PropType): prop is FunctionProp => {
  return prop.kind === PropKind.Function;
};

export const isFunctionType = (prop: PropType): prop is FunctionProp => {
  return prop.kind === PropKind.Function;
};

export interface VoidProp extends PropType {
  value?: void;
}

export const isVoidProp = (prop: PropType): prop is VoidProp => {
  return prop.kind === PropKind.Void;
};

export interface ClassProp extends PropType {
  implements?: InterfaceProp[];
  generics?: PropType[];
  properties?: PropType[];
}

export const isClassProp = (prop: PropType): prop is ClassProp => {
  return prop.kind === PropKind.Class;
};

export interface InterfaceProp extends PropType {
  properties?: PropType[];
  generics?: PropType[];
}

export const isInterfaceProp = (prop: PropType): prop is InterfaceProp => {
  return prop.kind === PropKind.Interface;
};

export interface TypeProp extends PropType {
  properties?: PropType[];
  generics?: PropType[];
  type?: PropType;
}

export const isTypeProp = (prop: PropType): prop is TypeProp => {
  return prop.kind === PropKind.Type;
};

export type HasGenericsProp = TypeProp | InterfaceProp | ClassProp;

export const hasGenerics = (prop: PropType): prop is HasGenericsProp => {
  return (
    prop.kind === PropKind.Type ||
    prop.kind === PropKind.Class ||
    prop.kind === PropKind.Interface ||
    prop.kind === PropKind.Array
  );
};

export interface ArrayProp extends PropType {
  elements?: PropType[];
  value?: PropType[];
}

export const isArrayProp = (prop: PropType): prop is ArrayProp => {
  return prop.kind === PropKind.Array;
};

export interface AnyProp extends PropType {
  value?: any;
}

export const isAnyProp = (prop: PropType): prop is AnyProp => {
  return prop.kind === PropKind.Any;
};

export interface ReferenceProp extends PropType {
  types?: PropType[];
}

export const isReferenceProp = (prop: PropType): prop is ReferenceProp => {
  return prop.kind === PropKind.Reference;
};

export const isPredicateProp = (prop: PropType): prop is PredicateProp => {
  return prop.kind === PropKind.Predicate;
};

export interface IndexProp extends PropType {
  index: PropType;
  properties: PropType[];
}

export const isIndexProp = (prop: PropType): prop is IndexProp => {
  return prop.kind === PropKind.Index;
};

export type ValueProp =
  | AnyProp
  | ArrayProp
  | VoidProp
  | NullProp
  | UnknownProp
  | UndefinedProp
  | BooleanProp
  | NumberProp
  | StringProp
  | ObjectProp;

export const isValueProp = (prop: PropType): prop is ValueProp => {
  return (
    prop.kind === PropKind.Any ||
    prop.kind === PropKind.Array ||
    prop.kind === PropKind.Void ||
    prop.kind === PropKind.Null ||
    prop.kind === PropKind.Unknown ||
    prop.kind === PropKind.Undefined ||
    prop.kind === PropKind.Boolean ||
    prop.kind === PropKind.Number ||
    prop.kind === PropKind.String ||
    prop.kind === PropKind.Object
  );
};

export type ObjectLikeProp =
  | ClassProp
  | InterfaceProp
  | TypeProp
  | EnumProp
  | ObjectProp
  | IndexProp;

export const isObjectLikeProp = (prop: PropType): prop is ObjectLikeProp => {
  return (
    prop.kind === PropKind.Class ||
    prop.kind === PropKind.Interface ||
    prop.kind === PropKind.Type ||
    prop.kind === PropKind.Index ||
    prop.kind === PropKind.Enum ||
    prop.kind === PropKind.Object
  );
};
export type PropTypes = Record<string, PropType>;
export type JSAnalyzeResults = {
  imports: JSImports;
  structures: PropTypes;
};

export type FrameworkPlugin = (
  name: string,
  jsDocs: JSAnalyzeResults,
) => PropType | undefined;

export const typeNameToPropKind = (type: string): PropKind | undefined => {
  const loopup: Record<string, PropKind> = {
    object: PropKind.Object,
    string: PropKind.String,
    number: PropKind.Number,
    boolean: PropKind.Boolean,
    union: PropKind.Union,
    Enum: PropKind.Enum,
    Tuple: PropKind.Tuple,
    function: PropKind.Function,
    class: PropKind.Function,
    type: PropKind.Function,
    array: PropKind.Array,
  };
  return loopup[type];
};

export type JSDocInfoType = {
  comment?: string;
  tags?: {
    comment: string;
    name: { text: string };
    tagName: { text: string };
  }[];
};
