const categories = ['Introduction', 'Application','Controls','Blocks', 'Editors', 'Components', 'Plugins']

module.exports = {
  siteTitle: `Component controls`,
  siteTitleAlt: `Component controls - https://github.com/ccontrols/component-controls`,
  siteHeadline: `Component controls gatsby`,
  siteUrl: `https://component-controls-gatsby.netlify.app`,
  siteDescription: `Component controls stories. Write your components documentation with MDX and JSX. Design, develop, test and review in a single site.`,
  siteLanguage: `en`,
  author: `@atanasster`,
  theme: {
    colors: {
      //primary: 'pink',
    }
  },
  pages: {
    story: {
      label: 'API',
    },
    tutorial: {
      label: 'Tutorial',
      topMenu: true,
      sidebars: true,
    },
  },  
  storySort: (a, b) => {
    const aDoc = a.split('/')[0];
    const aIndex = categories.findIndex(c => c === aDoc);
    const bDoc = b.split('/')[0];
    const bIndex = categories.findIndex(c => c === bDoc);
    return aIndex - bIndex;
  },
}