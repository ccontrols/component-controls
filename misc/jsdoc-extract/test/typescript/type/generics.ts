/**
 * upstream interface
 */

interface GenericInterface<Type> {
  /**
   * interface prop
   */

  m: Type;
}

/**
 * reference type description
 */

export type GenericConsumer = GenericInterface<string>;
