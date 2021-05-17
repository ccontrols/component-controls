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
      const runTests = (){{? it.format === 'ts' }}: void{{?}} => {
    {{?}}

      it('snapshot', () => {
        const { asFragment } = render(rendered);
        expect(asFragment()).toMatchSnapshot();
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
