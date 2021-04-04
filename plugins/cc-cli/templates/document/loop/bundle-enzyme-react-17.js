  Object.keys(store.docs).forEach(docId => {
    const doc = store.docs[docId];
    if (doc.stories && doc.stories.length) {
      const stories = doc.stories;
      describe(doc.title, () => {
        stories.forEach(storyId => {
          const story = store.stories[storyId];
          it(story.name, async () => {
            const rendered = renderFn(story, doc);
            const component = mount(rendered);
            expect(toJson(component, { mode: 'deep' })).toMatchSnapshot();
          });
        });
      });
    }
  });