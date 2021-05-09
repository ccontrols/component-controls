let renderedExamples {{=it.type}};
act(() => {
  renderedExamples = renderDocument(examples, config{{? it.data }}, data{{?}});
});  
if (!renderedExamples.length) {
  renderErr();
  return;
}
renderedExamples.forEach(({ name, rendered{{? it.data }}, dataId, values{{?}}}) => {
  describe(name, () => {
    {{? it.data }}
      const runTests = () => {
    {{?}}

      it('snapshot', () => {
        const component = renderer.create(rendered);
        if (!component) {
          componentErr();
          return;
        }
        expect(component.toJSON()).toMatchSnapshot();
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
