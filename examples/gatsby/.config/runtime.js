const categories = ['Introduction', 'Controls','Blocks', 'Editors', 'Components', 'App components', 'Plugins'];

module.exports = {
  options: {
    siteTitle: `Component controls`,
    siteTitleAlt: `Component controls - https://github.com/ccontrols/component-controls`,
    siteHeadline: `Component controls gatsby`,
    siteUrl: `https://component-controls-gatsby.netlify.app`,
    siteDescription: `Component controls stories. Write your components documentation with MDX and JSX. Design, develop, test and review in a single site.`,
    siteLanguage: `en`,
    author: `@atanasster`,
    docsPath: 'docs/',

    storySort: (a, b) => {
      const aDoc = a.split('/')[0];
      const aIndex = categories.findIndex(c => c === aDoc);
      const bDoc = b.split('/')[0];
      const bIndex = categories.findIndex(c => c === bDoc);
      return aIndex - bIndex;
    },
  }  
}