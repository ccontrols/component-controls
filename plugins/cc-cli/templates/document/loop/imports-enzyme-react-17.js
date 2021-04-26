const renderedExamples = renderDocument(examples, config);
renderedExamples.forEach(({ name, rendered}) => {
  describe(name, () => {
    it('snapshot', () => {
      const component = mount(rendered);
      expect(toJson(component, { mode: 'deep' })).toMatchSnapshot();
    });
    {{=it.allytest}}
  });  
});
