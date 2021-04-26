let renderedExamples {{=it.type}};
act(() => {
  renderedExamples = renderDocument(examples, config);
});  
if (!renderedExamples) {
  renderErr();
  return;
}
renderedExamples.forEach(({ name, rendered}) => {
  describe(name, async () => {
    it('snapshot', () => {
      const { asFragment } = render(rendered);
      expect(asFragment()).toMatchSnapshot();
    });  
    {{=it.allytest}}
  });
});
