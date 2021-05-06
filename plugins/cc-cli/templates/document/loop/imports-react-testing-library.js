let renderedExamples {{=it.type}};
act(() => {
  renderedExamples = renderDocument(examples, config{{? it.data }}, data{{?}});
});  
if (!renderedExamples) {
  renderErr();
  return;
}
renderedExamples.forEach(({ name, rendered{{? it.data }}, dataId, values{{?}}}) => {
  describe(name, () => {
    {{? it.data }}
      const runTests = () => {
    {{?}}

      it('snapshot', () => {
        const { asFragment } = render(rendered);
        expect(asFragment()).toMatchSnapshot();
      });  
      {{=it.allytest}}
      {{? it.data }}  
    }
    if (values) {
      describe(dataId, runTests);
    } else {
      runTests();
    }
  {{?}}      
  });
});
