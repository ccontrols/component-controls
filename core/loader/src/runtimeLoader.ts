import { store } from './store';

module.exports = function() {
  const newContent = `export default ${JSON.stringify(store)};`;
  return newContent;
};
