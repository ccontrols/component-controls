let renderedExamples {{=it.type}};
act(() => {
  renderedExamples = renderDocument(examples, config);
});  
if (!renderedExamples) {
  renderErr();
  return;
}
renderedExamples.forEach(({ name, rendered}) => {
  it(name, async () => {
    const { asFragment } = render(rendered);
    expect(asFragment()).toMatchSnapshot();

  });
});
