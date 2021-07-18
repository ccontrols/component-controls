import ts from 'typescript';

export interface JSDocTypeTag {
  type?: string;
  description?: string;
}

export interface JSDocExample {
  caption?: string;
  content?: string;
}

export interface JSDocPropTag {
  tag: string;
  content?: string;
}

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
  BigInt = 24,
  Component = 25,
}

export interface PropType {
  /**
   * generic properties
   */
  kind?: PropKind;
  displayName?: string;
  parent?: string;
  optional?: boolean;
  readonly?: boolean;
  abstract?: boolean;
  visibility?: 'private' | 'protected' | 'public';
  static?: boolean;
  type?: PropType | string;
  /**
   * framework name as set by plugins
   * ie 'react'...
   */
  framework?: string;
  /**
   * jsdoc comments parsing
   */
  description?: string;
  fires?: string[];
  see?: string[];
  examples?: JSDocExample[];
  tags?: JSDocPropTag[];
  summary?: string;
  deprecated?: string | true;
}

export interface ObjectProp extends PropType {
  kind: PropKind.Object;
  properties?: PropType[];
  value?: PropType[];
}

export const isObjectProp = (prop: PropType): prop is ObjectProp => {
  return prop.kind === PropKind.Object;
};

export interface StringProp extends PropType {
  kind: PropKind.String;
  value?: string;
}

export const isStringProp = (prop: PropType): prop is StringProp => {
  return prop.kind === PropKind.String;
};

export interface NumberProp extends PropType {
  kind: PropKind.Number;
  value?: number;
}

export const isNumberProp = (prop: PropType): prop is NumberProp => {
  return prop.kind === PropKind.Number || prop.kind === PropKind.BigInt;
};

export interface BooleanProp extends PropType {
  kind: PropKind.Boolean;
  value?: boolean;
}

export const isBooleanProp = (prop: PropType): prop is BooleanProp => {
  return prop.kind === PropKind.Boolean;
};

export interface UnionProp extends PropType {
  kind: PropKind.Union;
  properties?: PropType[];
  value?: any;
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
  kind: PropKind.Rest;
}

export const isRestProp = (prop: PropType): prop is RestProp => {
  return prop.kind === PropKind.Rest;
};

export interface TupleProp extends PropType {
  kind: PropKind.Tuple;
  properties?: PropType[];
}

export const isTupleProp = (prop: PropType): prop is TupleProp => {
  return prop.kind === PropKind.Tuple;
};

export interface UndefinedProp extends PropType {
  kind: PropKind.Undefined;
  value?: undefined;
}

export const isUndefinedProp = (prop: PropType): prop is UndefinedProp => {
  return prop.kind === PropKind.Undefined;
};

export interface UnknownProp extends PropType {
  kind: PropKind.Unknown;
  value?: unknown;
}

export const isUnknownProp = (prop: PropType): prop is UnknownProp => {
  return prop.kind === PropKind.Unknown;
};

export interface NullProp extends PropType {
  kind: PropKind.Null;
  value?: null;
}

export const isNullProp = (prop: PropType): prop is NullProp => {
  return prop.kind === PropKind.Null;
};

export interface BaseFunctionProp extends PropType {
  parameters?: PropType[];
  returns?: PropType;
  types?: PropType[];
}

export interface FunctionProp extends BaseFunctionProp {
  kind: PropKind.Function;
}

export interface ConstructorProp extends BaseFunctionProp {
  kind: PropKind.Constructor;
}

export interface GetterProp extends BaseFunctionProp {
  kind: PropKind.Getter;
}
export interface SetterProp extends BaseFunctionProp {
  kind: PropKind.Getter;
}

export interface PredicateProp extends BaseFunctionProp {
  kind: PropKind.Predicate;
}

export const isFunctionProp = (prop: PropType): prop is FunctionProp => {
  return prop.kind === PropKind.Function;
};

export const isFunctionBaseType = (
  prop: PropType,
): prop is BaseFunctionProp => {
  return (
    prop.kind === PropKind.Function ||
    prop.kind === PropKind.Constructor ||
    prop.kind === PropKind.Getter ||
    prop.kind === PropKind.Setter ||
    prop.kind === PropKind.Predicate
  );
};

export interface VoidProp extends PropType {
  value?: void;
}

export const isVoidProp = (prop: PropType): prop is VoidProp => {
  return prop.kind === PropKind.Void;
};

export interface ClassProp extends PropType {
  implements?: InterfaceProp[];
  extends?: string[];
  generics?: PropType[];
  properties?: PropType[];
}
export interface ComponentProp extends ClassProp {
  kind: PropKind.Component;
}
export const isClassProp = (prop: PropType): prop is ClassProp => {
  return prop.kind === PropKind.Class;
};

export interface InterfaceProp extends PropType {
  extends?: string[];
  properties?: PropType[];
  generics?: PropType[];
}

export const isInterfaceProp = (prop: PropType): prop is InterfaceProp => {
  return prop.kind === PropKind.Interface;
};

export interface TypeProp extends PropType {
  extends?: string[];
  properties?: PropType[];
  generics?: PropType[];
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
  properties?: PropType[];
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
  | UnionProp
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
    prop.kind === PropKind.Union ||
    prop.kind === PropKind.Null ||
    prop.kind === PropKind.Unknown ||
    prop.kind === PropKind.Undefined ||
    prop.kind === PropKind.Boolean ||
    prop.kind === PropKind.Number ||
    prop.kind === PropKind.String ||
    prop.kind === PropKind.Object
  );
};

export type ClassLikeProp = ClassProp | InterfaceProp | TypeProp;

export const isClassLikeProp = (prop: PropType): prop is ClassLikeProp => {
  return (
    prop.kind === PropKind.Class ||
    prop.kind === PropKind.Interface ||
    prop.kind === PropKind.Type
  );
};
export type ObjectLikeProp = ClassLikeProp | EnumProp | ObjectProp | IndexProp;

export const isObjectLikeProp = (prop: PropType): prop is ObjectLikeProp => {
  return (
    isClassLikeProp(prop) ||
    prop.kind === PropKind.Index ||
    prop.kind === PropKind.Enum ||
    prop.kind === PropKind.Object
  );
};

export type PropDiagnostic = {
  category: ts.DiagnosticCategory;
  message: string;
  row?: number;
  column?: number;
  fileName?: string;
};
export type PropTypes = {
  [propName: string]: PropType;
} & { __parents?: Record<string, PropType>; __diagnostics?: PropDiagnostic[] };

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
  comment?: ts.JSDocTag['comment'];
};

export const propValue = (prop: PropType, value?: string): PropType => {
  if (value) {
    if (isNumberProp(prop)) {
      prop.value = Number(value);
    } else if (isBooleanProp(prop)) {
      prop.value = Boolean(value);
    } else {
      (prop as StringProp).value = value;
    }
  }
  return prop;
};
