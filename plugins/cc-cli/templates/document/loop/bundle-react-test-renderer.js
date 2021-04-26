  Object.keys(store.docs).forEach(docId => {
    const doc = store.docs[docId];
    if (doc.stories && doc.stories.length) {
      const stories = doc.stories;
      describe(doc.title, () => {
        stories.forEach(storyId => {
          const story = store.stories[storyId];
          describe(story.name, () => {
            let rendered;
            act(() => {
              rendered = renderFn(story, doc);
            });  
            if (!rendered) {
              renderErr();
              return;
            }
            it('snapshot', () => {
              const component = renderer.create(rendered);
              if (!component) {
                componentErr();
                return;
              }  
              expect(component.toJSON()).toMatchSnapshot();
            });
            {{=it.allytest}}
          });
        });
      });
    }
  });