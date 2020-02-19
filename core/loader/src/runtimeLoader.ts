/* eslint-disable mdx/no-unused-expressions */
import { createHash } from 'crypto';

module.exports = function(content: string) {
  //@ts-ignore
  this.cacheable && this.cacheable();
  //@ts-ignore
  const params = JSON.parse(this.query.slice(1));
  content = content.replace(/__STORIES_HASH__/g, params.compilationHash);
  const hash = createHash('md5')
    .update(new Date().getTime().toString())
    .digest('hex');

  return `
  module.exports.hash = "${hash}";
  ${content}
`;
};
