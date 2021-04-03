let renderedExamples {{=it.type}};
act(() => {
  renderedExamples = renderDocument(examples, config);
});  
if (!renderedExamples.length) {
  renderErr();
  return;
}
renderedExamples.forEach(({ name, rendered}) => {
  it(name, async () => {
    const component = renderer.create(rendered);
    if (!component) {
      componentErr();
      return;
    }
    expect(component.toJSON()).toMatchSnapshot();
  });
});
