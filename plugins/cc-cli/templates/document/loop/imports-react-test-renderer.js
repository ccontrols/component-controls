let renderedExamples {{=it.type}};
act(() => {
  renderedExamples = renderDocument(examples, config);
});  
if (!renderedExamples.length) {
  renderErr();
  return;
}
renderedExamples.forEach(({ name, rendered}) => {
  describe(name, () => {
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
