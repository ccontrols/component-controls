type UnionGenericType<Type> = Type | 'a string';

/**
 * generic interface
 */

type GenericArrayType<Type> = {
  /**
   * member field
   */

  m: Type;
};
export type NestedGenericType<Type> = GenericArrayType<UnionGenericType<Type>>;
