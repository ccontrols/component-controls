//original code from https://github.com/jaydenseric/jsdoc-md

/**
 * Decodes a JSDoc namepath.
 * @see [JSDoc namepath docs](https://jsdoc.app/about-namepaths).
 * @kind function
 * @name deconstructJsdocNamepath
 * @param {string} namepath A JSDoc namepath.
 * @returns {object} Namepath parts.
 * @ignore
 */
export const deconstructJsdocNamepath = (
  namepath: string,
): { memberof: string; membership: string; name: string } => {
  const [match, memberof, membership, name] =
    namepath.match(/^(?:([^.#~]+(?:[.#~][^.#~]+)*)([.#~]))?([^.#~]+)$/u) || [];
  if (!match) throw new SyntaxError(`Invalid JSDoc namepath \`${namepath}\`.`);
  return { memberof, membership, name };
};
