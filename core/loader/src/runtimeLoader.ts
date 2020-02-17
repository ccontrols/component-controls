/* eslint-disable mdx/no-unused-expressions */
module.exports = function(content: string) {
  //@ts-ignore
  this.cacheable && this.cacheable();
  //@ts-ignore
  const params = JSON.parse(this.query.slice(1));
  content = content.replace(/__STORIES_HASH__/g, params.compilationHash);
  return content;
};
