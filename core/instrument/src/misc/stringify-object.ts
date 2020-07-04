import jsStringEscape from 'js-string-escape';

export const stringifyObject = (
  val: any,
  sep: string = '  ',
  depth: number = 1,
): string => {
  switch (typeof val) {
    case 'string':
      return `"${jsStringEscape(val)}"`;
    case 'function':
      return val.name || val.toString();
    case 'object':
      if (val instanceof Date) {
        return '"' + val.toISOString() + '"';
      }
      if (val instanceof String) {
        return val.toString();
      }
      if (Array.isArray(val)) {
        return (
          '[' +
          val.map(v => stringifyObject(v, sep, depth + 1)).join(', ') +
          ']'
        );
      }
      if (val === null) {
        return 'null';
      }
      return `
        {
        ${Object.keys(val)
          .map(key => {
            return typeof val[key] === 'function'
              ? null
              : `${key}: ${stringifyObject(val[key], sep, depth + 1)}`;
          })
          .filter(v => v)}
        }
        `;
    default:
      return val.toString();
  }
};
