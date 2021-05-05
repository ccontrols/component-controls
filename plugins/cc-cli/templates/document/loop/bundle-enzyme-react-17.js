  Object.keys(store.docs).forEach(docId => {
    const doc = store.docs[docId];
    if (doc.stories && doc.stories.length) {
      const stories = doc.stories;
      describe(doc.title, () => {
        stories.forEach(storyId => {
          const story = store.stories[storyId];
          describe(story.name, () => {
            const rendered = renderFn({ story, doc });
            it('snapshot', () => {
              const component = mount(rendered);
              expect(toJson(component, { mode: 'deep' })).toMatchSnapshot();
            });
            {{=it.allytest}}
          });  
        });
      });
    }
  });