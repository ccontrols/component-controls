const renderedExamples = renderDocument(examples, config{{? it.data }}, data{{?}});
renderedExamples.forEach(({ name, rendered {{? it.data }}, dataId, values{{?}}}) => {
  describe(name, () => {
    {{? it.data }}
      const runTests = () => {
    {{?}}
      it('snapshot', () => {
        const component = mount(rendered);
        expect(toJson(component, { mode: 'deep' })).toMatchSnapshot();
      });
      {{=it.allytest}}
    {{? it.data }}  
      }
      if (dataId && values) {
        describe(dataId, runTests);
      } else {
        runTests();
      }
    {{?}}
  });  
});
