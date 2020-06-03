const categories = ['Introduction', 'Controls','Blocks', 'Editors', 'Components', 'App components', 'Plugins'];

module.exports = {
  options: {
    storySort: (a, b) => {
      const aDoc = a.split('/')[0];
      const aIndex = categories.findIndex(c => c === aDoc);
      const bDoc = b.split('/')[0];
      const bIndex = categories.findIndex(c => c === bDoc);
      return aIndex - bIndex;
    },
  }  
}