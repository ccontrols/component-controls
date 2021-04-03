const renderedExamples = renderDocument(examples, config);
renderedExamples.forEach(({ name, rendered}) => {
  it(name, async () => {
    const component = mount(rendered);
    expect(toJson(component, { mode: 'deep' })).toMatchSnapshot();
  });
});
