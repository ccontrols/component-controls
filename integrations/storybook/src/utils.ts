export function escapeStrings(obj: {
  [key: string]: string;
}): { [key: string]: string };
export function escapeStrings(
  obj: (string | string[])[],
): (string | string[])[];
export function escapeStrings(obj: string): string;
export function escapeStrings(obj: any): any {
  if (typeof obj === 'string') {
    return escape(obj);
  }
  if (obj == null || typeof obj !== 'object') {
    return obj;
  }
  if (Array.isArray(obj)) {
    const newArray = obj.map(escapeStrings);
    const didChange = newArray.some((newValue, key) => newValue !== obj[key]);
    return didChange ? newArray : obj;
  }
  return Object.entries<{ [key: string]: string }>(obj).reduce(
    (acc, [key, oldValue]) => {
      const newValue = escapeStrings(oldValue);
      return newValue === oldValue ? acc : { ...acc, [key]: newValue };
    },
    obj,
  );
}
