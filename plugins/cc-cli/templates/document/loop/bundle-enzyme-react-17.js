  const doc = store.docs['{{= it.docId }}'];
  if (doc.stories && doc.stories.length) {
    const stories = doc.stories;
    describe(doc.title, () => {
      stories.forEach(storyId => {
        const story = store.stories[storyId];
        describe(story.name, () => {
          {{? it.data }}
          const runTests = (values{{? it.format === 'ts' }}?: Parameters<typeof renderFn>['values']{{?}}) => {
          {{?}}  
            const rendered = renderFn({ story, doc{{? it.data }}, values{{?}} });
            it('snapshot', () => {
              const component = mount(rendered);
              expect(toJson(component, { mode: 'deep' })).toMatchSnapshot();
            });
            {{=it.allytest}}
          {{? it.data }}
          }
          if (data[story.id]) {
            Object.keys(data[story.id]).forEach(dataId => {
              describe(dataId, () => {
                const values = data[story.id][dataId];
                runTests(values);
              });
            });
          } else {
            runTests();
          }
          {{?}}
        });  
      });
    });
  }
