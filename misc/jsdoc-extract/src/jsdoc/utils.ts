import { PropKind } from '../utils';

export const jsPropToPropKind = (type: string): PropKind => {
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
  return loopup[type] || PropKind.Any;
};
