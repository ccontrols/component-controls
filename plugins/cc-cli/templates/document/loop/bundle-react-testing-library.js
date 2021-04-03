  Object.keys(store.docs).forEach(docId => {
    const doc = store.docs[docId];
    if (doc.stories && doc.stories.length) {
      const stories = doc.stories;
      describe(doc.title, () => {
        stories.forEach(storyId => {
          const story = store.stories[storyId];
          it(story.name, async () => {
            let rendered;
            act(() => {
              rendered = renderFn(story, doc);
            });  
            if (!rendered) {
              renderErr();
              return;
            }
            const { asFragment } = render(rendered);
            expect(asFragment()).toMatchSnapshot();
          });
        });
      });
    }
  });