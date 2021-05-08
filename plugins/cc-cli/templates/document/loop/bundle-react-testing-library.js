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
          let rendered{{? it.format === 'ts' }}: ReturnType<typeof renderFn>{{?}};
          act(() => {
            rendered = renderFn({ story, doc{{? it.data }}, values{{?}} });
          });  
          if (!rendered) {
            renderErr();
            return;
          }
          it('snapshot', () => {
            const { asFragment } = render(rendered);
            expect(asFragment()).toMatchSnapshot();
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
