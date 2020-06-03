const categories = ['Introduction', 'Controls','Blocks', 'Editors', 'Components', 'App components', 'Plugins'];
storySort: (a, b) => {
  const aKind = a[1].kind.split('/')[0];
  const aIndex = categories.findIndex(c => c === aKind);
  const bKind = b[1].kind.split('/')[0];
  const bIndex = categories.findIndex(c => c === bKind);
  return aIndex - bIndex;
},

module.exports = {
  stories: [
    '../../stories/src/**/*.stories.(js|jsx|tsx|mdx)',
    '../../../core/specification/src/stories/**/*.stories.(js|jsx|tsx|mdx)',
    '../../../ui/app-components/src/**/*.stories.(js|jsx|tsx|mdx)',
    '../../../ui/components/src/**/*.stories.(js|jsx|tsx|mdx)',
  ],
  options: {
    storySort: (a, b) => {
      const aDoc = a.split('/')[0];
      const aIndex = categories.findIndex(c => c === aDoc);
      const bDoc = b.split('/')[0];
      const bIndex = categories.findIndex(c => c === bDoc);
      return aIndex - bIndex;
    },
  }  
};
