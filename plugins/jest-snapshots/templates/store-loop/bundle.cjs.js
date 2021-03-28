  const store = loadStore(require(path.resolve(__dirname, '{{=it.bundlePath}}')));
  const renderFn = store.config.renderFn || reactRender;
  Object.keys(store.docs).forEach(docId => {
    const doc = store.docs[docId];
    if (doc.stories && doc.stories.length) {
      const stories = doc.stories;
      describe(doc.title, () => {
        stories.forEach(storyId => {
          const story = store.stories[storyId];
          it(story.name, async () => {
{{=it.render}}
            expect(serialize()).toMatchSnapshot();
          });
        });
      });
    }
  });