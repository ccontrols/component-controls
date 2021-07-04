interface GenericInterface<T> {
  m: T;
}
export function genericFunction<Type>(
  box: GenericInterface<Type>,
  newContents: Type,
): GenericInterface<Type> {}
